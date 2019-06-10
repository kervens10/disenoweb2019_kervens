// selccionar los elementos//
var correo = document.querySelector("input#correo");
var contrasena = document.querySelector("input#contrasena");
var div = document.querySelector("#contenido")
console.log(correo);
console.log(contrasena);


prompt("tus datos")

// agregar al elementos //
correo.addEventListener("keyup",function(){
 div.textContent = correo.value;
});


// agregar al elementos //

correo.addEventListener("blur", function () {
  alert(correo.value);
});

