try {
  let numero1 = prompt("Informe o primeiro número:");
  let numero2 = prompt("Informe o segundo número:");

  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);

  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Informe números válidos");
  }

  const resultado = numero1 + numero2;

  console.log(`O resultado da soma é: ${resultado}`);
} catch (erro) {
  console.error(`Erro: ${erro.message}`);
} finally {
  console.log("Execução finalizada.");
}
