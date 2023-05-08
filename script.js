function encriptar() {
    let textArea = document.getElementById("textarea").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let ilustracion = document.getElementById("ilustracion");
  
    let textoCifrado = textArea
      .replace(/e/gi, "enter")
      .replace(/i/gi, "ime")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (textArea.length != 0) {
      document.getElementById("textarea").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      ilustracion.src = "https://lukaszadam.com/tv-guy-svg-illustration-free.svg";
    } else {
      ilustracion.src = "https://lukaszadam.com/assets/downloads/tools.svg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }

  function desencriptar() {
    let textArea = document.getElementById("textarea").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let ilustracion = document.getElementById("ilustracion");
  
    let textoCifrado = textArea
      .replace(/enter/gi,"e")
      .replace(/ime/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    if (textArea.length != 0) {
      document.getElementById("textarea").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      ilustracion.src = "https://lukaszadam.com/tv-guy-svg-illustration-free.svg";
    } else {
      ilustracion.src = "https://lukaszadam.com/assets/downloads/tools.svg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }

  function copiar(){

    var textoCopiado = document.querySelector("#textarea");
    textoCopiado.select();
    document.execCommand("copy");
    document.getElementById("textarea").value = "";


}
