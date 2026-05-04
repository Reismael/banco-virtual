// banco.js - Sistema de Banco Virtual
let nomeBanco = "BANCO DIGITAL"; // <- linha do conflito
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
