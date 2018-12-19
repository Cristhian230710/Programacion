alert("Hola mundo")
var nombre=prompt("Cual es tu nombre?")
alert("Bienvenido "+nombre)
var num=""
while(num==""){
	num=prompt("Digite hasta cuanto desea contar")
}
//Este codigo es para tal cosa
if(num==""){
	alert("Cantidad no valida")
}else{
	for(cont=0;cont<=num;cont++){
		alert(cont)
	}
}
var continuar=true
num=
while(continuar){
	continuar=confirm("El conteo va en: "+num+" desea continuar?")
	num++
}



