# Estructuras de Control en JavaScript - CARLOS YÁNEZ

Este proyecto busca demostrar el uso de **estructuras de control** en **JavaScript**, enfocada en tres actividades prácticas. 
## Archivos del Proyecto

- `index.html` – Archivo principal que estructura la página web y enlaza los scripts y estilos.
- `estilo.css` – Hoja de estilos externa que define el diseño visual.
- `edadCategoria.js` – Script que contiene la lógica de clasificación de edades.
- `tabla multiplicar.js` – Script que genera tablas de multiplicar.
- `tablas seleccionadas.js` – Script que muestra tablas de números pares o impares según la selección del usuario.

## Descripción del `index.html`

Contiene la estructura básica de la página. A continuación, se describe la funcionalidad de cada parte:

### Encabezado (`<head>`)

- Se define el **idioma** del documento como español (`lang="es"`).
- Se establece el **título** de la página que aparece en la pestaña del navegador.
- Se enlaza una **hoja de estilos externa** (`estilo.css`) para aplicar diseño a los elementos HTML.

### Cuerpo del documento (`<body>`)

- Se utiliza un `div` con clase `container` para agrupar todo el contenido de manera centralizada y estructurada.
- Se incluye un título principal (`<h1>`) con el nombre del autor y la temática de la página.
- Se presentan **tres botones**, cada uno vinculado a una función JavaScript que ejecuta una actividad:

#### Actividad 1: Clasificación de edades
Botón: `ejecutarEdadCategoria()`
- Llama a una función que clasifica una edad ingresada por el usuario en categorías como niño, adolescente, adulto, etc.

#### Actividad 2: Tabla de multiplicar
Botón: `ejecutarTablaMultiplicar()`
- Solicita al usuario un número y muestra su tabla de multiplicar del 1 al 12.

#### Actividad 3: Tablas pares o impares
Botón: `ejecutarTablasSeleccionadas()`
- Permite elegir entre generar tablas de multiplicar de números pares o impares.

- Un elemento `div` con `id="salida"` sirve como área de salida para mostrar los resultados generados dinámicamente por los scripts.

### Enlaces a Scripts

Se enlazan al final del archivo HTML los siguientes scripts para mantener una buena práctica de carga:

```html
<script src="edadCategoria.js"></script>
<script src="tabla multiplicar.js"></script>
<script src="tablas seleccionadas.js"></script>