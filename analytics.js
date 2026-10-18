/* Estadísticas de visitas con GoatCounter (sin cookies, sin aviso).
   Lo cargan todas las páginas. Si al registrarte en GoatCounter eliges otro código,
   cámbialo solo en la línea de abajo. */
(function () {
  var CODE = 'violetasarabia';

  if (!CODE || /^(localhost|127\.)/.test(location.hostname) || location.protocol === 'file:') return;   // no contar las pruebas en local
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + CODE + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
