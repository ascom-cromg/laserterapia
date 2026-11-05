const assert = require('node:assert/strict');
const path = require('node:path');
const search = require('../selection-search.js');
const data = require('../data/selecionados.json');
const records = search.prepare(data.records);
assert.equal(records.length, 1002);
assert.equal(new Set(records.map(r => r.cro)).size, 1002);
assert.equal(records.filter(r => r.sources.some(s => s.portaria === '131/2026')).length, 976);
assert.equal(records.filter(r => r.sources.some(s => s.portaria === '182/2026')).length, 26);
assert.equal(search.find(records, 'Ackilla Ohanna Barreto Aredes')[0].cro, '60290');
assert.equal(search.find(records, 'Yuri Antônio Bolognani Rosa')[0].cro, '58002');
assert.equal(search.find(records, 'Agda Silene Leite')[0].sources[0].portaria, '182/2026');
assert.equal(search.find(records, 'Yasmim Ribeiro de Sousa')[0].cro, '75196');
assert.deepEqual(search.find(records, 'JESSICA ROSA DINIZ').map(r=>r.cro), ['52304']);
assert.equal(search.find(records, 'Ana Luisa Nascimento Silva').length, 2, 'Nomes semelhantes devem preservar CROs distintos.');
assert.equal(search.find(records, 'CRO-MG 19.532').length, 1);
assert.equal(search.find(records, 'CRO-MG 19.532')[0].name, 'Agda Silene Leite');
assert.equal(search.find(records, '019532')[0].cro, '19532');
assert.equal(search.find(records, '1953').length, 0, 'Número de CRO incompleto não deve confirmar outro registro.');
assert.equal(search.find(records, 'Nome inexistente xyzxyz').length, 0);
assert.ok(search.find(records, 'Maria').length > 10, 'Primeiro nome comum deve permitir múltiplos resultados.');
assert.equal(search.find(records, '').length, 0);
for (const record of records) {
  assert.ok(record.name.length >= 3);
  assert.match(record.cro, /^\d+$/);
  for (const source of record.sources) {
    assert.ok(data.sources[source.portaria]);
    assert.ok(source.page >= 1 && source.page <= (source.portaria === '131/2026' ? 38 : 2));
  }
}
console.log('Consulta verificada: 1.002 registros, duas portarias, nomes semelhantes, acentos, CRO completo e ausência de resultado.');
