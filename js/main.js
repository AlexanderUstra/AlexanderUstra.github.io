let menuBtn = document.getElementById("menu");
let menuOpciones = document.getElementById("menu-lat");
let mailBtn = document.getElementById("enviar-mail");
let main = document.getElementById('main');
let i = 0;


menuBtn.addEventListener("click",()=>{
    menuOpciones.style.display = "block";
    menuOpciones.className === "menu-lat-entrada" ? menuOpciones.className = "menu-lat-salida" :  menuOpciones.className = "menu-lat-entrada"; 
})

window.addEventListener("scroll", () => {
    let posicionUsuario = window.scrollY;
  
    let botonesMenu = document.querySelectorAll("#menu-lat .menu-btn"); 
  
    if (posicionUsuario < 3900) {
      i = 0;
    } else if (posicionUsuario > 3600 && posicionUsuario < 5500) {
      i = 1;
    } else if (posicionUsuario > 5500 && posicionUsuario < 7300) {
      i = 2;
    } else {
      i = 3;
    }
    // Iterar sobre los botones del menú y modificar la clase del botón específico según el índice 'i'
    botonesMenu.forEach((boton, index) => {
      if (index === i) {
        boton.classList.add("ubicacion-usuario");
      } else {
        boton.classList.remove("ubicacion-usuario"); // Restablecer la clase de los demás botones si es necesario
      }
    });
});

mailBtn.addEventListener("click",(evento)=>{
    evento.preventDefault();
    alert("Enviado")
    let inputs = document.getElementsByTagName("input");
    document.getElementById("textarea").value = " "

    for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
    mailBtn.value = "Enviar";
}
})

