// --- SELEÇÃO DOS ELEMENTOS DO DOM ---
const anotacoes = document.querySelector("#anotacoes");
const contador = document.querySelector("#contador");
const btnLimparAnotacoes = document.querySelector("#limparAnotacoes");
const btnExportarAnotacoes = document.querySelector("#exportarAnotacoes");
const rascunho = document.querySelector("#rascunho");
const btnLimparRascunho = document.querySelector("#limparRascunho");
const btnExportarRascunho = document.querySelector("#exportarRascunho");

// --- GRAVA OS VALORES ESCUTADOS (INPUT) NO localStorage ---
anotacoes.addEventListener("input", () => {
  localStorage.setItem(anotacoes.id, anotacoes.value);
  contador.textContent = `${anotacoes.value.length} caracteres`;
});

// --- GRAVA OS VALORES ESCUTADOS (INPUT) NO sessionStorage ---
rascunho.addEventListener("input", () => {
  sessionStorage.setItem(rascunho.id, rascunho.value);
});

// --- CARREGA OS VALORES DO storage NOS OBJETOS ---
anotacoes.value = localStorage.getItem(anotacoes.id) || "";
contador.textContent = `${anotacoes.value.length} caracteres`;
rascunho.value = sessionStorage.getItem(rascunho.id) || "";

// --- BOTÕES DE LIMPAR ---
btnLimparAnotacoes.addEventListener("click", () => {
  anotacoes.value = "";
  contador.textContent = "0 caracteres";
  localStorage.removeItem(anotacoes.id);
});

btnLimparRascunho.addEventListener("click", () => {
  rascunho.value = "";
  sessionStorage.removeItem(rascunho.id);
});

// --- BOTÕES DE EXPORTAR TXT ---
btnExportarAnotacoes.addEventListener("click", () => {
  const blob = new Blob([anotacoes.value], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "anotacoes.txt";
  link.click();
  URL.revokeObjectURL(url);
});

btnExportarRascunho.addEventListener("click", () => {
  const blob = new Blob([rascunho.value], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "rascunho.txt";
  link.click();
  URL.revokeObjectURL(url);
});
