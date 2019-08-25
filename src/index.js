


const btnIngresar = document.getElementById("ingresar");
btnIngresar.addEventListener("click", () => {
  document.getElementById("cuenta").style.display = "block";
  document.getElementById("inicio").style.display = "none";
});

const btnSalir = document.getElementById("btnOutside");
btnSalir.addEventListener("click", () => {
  document.getElementById("cerrarSesion").style.display = "block";
  document.getElementById("cuenta").style.display = "none";
});

const btnContraseña = document.getElementById("disparaContraseña");
btnContraseña.addEventListener("click", () => {
  let palabraContraseña = document.getElementById("palabraContraseña").value;
  let contraseñaGenerada = document.getElementById("contraseñaGenerada");
  let nAlAzar = Math.floor(Math.random() * 10000) + 1;
  let contraseña =
    palabraContraseña.charAt(
      Math.floor(Math.random() * palabraContraseña.length)
    ) +
    palabraContraseña.charAt(
      Math.floor(Math.random() * palabraContraseña.length)
    ) +
    nAlAzar +
    palabraContraseña.charAt(
      Math.floor(Math.random() * palabraContraseña.length)
    ) +
    palabraContraseña.charAt(
      Math.floor(Math.random() * palabraContraseña.length)
    );
  contraseñaGenerada.innerHTML = "Su nueva contraseña es:  " + contraseña;
});



const btnCifrar = document.getElementById("cifrar"); //boton cifrar
let msjCifrado = document.getElementById("respCifrada");
btnCifrar.addEventListener("click", () => {
  let texto = document.getElementById("textoDescifrado").value;
  let spaceCode = parseInt(document.getElementById("codSeg").value);
  msjCifrado.innerHTML = window.cipher.encode(texto,spaceCode);
  
});

const btnDescifrar = document.getElementById("descifrar"); //boton descifrar
let msjDescifrado = document.getElementById("respDescifrada");
btnDescifrar.addEventListener("click", () => {
  
  
  //Función decipher para decifrar frase
  let spaceCode = parseInt(document.getElementById("codSeg").value);
  let msjCifrado = document.getElementById("textoCifrado").value;

  msjDescifrado.innerHTML = window.cipher.decode( msjCifrado,spaceCode);
     
});

const btnEmail=document.getElementById("mail");
btnEmail.addEventListener("click", () => {
  alert("El mensaje  a sido enviado a su email con la contraseña escojida")
});
const btnWhatsapp=document.getElementById("whatsapp");
btnWhatsapp.addEventListener("click", () => {
  alert("El mensaje a sido enviado su whatsapp con la contraseña escojida")
});