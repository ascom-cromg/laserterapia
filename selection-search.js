(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.SelectionSearch = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function normalize(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').replace(/[^a-z0-9]+/g, ' ').trim();
  }
  function prepare(records) {
    return records.map(record => ({...record, words: normalize(record.name).split(/\s+/)}))
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR', {sensitivity: 'base'}));
  }
  function find(records, query) {
    const normalized = normalize(query);
    const number = normalized.replace(/\b(?:cro|cd|mg)\b/g, '').replace(/\s+/g, '');
    if (/^\d+$/.test(number)) return records.filter(record => record.cro === number.replace(/^0+(?=\d)/, ''));
    const terms = normalized.split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return records.filter(record => terms.every(term => record.words.some(word => word.startsWith(term))));
  }
  return {normalize, prepare, find};
});

if (typeof document !== 'undefined') {
  (function () {
    'use strict';
    const form = document.querySelector('#selection-form');
    if (!form) return;
    const input = document.querySelector('#selection-query');
    const button = document.querySelector('#selection-submit');
    const clear = document.querySelector('#selection-clear');
    const message = document.querySelector('#selection-status');
    const output = document.querySelector('#selection-output');
    const results = document.querySelector('#selection-results');
    const more = document.querySelector('#selection-more');
    const empty = document.querySelector('#selection-empty');
    const idle = document.querySelector('#selection-idle');
    let dataPromise, dataset, prepared, matches = [], shown = 0, busy = false;
    const pageSize = 10;
    const sourceLabels = {'131/2026':'Portaria nº 131/2026', '182/2026':'Portaria nº 182/2026'};

    async function load() {
      if (dataset) return;
      if (!dataPromise) dataPromise = fetch('data/selecionados.json').then(response => {
        if (!response.ok) throw new Error('Lista indisponível');
        return response.json();
      }).then(data => {
        if (!Array.isArray(data.records) || !data.sources?.['131/2026'] || !data.sources?.['182/2026']) throw new Error('Lista inválida');
        dataset = data;
        prepared = SelectionSearch.prepare(data.records);
      }).catch(error => {dataPromise = undefined; throw error;});
      return dataPromise;
    }

    function reset() {
      input.value = '';
      results.replaceChildren(); output.hidden = true; empty.hidden = true;
      more.hidden = true; clear.hidden = true; idle.hidden = false;
      message.textContent = '';
      matches = []; shown = 0;
      input.focus();
    }

    function appendResults() {
      const fragment = document.createDocumentFragment();
      matches.slice(shown, shown + pageSize).forEach(record => {
        const item = document.createElement('li'); item.className = 'selection-result';
        const identity = document.createElement('div');
        const badge = document.createElement('span'); badge.className = 'selection-badge'; badge.textContent = 'NOME LOCALIZADO NA LISTA';
        const title = document.createElement('h4'); title.textContent = record.name;
        const cro = document.createElement('p'); cro.className = 'selection-cro'; cro.textContent = 'CRO-MG nº ' + Number(record.cro).toLocaleString('pt-BR', {useGrouping:true});
        identity.append(badge, title, cro);
        const sources = document.createElement('div'); sources.className = 'selection-sources';
        record.sources.forEach(source => {
          const documentSource = dataset.sources[source.portaria];
          const link = document.createElement('a'); link.href = documentSource.url + '#page=' + source.page;
          link.target = '_blank'; link.rel = 'noopener'; link.textContent = (sourceLabels[source.portaria] || source.portaria) + ' · p. ' + source.page + ' →';
          sources.append(link);
        });
        item.append(identity, sources); fragment.append(item);
      });
      results.append(fragment);
      shown = Math.min(shown + pageSize, matches.length);
      more.hidden = shown >= matches.length;
      if (!more.hidden) more.textContent = 'Mostrar mais resultados (' + (matches.length - shown) + ')';
      document.querySelector('#selection-shown').textContent = 'Exibindo ' + shown + ' de ' + matches.length + (matches.length === 1 ? ' correspondência.' : ' correspondências.');
    }

    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (busy) return;
      const query = input.value.trim();
      if (SelectionSearch.normalize(query).replace(/\s/g, '').length < 2) {
        message.textContent = 'Digite pelo menos 2 letras do nome ou o número completo do CRO-MG.';
        output.hidden = true; empty.hidden = true; idle.hidden = false;
        input.focus(); return;
      }
      busy = true; button.disabled = true; button.textContent = 'Consultando…';
      form.setAttribute('aria-busy','true'); clear.disabled = true;
      message.textContent = 'Consultando as listas das duas portarias…';
      results.replaceChildren(); output.hidden = true; empty.hidden = true; idle.hidden = true; more.hidden = true;
      try {
        await load();
        matches = SelectionSearch.find(prepared, query); shown = 0;
        clear.hidden = false;
        if (matches.length) {
          output.hidden = false; appendResults();
          message.textContent = matches.length === 1 ? '1 nome localizado. Confira o nome completo e o CRO-MG para confirmar se o registro é seu.' : matches.length + ' nomes localizados. Confira o nome completo e o CRO-MG ou refine a busca.';
        } else {
          empty.hidden = false;
          message.textContent = 'Nenhum nome localizado para esta busca.';
        }
      } catch (_) {
        message.textContent = 'Não foi possível carregar a lista. Tente novamente ou consulte as portarias oficiais nos links abaixo.';
        idle.hidden = false;
      } finally {
        busy = false; button.disabled = false; button.textContent = 'Consultar lista →';
        clear.disabled = false; form.removeAttribute('aria-busy');
      }
    });
    clear.addEventListener('click', reset);
    more.addEventListener('click', appendResults);
    input.addEventListener('input', () => {
      if (!busy && (!output.hidden || !empty.hidden)) {
        output.hidden = true; empty.hidden = true; idle.hidden = false; more.hidden = true;
        message.textContent = 'Clique em Consultar lista para atualizar o resultado.';
      }
    });
  })();
}
