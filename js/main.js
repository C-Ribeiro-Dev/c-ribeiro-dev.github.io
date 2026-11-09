(function () {
  'use strict';

  // E-mail: o endereço só é montado no clique, para não ficar escrito na página.
  var mailBtn = document.querySelector('.mail-btn');
  if (mailBtn) {
    mailBtn.removeAttribute('target');
    mailBtn.setAttribute('aria-label', 'Enviar e-mail. Abre o seu aplicativo de e-mail.');
    mailBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var d = mailBtn.dataset;
      var endereco = d.a + d.b + String.fromCharCode(64) + d.d + '.' + d.t;
      window.location.href = 'mail' + 'to:' + endereco;
    });
  }

  // Menu mobile
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  function fechar() {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
  btn.addEventListener('click', function () {
    var aberto = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(aberto));
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') fechar();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') fechar();
  });

  // Alternar tema (claro/escuro). Sem escolha salva, segue o sistema.
  var root = document.documentElement;
  document.querySelector('.theme-btn').addEventListener('click', function () {
    var atual = root.getAttribute('data-theme');
    if (!atual) {
      atual = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    var novo = atual === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', novo);
    try { localStorage.setItem('tema', novo); } catch (e) {}
  });

  // Link ativo conforme a seção visível
  var links = document.querySelectorAll('.menu a');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          var ativo = a.getAttribute('href') === '#' + en.target.id;
          a.classList.toggle('active', ativo);
          if (ativo) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { obs.observe(s); });
  }

  // Animação de entrada das seções
  var itens = document.querySelectorAll('.reveal');
  var reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduzir) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    itens.forEach(function (el) { io.observe(el); });
  } else {
    itens.forEach(function (el) { el.classList.add('in'); });
  }

  // Botão voltar ao topo
  var topo = document.querySelector('.to-top');
  window.addEventListener('scroll', function () {
    topo.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });
  topo.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduzir ? 'auto' : 'smooth' });
  });

  // Ano do rodapé
  document.getElementById('ano').textContent = new Date().getFullYear();
})();
