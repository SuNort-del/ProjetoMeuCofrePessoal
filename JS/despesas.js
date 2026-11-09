// ===== parte 1: pegar elementos e carregar a lista =====
const formulario = document.getElementById("form-despesa");
const tabela = document.getElementById("tabela-despesas");
const filtroAno = document.getElementById("ano-filtro");
const filtroMes = document.getElementById("mes-filtro");
const despesasNova = JSON.parse(localStorage.getItem("despesasGuardada")) || [];

// ===== parte 2 e 3: receber o formulário e salvar =====
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const valor = Number(document.getElementById("valor").value);
  const data = document.getElementById("data").value;
  const categoria = document.getElementById("categoria").value;

  const despesa = {
    descricao: descricao,
    valor: valor,
    data: data,
    categoria: categoria,
  };

  despesasNova.push(despesa);
  localStorage.setItem("despesasGuardada", JSON.stringify(despesasNova));

});
