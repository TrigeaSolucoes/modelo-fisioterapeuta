(function () {
  var painel = document.getElementById("mapa-dores");
  if (!painel) return;

  var zap = painel.getAttribute("data-zap") || "";
  var botoes = painel.querySelectorAll(".btn-regiao");
  var elTitulo = document.getElementById("regiao-titulo");
  var elQuando = document.getElementById("regiao-quando");
  var elCuidado = document.getElementById("regiao-cuidado");
  var elLevar = document.getElementById("regiao-levar");
  var btnAgendar = document.getElementById("btn-agendar-regiao");

  function montarUrlZap(numero, texto) {
    var digitos = "55" + String(numero || "").replace(/\D/g, "");
    return "https://wa.me/" + digitos + "?text=" + encodeURIComponent(texto);
  }

  botoes.forEach(function (btn) {
    btn.addEventListener("click", function () {
      botoes.forEach(function (b) {
        var ativo = b === btn;
        b.classList.toggle("btn-regiao-ativo", ativo);
        b.setAttribute("aria-pressed", ativo ? "true" : "false");
      });

      var nome = btn.getAttribute("data-nome") || "";
      var quando = btn.getAttribute("data-quando") || "";
      var cuidado = btn.getAttribute("data-cuidado") || "";
      var levar = btn.getAttribute("data-levar") || "";

      if (elTitulo) elTitulo.textContent = nome;
      if (elQuando) elQuando.textContent = quando;
      if (elCuidado) elCuidado.textContent = cuidado;
      if (elLevar) elLevar.textContent = levar;

      if (btnAgendar) {
        btnAgendar.textContent = "Agendar avaliação para " + nome.toLowerCase();
        var msg =
          "Olá! Gostaria de agendar uma avaliação na Movimento Fisioterapia. " +
          "Região principal do incômodo: " +
          nome +
          ".";
        btnAgendar.setAttribute("href", montarUrlZap(zap, msg));
      }
    });
  });
})();
