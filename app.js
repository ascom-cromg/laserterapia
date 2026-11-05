const situations = {
  selecionado: ['PROFISSIONAL SELECIONADO', 'Seu próximo passo é concluir a etapa teórica.', 'Confira sua nomeação nas Portarias nº 131/2026 ou nº 182/2026, acesse a plataforma do curso e finalize todas as atividades previstas até 31 de dezembro de 2026.', '#acesso', 'Ver orientações de acesso →'],
  acesso: ['ATENDIMENTO TEMPORÁRIO', 'Fale com a Faculdade CTA pelo WhatsApp.', 'Durante os ajustes na plataforma, encaminhe dúvidas e dificuldades de acesso temporariamente pelo WhatsApp da Faculdade CTA: (11) 94526-9650. Para localizar o curso, acesse Conteúdo e busque por LASER CRO MG.', '#acesso', 'Ver como acessar o curso →'],
  concluido: ['TEORIA FINALIZADA', 'Confira o registro da conclusão e aguarde a prática.', 'Se houver divergência no progresso da plataforma, solicite conferência ao CTA. A etapa prática de 8 horas tem previsão de início em janeiro de 2027; o calendário será divulgado pelo CRO-MG.', '#pratica', 'Entender a etapa prática →'],
  inscricao: ['INTERESSE EM PARTICIPAR', 'Esta edição já passou pelo processo de seleção.', 'A participação nesta turma é destinada aos profissionais nomeados nas Portarias nº 131/2026 e nº 182/2026. Pré-cadastro ou inscrição, por si só, não garantem vaga. Eventuais novas oportunidades dependem de divulgação oficial do CRO-MG.', '#duvidas', 'Ver dúvidas sobre seleção →']
};

const faqData = [
  ['selecao','participantes','A quem se destinam as orientações desta página?','Aos profissionais selecionados e nomeados pelas <strong>Portarias CRO-MG nº 131/2026 e nº 182/2026</strong> para esta turma do Curso de Habilitação em Laserterapia. Quem apenas realizou pré-cadastro ou inscrição deve conferir sua situação nos atos oficiais.'],
  ['selecao','confirmar-selecao','Como confirmo se fui selecionado?','Use a <a href="#consulta">consulta de selecionados</a> nesta página: digite seu primeiro nome, nome completo ou número do CRO-MG e confira as correspondências. Confirme sempre pelo nome completo e pelo CRO-MG. Os resultados indicam a portaria e a página de origem. Você também pode <a href="#documentos">consultar os documentos oficiais</a>. Se houver divergência, procure o CRO-MG.'],
  ['selecao','pre-cadastro','Fiz o pré-cadastro. Minha vaga está garantida?','Não. O pré-cadastro registrava o interesse e não substituía a inscrição oficial nem a seleção. Para participar desta turma, é necessário ter sido selecionado e nomeado em uma das portarias indicadas.'],
  ['selecao','email-selecao','Recebi uma mensagem sobre o curso. Isso confirma a seleção?','A confirmação da seleção deve ser feita nas portarias de nomeação. Se houver divergência entre uma mensagem recebida e os atos oficiais, solicite esclarecimento ao CRO-MG antes de considerar sua participação confirmada.'],
  ['selecao','criterios','Quem teve prioridade na seleção?','A iniciativa priorizou cirurgiões-dentistas da rede pública municipal e estadual de Minas Gerais, com possibilidade de participação de outros profissionais regulares nas vagas remanescentes. Os critérios de inscrição, classificação e desempate constam da <strong>Decisão CRO-MG nº 001/2026</strong>. Consulte o ato para verificar a regra aplicável ao seu caso.'],
  ['selecao','novas-vagas','Ainda posso me inscrever ou pedir uma vaga?','Esta turma já passou pela seleção e nomeação. A inscrição oficial teve prazo prorrogado até <strong>15 de fevereiro de 2026, às 23h59</strong>. Eventuais novas inscrições, vagas remanescentes ou convocações dependem de divulgação oficial do CRO-MG. Esta página não realiza novas inscrições.'],
  ['selecao','gratuidade','O curso é gratuito?','O Edital de Chamamento Público nº 003/2025 prevê oferta gratuita para profissionais da rede pública de Minas Gerais, no mínimo de 1.000 vagas, e possibilidade de vagas remanescentes para outros inscritos no CRO-MG. Para dúvidas sobre sua situação específica, consulte o Conselho. A oferta do curso e o procedimento de registro da habilitação são etapas distintas; consulte as taxas vigentes do registro na página oficial.'],
  ['selecao','substituicao','Posso transferir minha vaga ou indicar outra pessoa?','A nomeação é feita por ato oficial. A substituição não deve ser considerada automática. Em caso de desistência ou pedido de substituição, comunique formalmente ao CRO-MG e aguarde sua orientação.'],
  ['acesso','carga-horaria','Qual é a carga horária e como o curso está dividido?','São <strong>60 horas/aula</strong>: <strong>52 horas teóricas on-line</strong> e <strong>8 horas práticas presenciais</strong>. As duas etapas integram a formação e precisam ser concluídas integralmente para a certificação.'],
  ['acesso','prazo-teoria','Até quando devo concluir a etapa teórica?','O prazo é <strong>31 de dezembro de 2026</strong>. A data se refere à conclusão integral das 52 horas teóricas e das atividades previstas nesta etapa, conforme as orientações da plataforma.'],
  ["acesso","link-plataforma","Como acesso e encontro o curso na plataforma do CTA?","Acesse <a href=\"https://www.nichoos.com/clube/faculdadecta\" target=\"_blank\" rel=\"noopener\">a plataforma da Faculdade CTA</a>. No menu à esquerda da tela, clique em <strong>Conteúdo</strong>. Na barra de busca, digite <strong>LASER CRO MG</strong> e selecione o curso correspondente para iniciar seus estudos. <a href=\"#acesso\">Veja o passo a passo</a>."],
  ["acesso","sem-credenciais","Fui nomeado, mas não recebi meu acesso. O que faço?","Durante os ajustes na plataforma, encaminhe dúvidas e dificuldades de acesso temporariamente pelo <a href=\"https://wa.me/5511945269650\" target=\"_blank\" rel=\"noopener\">WhatsApp da Faculdade CTA: (11) 94526-9650</a>. Informe seu nome, número de inscrição no CRO-MG e e-mail cadastrado. Se a dúvida envolver sua nomeação ou os dados da seleção, procure o CRO-MG pelo e-mail <a href=\"mailto:odontologia@cromg.org.br\">odontologia@cromg.org.br</a>."],
  ["acesso","senha","Esqueci a senha ou não consigo entrar. Quem pode ajudar?","Durante os ajustes na plataforma, o atendimento para dúvidas e dificuldades de acesso é realizado temporariamente pelo <a href=\"https://wa.me/5511945269650\" target=\"_blank\" rel=\"noopener\">WhatsApp da Faculdade CTA: (11) 94526-9650</a>. Descreva a mensagem de erro e o e-mail usado no acesso. Não envie sua senha."],
  ["acesso","progresso","Já concluí, mas a plataforma mostra pendência ou meu progresso desapareceu.","Durante os ajustes na plataforma, solicite a conferência do seu histórico e do registro das atividades pelo <a href=\"https://wa.me/5511945269650\" target=\"_blank\" rel=\"noopener\">WhatsApp da Faculdade CTA: (11) 94526-9650</a>. Informe os módulos afetados e, se possível, encaminhe uma captura da tela. A conclusão deve ser verificada pela instituição responsável; não é possível confirmar sua situação individual por esta página."],
  ['acesso','lembrete','Recebi um lembrete de pendência, mas acredito ter concluído tudo.','Revise as atividades na plataforma e peça ao CTA a confirmação da sua situação. Informe que recebeu o lembrete e descreva o que aparece como concluído. O envio de um lembrete não permite, por si só, concluir qual atividade está faltando.'],
  ['acesso','confirmacao-teoria','Como sei se terminei toda a etapa teórica?','Confira o status dos módulos e das atividades exigidas na plataforma. Se houver qualquer divergência ou dúvida sobre a conclusão integral das 52 horas, solicite confirmação ao suporte do CTA.'],
  ["acesso","ainda-nao-iniciei","Ainda não comecei a teoria. O que devo fazer agora?","Se você foi selecionado e nomeado, <a href=\"https://www.nichoos.com/clube/faculdadecta\" target=\"_blank\" rel=\"noopener\">acesse a plataforma do CTA</a>, clique em <strong>Conteúdo</strong> e busque por <strong>LASER CRO MG</strong>. Organize o estudo das 52 horas teóricas para concluir até <strong>31/12/2026</strong>. Se houver dificuldade de acesso, utilize temporariamente o WhatsApp da Faculdade CTA: <a href=\"https://wa.me/5511945269650\" target=\"_blank\" rel=\"noopener\">(11) 94526-9650</a>."],
  ['acesso','prazo-perdido','E se eu não conseguir concluir a teoria até o prazo?','O prazo informado é <strong>31 de dezembro de 2026</strong>. Esta página não estabelece prorrogação, recuperação ou penalidade automática. Se houver impedimento, comunique ao CRO-MG e ao CTA e solicite orientação sobre seu caso. A certificação exige a conclusão integral das etapas.'],
  ['pratica','inicio-pratica','Quando começam as aulas práticas?','Há <strong>previsão de início em janeiro de 2027</strong>. As datas e os horários de cada turma serão divulgados posteriormente pelo CRO-MG. A previsão não equivale a uma convocação com data marcada.'],
  ["pratica","local-pratica","Onde será realizada a etapa prática?","As aulas presenciais serão realizadas nos <strong>municípios com Delegacias Regionais do CRO-MG</strong>. O calendário informará as cidades contempladas, a distribuição das turmas e os endereços das aulas. <a href=\"#municipios\">Confira os municípios com Delegacias Regionais do CRO-MG</a>. Aguarde a divulgação do CRO-MG para saber sua cidade, data e local."],
  ['pratica','calendario-pratica','Já posso escolher a cidade, a data ou reservar deslocamento?','Aguarde a divulgação do calendário e das orientações de distribuição das turmas. A forma de definição de cidade, data e horário será informada pelo CRO-MG; esta página não realiza escolha ou agendamento.'],
  ['pratica','previsao-anterior','Vi uma previsão anterior de início em outubro de 2026. Qual vale?','A orientação mais recente é de <strong>previsão de início em janeiro de 2027</strong>. Acompanhe as novas comunicações do CRO-MG para saber as datas, horários e locais da sua turma.'],
  ['pratica','pratica-obrigatoria','A prática é obrigatória mesmo para quem já concluiu a teoria?','Sim. As <strong>8 horas práticas</strong> integram a formação obrigatória. A conclusão apenas das 52 horas teóricas não é suficiente para o certificado de conclusão do curso.'],
  ['pratica','faltei-pratica','Se eu não puder comparecer à prática, haverá reposição?','As regras de ausência, reposição, troca de turma e demais condições de participação deverão seguir a orientação oficial do CRO-MG e da instituição responsável. Não há reposição automática estabelecida nesta página. Procure o atendimento ao identificar o impedimento.'],
  ['certificado','receber-certificado','Quando receberei o certificado de conclusão?','O certificado será concedido após a conclusão integral das etapas teórica e prática, totalizando <strong>60 horas/aula</strong>. A forma e o prazo de disponibilização deverão seguir a orientação da instituição responsável pelo curso.'],
  ['certificado','registro-automatico','O certificado já significa que minha habilitação está registrada?','Não. Após a certificação, é necessário dar andamento ao <strong>pedido de registro da habilitação no CRO-MG</strong>, apresentar a documentação exigida e cumprir os requisitos do CRO-MG. O registro depende do procedimento e da análise correspondentes.'],
  ['certificado','solicitar-registro','Como faço o pedido de registro da habilitação?','Acesse os Serviços Online do CRO-MG com CPF e senha. No menu, selecione <strong>“Requerimentos” → “Registro de Especialidade e Habilitação”</strong>. Confira os documentos exigidos, incluindo certificado e histórico, e acompanhe o pedido. <a href="https://cromg.org.br/registro-de-especialidades/" target="_blank" rel="noopener">Consulte as orientações oficiais</a>.'],
  ['certificado','taxa-registro','O registro da habilitação tem taxa ou prazo de análise?','O CRO-MG divulga as condições, a taxa administrativa e o prazo estimado na página de registro. Consulte os valores e prazos vigentes no momento do requerimento. A gratuidade prevista para a oferta do curso não deve ser interpretada como dispensa automática da taxa de registro. <a href="https://cromg.org.br/registro-de-especialidades/" target="_blank" rel="noopener">Ver informações atualizadas</a>.'],
  ['certificado','habilitacao-especialidade','Este curso é uma especialização?','O projeto é de <strong>Habilitação em Laserterapia</strong>, com 60 horas/aula. O procedimento a solicitar após a formação é o registro da habilitação correspondente. Para orientações sobre as categorias de registro, consulte o CRO-MG.'],
  ['certificado','documentacao-pendente','Tenho dúvidas sobre certificado, histórico ou documentos do registro.','Para emissão e correção de documentos do curso, procure a instituição responsável. Para exigências e análise do registro da habilitação, consulte o CRO-MG e sua <a href="https://cromg.org.br/registro-de-especialidades/" target="_blank" rel="noopener">página de orientações de registro</a>.']
];

const tabs = [...document.querySelectorAll('[data-situation]')];
function selectSituation(tab, focus = false) {
  tabs.forEach(t => { const selected = t === tab; t.setAttribute('aria-selected', String(selected)); t.tabIndex = selected ? 0 : -1; });
  const [label,title,description,href,linkText] = situations[tab.dataset.situation];
  document.querySelector('#situation-label').textContent = label;
  document.querySelector('#situation-title').textContent = title;
  document.querySelector('#situation-text').textContent = description;
  const link = document.querySelector('#situation-link'); link.href = href; link.textContent = linkText;
  document.querySelector('#situation-panel').setAttribute('aria-labelledby', tab.id);
  if (focus) tab.focus();
  if (tab.dataset.situation === 'inscricao') setCategory('selecao');
}
tabs.forEach((tab,i) => {
  tab.addEventListener('click', () => selectSituation(tab));
  tab.addEventListener('keydown', e => {
    let next;
    if (e.key === 'ArrowRight') next = (i+1)%tabs.length;
    if (e.key === 'ArrowLeft') next = (i+tabs.length-1)%tabs.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = tabs.length-1;
    if (next !== undefined) {e.preventDefault(); selectSituation(tabs[next], true);}
  });
});

const list = document.querySelector('#faq-list');
// Static FAQ markup is included in index.html for access without JavaScript.
if (!list.children.length) {
  faqData.forEach(([category,id,question,answer]) => {
    const detail = document.createElement('details'); detail.className = 'faq-item'; detail.id = 'duvida-'+id; detail.dataset.category = category;
    const summary = document.createElement('summary'); summary.textContent = question;
    const plus = document.createElement('span'); plus.textContent = '+'; plus.setAttribute('aria-hidden','true'); summary.append(plus);
    const content = document.createElement('div'); content.className = 'answer'; content.innerHTML = '<p>'+answer+'</p>';
    detail.append(summary,content); list.append(detail);
  });
}
const faqItems = [...list.querySelectorAll('.faq-item')];
const filters = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('#faq-search');
const expand = document.querySelector('#expand-all');
let category = 'todos';
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function updateFaq() {
  const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
  let count=0;
  faqItems.forEach(item => {
    const matchCategory = category === 'todos' || category === item.dataset.category;
    const text = normalize(item.textContent);
    const visible = matchCategory && terms.every(term => text.includes(term));
    item.hidden = !visible;
    if (visible) count++;
  });
  document.querySelector('#faq-count').textContent = count+' de '+faqItems.length+' perguntas';
  document.querySelector('#faq-empty').hidden = count !== 0;
  updateExpandLabel();
}
function setCategory(value) {
  category = value;
  filters.forEach(button => {const active = button.dataset.filter === value; button.classList.toggle('active',active); button.setAttribute('aria-pressed',String(active));});
  updateFaq();
}
function updateExpandLabel() {
  const visible = faqItems.filter(item=>!item.hidden);
  const allOpen = visible.length > 0 && visible.every(item=>item.open);
  expand.textContent = allOpen ? 'Recolher respostas −' : 'Expandir respostas +';
  expand.disabled = visible.length === 0;
}
filters.forEach(button=>button.addEventListener('click',()=>setCategory(button.dataset.filter)));
search.addEventListener('input',updateFaq);
faqItems.forEach(item=>item.addEventListener('toggle',updateExpandLabel));
expand.addEventListener('click',()=>{
  const visible=faqItems.filter(item=>!item.hidden);
  const shouldOpen=!visible.every(item=>item.open);
  visible.forEach(item=>item.open=shouldOpen); updateExpandLabel();
});
document.addEventListener('keydown',e=>{if(e.key==='/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();search.focus();}});
function openHashQuestion() {
  if (!location.hash.startsWith('#duvida-')) return;
  const item = document.getElementById(location.hash.slice(1));
  if(item){search.value='';setCategory('todos');item.open=true;item.scrollIntoView({block:'start'});}
}
window.addEventListener('hashchange',openHashQuestion);
updateFaq();openHashQuestion();
const sections=[...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){document.querySelectorAll('.section-nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id));}
  }),{rootMargin:'-12% 0px -68% 0px'});
  sections.forEach(section=>observer.observe(section));
}
