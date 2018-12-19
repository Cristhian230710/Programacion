num1=parseInt(prompt("Digite el primer número"))
num2=parseInt(prompt("Digite el segundo número"))
operacion=prompt("Digite la operacion")
num4=4
resultado=calculadora(num1,num2,operacion)
mostrarResultado(resultado)

function mostrarResultado(valor){
	alert("El resultado es: "+valor)
}
function calculadora(num1,num2,num4,operacion){
	var resultado
	if(operacion=="suma"){
		resultado=num1+num2
	}else if(operacion=="resta"){
		resultado=num1-num2
	}else if (operacion=="multiplicacion"){
		resultado=num1*num2
	}else if(operacion=="division"){
		resultado=num1/num2
	}
	return resultado
}
