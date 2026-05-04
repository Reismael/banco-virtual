// banco.js - Sistema de Banco Virtual
let nomeBanco = "BANCO DIGITAL PLUS"; // <- linha do conflito
let nomeBanco = "BANCO VIRTUAL S.A.";
let contas = [];
function criarConta(titular, saldoInicial) {
  let conta = { titular: titular, saldo: saldoInicial, ativa: true };
  contas.push(conta);
  console.log(
    "Conta criada para: " + titular + " | Saldo: R$ " + saldoInicial.toFixed(2),
  );
}
function listarContas() {
  console.log("\n=== " + nomeBanco + " — Contas ===");
  if (contas.length === 0) {
    console.log("Nenhuma conta cadastrada.");
    return;
  }
  contas.forEach(function (c, i) {
    let status = c.ativa ? "[ATIVA]" : "[INATIVA]";
    console.log(
      i + 1 + ". " + status + " " + c.titular + " — R$ " + c.saldo.toFixed(2),
    );
  });
}
// Teste inicial
criarConta("Ana Silva", 1000);
listarContas();

// Membro 3 — atualiza nomeBanco e adiciona encerrarConta()
function encerrarConta(indice) {
if (indice < 1 || indice > contas.length) {
console.log("Conta não encontrada."); return;
}
contas[indice - 1].ativa = false;
console.log("Conta de " + contas[indice-1].titular + " encerrada.");
}
// Teste
criarConta("Carla Mendes", 750);
encerrarConta(2);
listarContas();
function extrato(indice) {
  if (indice < 1 || indice > contas.length) {
    console.log("Conta não encontrada.");
    return;
  }
  let c = contas[indice - 1];
  console.log("\n=== EXTRATO — " + nomeBanco + " ===");
  console.log("Titular : " + c.titular);
  console.log("Saldo : R$ " + c.saldo.toFixed(2));
  console.log("Status : " + (c.ativa ? "Ativa" : "Encerrada"));
}
// Teste final
extrato(1);
