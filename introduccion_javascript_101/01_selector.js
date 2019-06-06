/*Seleccionar el parrafo */ 
 var mi_parrafo = document.querySelector("p");

 console.log(mi_parrafo.id);
 console.log(mi_parrafo.name);
 console.log(mi_parrafo.Tagname);
 console.log(mi_parrafo.textContent);
  console.log(mi_parrafo.innerHTML);
 console.log(mi_parrafo.style);

//Cambiar valores //
 mi_parrafo.textContent = "Hola mundo ";
  mi_parrafo.id = "nuevo";
  mi_parrafo.Tagname =""

  mi_parrafo.style.background = "silver";
   mi_parrafo.style.color = "red";