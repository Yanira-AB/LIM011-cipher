# Secret Note


**Secret Note** es un block de notas diferente, pues te ofrece guardar tus notas de manera segura.
Cada nota que crees tendrá una clave numérica única que le asignarás al momento de crearla.

Al crear la nota podrás asignarle un Título o dejarlo en blanco y por defecto se le asignará el nombre _"Nota"_ 
acompañado del número de orden de la nota creada, por ejemplo: _"Nota 1"_, _"Nota 2"_ y así sucesivamente.

Luego de escribir la nota tendrás que asignarle una clave numérica para poder guardarla y encriptarla.
El texto que ingreses se encriptará de acuerdo al número de offset ingresado _**(el número de offset es la clave)**_.

El mensaje quedará encriptado, mas el título no se verá afectado por el cifrado para que puedas identificar tus notas.
Si deseas leer la nota (decifrarla) tendrás que ingresar la misma clave _(offset)_ que utilizaste para guardarla. Cuando
la nota esté expuesta (decifrada) te dará la opción para editarla y volver a encriptarla (en éste paso podrías también
cambiar tu clave).

Para eliminar la nota también te solicitará la clave numérica (ofsset).


**La interfaz permite al usuario:**

* Crear varias notas.
* Insertar un título y texto, donde solo el texto se cifrará.
* Elegir una clave que será el desplazamiento _**(offset)**_ indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Ver el resultado del mensaje cifrado.
* Decifrar el mensaje ingresando su clave _**(offset)**_.
* Ver el resultado del mensaje descifrado.
* Editar la nota.
* Eliminar la nota.


![Secret Note](/images/secret-note.png "Secret Note")


  ### INVESTIGACIÓN UX:

  * Usuarios.
  
     Los usuarios de éste producto son todas aquellas personas que suelen olvidar datos
     importantes, como por ejemplo: claves, contraseñas, correos, etc.
     También personas que anotan sus pensamientos o su día a día.
     Público en general.
     
  * Solución.
  
     Con éste producto podrán guardar todos esos datos importantes de manera segura y discreta _(con una clave)_
     sin necesidad de tener que descargar algún bloqueador de aplicaciones.
     
  * Prototipo en papel.
     
      ![Secret Note](/images/prototipo-papel.png "Primer prototipo en papel")
     
  * Primer Feedback recibido.
  
     Agregar la opción de eliminar cada nota de manera independiente.
     Pedir el número como "clave" en vez de offset.

  * Prototipo final en Figma.
     
     ![Secret Note](/images/figma.png "Prototipo en Figma")
     
     
## Objetivos de aprendizaje Cipher

A continuación te presentamos los objetivos de aprendizaje de este proyecto. Reflexiona y luego marca los objetivos que has llegado a **entender** y **aplicar** en tu proyecto.

Respuestas de acuerdo a éstas tres preguntas:

1. Si lo hiciste.
2. Si lo hiciste entendiendo y lo puedes explicar.
3. Lo puedes hacer sola en otro proyecto.

### UX

- 1.[SI], 2.[SI], 3.[SI] Diseñar la aplicación pensando y entendiendo al usuario.
- 3.[SI], 2.[SI], 3.[SI] Crear prototipos para obtener feedback e iterar.
- 1.[SI], 2.[NO], 3.[SI] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).

### HTML y CSS

- 1.[SI], 2.[NO], 3.[SI] Uso correcto de HTML semántico.
- 1.[SI], 2.[SI], 3.[SI] Uso de selectores de CSS.
- 1.[SI], 2.[SI], 3.[SI] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

- 1.[SI], 2.[SI], 3.[SI] Uso de selectores del DOM.
- 1.[SI], 2.[SI], 3.[SI] Manejo de eventos del DOM.
- 1.[SI], 2.[SI], 3.[SI] Manipulación dinámica del DOM.

### Javascript

- 1.[SI], 2.[SI], 3.[SI] Manipulación de strings.
- 1.[SI], 2.[SI], 3.[SI] Uso de condicionales (if-else | switch).
- 1.[SI], 2.[SI], 3.[SI] Uso de bucles (for | do-while).	
- 1.[SI], 2.[SI], 3.[SI] Uso de funciones (parámetros | argumentos | valor de retorno).
- 1.[SI], 2.[SI], 3.[SI] Declaración correcta de variables (const & let).

### Testing
- 1.[SI], 2.[NO], 3.[NO] Testeo de tus funciones.

### Git y GitHub
- 1.[SI], 2.[SI], 3.[SI] Comandos de git (add | commit | pull | status | push).
- 1.[NO], 2.[NO], 3.[NO] Manejo de repositorios de GitHub (clone | fork | gh-pages).

### Buenas prácticas de desarrollo
- 1.[SI], 2.[SI], 3.[SI] Uso de identificadores descriptivos (Nomenclatura | Semántica).
- 1.[SI], 2.[NO], 3.[SI] Uso de linter para seguir buenas prácticas (ESLINT).
     
