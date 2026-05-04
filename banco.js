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
function depositar(indice, valor) {
  if (indice < 1 || indice > contas.length) {
    console.log("Conta não encontrada.");
    return;
  }
  contas[indice - 1].saldo += valor;
  console.log(
    "Depósito de R$ " +
      valor.toFixed(2) +
      " para " +
      contas[indice - 1].titular,
  );
}
function sacar(indice, valor) {
  if (indice < 1 || indice > contas.length) {
    console.log("Conta não encontrada.");
    return;
  }
  let c = contas[indice - 1];
  if (c.saldo < valor) {
    console.log("Saldo insuficiente!");
    return;
  }
  c.saldo -= valor;
  console.log("Saque de R$ " + valor.toFixed(2) + " da conta de " + c.titular);
}
// Teste
criarConta("Bruno Costa", 500);
depositar(1, 200);
sacar(2, 100);
listarContas();
