window.cipher = {
  encode: (texto, spaceCode) => {
    let textCipher = ""; // texto vacío donde voy a alamacenar, los strings se tratan como arreglos.
    let index = 0;
    for (let i = 0; i < texto.length; i++) {
      //recorriendo la frase
      index = texto.charCodeAt(i);
      if (index > 65 || index < 97) {
        if (texto.charAt(i) == texto.charAt(i).toUpperCase()) {
          let textChar = ((texto.charCodeAt(i) - 65 + spaceCode) % 26) + 65; //se usa charCodeAt para saber el código ASCII de cada letra de la frase y se aplica la la fórmula
          textCipher += String.fromCharCode(textChar); // textChar arroja un número en ASCII que se convierte en letra CIFRADA correspondiente.
        } else if (index > 97 || index < 122) {
          let textChar = ((texto.charCodeAt(i) - 97 + spaceCode) % 26) + 97; //se usa charCodeAt para saber el código ASCII de cada letra de la frase y se aplica la la fórmula
          textCipher += String.fromCharCode(textChar); // textChar arroja un número en ASCII que se convierte en letra CIFRADA correspondiente.
        }
      }
    }
    return textCipher;
  },

  decode: (msjCifrado, spaceCode) => {
    let textDescifrado = ""; // texto vacío donde voy a alamacenar, los strings se tratan como arreglos.
    let textChar1 = 0; // Se inicia una variable para colocar resultado de las operaciones

    for (let i = 0; i < msjCifrado.length; i++) {
      // recorriendo el arreglo a decifrar
      let index2 = msjCifrado.charCodeAt(i);
      textChar1 = msjCifrado.charCodeAt(i) - (spaceCode % 26); // me va a dar el numero de posición de su letra correspondiente ya descifrada
      if (index2 > 64) {
        if (msjCifrado.charAt(i) == msjCifrado.charAt(i).toUpperCase()) {
          textChar1 = ((msjCifrado.charCodeAt(i) + 65 - spaceCode) % 26) + 65;
        } else {
          textChar1 = ((msjCifrado.charCodeAt(i) + 85 - spaceCode) % 26) + 97;
        }
      }
      textDescifrado += String.fromCharCode(textChar1);
    } // me da la letra del lugar que salio en text char en ascii y la guarda en el nuevo arreglo
    return textDescifrado;
  }
};
