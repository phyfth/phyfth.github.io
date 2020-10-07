---
title: Mecánica clásica en acción
type: curso
---

<p class="description">En este curso revisamos algunos principios de la física clásica. Adoptamos el enfoque variacional pues éste nos permite, de manera muy natural, actualizar nuestros principios a los de la física cuántica.</p>

<div class="lecture-notes-box">
<!--    ============================================================ -->
        <input type="text" id="ln-search-bar" onkeyup="Buscar()" spellcheck="false" placeholder="Buscar por título, autor o fecha">
<!--    ============================================================ -->
<ol id="ln-box">
    {% for variable in site.data.curso-mecanica-clasica %}
<!--    ------------------------------------------------------------    -->
        <li id="{{variable.id}}"><a class="ln-link" href="{{ variable.link_online }}" target="_blank">{{ variable.titulo }}</a>
<!--    ------------------------------------------------------------    -->
            <div class="fw-100" id="autor-fecha">
                Por {{ variable.autor }} el {{ variable.fecha }}
            </div>
<!--    ------------------------------------------------------------    -->
            <span>{{ variable.resumen }}</span>
<!--    ------------------------------------------------------------    -->
            <div class="lecture-notes-icons pb-12">
                {% if variable.id %}
                    <a href="{{site.url}}/docs/mecanica-clasica/discusion/{{ variable.id }}"><i class="far fa-comment"></i></a>
                {% endif %}
                    <a href="#" target="_blank"><i class="fas fa-download"></i></a>
                {% if variable.tarea %}
                    <a href="#" target="_blank"><i class="fas fa-pencil-alt"></i></a>
                {% endif %}
                {% if variable.appendix %}
                    <a href="#" target="_blank"><i class="fas fa-paperclip"></i></a>
                {% endif %}
            </div>
<!--    ------------------------------------------------------------    -->
            <hr>
        </li>
    {% endfor %}
</ol>
<!--    ============================================================ -->
</div>
