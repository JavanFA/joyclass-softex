 var valor1 = parseFloat(prompt("Digite o primeiro valor: "));
 var valor2 = parseFloat(prompt("Digite o segundo valor: "));

 var operador = prompt("Digite o operador (+, -, *, /):");

 var resultado;

 if (operador === "+") {
     resultado = valor1 + valor2;
 } else if (operador === "-") {
     resultado = valor1 - valor2;
 } else if (operador === "*") {
     resultado = valor1 * valor2;
 } else if (operador === "/") {
     if (valor2 !== 0) {
         resultado = valor1 / valor2;
         var resto = valor1 % valor2;
         alert("Resultado: " + resultado + "\nResto: " + resto);
     } else {
         alert("Erro: Divisão por zero!");
     }
 } else {
     alert("Operador inválido");
 }

 if (operador !== "/") {
     alert("Resultado: " + resultado);
 }