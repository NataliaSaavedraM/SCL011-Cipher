# Proyecto 1- Cifrado Cesar
El proceso y decisiones de diseño fueron pensadas según la investigación realizada respecto a como debía ser el diseño para el adulto mayor, En base a la información encontrada en la web en los siguientes links:
[Diseño web para la tercera edad](http://www.staffcreativa.pe/blog/diseno-web-para-la-tercera-edad/)
[Coordenadas fundamentales para la usabilidad del adulto mayor](https://blog.ida.cl/diseno/4-coordenadas-fundamentales-usabilidad-adultos-mayores/#perceptiva)


## Definición del producto final a nivel de experiencia y de interfaz.

Muchas personas de la tercera edad que utilizan sistemas informáticos como bancos en línea, cuentas en afps, correo electrónico, etc. tienen dificultades para generar contraseñas y mantener información a la mano disponible, en forma privada. lo cual les genera un problema para acceder con facilidad a sus cuentas.  

## Principales usuarios de producto.   

Personas de la tercera edad que tiene dificultad de memorizar claves o guardar información importante privada al alcance de sus manos.

## El propósito de los usuarios en relación al producto.
Obtener contraseñas que puedan guardar en papel. de modo que sea accesible para ellos, sin que deje de ser privado. lo cual se lograría al poder escribir o imprimir en papel la información relacionada a determinadas contraseñas y la descripción de esta de manera cifrada, siendo el usuario el único que estaría en condición de descifrarla accediendo a su cuenta. 


## Solución al problema de perder contraseñas y cambiarlas continuamente, muchas veces con ayuda de soporte telefónico. 

Al tener su información a la mano, haría que ellos no tuvieran que estar reseteando o recuperando cuentas continuamente.  Lo cual les ahorraría tiempo y esfuerzo.


## Acceso del usuario a la aplicación:
Para acceder a la Aplicación, los usuarios  deben ingresar a  su navegador de preferencia, por  ejemplo Chrome e ingresar a la siguiente página:[Aplicación](https://nataliasaavedram.github.io/SCL011-Cipher/src/index.html)
Luego deberá ingresar los datos solicitados, los cuales encuentra en su cedula de identidad y acceda a su cuenta personal.


## Glosario de la Aplicación
Clave alfanumérica: Clave de 8 caracteres compuesta por 2 letras 4 números y 2 letras de modo aleatorio
Clave numérica: clave de 4 caracteres  compuesta por 4 números aleatorios. 
Código de Seguridad: Este corresponde a los dos últimos números, del número de documento del usuario, el cual está en su cedula de identidad como muestra la imagen. 

Mensaje encubierto: El mensaje encubierto es un mensaje cifrado(encriptado) que solo el usuario puede descubrir, al ingresar a esta misma sección y pegar el mensaje encubierto en el recuadro de mensaje encriptado. Donde después de poner su mensaje en este recuadro y seleccionar el código de seguridad con el que se cifro. Este mensaje será traducido al español como estaba originalmente.

Mensaje 
En este espacio uste pone el mensaje que quiere encubrir. En este mismo espacio aparecerá el mensaje descubierto cuando usted transcriba el mensaje que anteriormente halla encubierto. 





## Instrucciones
## Ingresar a la cuenta:
1-.Digitar primer nombre y apellido
2-.Digitar Rut 
3-. Digitar Numero de Documento de la cedula de identidad.

## Generar contraseñas: Dependiendo si es Alfanumérica o numérica.
## Clave Alfanumérica de 8 caracteres
1-. Escribe una palabra en el recuadro donde se indica “Palabra”
2-. Presiona Generar Contraseña.
## Clave numérica de 4 caracteres
1- Presiona Generar Contraseña.

## Encubrir o encriptar mensaje
Para generar un mensaje encubierto, escribe donde dice mensaje, escoge un valor del 1 al 99 y presiona encriptar.
El mensaje encubierto aparecerá en el recuadro de Mensaje Encriptado.

## Descubrir o desencriptar mensaje.
Mensaje 
Para desencriptar un mensaje, pega el mensaje encriptado en el recuadro de “mensaje encriptado” y digita tu código de seguridad. Luego, presiona desencriptar. El mensaje descubierto o desencriptado, aparecerá en el recuadro de Mensaje.

## Enviar al Mail
Para enviar tu mensaje al mail ya sea encriptado o desencriptado, debes presionar el botón que esta abajo a la izquierda de la pantalla que dice “Enviar email”.

## Enviar Whatsapp
Para enviar tu mensaje al whatsaap ya sea cubierto o descubierto, debes presionar el botón que esta al final de la pagina a la derecha. 


## Planificación 
Si bien se cumplió en gran parte la planificación inicial, esta se fue modificando según los testeos que se realizaron para mejorar su usabilidad.
[Tablero de Trello]https://trello.com/b/5thmiH7Z/terceraedad  

![Flujo](<a href="https://imgbb.com/"><img src="https://i.ibb.co/fNpnM7h/Explicacion-de-Uso.png" alt="Explicacion-de-Uso" border="0" /></a>)


## Prototipado
![index](<a href="https://imgbb.com/"><img src="https://i.ibb.co/KwF95W6/index-html.png" alt="index-html" border="0" /></a>)


![mensaje](<a href="https://imgbb.com/"><img src="https://i.ibb.co/ZgQyP6v/Mensajes.png" alt="Mensajes" border="0" /></a>)


## Checklist
Esta sección está  para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria
* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] No utiliza `this`.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x]  Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [x] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
