---
title: Bienvenida al Blog
author: phyfth
date: 2020-10-02 13:36:00 -0700
pin: true
search-bar: true
---

Te doy la más cordial bienvenida a mi blog, **pħyfth**. En este espacio encontrarás material académico. Específicamente, algunos de mis apuntes y proyectos de

- **física** y **matemáticas**,
- **simulación** con el **método de Monte Carlo**[^MC] y **Dinámica Browniana**[^DB];

así como análisis y discusión de artículos científicos. Por supuesto, te recomiendo estar siempre acompañado por una buena taza de café, té o tu bebida favorita.

## ¿Qué formato tienen los apuntes?
Todos los apuntes y proyectos los escribo en **LaTeX** (MiKTeX + TeXstudio). En este espacio sólo publico los enlaces a los archivos en formato **PDF**. Para dibujar las figuras que aparecen en el blog y en los apuntes utilizo **PGF/TikZ**.

## ¿Cómo accedo al material del Blog?

Para acceder a los apuntes y proyectos debes dar click en el menú de [Cursos]({{site.url}}{{site.baseurl}}/docs/cursos). Enseguida encontrarás una lista con los cursos disponibles; da click en el que te interesa explorar. 

## ¿Cómo interactúo con los apuntes?

En la página del curso que seleccionaste aparece una barra de búsqueda y el portafolio, en forma de lista, con los apuntes disponibles; tal y como se muestra a continuación:

---

<div class="lecture-notes-box">
<!--    ============================================================ -->
        <input type="text" id="ln-search-bar" onkeyup="Buscar()" spellcheck="false" placeholder="Buscar por título, autor o fecha">
<!--    ============================================================ -->
<ol id="ln-box">
<!--    ------------------------------------------------------------    -->
        <li ><a class="ln-link" href="{{site.url}}{{site.baseurl}}/posts/bienvenida-al-blog/#ln-search-bar">Título</a>
<!--    ------------------------------------------------------------    -->
          <div class="fw-100" id="autor-fecha">
              Por <i>autor</i> el <i>25 de febrero de 2020</i>
          </div>
<!--    ------------------------------------------------------------    -->
          <span>Zona para el resumen</span>
<!--    ------------------------------------------------------------    -->
          <div class="lecture-notes-icons pb-12">
            <a href="{{site.url}}{{site.baseurl}}/posts/bienvenida-al-blog/#ln-search-bar"><i class="far fa-comment"></i></a>
            <a href="{{site.url}}{{site.baseurl}}/posts/bienvenida-al-blog/#ln-search-bar"><i class="fas fa-download"></i></a>
            <a href="{{site.url}}{{site.baseurl}}/posts/bienvenida-al-blog/#ln-search-bar"><i class="fas fa-pencil-alt"></i></a>
            <a href="{{site.url}}{{site.baseurl}}/posts/bienvenida-al-blog/#ln-search-bar"><i class="fas fa-paperclip"></i></a>
          </div>
<!--    ------------------------------------------------------------    -->
        </li>
</ol>
<!--    ============================================================ -->
</div>

---

Al dar click en la barra de búsqueda y comenzar a escribir, se mostrarán en pantalla únicamente los apuntes que coincidan con lo que estás escribiendo. 

<div class="admonition caution" id="advertencia-01">
    <p class="admonition-title">Advertencia 1</p>
    <p>La búsqueda debe ser por título, autor o fecha. Se consideran caracteres especiales y escribir mayúsculas o minúsculas es indiferente. Por ejemplo, escribir "Título" o "título" muestra un resultado, en cambio, escribir "Titulo" o "titulo", no muestra resultado alguno. Inténtalo.</p>
</div>

Una vez que hayas encontrado el apunte que te interesa revisar, tienes varias opciones para interactuar con él. 

<!--  =================================================== -->
<table>
  <thead>
    <tr>
      <th>Opción</th>
      <th>Descripción</th>
      <th>Acción</th>
    </tr>
  </thead>
  <tbody>
<!-- --------- -->
    <tr>
      <td>Ver online y/o descargar e imprimir</td>
      <td>
        Puedes ver o imprimir el archivo PDF en línea (desde el navegador) sin necesidad de descargarlo, aunque también está disponible esta última opción. Ver <a href="{{site.url}}{{site.baseurl}}/posts/bienvenida-al-blog/#advertencia-02">advertencia 2</a>.
      </td>
      <td>Dar click en el título</td>
    </tr>
<!-- --------- -->
    <tr>
      <td>Descarga directa</td>
      <td>Puedes descargar el archivo PDF a tu dispositivo de manera directa, sin necesidad de abrir otra pestaña del navegador. En relación a la <a href="{{site.url}}{{site.baseurl}}/posts/bienvenida-al-blog/#advertencia-02">advertencia 2</a>, este archivo no tiene comentarios, en caso de que los haya.</td>
      <td>Dar click en el icono <i class="fas fa-download"></i></td>
    </tr>
<!-- --------- -->
    <tr>
      <td>Publicar y/o responder comentarios</td>
      <td>
        <strong>En línea:</strong> si tienes cuenta de Google Drive y tienes abierta la sesión en el navegador, puedes publicar y/o responder comentarios en línea dentro del archivo PDF. <br>
        <strong>En la sección de discusión:</strong> si tienes cuenta de GitHub y tienes abierta la sesión en el navegador, puedes publicar y/o responder comentarios en la sección de discusión.
      </td>
      <td>
        <strong>En línea:</strong> seleccionar la zona que se quiere comentar y dar click en "añadir comentario". <br>
        <strong>En la sección de discusión:</strong> dar click en el icono <i class="far fa-comment"></i>
      </td>
    </tr>
<!-- --------- -->
    <tr>
      <td>Ver y descargar anexos o apéndices</td>
      <td>En algunos apuntes se incluyen anexos o apéndices. Puedes verlos en línea y descargarlos. </td>
      <td>Dar click en el icono <i class="fas fa-paperclip"></i></td>
    </tr>
<!-- --------- -->
    <tr>
      <td>Ver y descargar ejercicios</td>
      <td>En algunos apuntes se incluyen ejercicios. Puedes verlos en línea y descargarlos. </td>
      <td>Dar click en el icono <i class="fas fa-pencil-alt"></i></td>
    </tr>
<!-- --------- -->
  </tbody>
</table>
<!--  =================================================== -->

<div class="admonition caution" id="advertencia-02">
    <p class="admonition-title">Advertencia 2</p>
    <p>Si descargas el PDF desde el visor de Google y tiene comentarios, éstos se van a mostrar en todos los dispositivos en los que abras el archivo.</p>
</div>

## ¿Cómo te puedes poner en contacto conmigo?

Cualquier comentario (constructivo), pregunta y/o sugerencia sobre el contenido de este blog es bienvenido. Me puedes contactar escribiéndome al correo electrónico [phyfth@gmail.com](mailto:phyfth@gmail.com), o bien, dando click en el icono <i class="fas fa-envelope" aria-hidden="true"></i> que aparece en la parte inferior de la barra lateral izquierda.

## Mensaje final

Sin más que agregar, espero que disfrutes el Blog y su contenido. Saludos cordiales y que la fuerza te acompañe.

---
[^MC]: [Monte Carlo Simulation](https://www.investopedia.com/terms/m/montecarlosimulation.asp).
[^DB]: [Brownian Dynamics Simulations of Polymers and Soft Matter](https://doi.org/10.1007/978-1-4020-3286-8_140).