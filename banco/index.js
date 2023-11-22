var banco = {
    conta: "123456",
    saldo: 1000,
    tipoConta: "Corrente",
    agencia: "7890",
  
    buscarSaldo: function() {
      return this.saldo;
    },
  
    deposito: function(valor) {
      this.saldo += valor;
      return "Depósito de R$" + valor + " realizado. Novo saldo: R$" + this.saldo;
    },
  
    saque: function(valor) {
      if (valor > this.saldo) {
        return "Saldo insuficiente para saque.";
      } else {
        this.saldo -= valor;
        return "Saque de R$" + valor + " realizado. Novo saldo: R$" + this.saldo;
      }
    },
  
    numeroConta: function() {
      return this.conta;
    }
  };
  
  // Exemplo de uso
  console.log("Saldo atual: R$" + banco.buscarSaldo());
  console.log(banco.deposito(500));
  console.log(banco.saque(200));
  console.log("Número da conta: " + banco.numeroConta());
  