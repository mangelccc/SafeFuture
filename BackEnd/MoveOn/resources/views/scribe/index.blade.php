<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Laravel API Documentation</title>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset("/vendor/scribe/css/theme-default.style.css") }}" media="screen">
    <link rel="stylesheet" href="{{ asset("/vendor/scribe/css/theme-default.print.css") }}" media="print">

    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js"></script>

    <link rel="stylesheet"
          href="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/styles/obsidian.min.css">
    <script src="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/highlight.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jets/0.14.1/jets.min.js"></script>

    <style id="language-style">
        /* starts out as display none and is replaced with js later  */
                    body .content .bash-example code { display: none; }
                    body .content .javascript-example code { display: none; }
            </style>

    <script>
        var tryItOutBaseUrl = "http://localhost";
        var useCsrf = Boolean();
        var csrfUrl = "/sanctum/csrf-cookie";
    </script>
    <script src="{{ asset("/vendor/scribe/js/tryitout-5.2.0.js") }}"></script>

    <script src="{{ asset("/vendor/scribe/js/theme-default-5.2.0.js") }}"></script>

</head>

<body data-languages="[&quot;bash&quot;,&quot;javascript&quot;]">

<a href="#" id="nav-button">
    <span>
        MENU
        <img src="{{ asset("/vendor/scribe/images/navbar.png") }}" alt="navbar-image"/>
    </span>
</a>
<div class="tocify-wrapper">
    
            <div class="lang-selector">
                                            <button type="button" class="lang-button" data-language-name="bash">bash</button>
                                            <button type="button" class="lang-button" data-language-name="javascript">javascript</button>
                    </div>
    
    <div class="search">
        <input type="text" class="search" id="input-search" placeholder="Search">
    </div>

    <div id="toc">
                    <ul id="tocify-header-introduction" class="tocify-header">
                <li class="tocify-item level-1" data-unique="introduction">
                    <a href="#introduction">Introduction</a>
                </li>
                            </ul>
                    <ul id="tocify-header-authenticating-requests" class="tocify-header">
                <li class="tocify-item level-1" data-unique="authenticating-requests">
                    <a href="#authenticating-requests">Authenticating requests</a>
                </li>
                            </ul>
                    <ul id="tocify-header-endpoints" class="tocify-header">
                <li class="tocify-item level-1" data-unique="endpoints">
                    <a href="#endpoints">Endpoints</a>
                </li>
                                    <ul id="tocify-subheader-endpoints" class="tocify-subheader">
                                                    <li class="tocify-item level-2" data-unique="endpoints-GETapi-usuarios">
                                <a href="#endpoints-GETapi-usuarios">GET api/usuarios</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-usuarios--id-">
                                <a href="#endpoints-GETapi-usuarios--id-">GET api/usuarios/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-usuarios">
                                <a href="#endpoints-POSTapi-usuarios">POST api/usuarios</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-usuarios--id-">
                                <a href="#endpoints-PUTapi-usuarios--id-">PUT api/usuarios/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-usuarios--id-">
                                <a href="#endpoints-PATCHapi-usuarios--id-">PATCH api/usuarios/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-usuarios--id-">
                                <a href="#endpoints-DELETEapi-usuarios--id-">DELETE api/usuarios/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-login">
                                <a href="#endpoints-POSTapi-login">POST api/login</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-alimentos">
                                <a href="#endpoints-GETapi-alimentos">GET api/alimentos</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-alimentos--id-">
                                <a href="#endpoints-GETapi-alimentos--id-">GET api/alimentos/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-alimentos">
                                <a href="#endpoints-POSTapi-alimentos">POST api/alimentos</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-alimentos--id-">
                                <a href="#endpoints-PUTapi-alimentos--id-">PUT api/alimentos/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-alimentos--id-">
                                <a href="#endpoints-PATCHapi-alimentos--id-">PATCH api/alimentos/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-alimentos--id-">
                                <a href="#endpoints-DELETEapi-alimentos--id-">DELETE api/alimentos/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-paises">
                                <a href="#endpoints-GETapi-paises">GET api/paises</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-paises--id-">
                                <a href="#endpoints-GETapi-paises--id-">GET api/paises/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-paises">
                                <a href="#endpoints-POSTapi-paises">POST api/paises</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-paises--id-">
                                <a href="#endpoints-PUTapi-paises--id-">PUT api/paises/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-paises--id-">
                                <a href="#endpoints-PATCHapi-paises--id-">PATCH api/paises/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-paises--id-">
                                <a href="#endpoints-DELETEapi-paises--id-">DELETE api/paises/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-ciudades">
                                <a href="#endpoints-GETapi-ciudades">GET api/ciudades</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-ciudades--id-">
                                <a href="#endpoints-GETapi-ciudades--id-">GET api/ciudades/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-ciudades">
                                <a href="#endpoints-POSTapi-ciudades">POST api/ciudades</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-ciudades--id-">
                                <a href="#endpoints-PUTapi-ciudades--id-">PUT api/ciudades/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-ciudades--id-">
                                <a href="#endpoints-PATCHapi-ciudades--id-">PATCH api/ciudades/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-ciudades--id-">
                                <a href="#endpoints-DELETEapi-ciudades--id-">DELETE api/ciudades/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-rutinas">
                                <a href="#endpoints-GETapi-rutinas">GET api/rutinas</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-rutinas--id-">
                                <a href="#endpoints-GETapi-rutinas--id-">GET api/rutinas/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-rutinas">
                                <a href="#endpoints-POSTapi-rutinas">POST api/rutinas</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-rutinas--id-">
                                <a href="#endpoints-PUTapi-rutinas--id-">PUT api/rutinas/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-rutinas--id-">
                                <a href="#endpoints-PATCHapi-rutinas--id-">PATCH api/rutinas/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-rutinas--id-">
                                <a href="#endpoints-DELETEapi-rutinas--id-">DELETE api/rutinas/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-dietas">
                                <a href="#endpoints-GETapi-dietas">GET api/dietas</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-dietas--id-">
                                <a href="#endpoints-GETapi-dietas--id-">GET api/dietas/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-dietas--id_dieta--alimentos">
                                <a href="#endpoints-GETapi-dietas--id_dieta--alimentos">GET api/dietas/{id_dieta}/alimentos</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-dietas">
                                <a href="#endpoints-POSTapi-dietas">POST api/dietas</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-dietas--id-">
                                <a href="#endpoints-PUTapi-dietas--id-">PUT api/dietas/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-dietas--id-">
                                <a href="#endpoints-PATCHapi-dietas--id-">PATCH api/dietas/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-dietas--id-">
                                <a href="#endpoints-DELETEapi-dietas--id-">DELETE api/dietas/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-ejercicios">
                                <a href="#endpoints-GETapi-ejercicios">GET api/ejercicios</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-ejercicios--id-">
                                <a href="#endpoints-GETapi-ejercicios--id-">GET api/ejercicios/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-ejercicios">
                                <a href="#endpoints-POSTapi-ejercicios">POST api/ejercicios</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-ejercicios--id-">
                                <a href="#endpoints-PUTapi-ejercicios--id-">PUT api/ejercicios/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-ejercicios--id-">
                                <a href="#endpoints-PATCHapi-ejercicios--id-">PATCH api/ejercicios/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-ejercicios--id-">
                                <a href="#endpoints-DELETEapi-ejercicios--id-">DELETE api/ejercicios/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-traslados">
                                <a href="#endpoints-GETapi-traslados">GET api/traslados</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-traslados--id-">
                                <a href="#endpoints-GETapi-traslados--id-">GET api/traslados/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-traslados">
                                <a href="#endpoints-POSTapi-traslados">POST api/traslados</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-traslados--id-">
                                <a href="#endpoints-PUTapi-traslados--id-">PUT api/traslados/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-traslados--id-">
                                <a href="#endpoints-PATCHapi-traslados--id-">PATCH api/traslados/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-traslados--id-">
                                <a href="#endpoints-DELETEapi-traslados--id-">DELETE api/traslados/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-usuario-dieta">
                                <a href="#endpoints-GETapi-usuario-dieta">GET api/usuario-dieta</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-usuario-dieta--id-">
                                <a href="#endpoints-GETapi-usuario-dieta--id-">GET api/usuario-dieta/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-usuario-dieta">
                                <a href="#endpoints-POSTapi-usuario-dieta">POST api/usuario-dieta</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-usuario-dieta--id-">
                                <a href="#endpoints-PUTapi-usuario-dieta--id-">PUT api/usuario-dieta/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-usuario-dieta--id-">
                                <a href="#endpoints-PATCHapi-usuario-dieta--id-">PATCH api/usuario-dieta/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-usuario-dieta--id-">
                                <a href="#endpoints-DELETEapi-usuario-dieta--id-">DELETE api/usuario-dieta/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-rutina-ejercicio">
                                <a href="#endpoints-GETapi-rutina-ejercicio">GET api/rutina-ejercicio</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-rutina-ejercicio--id-">
                                <a href="#endpoints-GETapi-rutina-ejercicio--id-">GET api/rutina-ejercicio/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-rutina-ejercicio">
                                <a href="#endpoints-POSTapi-rutina-ejercicio">POST api/rutina-ejercicio</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-rutina-ejercicio--id-">
                                <a href="#endpoints-PUTapi-rutina-ejercicio--id-">PUT api/rutina-ejercicio/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-rutina-ejercicio--id-">
                                <a href="#endpoints-PATCHapi-rutina-ejercicio--id-">PATCH api/rutina-ejercicio/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-rutina-ejercicio--id-">
                                <a href="#endpoints-DELETEapi-rutina-ejercicio--id-">DELETE api/rutina-ejercicio/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-usuario-rutina">
                                <a href="#endpoints-GETapi-usuario-rutina">GET api/usuario-rutina</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-usuario-rutina--id-">
                                <a href="#endpoints-GETapi-usuario-rutina--id-">GET api/usuario-rutina/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-usuario-rutina">
                                <a href="#endpoints-POSTapi-usuario-rutina">POST api/usuario-rutina</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-usuario-rutina--id-">
                                <a href="#endpoints-PUTapi-usuario-rutina--id-">PUT api/usuario-rutina/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-usuario-rutina--id-">
                                <a href="#endpoints-PATCHapi-usuario-rutina--id-">PATCH api/usuario-rutina/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-usuario-rutina--id-">
                                <a href="#endpoints-DELETEapi-usuario-rutina--id-">DELETE api/usuario-rutina/{id}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-alimento-dieta">
                                <a href="#endpoints-GETapi-alimento-dieta">GET api/alimento-dieta</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-alimento-dieta">
                                <a href="#endpoints-POSTapi-alimento-dieta">POST api/alimento-dieta</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-alimento-dieta--id_dieta-">
                                <a href="#endpoints-GETapi-alimento-dieta--id_dieta-">GET api/alimento-dieta/{id_dieta}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-alimento-dieta-multiples">
                                <a href="#endpoints-PUTapi-alimento-dieta-multiples">PUT api/alimento-dieta/multiples</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-alimento-dieta--id_alimento---id_dieta-">
                                <a href="#endpoints-GETapi-alimento-dieta--id_alimento---id_dieta-">GET api/alimento-dieta/{id_alimento}/{id_dieta}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PUTapi-alimento-dieta--id_alimento---id_dieta-">
                                <a href="#endpoints-PUTapi-alimento-dieta--id_alimento---id_dieta-">PUT api/alimento-dieta/{id_alimento}/{id_dieta}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-PATCHapi-alimento-dieta--id_alimento---id_dieta-">
                                <a href="#endpoints-PATCHapi-alimento-dieta--id_alimento---id_dieta-">PATCH api/alimento-dieta/{id_alimento}/{id_dieta}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-DELETEapi-alimento-dieta--id_alimento---id_dieta-">
                                <a href="#endpoints-DELETEapi-alimento-dieta--id_alimento---id_dieta-">DELETE api/alimento-dieta/{id_alimento}/{id_dieta}</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-POSTapi-usuario--id_usuario--dieta">
                                <a href="#endpoints-POSTapi-usuario--id_usuario--dieta">POST api/usuario/{id_usuario}/dieta</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-usuario--id_usuario--dietas">
                                <a href="#endpoints-GETapi-usuario--id_usuario--dietas">GET api/usuario/{id_usuario}/dietas</a>
                            </li>
                                                                        </ul>
                            </ul>
            </div>

    <ul class="toc-footer" id="toc-footer">
                    <li style="padding-bottom: 5px;"><a href="{{ route("scribe.postman") }}">View Postman collection</a></li>
                            <li style="padding-bottom: 5px;"><a href="{{ route("scribe.openapi") }}">View OpenAPI spec</a></li>
                <li><a href="http://github.com/knuckleswtf/scribe">Documentation powered by Scribe ✍</a></li>
    </ul>

    <ul class="toc-footer" id="last-updated">
        <li>Last updated: April 29, 2025</li>
    </ul>
</div>

<div class="page-wrapper">
    <div class="dark-box"></div>
    <div class="content">
        <h1 id="introduction">Introduction</h1>
<aside>
    <strong>Base URL</strong>: <code>http://localhost</code>
</aside>
<pre><code>This documentation aims to provide all the information you need to work with our API.

&lt;aside&gt;As you scroll, you'll see code examples for working with the API in different programming languages in the dark area to the right (or as part of the content on mobile).
You can switch the language used with the tabs at the top right (or from the nav menu at the top left on mobile).&lt;/aside&gt;</code></pre>

        <h1 id="authenticating-requests">Authenticating requests</h1>
<p>This API is not authenticated.</p>

        <h1 id="endpoints">Endpoints</h1>

    

                                <h2 id="endpoints-GETapi-usuarios">GET api/usuarios</h2>

<p>
</p>



<span id="example-requests-GETapi-usuarios">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/usuarios" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuarios"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-usuarios">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;usuarios&quot;: [
        {
            &quot;id_usuario&quot;: &quot;0deda01b-ba22-3840-9971-ee6c17e6f442&quot;,
            &quot;nombre&quot;: &quot;Orlando Feest&quot;,
            &quot;correo&quot;: &quot;randall.keebler@example.org&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$BZquTyCG7nubQozWAMzDdemZLRiLYJ420AxLxTGxRGb7XwyxzB4Li&quot;,
            &quot;edad&quot;: 39,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Usuario&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;199438f7-69cc-3f17-bcb2-71f6e3e20b7e&quot;,
            &quot;nombre&quot;: &quot;Ashton Hagenes Jr.&quot;,
            &quot;correo&quot;: &quot;qshields@example.net&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$RgKKr0wzTSQOFFpzjFe.qetvZkIjZ.5sK.jMMXKJ7YV6Zr9.bd8tC&quot;,
            &quot;edad&quot;: 27,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Usuario&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;2f5e5159-948a-3d50-a7f0-1030715b0f98&quot;,
            &quot;nombre&quot;: &quot;Rosalee Connelly&quot;,
            &quot;correo&quot;: &quot;devyn18@example.net&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$.Sc8Mowzfu7HFHzmPfs6TOfCW/lrBxkA2fjPu5JLoq6ceIbGNA3mK&quot;,
            &quot;edad&quot;: 26,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Administrador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;3a10a348-cbe0-4adc-be92-6785a8978431&quot;,
            &quot;nombre&quot;: &quot;Meaaa&quot;,
            &quot;correo&quot;: &quot;hachexd123@gmail.com&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$UfPvm0pNMFSd2KvdAMbGYu0gsbsa9laXkIETIjHIw1kWvyjVWCld.&quot;,
            &quot;edad&quot;: 22,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Usuario&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;4a9e906f-bba1-462b-9353-87f35d13722e&quot;,
            &quot;nombre&quot;: &quot;Dieta1sdf&quot;,
            &quot;correo&quot;: &quot;hachexd@gmail.com&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$NRC81cT0vYn1DHyXzFWr9.k0o1wU4vh5tFkW.UW3e.vSW9FUNnLfu&quot;,
            &quot;edad&quot;: 21,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Usuario&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;4c3833ba-4291-3f61-8de3-8846cc8476f9&quot;,
            &quot;nombre&quot;: &quot;Dr. Carmel Nader DDS&quot;,
            &quot;correo&quot;: &quot;christina43@example.org&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$SK/ZStSSNOcq3k9FDtrTfOT42p.bvfcVPFF3FfGppVimv/xvycLX.&quot;,
            &quot;edad&quot;: 43,
            &quot;sexo&quot;: &quot;mujer&quot;,
            &quot;rol&quot;: &quot;Administrador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;4e9d9a4d-7d10-3101-926d-4004a828126c&quot;,
            &quot;nombre&quot;: &quot;Dr. Benedict Greenfelder DDS&quot;,
            &quot;correo&quot;: &quot;frida.rippin@example.com&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$AZV1fenFyAcODEU0FPd2l.M6Zjc9CY52la3EYDInA/pC7GzZzqdya&quot;,
            &quot;edad&quot;: 40,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Moderador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;57196e0f-1fff-360a-8f31-4711638c59a0&quot;,
            &quot;nombre&quot;: &quot;Alta Shanahan PhD&quot;,
            &quot;correo&quot;: &quot;sonya90@example.net&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$4CGyl8nvccVztVVsF.CZ/u..Zq1VSRDbAq0ywVvNw7v2nazj3UyXK&quot;,
            &quot;edad&quot;: 60,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Administrador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;7cb76f51-f1ad-3cea-9239-9373642effb6&quot;,
            &quot;nombre&quot;: &quot;Lila Terry&quot;,
            &quot;correo&quot;: &quot;hoyt.wuckert@example.net&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$MS/f8HwfHa9MHX20VIB5je59nKRFIbaHsCcDExpbN2oneAwY4VXCS&quot;,
            &quot;edad&quot;: 21,
            &quot;sexo&quot;: &quot;mujer&quot;,
            &quot;rol&quot;: &quot;Moderador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;9068fb9c-0f5d-346d-8c5f-617782f3e7cc&quot;,
            &quot;nombre&quot;: &quot;Robin Yost&quot;,
            &quot;correo&quot;: &quot;demarcus95@example.org&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$j5IO7Y0Eipyt4pXSYOIYGufxrQh2BtB4yq0pyjiyYc3bkezULdgAe&quot;,
            &quot;edad&quot;: 79,
            &quot;sexo&quot;: &quot;mujer&quot;,
            &quot;rol&quot;: &quot;Administrador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;99b6bbe3-b369-3a66-a889-d6e009d29826&quot;,
            &quot;nombre&quot;: &quot;Mateo Dickinson&quot;,
            &quot;correo&quot;: &quot;wintheiser.weldon@example.com&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$YxGvJNByRulLqB8UABhMsufWNpAKUeIAiAcXGuK07AD1CPxSIuvCO&quot;,
            &quot;edad&quot;: 54,
            &quot;sexo&quot;: &quot;mujer&quot;,
            &quot;rol&quot;: &quot;Usuario&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;a901bf13-ec76-3cfd-9b73-1b84216d46d3&quot;,
            &quot;nombre&quot;: &quot;Nathaniel Dickinson DVM&quot;,
            &quot;correo&quot;: &quot;troy88@example.net&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$8fwlObZKzkeqF6rOTzTXPuSbLi1iSQVWhdEEZDSMAxt8gW.SheOu2&quot;,
            &quot;edad&quot;: 71,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Usuario&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;bc1458f7-faf0-3f33-b0dc-f2e5f2bba623&quot;,
            &quot;nombre&quot;: &quot;Mallory Kassulke DVM&quot;,
            &quot;correo&quot;: &quot;nrolfson@example.org&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$cZNtlMqfms.BFpEKfJM/KOj3tU.fLsG3L43hwthb1IS2ZT5LP8Tsy&quot;,
            &quot;edad&quot;: 18,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Administrador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;c3232655-1c9e-390f-96b4-973cc341dd61&quot;,
            &quot;nombre&quot;: &quot;Mr. Dan Ratke Sr.&quot;,
            &quot;correo&quot;: &quot;mlowe@example.org&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$pvXcacV5Od2/If/PQKUQdu3klds7Y9xlveFMQqH78kre2mt5n5Q7W&quot;,
            &quot;edad&quot;: 24,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Administrador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;c84a209e-8973-324b-ae91-fb48263ccab0&quot;,
            &quot;nombre&quot;: &quot;Earl Mraz&quot;,
            &quot;correo&quot;: &quot;mosciski.russell@example.net&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$cddRE9k45hmMfOTjq9ADa.O4aQ8MQ1OlYMZHAaZan4eZW35bnDkR2&quot;,
            &quot;edad&quot;: 54,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Administrador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;d628af92-b2cc-3784-842c-5bcc967c67dd&quot;,
            &quot;nombre&quot;: &quot;Freddie Rempel&quot;,
            &quot;correo&quot;: &quot;gabriella.friesen@example.net&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$BwoQPn9k0gFg9URn5qNQVOva883fjYM/3MhX54SZX14FrK8JzZnIS&quot;,
            &quot;edad&quot;: 40,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Moderador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;d9d7abac-6cfc-31eb-a2ed-7937dd1d1fa5&quot;,
            &quot;nombre&quot;: &quot;Sarina Sporer&quot;,
            &quot;correo&quot;: &quot;alessia63@example.org&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$xCGMblhr8qfLxlP547NplOFn2MRFZfOCj6C07Rhapkxf16GlIsrMS&quot;,
            &quot;edad&quot;: 21,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Moderador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;dae98fcf-5fcd-427c-8f9b-50da70fa9b90&quot;,
            &quot;nombre&quot;: &quot;Dieta1sdf&quot;,
            &quot;correo&quot;: &quot;hachexd12@gmail.com&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$HEtnjUZA5F2PqkAFx8zw9.CO/3VaRZ9DzTh6.SnrRXg2XpshmrHZC&quot;,
            &quot;edad&quot;: 18,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Usuario&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;e62e921d-ede6-3bdf-b471-dc876d695600&quot;,
            &quot;nombre&quot;: &quot;Parker Grimes&quot;,
            &quot;correo&quot;: &quot;wyman.enid@example.org&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$OmLYOpXPx8Jp.V9gHEkG9.W5UqVSiIZ8QvDxrxj7HJ785c5KOIEvK&quot;,
            &quot;edad&quot;: 40,
            &quot;sexo&quot;: &quot;mujer&quot;,
            &quot;rol&quot;: &quot;Administrador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;e7b57067-9933-35ae-830e-cf67b1984ddc&quot;,
            &quot;nombre&quot;: &quot;Marion Homenick&quot;,
            &quot;correo&quot;: &quot;mathilde.franecki@example.org&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$6CvDzGknns32Nmp0B3NUF.fKVsYiS2Itjv8ZMomm6nPKpnVZsyKnK&quot;,
            &quot;edad&quot;: 29,
            &quot;sexo&quot;: &quot;mujer&quot;,
            &quot;rol&quot;: &quot;Moderador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;f57bcb5d-1cf7-3bbf-a130-fcc07ec44808&quot;,
            &quot;nombre&quot;: &quot;Clement Roob&quot;,
            &quot;correo&quot;: &quot;arno.grimes@example.org&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$oJHHC722rwmtNGrD.NyuC.2MdNOvZdxlMp2/KRNjeMF2iXPnYD0Dy&quot;,
            &quot;edad&quot;: 45,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Administrador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;fa78716c-42d6-30f1-8894-6871f8481cbc&quot;,
            &quot;nombre&quot;: &quot;Jeremie Champlin&quot;,
            &quot;correo&quot;: &quot;jaskolski.darlene@example.org&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$ghCCtR1l33cyuk0byT3zJ.hbADcvAhGSzxQCDXn.EVGyKVs5nSnuG&quot;,
            &quot;edad&quot;: 41,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Moderador&quot;
        },
        {
            &quot;id_usuario&quot;: &quot;fbd4d90a-fe42-3ff9-8a2f-8c0da69db00f&quot;,
            &quot;nombre&quot;: &quot;Reymundo Sawayn PhD&quot;,
            &quot;correo&quot;: &quot;catherine.waelchi@example.net&quot;,
            &quot;contrasena&quot;: &quot;$2y$12$RzU4lre.70XbPernZABWBuqZkbo11DClycfNTQo1BaAHk.bSGHNju&quot;,
            &quot;edad&quot;: 62,
            &quot;sexo&quot;: &quot;hombre&quot;,
            &quot;rol&quot;: &quot;Administrador&quot;
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-usuarios" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-usuarios"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-usuarios"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-usuarios" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-usuarios">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-usuarios" data-method="GET"
      data-path="api/usuarios"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-usuarios', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-usuarios"
                    onclick="tryItOut('GETapi-usuarios');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-usuarios"
                    onclick="cancelTryOut('GETapi-usuarios');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-usuarios"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/usuarios</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-usuarios"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-usuarios"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-usuarios--id-">GET api/usuarios/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-usuarios--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/usuarios/0deda01b-ba22-3840-9971-ee6c17e6f442" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuarios/0deda01b-ba22-3840-9971-ee6c17e6f442"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-usuarios--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;usuario&quot;: {
        &quot;id_usuario&quot;: &quot;0deda01b-ba22-3840-9971-ee6c17e6f442&quot;,
        &quot;nombre&quot;: &quot;Orlando Feest&quot;,
        &quot;correo&quot;: &quot;randall.keebler@example.org&quot;,
        &quot;contrasena&quot;: &quot;$2y$12$BZquTyCG7nubQozWAMzDdemZLRiLYJ420AxLxTGxRGb7XwyxzB4Li&quot;,
        &quot;edad&quot;: 39,
        &quot;sexo&quot;: &quot;hombre&quot;,
        &quot;rol&quot;: &quot;Usuario&quot;
    },
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-usuarios--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-usuarios--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-usuarios--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-usuarios--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-usuarios--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-usuarios--id-" data-method="GET"
      data-path="api/usuarios/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-usuarios--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-usuarios--id-"
                    onclick="tryItOut('GETapi-usuarios--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-usuarios--id-"
                    onclick="cancelTryOut('GETapi-usuarios--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-usuarios--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/usuarios/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-usuarios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-usuarios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="GETapi-usuarios--id-"
               value="0deda01b-ba22-3840-9971-ee6c17e6f442"
               data-component="url">
    <br>
<p>The ID of the usuario. Example: <code>0deda01b-ba22-3840-9971-ee6c17e6f442</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-usuarios">POST api/usuarios</h2>

<p>
</p>



<span id="example-requests-POSTapi-usuarios">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/usuarios" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_usuario\": \"architecto\",
    \"nombre\": \"n\",
    \"correo\": \"g\",
    \"contrasena\": \"z\",
    \"edad\": 16,
    \"sexo\": \"hombre\",
    \"rol\": \"Moderador\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuarios"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_usuario": "architecto",
    "nombre": "n",
    "correo": "g",
    "contrasena": "z",
    "edad": 16,
    "sexo": "hombre",
    "rol": "Moderador"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-usuarios">
</span>
<span id="execution-results-POSTapi-usuarios" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-usuarios"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-usuarios"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-usuarios" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-usuarios">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-usuarios" data-method="POST"
      data-path="api/usuarios"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-usuarios', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-usuarios"
                    onclick="tryItOut('POSTapi-usuarios');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-usuarios"
                    onclick="cancelTryOut('POSTapi-usuarios');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-usuarios"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/usuarios</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-usuarios"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-usuarios"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="POSTapi-usuarios"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="POSTapi-usuarios"
               value="n"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>correo</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="correo"                data-endpoint="POSTapi-usuarios"
               value="g"
               data-component="body">
    <br>
<p>Must be a valid email address. Must not be greater than 100 characters. Example: <code>g</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>contrasena</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="contrasena"                data-endpoint="POSTapi-usuarios"
               value="z"
               data-component="body">
    <br>
<p>Must be at least 8 characters. Must not be greater than 100 characters. Example: <code>z</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>edad</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="edad"                data-endpoint="POSTapi-usuarios"
               value="16"
               data-component="body">
    <br>
<p>Example: <code>16</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>sexo</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="sexo"                data-endpoint="POSTapi-usuarios"
               value="hombre"
               data-component="body">
    <br>
<p>Example: <code>hombre</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>hombre</code></li> <li><code>mujer</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>rol</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="rol"                data-endpoint="POSTapi-usuarios"
               value="Moderador"
               data-component="body">
    <br>
<p>Example: <code>Moderador</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Usuario</code></li> <li><code>Moderador</code></li> <li><code>Administrador</code></li></ul>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-usuarios--id-">PUT api/usuarios/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-usuarios--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/usuarios/0deda01b-ba22-3840-9971-ee6c17e6f442" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"correo\": \"n\",
    \"contrasena\": \"g\",
    \"edad\": 16,
    \"sexo\": \"mujer\",
    \"rol\": \"Moderador\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuarios/0deda01b-ba22-3840-9971-ee6c17e6f442"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "correo": "n",
    "contrasena": "g",
    "edad": 16,
    "sexo": "mujer",
    "rol": "Moderador"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-usuarios--id-">
</span>
<span id="execution-results-PUTapi-usuarios--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-usuarios--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-usuarios--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-usuarios--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-usuarios--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-usuarios--id-" data-method="PUT"
      data-path="api/usuarios/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-usuarios--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-usuarios--id-"
                    onclick="tryItOut('PUTapi-usuarios--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-usuarios--id-"
                    onclick="cancelTryOut('PUTapi-usuarios--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-usuarios--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/usuarios/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-usuarios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-usuarios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="PUTapi-usuarios--id-"
               value="0deda01b-ba22-3840-9971-ee6c17e6f442"
               data-component="url">
    <br>
<p>The ID of the usuario. Example: <code>0deda01b-ba22-3840-9971-ee6c17e6f442</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PUTapi-usuarios--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>correo</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="correo"                data-endpoint="PUTapi-usuarios--id-"
               value="n"
               data-component="body">
    <br>
<p>Must be a valid email address. Must not be greater than 100 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>contrasena</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="contrasena"                data-endpoint="PUTapi-usuarios--id-"
               value="g"
               data-component="body">
    <br>
<p>Must be at least 8 characters. Must not be greater than 100 characters. Example: <code>g</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>edad</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="edad"                data-endpoint="PUTapi-usuarios--id-"
               value="16"
               data-component="body">
    <br>
<p>Example: <code>16</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>sexo</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="sexo"                data-endpoint="PUTapi-usuarios--id-"
               value="mujer"
               data-component="body">
    <br>
<p>Example: <code>mujer</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>hombre</code></li> <li><code>mujer</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>rol</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="rol"                data-endpoint="PUTapi-usuarios--id-"
               value="Moderador"
               data-component="body">
    <br>
<p>Example: <code>Moderador</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Usuario</code></li> <li><code>Moderador</code></li> <li><code>Administrador</code></li></ul>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-usuarios--id-">PATCH api/usuarios/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-usuarios--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/usuarios/0deda01b-ba22-3840-9971-ee6c17e6f442" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"contrasena\": \"n\",
    \"edad\": 16,
    \"sexo\": \"mujer\",
    \"rol\": \"Usuario\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuarios/0deda01b-ba22-3840-9971-ee6c17e6f442"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "contrasena": "n",
    "edad": 16,
    "sexo": "mujer",
    "rol": "Usuario"
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-usuarios--id-">
</span>
<span id="execution-results-PATCHapi-usuarios--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-usuarios--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-usuarios--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-usuarios--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-usuarios--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-usuarios--id-" data-method="PATCH"
      data-path="api/usuarios/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-usuarios--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-usuarios--id-"
                    onclick="tryItOut('PATCHapi-usuarios--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-usuarios--id-"
                    onclick="cancelTryOut('PATCHapi-usuarios--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-usuarios--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/usuarios/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-usuarios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-usuarios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="PATCHapi-usuarios--id-"
               value="0deda01b-ba22-3840-9971-ee6c17e6f442"
               data-component="url">
    <br>
<p>The ID of the usuario. Example: <code>0deda01b-ba22-3840-9971-ee6c17e6f442</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PATCHapi-usuarios--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>correo</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="correo"                data-endpoint="PATCHapi-usuarios--id-"
               value=""
               data-component="body">
    <br>

        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>contrasena</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="contrasena"                data-endpoint="PATCHapi-usuarios--id-"
               value="n"
               data-component="body">
    <br>
<p>Must be at least 8 characters. Must not be greater than 100 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>edad</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="edad"                data-endpoint="PATCHapi-usuarios--id-"
               value="16"
               data-component="body">
    <br>
<p>Example: <code>16</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>sexo</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="sexo"                data-endpoint="PATCHapi-usuarios--id-"
               value="mujer"
               data-component="body">
    <br>
<p>Example: <code>mujer</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>hombre</code></li> <li><code>mujer</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>rol</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="rol"                data-endpoint="PATCHapi-usuarios--id-"
               value="Usuario"
               data-component="body">
    <br>
<p>Example: <code>Usuario</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Usuario</code></li> <li><code>Moderador</code></li> <li><code>Administrador</code></li></ul>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-usuarios--id-">DELETE api/usuarios/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-usuarios--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/usuarios/0deda01b-ba22-3840-9971-ee6c17e6f442" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuarios/0deda01b-ba22-3840-9971-ee6c17e6f442"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-usuarios--id-">
</span>
<span id="execution-results-DELETEapi-usuarios--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-usuarios--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-usuarios--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-usuarios--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-usuarios--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-usuarios--id-" data-method="DELETE"
      data-path="api/usuarios/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-usuarios--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-usuarios--id-"
                    onclick="tryItOut('DELETEapi-usuarios--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-usuarios--id-"
                    onclick="cancelTryOut('DELETEapi-usuarios--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-usuarios--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/usuarios/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-usuarios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-usuarios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="DELETEapi-usuarios--id-"
               value="0deda01b-ba22-3840-9971-ee6c17e6f442"
               data-component="url">
    <br>
<p>The ID of the usuario. Example: <code>0deda01b-ba22-3840-9971-ee6c17e6f442</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-login">POST api/login</h2>

<p>
</p>



<span id="example-requests-POSTapi-login">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/login" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"correo\": \"gbailey@example.net\",
    \"contrasena\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/login"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "correo": "gbailey@example.net",
    "contrasena": "architecto"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-login">
</span>
<span id="execution-results-POSTapi-login" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-login"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-login"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-login" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-login">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-login" data-method="POST"
      data-path="api/login"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-login', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-login"
                    onclick="tryItOut('POSTapi-login');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-login"
                    onclick="cancelTryOut('POSTapi-login');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-login"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/login</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-login"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-login"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>correo</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="correo"                data-endpoint="POSTapi-login"
               value="gbailey@example.net"
               data-component="body">
    <br>
<p>Must be a valid email address. Example: <code>gbailey@example.net</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>contrasena</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="contrasena"                data-endpoint="POSTapi-login"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-GETapi-alimentos">GET api/alimentos</h2>

<p>
</p>



<span id="example-requests-GETapi-alimentos">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/alimentos" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimentos"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-alimentos">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;alimentos&quot;: [
        {
            &quot;id_alimento&quot;: 21,
            &quot;nombre&quot;: &quot;Pechuga de pollo&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/pechuga-pollo_fthcra.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de prote&iacute;na magra&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;1.50&quot;,
            &quot;codigo_barras&quot;: &quot;0001&quot;,
            &quot;calorias&quot;: &quot;110.00&quot;,
            &quot;proteinas&quot;: &quot;23.00&quot;,
            &quot;grasas&quot;: &quot;1.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.00&quot;
        },
        {
            &quot;id_alimento&quot;: 22,
            &quot;nombre&quot;: &quot;Huevo&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/huevos_nbh8yb.webp&quot;,
            &quot;descripcion&quot;: &quot;Alimento completo en prote&iacute;nas&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.25&quot;,
            &quot;codigo_barras&quot;: &quot;0002&quot;,
            &quot;calorias&quot;: &quot;75.00&quot;,
            &quot;proteinas&quot;: &quot;6.00&quot;,
            &quot;grasas&quot;: &quot;5.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.50&quot;
        },
        {
            &quot;id_alimento&quot;: 23,
            &quot;nombre&quot;: &quot;Tofu&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/tofu_s12zy6.webp&quot;,
            &quot;descripcion&quot;: &quot;Prote&iacute;na vegetal&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;1.20&quot;,
            &quot;codigo_barras&quot;: &quot;0003&quot;,
            &quot;calorias&quot;: &quot;130.00&quot;,
            &quot;proteinas&quot;: &quot;12.00&quot;,
            &quot;grasas&quot;: &quot;7.00&quot;,
            &quot;carbohidratos&quot;: &quot;2.00&quot;
        },
        {
            &quot;id_alimento&quot;: 24,
            &quot;nombre&quot;: &quot;Lentejas cocidas&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/lentejas_k7n7ho.webp&quot;,
            &quot;descripcion&quot;: &quot;Legumbre rica en prote&iacute;na&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.50&quot;,
            &quot;codigo_barras&quot;: &quot;0004&quot;,
            &quot;calorias&quot;: &quot;116.00&quot;,
            &quot;proteinas&quot;: &quot;9.00&quot;,
            &quot;grasas&quot;: &quot;0.40&quot;,
            &quot;carbohidratos&quot;: &quot;20.00&quot;
        },
        {
            &quot;id_alimento&quot;: 25,
            &quot;nombre&quot;: &quot;Salm&oacute;n&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/salmon_zsym1n.webp&quot;,
            &quot;descripcion&quot;: &quot;Pescado graso rico en omega-3&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;2.00&quot;,
            &quot;codigo_barras&quot;: &quot;0005&quot;,
            &quot;calorias&quot;: &quot;280.00&quot;,
            &quot;proteinas&quot;: &quot;22.00&quot;,
            &quot;grasas&quot;: &quot;18.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.00&quot;
        },
        {
            &quot;id_alimento&quot;: 26,
            &quot;nombre&quot;: &quot;Merluza&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/merluza_ygixpc.webp&quot;,
            &quot;descripcion&quot;: &quot;Pescado blanco bajo en grasa&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;1.80&quot;,
            &quot;codigo_barras&quot;: &quot;0006&quot;,
            &quot;calorias&quot;: &quot;82.00&quot;,
            &quot;proteinas&quot;: &quot;18.00&quot;,
            &quot;grasas&quot;: &quot;1.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.00&quot;
        },
        {
            &quot;id_alimento&quot;: 27,
            &quot;nombre&quot;: &quot;Bacalao&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/bacalao_fpz0qj.webp&quot;,
            &quot;descripcion&quot;: &quot;Pescado magro con alto aporte proteico&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;2.20&quot;,
            &quot;codigo_barras&quot;: &quot;0007&quot;,
            &quot;calorias&quot;: &quot;105.00&quot;,
            &quot;proteinas&quot;: &quot;23.00&quot;,
            &quot;grasas&quot;: &quot;1.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.00&quot;
        },
        {
            &quot;id_alimento&quot;: 28,
            &quot;nombre&quot;: &quot;Pavo&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/pavo_gsmyqj.webp&quot;,
            &quot;descripcion&quot;: &quot;Carne magra de ave&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;1.60&quot;,
            &quot;codigo_barras&quot;: &quot;0008&quot;,
            &quot;calorias&quot;: &quot;200.00&quot;,
            &quot;proteinas&quot;: &quot;30.00&quot;,
            &quot;grasas&quot;: &quot;5.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.00&quot;
        },
        {
            &quot;id_alimento&quot;: 29,
            &quot;nombre&quot;: &quot;Ternera magra&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/ternera-magra_akyumv.webp&quot;,
            &quot;descripcion&quot;: &quot;Carne roja magra&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;3.00&quot;,
            &quot;codigo_barras&quot;: &quot;0009&quot;,
            &quot;calorias&quot;: &quot;250.00&quot;,
            &quot;proteinas&quot;: &quot;27.00&quot;,
            &quot;grasas&quot;: &quot;15.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.00&quot;
        },
        {
            &quot;id_alimento&quot;: 30,
            &quot;nombre&quot;: &quot;At&uacute;n en conserva&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/atun_unfqkt.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente r&aacute;pida de prote&iacute;na&quot;,
            &quot;peso_kg&quot;: &quot;0.10&quot;,
            &quot;precio_euros&quot;: &quot;1.20&quot;,
            &quot;codigo_barras&quot;: &quot;0010&quot;,
            &quot;calorias&quot;: &quot;116.00&quot;,
            &quot;proteinas&quot;: &quot;26.00&quot;,
            &quot;grasas&quot;: &quot;1.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.00&quot;
        },
        {
            &quot;id_alimento&quot;: 31,
            &quot;nombre&quot;: &quot;Garbanzos cocidos&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/garbanzos_39_11zon_pf2uys.webp&quot;,
            &quot;descripcion&quot;: &quot;Legumbre rica en prote&iacute;na y fibra&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.60&quot;,
            &quot;codigo_barras&quot;: &quot;0011&quot;,
            &quot;calorias&quot;: &quot;164.00&quot;,
            &quot;proteinas&quot;: &quot;9.00&quot;,
            &quot;grasas&quot;: &quot;3.00&quot;,
            &quot;carbohidratos&quot;: &quot;27.00&quot;
        },
        {
            &quot;id_alimento&quot;: 32,
            &quot;nombre&quot;: &quot;Frijoles negros cocidos&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/frijoles-negros_h8gfgd.webp&quot;,
            &quot;descripcion&quot;: &quot;Legumbre con buen perfil proteico&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0012&quot;,
            &quot;calorias&quot;: &quot;132.00&quot;,
            &quot;proteinas&quot;: &quot;9.00&quot;,
            &quot;grasas&quot;: &quot;0.50&quot;,
            &quot;carbohidratos&quot;: &quot;24.00&quot;
        },
        {
            &quot;id_alimento&quot;: 33,
            &quot;nombre&quot;: &quot;Edamame&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/edamame_38_11zon_tljzzp.webp&quot;,
            &quot;descripcion&quot;: &quot;Soja verde rica en prote&iacute;na&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;1.50&quot;,
            &quot;codigo_barras&quot;: &quot;0013&quot;,
            &quot;calorias&quot;: &quot;120.00&quot;,
            &quot;proteinas&quot;: &quot;12.00&quot;,
            &quot;grasas&quot;: &quot;5.00&quot;,
            &quot;carbohidratos&quot;: &quot;9.00&quot;
        },
        {
            &quot;id_alimento&quot;: 34,
            &quot;nombre&quot;: &quot;Tempeh&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/tempeh_37_11zon_oswcvn.webp&quot;,
            &quot;descripcion&quot;: &quot;Prote&iacute;na fermentada de soja&quot;,
            &quot;peso_kg&quot;: &quot;0.10&quot;,
            &quot;precio_euros&quot;: &quot;1.70&quot;,
            &quot;codigo_barras&quot;: &quot;0014&quot;,
            &quot;calorias&quot;: &quot;192.00&quot;,
            &quot;proteinas&quot;: &quot;19.00&quot;,
            &quot;grasas&quot;: &quot;11.00&quot;,
            &quot;carbohidratos&quot;: &quot;9.00&quot;
        },
        {
            &quot;id_alimento&quot;: 35,
            &quot;nombre&quot;: &quot;Seit&aacute;n&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/seitan_ayhqwk.webp&quot;,
            &quot;descripcion&quot;: &quot;Prote&iacute;na vegetal del gluten&quot;,
            &quot;peso_kg&quot;: &quot;0.10&quot;,
            &quot;precio_euros&quot;: &quot;1.40&quot;,
            &quot;codigo_barras&quot;: &quot;0015&quot;,
            &quot;calorias&quot;: &quot;150.00&quot;,
            &quot;proteinas&quot;: &quot;25.00&quot;,
            &quot;grasas&quot;: &quot;2.00&quot;,
            &quot;carbohidratos&quot;: &quot;3.00&quot;
        },
        {
            &quot;id_alimento&quot;: 36,
            &quot;nombre&quot;: &quot;Yogur griego natural&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189554/yogur-griego_36_11zon_jbgc1a.webp&quot;,
            &quot;descripcion&quot;: &quot;L&aacute;cteo alto en prote&iacute;nas&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.80&quot;,
            &quot;codigo_barras&quot;: &quot;0016&quot;,
            &quot;calorias&quot;: &quot;130.00&quot;,
            &quot;proteinas&quot;: &quot;10.00&quot;,
            &quot;grasas&quot;: &quot;8.00&quot;,
            &quot;carbohidratos&quot;: &quot;4.00&quot;
        },
        {
            &quot;id_alimento&quot;: 37,
            &quot;nombre&quot;: &quot;Queso fresco&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/queso-fresco_35_11zon_m71wpy.webp&quot;,
            &quot;descripcion&quot;: &quot;L&aacute;cteo bajo en grasa&quot;,
            &quot;peso_kg&quot;: &quot;0.10&quot;,
            &quot;precio_euros&quot;: &quot;1.00&quot;,
            &quot;codigo_barras&quot;: &quot;0017&quot;,
            &quot;calorias&quot;: &quot;98.00&quot;,
            &quot;proteinas&quot;: &quot;9.00&quot;,
            &quot;grasas&quot;: &quot;6.00&quot;,
            &quot;carbohidratos&quot;: &quot;2.00&quot;
        },
        {
            &quot;id_alimento&quot;: 38,
            &quot;nombre&quot;: &quot;Reques&oacute;n&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/rqueson_34_11zon_gl6g0b.webp&quot;,
            &quot;descripcion&quot;: &quot;L&aacute;cteo suave con buena prote&iacute;na&quot;,
            &quot;peso_kg&quot;: &quot;0.10&quot;,
            &quot;precio_euros&quot;: &quot;0.90&quot;,
            &quot;codigo_barras&quot;: &quot;0018&quot;,
            &quot;calorias&quot;: &quot;106.00&quot;,
            &quot;proteinas&quot;: &quot;11.00&quot;,
            &quot;grasas&quot;: &quot;5.00&quot;,
            &quot;carbohidratos&quot;: &quot;3.00&quot;
        },
        {
            &quot;id_alimento&quot;: 39,
            &quot;nombre&quot;: &quot;Huevos de codorniz (x5)&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/huevos-cordorniz_wuharh.webp&quot;,
            &quot;descripcion&quot;: &quot;Peque&ntilde;os, ricos en nutrientes&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.50&quot;,
            &quot;codigo_barras&quot;: &quot;0019&quot;,
            &quot;calorias&quot;: &quot;72.00&quot;,
            &quot;proteinas&quot;: &quot;7.00&quot;,
            &quot;grasas&quot;: &quot;5.00&quot;,
            &quot;carbohidratos&quot;: &quot;1.00&quot;
        },
        {
            &quot;id_alimento&quot;: 40,
            &quot;nombre&quot;: &quot;Cottage cheese&quot;,
            &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/cottage-cheese_h6xd7v.webp&quot;,
            &quot;descripcion&quot;: &quot;Ricotta baja en grasa&quot;,
            &quot;peso_kg&quot;: &quot;0.10&quot;,
            &quot;precio_euros&quot;: &quot;0.90&quot;,
            &quot;codigo_barras&quot;: &quot;0020&quot;,
            &quot;calorias&quot;: &quot;103.00&quot;,
            &quot;proteinas&quot;: &quot;12.00&quot;,
            &quot;grasas&quot;: &quot;5.00&quot;,
            &quot;carbohidratos&quot;: &quot;3.00&quot;
        },
        {
            &quot;id_alimento&quot;: 41,
            &quot;nombre&quot;: &quot;Arroz integral&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/arroz-integral_33_11zon_bomoif.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente compleja de carbohidratos&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0101&quot;,
            &quot;calorias&quot;: &quot;130.00&quot;,
            &quot;proteinas&quot;: &quot;2.50&quot;,
            &quot;grasas&quot;: &quot;1.00&quot;,
            &quot;carbohidratos&quot;: &quot;28.00&quot;
        },
        {
            &quot;id_alimento&quot;: 42,
            &quot;nombre&quot;: &quot;Pasta integral&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/pasta-integral_tkuifl.webp&quot;,
            &quot;descripcion&quot;: &quot;Carbohidratos lentos&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.60&quot;,
            &quot;codigo_barras&quot;: &quot;0102&quot;,
            &quot;calorias&quot;: &quot;140.00&quot;,
            &quot;proteinas&quot;: &quot;5.00&quot;,
            &quot;grasas&quot;: &quot;1.00&quot;,
            &quot;carbohidratos&quot;: &quot;30.00&quot;
        },
        {
            &quot;id_alimento&quot;: 43,
            &quot;nombre&quot;: &quot;Patata cocida&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/patata-cocida_v3xffr.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de absorci&oacute;n media&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0103&quot;,
            &quot;calorias&quot;: &quot;154.00&quot;,
            &quot;proteinas&quot;: &quot;4.00&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;35.00&quot;
        },
        {
            &quot;id_alimento&quot;: 44,
            &quot;nombre&quot;: &quot;Boniato cocido&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/boniato-cocido_32_11zon_hbvtxn.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente rica en betacaroteno&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0104&quot;,
            &quot;calorias&quot;: &quot;180.00&quot;,
            &quot;proteinas&quot;: &quot;1.60&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;41.00&quot;
        },
        {
            &quot;id_alimento&quot;: 45,
            &quot;nombre&quot;: &quot;Pan integral (2 rebanadas)&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/pan-integral_31_11zon_o4oczt.webp&quot;,
            &quot;descripcion&quot;: &quot;Fibra y carbohidratos&quot;,
            &quot;peso_kg&quot;: &quot;0.06&quot;,
            &quot;precio_euros&quot;: &quot;0.20&quot;,
            &quot;codigo_barras&quot;: &quot;0105&quot;,
            &quot;calorias&quot;: &quot;166.00&quot;,
            &quot;proteinas&quot;: &quot;6.00&quot;,
            &quot;grasas&quot;: &quot;2.00&quot;,
            &quot;carbohidratos&quot;: &quot;30.00&quot;
        },
        {
            &quot;id_alimento&quot;: 46,
            &quot;nombre&quot;: &quot;Avena (copos)&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/avena_30_11zon_c7ub71.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de beta‑glucanos&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.10&quot;,
            &quot;codigo_barras&quot;: &quot;0106&quot;,
            &quot;calorias&quot;: &quot;195.00&quot;,
            &quot;proteinas&quot;: &quot;6.50&quot;,
            &quot;grasas&quot;: &quot;3.30&quot;,
            &quot;carbohidratos&quot;: &quot;33.50&quot;
        },
        {
            &quot;id_alimento&quot;: 47,
            &quot;nombre&quot;: &quot;Mijo cocido&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/mijo_29_11zon_x0iexc.webp&quot;,
            &quot;descripcion&quot;: &quot;Cereal sin gluten&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.50&quot;,
            &quot;codigo_barras&quot;: &quot;0107&quot;,
            &quot;calorias&quot;: &quot;119.00&quot;,
            &quot;proteinas&quot;: &quot;3.50&quot;,
            &quot;grasas&quot;: &quot;1.00&quot;,
            &quot;carbohidratos&quot;: &quot;23.00&quot;
        },
        {
            &quot;id_alimento&quot;: 48,
            &quot;nombre&quot;: &quot;Cebada perlada cocida&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/cebada-perlada_28_11zon_gcu1ua.webp&quot;,
            &quot;descripcion&quot;: &quot;Fibra soluble y almid&oacute;n resistente&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.50&quot;,
            &quot;codigo_barras&quot;: &quot;0108&quot;,
            &quot;calorias&quot;: &quot;112.00&quot;,
            &quot;proteinas&quot;: &quot;2.30&quot;,
            &quot;grasas&quot;: &quot;0.40&quot;,
            &quot;carbohidratos&quot;: &quot;28.00&quot;
        },
        {
            &quot;id_alimento&quot;: 49,
            &quot;nombre&quot;: &quot;Bulgur cocido&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/bulgur-cocido_cvdfob.webp&quot;,
            &quot;descripcion&quot;: &quot;Trigo partido precocido&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.45&quot;,
            &quot;codigo_barras&quot;: &quot;0109&quot;,
            &quot;calorias&quot;: &quot;83.00&quot;,
            &quot;proteinas&quot;: &quot;3.10&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;17.50&quot;
        },
        {
            &quot;id_alimento&quot;: 50,
            &quot;nombre&quot;: &quot;Trigo sarraceno cocido&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/trigo-sarraceno_27_11zon_bjcl5f.webp&quot;,
            &quot;descripcion&quot;: &quot;Pseudocereal rico en fibra&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.60&quot;,
            &quot;codigo_barras&quot;: &quot;0110&quot;,
            &quot;calorias&quot;: &quot;92.00&quot;,
            &quot;proteinas&quot;: &quot;3.40&quot;,
            &quot;grasas&quot;: &quot;1.00&quot;,
            &quot;carbohidratos&quot;: &quot;19.00&quot;
        },
        {
            &quot;id_alimento&quot;: 51,
            &quot;nombre&quot;: &quot;Amaranto cocido&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/amaranto_snfont.webp&quot;,
            &quot;descripcion&quot;: &quot;Pseudocereal nutritivo&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.60&quot;,
            &quot;codigo_barras&quot;: &quot;0111&quot;,
            &quot;calorias&quot;: &quot;102.00&quot;,
            &quot;proteinas&quot;: &quot;3.80&quot;,
            &quot;grasas&quot;: &quot;1.60&quot;,
            &quot;carbohidratos&quot;: &quot;19.00&quot;
        },
        {
            &quot;id_alimento&quot;: 52,
            &quot;nombre&quot;: &quot;Tortilla de trigo integral&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/tortilla-trigo_26_11zon_ogbsaa.webp&quot;,
            &quot;descripcion&quot;: &quot;Wrap con fibra&quot;,
            &quot;peso_kg&quot;: &quot;0.06&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0112&quot;,
            &quot;calorias&quot;: &quot;120.00&quot;,
            &quot;proteinas&quot;: &quot;4.00&quot;,
            &quot;grasas&quot;: &quot;3.00&quot;,
            &quot;carbohidratos&quot;: &quot;18.00&quot;
        },
        {
            &quot;id_alimento&quot;: 53,
            &quot;nombre&quot;: &quot;Pan de centeno&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/pan-centeno_25_11zon_aucpx3.webp&quot;,
            &quot;descripcion&quot;: &quot;Cereal integral con sabor intenso&quot;,
            &quot;peso_kg&quot;: &quot;0.06&quot;,
            &quot;precio_euros&quot;: &quot;0.25&quot;,
            &quot;codigo_barras&quot;: &quot;0113&quot;,
            &quot;calorias&quot;: &quot;148.00&quot;,
            &quot;proteinas&quot;: &quot;5.00&quot;,
            &quot;grasas&quot;: &quot;1.40&quot;,
            &quot;carbohidratos&quot;: &quot;28.00&quot;
        },
        {
            &quot;id_alimento&quot;: 54,
            &quot;nombre&quot;: &quot;Pasta blanca&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189551/pasta-blanca_24_11zon_z6qcvg.webp&quot;,
            &quot;descripcion&quot;: &quot;Almid&oacute;n de r&aacute;pida absorci&oacute;n&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.60&quot;,
            &quot;codigo_barras&quot;: &quot;0114&quot;,
            &quot;calorias&quot;: &quot;210.00&quot;,
            &quot;proteinas&quot;: &quot;7.00&quot;,
            &quot;grasas&quot;: &quot;1.20&quot;,
            &quot;carbohidratos&quot;: &quot;42.00&quot;
        },
        {
            &quot;id_alimento&quot;: 55,
            &quot;nombre&quot;: &quot;Arroz blanco&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/arroz-blanco_23_11zon_hfmrjt.webp&quot;,
            &quot;descripcion&quot;: &quot;Carbohidrato f&aacute;cil de digerir&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0115&quot;,
            &quot;calorias&quot;: &quot;205.00&quot;,
            &quot;proteinas&quot;: &quot;4.30&quot;,
            &quot;grasas&quot;: &quot;0.40&quot;,
            &quot;carbohidratos&quot;: &quot;45.00&quot;
        },
        {
            &quot;id_alimento&quot;: 56,
            &quot;nombre&quot;: &quot;Galletas integrales (3 uds.)&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189548/galletas-integrales_22_11zon_wq95ja.webp&quot;,
            &quot;descripcion&quot;: &quot;Snack con fibra&quot;,
            &quot;peso_kg&quot;: &quot;0.03&quot;,
            &quot;precio_euros&quot;: &quot;0.20&quot;,
            &quot;codigo_barras&quot;: &quot;0116&quot;,
            &quot;calorias&quot;: &quot;120.00&quot;,
            &quot;proteinas&quot;: &quot;2.00&quot;,
            &quot;grasas&quot;: &quot;4.00&quot;,
            &quot;carbohidratos&quot;: &quot;20.00&quot;
        },
        {
            &quot;id_alimento&quot;: 57,
            &quot;nombre&quot;: &quot;Pl&aacute;tano&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/platano_21_11zon_f1bcil.webp&quot;,
            &quot;descripcion&quot;: &quot;Fruta rica en potasio&quot;,
            &quot;peso_kg&quot;: &quot;0.12&quot;,
            &quot;precio_euros&quot;: &quot;0.25&quot;,
            &quot;codigo_barras&quot;: &quot;0117&quot;,
            &quot;calorias&quot;: &quot;105.00&quot;,
            &quot;proteinas&quot;: &quot;1.30&quot;,
            &quot;grasas&quot;: &quot;0.40&quot;,
            &quot;carbohidratos&quot;: &quot;27.00&quot;
        },
        {
            &quot;id_alimento&quot;: 58,
            &quot;nombre&quot;: &quot;Manzana&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp&quot;,
            &quot;descripcion&quot;: &quot;Fruta con fibra soluble&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0118&quot;,
            &quot;calorias&quot;: &quot;95.00&quot;,
            &quot;proteinas&quot;: &quot;0.50&quot;,
            &quot;grasas&quot;: &quot;0.30&quot;,
            &quot;carbohidratos&quot;: &quot;25.00&quot;
        },
        {
            &quot;id_alimento&quot;: 59,
            &quot;nombre&quot;: &quot;Pera&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/pera_20_11zon_li5jih.webp&quot;,
            &quot;descripcion&quot;: &quot;Fruta jugosa y dulce&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0119&quot;,
            &quot;calorias&quot;: &quot;101.00&quot;,
            &quot;proteinas&quot;: &quot;0.40&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;27.00&quot;
        },
        {
            &quot;id_alimento&quot;: 60,
            &quot;nombre&quot;: &quot;Naranja&quot;,
            &quot;categoria&quot;: &quot;Carbohidratos&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/naranja_19_11zon_rxt8cq.webp&quot;,
            &quot;descripcion&quot;: &quot;Fruta c&iacute;trica rica en vitamina C&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0120&quot;,
            &quot;calorias&quot;: &quot;86.00&quot;,
            &quot;proteinas&quot;: &quot;1.70&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;22.00&quot;
        },
        {
            &quot;id_alimento&quot;: 61,
            &quot;nombre&quot;: &quot;Aguacate&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/aguacate_18_11zon_dkxa48.webp&quot;,
            &quot;descripcion&quot;: &quot;Grasa saludable vegetal&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;1.00&quot;,
            &quot;codigo_barras&quot;: &quot;0201&quot;,
            &quot;calorias&quot;: &quot;160.00&quot;,
            &quot;proteinas&quot;: &quot;2.00&quot;,
            &quot;grasas&quot;: &quot;15.00&quot;,
            &quot;carbohidratos&quot;: &quot;9.00&quot;
        },
        {
            &quot;id_alimento&quot;: 62,
            &quot;nombre&quot;: &quot;Aceite de oliva&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/aceite-oliva_17_11zon_a5avms.webp&quot;,
            &quot;descripcion&quot;: &quot;Grasa monoinsaturada&quot;,
            &quot;peso_kg&quot;: &quot;0.01&quot;,
            &quot;precio_euros&quot;: &quot;0.12&quot;,
            &quot;codigo_barras&quot;: &quot;0202&quot;,
            &quot;calorias&quot;: &quot;119.00&quot;,
            &quot;proteinas&quot;: &quot;0.00&quot;,
            &quot;grasas&quot;: &quot;13.50&quot;,
            &quot;carbohidratos&quot;: &quot;0.00&quot;
        },
        {
            &quot;id_alimento&quot;: 63,
            &quot;nombre&quot;: &quot;Almendras&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/almendras_16_11zon_pu2fxs.webp&quot;,
            &quot;descripcion&quot;: &quot;Fruta seca rica en vitamina E&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.80&quot;,
            &quot;codigo_barras&quot;: &quot;0203&quot;,
            &quot;calorias&quot;: &quot;289.00&quot;,
            &quot;proteinas&quot;: &quot;10.60&quot;,
            &quot;grasas&quot;: &quot;25.60&quot;,
            &quot;carbohidratos&quot;: &quot;10.40&quot;
        },
        {
            &quot;id_alimento&quot;: 64,
            &quot;nombre&quot;: &quot;Nueces&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/nueces_es2y2l.webp&quot;,
            &quot;descripcion&quot;: &quot;Ricas en omega‑3 vegetales&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.70&quot;,
            &quot;codigo_barras&quot;: &quot;0204&quot;,
            &quot;calorias&quot;: &quot;327.00&quot;,
            &quot;proteinas&quot;: &quot;15.00&quot;,
            &quot;grasas&quot;: &quot;32.00&quot;,
            &quot;carbohidratos&quot;: &quot;4.00&quot;
        },
        {
            &quot;id_alimento&quot;: 65,
            &quot;nombre&quot;: &quot;Avellanas&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/avellanas_u6uoqn.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de grasas monoinsaturadas&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.60&quot;,
            &quot;codigo_barras&quot;: &quot;0205&quot;,
            &quot;calorias&quot;: &quot;314.00&quot;,
            &quot;proteinas&quot;: &quot;7.00&quot;,
            &quot;grasas&quot;: &quot;30.00&quot;,
            &quot;carbohidratos&quot;: &quot;7.00&quot;
        },
        {
            &quot;id_alimento&quot;: 66,
            &quot;nombre&quot;: &quot;Pistachos&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/pistachos_iyau6r.webp&quot;,
            &quot;descripcion&quot;: &quot;Snacks ricos en prote&iacute;nas y grasas&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.70&quot;,
            &quot;codigo_barras&quot;: &quot;0206&quot;,
            &quot;calorias&quot;: &quot;289.00&quot;,
            &quot;proteinas&quot;: &quot;10.00&quot;,
            &quot;grasas&quot;: &quot;24.00&quot;,
            &quot;carbohidratos&quot;: &quot;28.00&quot;
        },
        {
            &quot;id_alimento&quot;: 67,
            &quot;nombre&quot;: &quot;Semillas de girasol&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/semillas-girasol_m6xmii.webp&quot;,
            &quot;descripcion&quot;: &quot;Ricas en vitamina E&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.50&quot;,
            &quot;codigo_barras&quot;: &quot;0207&quot;,
            &quot;calorias&quot;: &quot;290.00&quot;,
            &quot;proteinas&quot;: &quot;10.00&quot;,
            &quot;grasas&quot;: &quot;25.00&quot;,
            &quot;carbohidratos&quot;: &quot;20.00&quot;
        },
        {
            &quot;id_alimento&quot;: 68,
            &quot;nombre&quot;: &quot;Semillas de calabaza&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/semillas-calabaza_rqi8sc.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de magnesio y zinc&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.50&quot;,
            &quot;codigo_barras&quot;: &quot;0208&quot;,
            &quot;calorias&quot;: &quot;271.00&quot;,
            &quot;proteinas&quot;: &quot;13.00&quot;,
            &quot;grasas&quot;: &quot;23.00&quot;,
            &quot;carbohidratos&quot;: &quot;9.00&quot;
        },
        {
            &quot;id_alimento&quot;: 69,
            &quot;nombre&quot;: &quot;Semillas de lino&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/semillas-lino_c25hrl.webp&quot;,
            &quot;descripcion&quot;: &quot;Ricas en omega‑3 y fibra&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.50&quot;,
            &quot;codigo_barras&quot;: &quot;0209&quot;,
            &quot;calorias&quot;: &quot;265.00&quot;,
            &quot;proteinas&quot;: &quot;18.30&quot;,
            &quot;grasas&quot;: &quot;13.80&quot;,
            &quot;carbohidratos&quot;: &quot;28.90&quot;
        },
        {
            &quot;id_alimento&quot;: 70,
            &quot;nombre&quot;: &quot;Semillas de ch&iacute;a&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/semillas-chia_lcnvml.webp&quot;,
            &quot;descripcion&quot;: &quot;Alta densidad nutricional&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.60&quot;,
            &quot;codigo_barras&quot;: &quot;0210&quot;,
            &quot;calorias&quot;: &quot;243.00&quot;,
            &quot;proteinas&quot;: &quot;8.00&quot;,
            &quot;grasas&quot;: &quot;15.00&quot;,
            &quot;carbohidratos&quot;: &quot;21.00&quot;
        },
        {
            &quot;id_alimento&quot;: 71,
            &quot;nombre&quot;: &quot;Mantequilla de cacahuete&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/mantequilla-cacahuete_qhcye5.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de grasas y prote&iacute;nas&quot;,
            &quot;peso_kg&quot;: &quot;0.02&quot;,
            &quot;precio_euros&quot;: &quot;0.15&quot;,
            &quot;codigo_barras&quot;: &quot;0211&quot;,
            &quot;calorias&quot;: &quot;94.00&quot;,
            &quot;proteinas&quot;: &quot;4.20&quot;,
            &quot;grasas&quot;: &quot;8.00&quot;,
            &quot;carbohidratos&quot;: &quot;3.40&quot;
        },
        {
            &quot;id_alimento&quot;: 72,
            &quot;nombre&quot;: &quot;Mantequilla de almendra&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/mantequilla-almendra_vyvkc2.webp&quot;,
            &quot;descripcion&quot;: &quot;Grasas monoinsaturadas&quot;,
            &quot;peso_kg&quot;: &quot;0.02&quot;,
            &quot;precio_euros&quot;: &quot;0.18&quot;,
            &quot;codigo_barras&quot;: &quot;0212&quot;,
            &quot;calorias&quot;: &quot;98.00&quot;,
            &quot;proteinas&quot;: &quot;3.20&quot;,
            &quot;grasas&quot;: &quot;8.50&quot;,
            &quot;carbohidratos&quot;: &quot;3.40&quot;
        },
        {
            &quot;id_alimento&quot;: 73,
            &quot;nombre&quot;: &quot;Aceite de coco&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/aceite-coco_mmzszb.webp&quot;,
            &quot;descripcion&quot;: &quot;Grasa saturada de coco&quot;,
            &quot;peso_kg&quot;: &quot;0.01&quot;,
            &quot;precio_euros&quot;: &quot;0.12&quot;,
            &quot;codigo_barras&quot;: &quot;0213&quot;,
            &quot;calorias&quot;: &quot;117.00&quot;,
            &quot;proteinas&quot;: &quot;0.00&quot;,
            &quot;grasas&quot;: &quot;13.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.00&quot;
        },
        {
            &quot;id_alimento&quot;: 74,
            &quot;nombre&quot;: &quot;Chocolate negro 85%&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/chocolate-negro_ee3aju.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de antioxidantes y grasas saludables&quot;,
            &quot;peso_kg&quot;: &quot;0.03&quot;,
            &quot;precio_euros&quot;: &quot;0.70&quot;,
            &quot;codigo_barras&quot;: &quot;0214&quot;,
            &quot;calorias&quot;: &quot;180.00&quot;,
            &quot;proteinas&quot;: &quot;2.00&quot;,
            &quot;grasas&quot;: &quot;15.00&quot;,
            &quot;carbohidratos&quot;: &quot;14.00&quot;
        },
        {
            &quot;id_alimento&quot;: 75,
            &quot;nombre&quot;: &quot;Tahini&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/tahini_15_11zon_fqdmmc.webp&quot;,
            &quot;descripcion&quot;: &quot;Pasta de s&eacute;samo rica en calcio&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.50&quot;,
            &quot;codigo_barras&quot;: &quot;0215&quot;,
            &quot;calorias&quot;: &quot;312.00&quot;,
            &quot;proteinas&quot;: &quot;8.00&quot;,
            &quot;grasas&quot;: &quot;24.00&quot;,
            &quot;carbohidratos&quot;: &quot;16.00&quot;
        },
        {
            &quot;id_alimento&quot;: 76,
            &quot;nombre&quot;: &quot;Aceitunas verdes&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/aceitunas-verdes_14_11zon_githlr.webp&quot;,
            &quot;descripcion&quot;: &quot;Snack bajo en calor&iacute;as&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0216&quot;,
            &quot;calorias&quot;: &quot;145.00&quot;,
            &quot;proteinas&quot;: &quot;1.00&quot;,
            &quot;grasas&quot;: &quot;15.00&quot;,
            &quot;carbohidratos&quot;: &quot;3.80&quot;
        },
        {
            &quot;id_alimento&quot;: 77,
            &quot;nombre&quot;: &quot;Aceitunas negras&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/aceitunas-negras_13_11zon_wpguyc.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de &aacute;cido oleico&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0217&quot;,
            &quot;calorias&quot;: &quot;155.00&quot;,
            &quot;proteinas&quot;: &quot;1.50&quot;,
            &quot;grasas&quot;: &quot;16.00&quot;,
            &quot;carbohidratos&quot;: &quot;4.00&quot;
        },
        {
            &quot;id_alimento&quot;: 78,
            &quot;nombre&quot;: &quot;Yogur natural entero&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189556/yogur-natural-entero_12_11zon_pekzmk.webp&quot;,
            &quot;descripcion&quot;: &quot;L&aacute;cteo con grasas beneficiosas&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.70&quot;,
            &quot;codigo_barras&quot;: &quot;0218&quot;,
            &quot;calorias&quot;: &quot;95.00&quot;,
            &quot;proteinas&quot;: &quot;4.00&quot;,
            &quot;grasas&quot;: &quot;5.00&quot;,
            &quot;carbohidratos&quot;: &quot;4.00&quot;
        },
        {
            &quot;id_alimento&quot;: 79,
            &quot;nombre&quot;: &quot;Queso manchego&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/queso-manchego_11_11zon_fojsph.webp&quot;,
            &quot;descripcion&quot;: &quot;Queso curado graso&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;1.00&quot;,
            &quot;codigo_barras&quot;: &quot;0219&quot;,
            &quot;calorias&quot;: &quot;166.00&quot;,
            &quot;proteinas&quot;: &quot;10.00&quot;,
            &quot;grasas&quot;: &quot;14.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.10&quot;
        },
        {
            &quot;id_alimento&quot;: 80,
            &quot;nombre&quot;: &quot;Queso de cabra&quot;,
            &quot;categoria&quot;: &quot;Grasas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/queso-cabra_10_11zon_swenod.webp&quot;,
            &quot;descripcion&quot;: &quot;L&aacute;cteo de cabra suave&quot;,
            &quot;peso_kg&quot;: &quot;0.05&quot;,
            &quot;precio_euros&quot;: &quot;1.00&quot;,
            &quot;codigo_barras&quot;: &quot;0220&quot;,
            &quot;calorias&quot;: &quot;103.00&quot;,
            &quot;proteinas&quot;: &quot;6.00&quot;,
            &quot;grasas&quot;: &quot;9.00&quot;,
            &quot;carbohidratos&quot;: &quot;0.10&quot;
        },
        {
            &quot;id_alimento&quot;: 81,
            &quot;nombre&quot;: &quot;Zanahoria&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189556/zanahoria_9_11zon_xrdlgz.webp&quot;,
            &quot;descripcion&quot;: &quot;Rica en betacarotenos&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.20&quot;,
            &quot;codigo_barras&quot;: &quot;0301&quot;,
            &quot;calorias&quot;: &quot;40.00&quot;,
            &quot;proteinas&quot;: &quot;1.00&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;9.00&quot;
        },
        {
            &quot;id_alimento&quot;: 82,
            &quot;nombre&quot;: &quot;Br&oacute;coli&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/brocoli_8_11zon_gg5eu2.webp&quot;,
            &quot;descripcion&quot;: &quot;Verdura cruc&iacute;fera rica en C y K&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0302&quot;,
            &quot;calorias&quot;: &quot;55.00&quot;,
            &quot;proteinas&quot;: &quot;4.00&quot;,
            &quot;grasas&quot;: &quot;0.50&quot;,
            &quot;carbohidratos&quot;: &quot;10.00&quot;
        },
        {
            &quot;id_alimento&quot;: 83,
            &quot;nombre&quot;: &quot;Tomate&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/tomate_7_11zon_sm8ln9.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de licopeno y vitamina C&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.20&quot;,
            &quot;codigo_barras&quot;: &quot;0303&quot;,
            &quot;calorias&quot;: &quot;18.00&quot;,
            &quot;proteinas&quot;: &quot;0.90&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;3.90&quot;
        },
        {
            &quot;id_alimento&quot;: 84,
            &quot;nombre&quot;: &quot;Espinacas&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189548/espinacas_6_11zon_czmg5j.webp&quot;,
            &quot;descripcion&quot;: &quot;Ricas en hierro y vitamina K&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0304&quot;,
            &quot;calorias&quot;: &quot;23.00&quot;,
            &quot;proteinas&quot;: &quot;2.90&quot;,
            &quot;grasas&quot;: &quot;0.40&quot;,
            &quot;carbohidratos&quot;: &quot;3.60&quot;
        },
        {
            &quot;id_alimento&quot;: 85,
            &quot;nombre&quot;: &quot;Pimiento rojo&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189551/pimiento-rojo_5_11zon_jhf3ui.webp&quot;,
            &quot;descripcion&quot;: &quot;Alto en vitamina C&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0305&quot;,
            &quot;calorias&quot;: &quot;31.00&quot;,
            &quot;proteinas&quot;: &quot;1.00&quot;,
            &quot;grasas&quot;: &quot;0.30&quot;,
            &quot;carbohidratos&quot;: &quot;6.00&quot;
        },
        {
            &quot;id_alimento&quot;: 86,
            &quot;nombre&quot;: &quot;Kale&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189549/kale_4_11zon_rvxzpn.webp&quot;,
            &quot;descripcion&quot;: &quot;Hoja verde cargada de nutrientes&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0306&quot;,
            &quot;calorias&quot;: &quot;49.00&quot;,
            &quot;proteinas&quot;: &quot;4.30&quot;,
            &quot;grasas&quot;: &quot;0.90&quot;,
            &quot;carbohidratos&quot;: &quot;8.80&quot;
        },
        {
            &quot;id_alimento&quot;: 87,
            &quot;nombre&quot;: &quot;Kiwi&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/kiwi_catxzz.webp&quot;,
            &quot;descripcion&quot;: &quot;Fruta rica en vitamina C&quot;,
            &quot;peso_kg&quot;: &quot;0.10&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0307&quot;,
            &quot;calorias&quot;: &quot;61.00&quot;,
            &quot;proteinas&quot;: &quot;1.10&quot;,
            &quot;grasas&quot;: &quot;0.50&quot;,
            &quot;carbohidratos&quot;: &quot;14.70&quot;
        },
        {
            &quot;id_alimento&quot;: 88,
            &quot;nombre&quot;: &quot;Fresas&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/fresas_rkihhc.webp&quot;,
            &quot;descripcion&quot;: &quot;Antioxidantes y fibra&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0308&quot;,
            &quot;calorias&quot;: &quot;49.00&quot;,
            &quot;proteinas&quot;: &quot;1.00&quot;,
            &quot;grasas&quot;: &quot;0.50&quot;,
            &quot;carbohidratos&quot;: &quot;11.70&quot;
        },
        {
            &quot;id_alimento&quot;: 89,
            &quot;nombre&quot;: &quot;Ar&aacute;ndanos&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/arandanos_3_11zon_guzjo9.webp&quot;,
            &quot;descripcion&quot;: &quot;Ricos en antocianinas&quot;,
            &quot;peso_kg&quot;: &quot;0.10&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0309&quot;,
            &quot;calorias&quot;: &quot;57.00&quot;,
            &quot;proteinas&quot;: &quot;0.70&quot;,
            &quot;grasas&quot;: &quot;0.30&quot;,
            &quot;carbohidratos&quot;: &quot;14.50&quot;
        },
        {
            &quot;id_alimento&quot;: 90,
            &quot;nombre&quot;: &quot;Mango&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/mango_2_11zon_odqll8.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de vitamina A y C&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0310&quot;,
            &quot;calorias&quot;: &quot;60.00&quot;,
            &quot;proteinas&quot;: &quot;0.80&quot;,
            &quot;grasas&quot;: &quot;0.40&quot;,
            &quot;carbohidratos&quot;: &quot;15.00&quot;
        },
        {
            &quot;id_alimento&quot;: 91,
            &quot;nombre&quot;: &quot;Papaya&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/papaya_wukb3c.webp&quot;,
            &quot;descripcion&quot;: &quot;Enzima papaina y vitamina C&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0311&quot;,
            &quot;calorias&quot;: &quot;59.00&quot;,
            &quot;proteinas&quot;: &quot;0.60&quot;,
            &quot;grasas&quot;: &quot;0.10&quot;,
            &quot;carbohidratos&quot;: &quot;15.40&quot;
        },
        {
            &quot;id_alimento&quot;: 92,
            &quot;nombre&quot;: &quot;Mel&oacute;n&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/melon_1_11zon_jkylms.webp&quot;,
            &quot;descripcion&quot;: &quot;Hidratante y rico en vitamina A&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0312&quot;,
            &quot;calorias&quot;: &quot;34.00&quot;,
            &quot;proteinas&quot;: &quot;0.80&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;8.20&quot;
        },
        {
            &quot;id_alimento&quot;: 93,
            &quot;nombre&quot;: &quot;Sand&iacute;a&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/sandia_43_11zon_irlvuy.webp&quot;,
            &quot;descripcion&quot;: &quot;Alto contenido de agua y licopeno&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0313&quot;,
            &quot;calorias&quot;: &quot;30.00&quot;,
            &quot;proteinas&quot;: &quot;0.60&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;7.60&quot;
        },
        {
            &quot;id_alimento&quot;: 94,
            &quot;nombre&quot;: &quot;Coliflor&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/coliflor_42_11zon_tmv5yo.webp&quot;,
            &quot;descripcion&quot;: &quot;Rica en vitamina C y fibra&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0314&quot;,
            &quot;calorias&quot;: &quot;25.00&quot;,
            &quot;proteinas&quot;: &quot;2.00&quot;,
            &quot;grasas&quot;: &quot;0.10&quot;,
            &quot;carbohidratos&quot;: &quot;5.00&quot;
        },
        {
            &quot;id_alimento&quot;: 95,
            &quot;nombre&quot;: &quot;Esp&aacute;rragos&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/esparragos_swodpe.webp&quot;,
            &quot;descripcion&quot;: &quot;Fuente de vitamina K y folato&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.40&quot;,
            &quot;codigo_barras&quot;: &quot;0315&quot;,
            &quot;calorias&quot;: &quot;20.00&quot;,
            &quot;proteinas&quot;: &quot;2.20&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;3.70&quot;
        },
        {
            &quot;id_alimento&quot;: 96,
            &quot;nombre&quot;: &quot;Alcachofa&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/alcachofa_41_11zon_eb5noo.webp&quot;,
            &quot;descripcion&quot;: &quot;Fibra y antioxidantes&quot;,
            &quot;peso_kg&quot;: &quot;0.20&quot;,
            &quot;precio_euros&quot;: &quot;0.50&quot;,
            &quot;codigo_barras&quot;: &quot;0316&quot;,
            &quot;calorias&quot;: &quot;47.00&quot;,
            &quot;proteinas&quot;: &quot;3.30&quot;,
            &quot;grasas&quot;: &quot;0.20&quot;,
            &quot;carbohidratos&quot;: &quot;11.50&quot;
        },
        {
            &quot;id_alimento&quot;: 97,
            &quot;nombre&quot;: &quot;Coles de Bruselas&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/coles-bruselas_40_11zon_rdxnpa.webp&quot;,
            &quot;descripcion&quot;: &quot;Ricas en C y K&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.30&quot;,
            &quot;codigo_barras&quot;: &quot;0317&quot;,
            &quot;calorias&quot;: &quot;43.00&quot;,
            &quot;proteinas&quot;: &quot;3.40&quot;,
            &quot;grasas&quot;: &quot;0.30&quot;,
            &quot;carbohidratos&quot;: &quot;8.95&quot;
        },
        {
            &quot;id_alimento&quot;: 98,
            &quot;nombre&quot;: &quot;Pepino&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745339491/pepino_fm5fxo.webp&quot;,
            &quot;descripcion&quot;: &quot;Muy hidratante y bajo en calor&iacute;as&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.20&quot;,
            &quot;codigo_barras&quot;: &quot;0318&quot;,
            &quot;calorias&quot;: &quot;16.00&quot;,
            &quot;proteinas&quot;: &quot;0.70&quot;,
            &quot;grasas&quot;: &quot;0.10&quot;,
            &quot;carbohidratos&quot;: &quot;3.60&quot;
        },
        {
            &quot;id_alimento&quot;: 99,
            &quot;nombre&quot;: &quot;Calabac&iacute;n&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745339489/calabacin_mclpgk.webp&quot;,
            &quot;descripcion&quot;: &quot;Bajo en calor&iacute;as y vers&aacute;til&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.20&quot;,
            &quot;codigo_barras&quot;: &quot;0319&quot;,
            &quot;calorias&quot;: &quot;17.00&quot;,
            &quot;proteinas&quot;: &quot;1.20&quot;,
            &quot;grasas&quot;: &quot;0.30&quot;,
            &quot;carbohidratos&quot;: &quot;3.10&quot;
        },
        {
            &quot;id_alimento&quot;: 100,
            &quot;nombre&quot;: &quot;Lechuga romana&quot;,
            &quot;categoria&quot;: &quot;Vitaminas&quot;,
            &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/lechuga-romana_voqvd1.webp&quot;,
            &quot;descripcion&quot;: &quot;Rica en folato y fibra&quot;,
            &quot;peso_kg&quot;: &quot;0.15&quot;,
            &quot;precio_euros&quot;: &quot;0.20&quot;,
            &quot;codigo_barras&quot;: &quot;0320&quot;,
            &quot;calorias&quot;: &quot;17.00&quot;,
            &quot;proteinas&quot;: &quot;1.20&quot;,
            &quot;grasas&quot;: &quot;0.30&quot;,
            &quot;carbohidratos&quot;: &quot;3.30&quot;
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-alimentos" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-alimentos"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-alimentos"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-alimentos" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-alimentos">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-alimentos" data-method="GET"
      data-path="api/alimentos"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-alimentos', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-alimentos"
                    onclick="tryItOut('GETapi-alimentos');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-alimentos"
                    onclick="cancelTryOut('GETapi-alimentos');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-alimentos"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/alimentos</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-alimentos"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-alimentos"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-alimentos--id-">GET api/alimentos/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-alimentos--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/alimentos/21" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimentos/21"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-alimentos--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;alimento&quot;: {
        &quot;id_alimento&quot;: 21,
        &quot;nombre&quot;: &quot;Pechuga de pollo&quot;,
        &quot;categoria&quot;: &quot;Prote&iacute;nas&quot;,
        &quot;imagen_url&quot;: &quot;https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/pechuga-pollo_fthcra.webp&quot;,
        &quot;descripcion&quot;: &quot;Fuente de prote&iacute;na magra&quot;,
        &quot;peso_kg&quot;: &quot;0.20&quot;,
        &quot;precio_euros&quot;: &quot;1.50&quot;,
        &quot;codigo_barras&quot;: &quot;0001&quot;,
        &quot;calorias&quot;: &quot;110.00&quot;,
        &quot;proteinas&quot;: &quot;23.00&quot;,
        &quot;grasas&quot;: &quot;1.00&quot;,
        &quot;carbohidratos&quot;: &quot;0.00&quot;
    },
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-alimentos--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-alimentos--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-alimentos--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-alimentos--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-alimentos--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-alimentos--id-" data-method="GET"
      data-path="api/alimentos/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-alimentos--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-alimentos--id-"
                    onclick="tryItOut('GETapi-alimentos--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-alimentos--id-"
                    onclick="cancelTryOut('GETapi-alimentos--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-alimentos--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/alimentos/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-alimentos--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-alimentos--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-alimentos--id-"
               value="21"
               data-component="url">
    <br>
<p>The ID of the alimento. Example: <code>21</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-alimentos">POST api/alimentos</h2>

<p>
</p>



<span id="example-requests-POSTapi-alimentos">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/alimentos" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"categoria\": \"Proteínas\",
    \"imagen_url\": \"http:\\/\\/bailey.com\\/\",
    \"descripcion\": \"architecto\",
    \"peso_kg\": 4326.41688,
    \"precio_euros\": 4326.41688,
    \"codigo_barras\": \"m\",
    \"calorias\": 4326.41688,
    \"proteinas\": 4326.41688,
    \"grasas\": 4326.41688,
    \"carbohidratos\": 4326.41688
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimentos"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "categoria": "Proteínas",
    "imagen_url": "http:\/\/bailey.com\/",
    "descripcion": "architecto",
    "peso_kg": 4326.41688,
    "precio_euros": 4326.41688,
    "codigo_barras": "m",
    "calorias": 4326.41688,
    "proteinas": 4326.41688,
    "grasas": 4326.41688,
    "carbohidratos": 4326.41688
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-alimentos">
</span>
<span id="execution-results-POSTapi-alimentos" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-alimentos"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-alimentos"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-alimentos" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-alimentos">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-alimentos" data-method="POST"
      data-path="api/alimentos"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-alimentos', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-alimentos"
                    onclick="tryItOut('POSTapi-alimentos');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-alimentos"
                    onclick="cancelTryOut('POSTapi-alimentos');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-alimentos"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/alimentos</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-alimentos"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-alimentos"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="POSTapi-alimentos"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>categoria</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="categoria"                data-endpoint="POSTapi-alimentos"
               value="Proteínas"
               data-component="body">
    <br>
<p>Example: <code>Proteínas</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Proteínas</code></li> <li><code>Carbohidratos</code></li> <li><code>Grasas</code></li> <li><code>Vitaminas</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>imagen_url</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="imagen_url"                data-endpoint="POSTapi-alimentos"
               value="http://bailey.com/"
               data-component="body">
    <br>
<p>Must be a valid URL. Example: <code>http://bailey.com/</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="POSTapi-alimentos"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>peso_kg</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="peso_kg"                data-endpoint="POSTapi-alimentos"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>precio_euros</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="precio_euros"                data-endpoint="POSTapi-alimentos"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>codigo_barras</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="codigo_barras"                data-endpoint="POSTapi-alimentos"
               value="m"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>m</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>calorias</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="calorias"                data-endpoint="POSTapi-alimentos"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>proteinas</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="proteinas"                data-endpoint="POSTapi-alimentos"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>grasas</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="grasas"                data-endpoint="POSTapi-alimentos"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>carbohidratos</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="carbohidratos"                data-endpoint="POSTapi-alimentos"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-alimentos--id-">PUT api/alimentos/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-alimentos--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/alimentos/21" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"categoria\": \"Proteínas\",
    \"imagen_url\": \"http:\\/\\/bailey.com\\/\",
    \"descripcion\": \"architecto\",
    \"peso_kg\": 4326.41688,
    \"precio_euros\": 4326.41688,
    \"codigo_barras\": \"m\",
    \"calorias\": 4326.41688,
    \"proteinas\": 4326.41688,
    \"grasas\": 4326.41688,
    \"carbohidratos\": 4326.41688
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimentos/21"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "categoria": "Proteínas",
    "imagen_url": "http:\/\/bailey.com\/",
    "descripcion": "architecto",
    "peso_kg": 4326.41688,
    "precio_euros": 4326.41688,
    "codigo_barras": "m",
    "calorias": 4326.41688,
    "proteinas": 4326.41688,
    "grasas": 4326.41688,
    "carbohidratos": 4326.41688
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-alimentos--id-">
</span>
<span id="execution-results-PUTapi-alimentos--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-alimentos--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-alimentos--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-alimentos--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-alimentos--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-alimentos--id-" data-method="PUT"
      data-path="api/alimentos/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-alimentos--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-alimentos--id-"
                    onclick="tryItOut('PUTapi-alimentos--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-alimentos--id-"
                    onclick="cancelTryOut('PUTapi-alimentos--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-alimentos--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/alimentos/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-alimentos--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-alimentos--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-alimentos--id-"
               value="21"
               data-component="url">
    <br>
<p>The ID of the alimento. Example: <code>21</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PUTapi-alimentos--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>categoria</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="categoria"                data-endpoint="PUTapi-alimentos--id-"
               value="Proteínas"
               data-component="body">
    <br>
<p>Example: <code>Proteínas</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Proteínas</code></li> <li><code>Carbohidratos</code></li> <li><code>Grasas</code></li> <li><code>Vitaminas</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>imagen_url</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="imagen_url"                data-endpoint="PUTapi-alimentos--id-"
               value="http://bailey.com/"
               data-component="body">
    <br>
<p>Must be a valid URL. Example: <code>http://bailey.com/</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="PUTapi-alimentos--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>peso_kg</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="peso_kg"                data-endpoint="PUTapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>precio_euros</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="precio_euros"                data-endpoint="PUTapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>codigo_barras</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="codigo_barras"                data-endpoint="PUTapi-alimentos--id-"
               value="m"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>m</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>calorias</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="calorias"                data-endpoint="PUTapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>proteinas</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="proteinas"                data-endpoint="PUTapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>grasas</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="grasas"                data-endpoint="PUTapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>carbohidratos</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="carbohidratos"                data-endpoint="PUTapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-alimentos--id-">PATCH api/alimentos/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-alimentos--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/alimentos/21" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"categoria\": \"Proteínas\",
    \"imagen_url\": \"http:\\/\\/bailey.com\\/\",
    \"descripcion\": \"architecto\",
    \"peso_kg\": 4326.41688,
    \"precio_euros\": 4326.41688,
    \"codigo_barras\": \"m\",
    \"calorias\": 4326.41688,
    \"proteinas\": 4326.41688,
    \"grasas\": 4326.41688,
    \"carbohidratos\": 4326.41688
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimentos/21"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "categoria": "Proteínas",
    "imagen_url": "http:\/\/bailey.com\/",
    "descripcion": "architecto",
    "peso_kg": 4326.41688,
    "precio_euros": 4326.41688,
    "codigo_barras": "m",
    "calorias": 4326.41688,
    "proteinas": 4326.41688,
    "grasas": 4326.41688,
    "carbohidratos": 4326.41688
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-alimentos--id-">
</span>
<span id="execution-results-PATCHapi-alimentos--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-alimentos--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-alimentos--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-alimentos--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-alimentos--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-alimentos--id-" data-method="PATCH"
      data-path="api/alimentos/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-alimentos--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-alimentos--id-"
                    onclick="tryItOut('PATCHapi-alimentos--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-alimentos--id-"
                    onclick="cancelTryOut('PATCHapi-alimentos--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-alimentos--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/alimentos/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-alimentos--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-alimentos--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PATCHapi-alimentos--id-"
               value="21"
               data-component="url">
    <br>
<p>The ID of the alimento. Example: <code>21</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PATCHapi-alimentos--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>categoria</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="categoria"                data-endpoint="PATCHapi-alimentos--id-"
               value="Proteínas"
               data-component="body">
    <br>
<p>Example: <code>Proteínas</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Proteínas</code></li> <li><code>Carbohidratos</code></li> <li><code>Grasas</code></li> <li><code>Vitaminas</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>imagen_url</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="imagen_url"                data-endpoint="PATCHapi-alimentos--id-"
               value="http://bailey.com/"
               data-component="body">
    <br>
<p>Must be a valid URL. Example: <code>http://bailey.com/</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="PATCHapi-alimentos--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>peso_kg</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="peso_kg"                data-endpoint="PATCHapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>precio_euros</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="precio_euros"                data-endpoint="PATCHapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>codigo_barras</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="codigo_barras"                data-endpoint="PATCHapi-alimentos--id-"
               value="m"
               data-component="body">
    <br>
<p>Must not be greater than 50 characters. Example: <code>m</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>calorias</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="calorias"                data-endpoint="PATCHapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>proteinas</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="proteinas"                data-endpoint="PATCHapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>grasas</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="grasas"                data-endpoint="PATCHapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>carbohidratos</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="carbohidratos"                data-endpoint="PATCHapi-alimentos--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-alimentos--id-">DELETE api/alimentos/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-alimentos--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/alimentos/21" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimentos/21"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-alimentos--id-">
</span>
<span id="execution-results-DELETEapi-alimentos--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-alimentos--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-alimentos--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-alimentos--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-alimentos--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-alimentos--id-" data-method="DELETE"
      data-path="api/alimentos/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-alimentos--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-alimentos--id-"
                    onclick="tryItOut('DELETEapi-alimentos--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-alimentos--id-"
                    onclick="cancelTryOut('DELETEapi-alimentos--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-alimentos--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/alimentos/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-alimentos--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-alimentos--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-alimentos--id-"
               value="21"
               data-component="url">
    <br>
<p>The ID of the alimento. Example: <code>21</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-paises">GET api/paises</h2>

<p>
</p>



<span id="example-requests-GETapi-paises">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/paises" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/paises"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-paises">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;paises&quot;: [
        {
            &quot;cod_pais&quot;: 1,
            &quot;nombre&quot;: &quot;Gambia&quot;
        },
        {
            &quot;cod_pais&quot;: 2,
            &quot;nombre&quot;: &quot;Greenland&quot;
        },
        {
            &quot;cod_pais&quot;: 3,
            &quot;nombre&quot;: &quot;Angola&quot;
        },
        {
            &quot;cod_pais&quot;: 4,
            &quot;nombre&quot;: &quot;Canada&quot;
        },
        {
            &quot;cod_pais&quot;: 5,
            &quot;nombre&quot;: &quot;San Marino&quot;
        },
        {
            &quot;cod_pais&quot;: 6,
            &quot;nombre&quot;: &quot;Mayotte&quot;
        },
        {
            &quot;cod_pais&quot;: 7,
            &quot;nombre&quot;: &quot;Belize&quot;
        },
        {
            &quot;cod_pais&quot;: 8,
            &quot;nombre&quot;: &quot;Israel&quot;
        },
        {
            &quot;cod_pais&quot;: 9,
            &quot;nombre&quot;: &quot;Guam&quot;
        },
        {
            &quot;cod_pais&quot;: 10,
            &quot;nombre&quot;: &quot;Timor-Leste&quot;
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-paises" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-paises"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-paises"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-paises" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-paises">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-paises" data-method="GET"
      data-path="api/paises"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-paises', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-paises"
                    onclick="tryItOut('GETapi-paises');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-paises"
                    onclick="cancelTryOut('GETapi-paises');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-paises"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/paises</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-paises"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-paises"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-paises--id-">GET api/paises/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-paises--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/paises/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/paises/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-paises--id-">
            <blockquote>
            <p>Example response (404):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;message&quot;: &quot;Pa&iacute;s no encontrado&quot;,
    &quot;status&quot;: 404
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-paises--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-paises--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-paises--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-paises--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-paises--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-paises--id-" data-method="GET"
      data-path="api/paises/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-paises--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-paises--id-"
                    onclick="tryItOut('GETapi-paises--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-paises--id-"
                    onclick="cancelTryOut('GETapi-paises--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-paises--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/paises/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-paises--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-paises--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="GETapi-paises--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the paise. Example: <code>architecto</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-paises">POST api/paises</h2>

<p>
</p>



<span id="example-requests-POSTapi-paises">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/paises" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/paises"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-paises">
</span>
<span id="execution-results-POSTapi-paises" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-paises"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-paises"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-paises" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-paises">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-paises" data-method="POST"
      data-path="api/paises"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-paises', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-paises"
                    onclick="tryItOut('POSTapi-paises');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-paises"
                    onclick="cancelTryOut('POSTapi-paises');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-paises"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/paises</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-paises"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-paises"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="POSTapi-paises"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-paises--id-">PUT api/paises/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-paises--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/paises/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/paises/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-paises--id-">
</span>
<span id="execution-results-PUTapi-paises--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-paises--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-paises--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-paises--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-paises--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-paises--id-" data-method="PUT"
      data-path="api/paises/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-paises--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-paises--id-"
                    onclick="tryItOut('PUTapi-paises--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-paises--id-"
                    onclick="cancelTryOut('PUTapi-paises--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-paises--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/paises/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-paises--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-paises--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="PUTapi-paises--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the paise. Example: <code>architecto</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PUTapi-paises--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-paises--id-">PATCH api/paises/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-paises--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/paises/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/paises/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b"
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-paises--id-">
</span>
<span id="execution-results-PATCHapi-paises--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-paises--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-paises--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-paises--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-paises--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-paises--id-" data-method="PATCH"
      data-path="api/paises/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-paises--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-paises--id-"
                    onclick="tryItOut('PATCHapi-paises--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-paises--id-"
                    onclick="cancelTryOut('PATCHapi-paises--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-paises--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/paises/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-paises--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-paises--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="PATCHapi-paises--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the paise. Example: <code>architecto</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PATCHapi-paises--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-paises--id-">DELETE api/paises/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-paises--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/paises/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/paises/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-paises--id-">
</span>
<span id="execution-results-DELETEapi-paises--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-paises--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-paises--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-paises--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-paises--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-paises--id-" data-method="DELETE"
      data-path="api/paises/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-paises--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-paises--id-"
                    onclick="tryItOut('DELETEapi-paises--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-paises--id-"
                    onclick="cancelTryOut('DELETEapi-paises--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-paises--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/paises/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-paises--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-paises--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="DELETEapi-paises--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the paise. Example: <code>architecto</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-ciudades">GET api/ciudades</h2>

<p>
</p>



<span id="example-requests-GETapi-ciudades">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/ciudades" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ciudades"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-ciudades">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;ciudades&quot;: [
        {
            &quot;cod_ciudad&quot;: 1,
            &quot;nombre&quot;: &quot;Gwenton&quot;,
            &quot;cod_pais&quot;: 7
        },
        {
            &quot;cod_ciudad&quot;: 2,
            &quot;nombre&quot;: &quot;South Monserratmouth&quot;,
            &quot;cod_pais&quot;: 8
        },
        {
            &quot;cod_ciudad&quot;: 3,
            &quot;nombre&quot;: &quot;East Magdalenport&quot;,
            &quot;cod_pais&quot;: 7
        },
        {
            &quot;cod_ciudad&quot;: 4,
            &quot;nombre&quot;: &quot;Kendrashire&quot;,
            &quot;cod_pais&quot;: 3
        },
        {
            &quot;cod_ciudad&quot;: 5,
            &quot;nombre&quot;: &quot;Hammesside&quot;,
            &quot;cod_pais&quot;: 2
        },
        {
            &quot;cod_ciudad&quot;: 6,
            &quot;nombre&quot;: &quot;New Betsytown&quot;,
            &quot;cod_pais&quot;: 5
        },
        {
            &quot;cod_ciudad&quot;: 7,
            &quot;nombre&quot;: &quot;Wilhelmineburgh&quot;,
            &quot;cod_pais&quot;: 7
        },
        {
            &quot;cod_ciudad&quot;: 8,
            &quot;nombre&quot;: &quot;Benniemouth&quot;,
            &quot;cod_pais&quot;: 1
        },
        {
            &quot;cod_ciudad&quot;: 9,
            &quot;nombre&quot;: &quot;Homenickport&quot;,
            &quot;cod_pais&quot;: 9
        },
        {
            &quot;cod_ciudad&quot;: 10,
            &quot;nombre&quot;: &quot;Port Jaidenville&quot;,
            &quot;cod_pais&quot;: 6
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-ciudades" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-ciudades"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-ciudades"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-ciudades" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-ciudades">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-ciudades" data-method="GET"
      data-path="api/ciudades"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-ciudades', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-ciudades"
                    onclick="tryItOut('GETapi-ciudades');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-ciudades"
                    onclick="cancelTryOut('GETapi-ciudades');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-ciudades"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/ciudades</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-ciudades"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-ciudades"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-ciudades--id-">GET api/ciudades/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-ciudades--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/ciudades/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ciudades/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-ciudades--id-">
            <blockquote>
            <p>Example response (404):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;message&quot;: &quot;Ciudad no encontrada&quot;,
    &quot;status&quot;: 404
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-ciudades--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-ciudades--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-ciudades--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-ciudades--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-ciudades--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-ciudades--id-" data-method="GET"
      data-path="api/ciudades/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-ciudades--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-ciudades--id-"
                    onclick="tryItOut('GETapi-ciudades--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-ciudades--id-"
                    onclick="cancelTryOut('GETapi-ciudades--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-ciudades--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/ciudades/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-ciudades--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-ciudades--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="GETapi-ciudades--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the ciudade. Example: <code>architecto</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-ciudades">POST api/ciudades</h2>

<p>
</p>



<span id="example-requests-POSTapi-ciudades">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/ciudades" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"cod_pais\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ciudades"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "cod_pais": "architecto"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-ciudades">
</span>
<span id="execution-results-POSTapi-ciudades" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-ciudades"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-ciudades"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-ciudades" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-ciudades">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-ciudades" data-method="POST"
      data-path="api/ciudades"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-ciudades', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-ciudades"
                    onclick="tryItOut('POSTapi-ciudades');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-ciudades"
                    onclick="cancelTryOut('POSTapi-ciudades');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-ciudades"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/ciudades</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-ciudades"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-ciudades"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="POSTapi-ciudades"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cod_pais</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="cod_pais"                data-endpoint="POSTapi-ciudades"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>cod_pais</code> of an existing record in the pais table. Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-ciudades--id-">PUT api/ciudades/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-ciudades--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/ciudades/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"cod_pais\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ciudades/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "cod_pais": "architecto"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-ciudades--id-">
</span>
<span id="execution-results-PUTapi-ciudades--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-ciudades--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-ciudades--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-ciudades--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-ciudades--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-ciudades--id-" data-method="PUT"
      data-path="api/ciudades/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-ciudades--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-ciudades--id-"
                    onclick="tryItOut('PUTapi-ciudades--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-ciudades--id-"
                    onclick="cancelTryOut('PUTapi-ciudades--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-ciudades--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/ciudades/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-ciudades--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-ciudades--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="PUTapi-ciudades--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the ciudade. Example: <code>architecto</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PUTapi-ciudades--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cod_pais</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="cod_pais"                data-endpoint="PUTapi-ciudades--id-"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>cod_pais</code> of an existing record in the pais table. Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-ciudades--id-">PATCH api/ciudades/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-ciudades--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/ciudades/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ciudades/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b"
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-ciudades--id-">
</span>
<span id="execution-results-PATCHapi-ciudades--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-ciudades--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-ciudades--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-ciudades--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-ciudades--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-ciudades--id-" data-method="PATCH"
      data-path="api/ciudades/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-ciudades--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-ciudades--id-"
                    onclick="tryItOut('PATCHapi-ciudades--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-ciudades--id-"
                    onclick="cancelTryOut('PATCHapi-ciudades--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-ciudades--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/ciudades/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-ciudades--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-ciudades--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="PATCHapi-ciudades--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the ciudade. Example: <code>architecto</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PATCHapi-ciudades--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cod_pais</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="cod_pais"                data-endpoint="PATCHapi-ciudades--id-"
               value=""
               data-component="body">
    <br>
<p>The <code>cod_pais</code> of an existing record in the pais table.</p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-ciudades--id-">DELETE api/ciudades/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-ciudades--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/ciudades/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ciudades/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-ciudades--id-">
</span>
<span id="execution-results-DELETEapi-ciudades--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-ciudades--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-ciudades--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-ciudades--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-ciudades--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-ciudades--id-" data-method="DELETE"
      data-path="api/ciudades/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-ciudades--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-ciudades--id-"
                    onclick="tryItOut('DELETEapi-ciudades--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-ciudades--id-"
                    onclick="cancelTryOut('DELETEapi-ciudades--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-ciudades--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/ciudades/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-ciudades--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-ciudades--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="DELETEapi-ciudades--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the ciudade. Example: <code>architecto</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-rutinas">GET api/rutinas</h2>

<p>
</p>



<span id="example-requests-GETapi-rutinas">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/rutinas" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutinas"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-rutinas">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;rutinas&quot;: [
        {
            &quot;id_rutina&quot;: 1,
            &quot;nombre&quot;: &quot;eos&quot;,
            &quot;descripcion&quot;: &quot;Tempore tempora mollitia sed aut molestias quas.&quot;
        },
        {
            &quot;id_rutina&quot;: 2,
            &quot;nombre&quot;: &quot;aut&quot;,
            &quot;descripcion&quot;: &quot;Qui vel totam quis sed voluptatibus id eos.&quot;
        },
        {
            &quot;id_rutina&quot;: 3,
            &quot;nombre&quot;: &quot;aut&quot;,
            &quot;descripcion&quot;: &quot;Saepe expedita laudantium occaecati ut.&quot;
        },
        {
            &quot;id_rutina&quot;: 4,
            &quot;nombre&quot;: &quot;soluta&quot;,
            &quot;descripcion&quot;: &quot;Ut eaque dicta architecto eligendi a ut possimus est.&quot;
        },
        {
            &quot;id_rutina&quot;: 5,
            &quot;nombre&quot;: &quot;amet&quot;,
            &quot;descripcion&quot;: &quot;Sit totam et eum vel in quia hic.&quot;
        },
        {
            &quot;id_rutina&quot;: 6,
            &quot;nombre&quot;: &quot;occaecati&quot;,
            &quot;descripcion&quot;: &quot;Aut dolor ipsam neque labore et.&quot;
        },
        {
            &quot;id_rutina&quot;: 7,
            &quot;nombre&quot;: &quot;officia&quot;,
            &quot;descripcion&quot;: &quot;Veritatis doloremque voluptatum reprehenderit.&quot;
        },
        {
            &quot;id_rutina&quot;: 8,
            &quot;nombre&quot;: &quot;et&quot;,
            &quot;descripcion&quot;: &quot;Provident quae repudiandae cupiditate recusandae quasi molestiae deserunt adipisci.&quot;
        },
        {
            &quot;id_rutina&quot;: 9,
            &quot;nombre&quot;: &quot;voluptate&quot;,
            &quot;descripcion&quot;: &quot;Possimus sed qui odit totam.&quot;
        },
        {
            &quot;id_rutina&quot;: 10,
            &quot;nombre&quot;: &quot;qui&quot;,
            &quot;descripcion&quot;: &quot;Quidem hic dolore cumque quam.&quot;
        },
        {
            &quot;id_rutina&quot;: 11,
            &quot;nombre&quot;: &quot;officia&quot;,
            &quot;descripcion&quot;: &quot;Ut ex magnam voluptate placeat vel voluptates dolore.&quot;
        },
        {
            &quot;id_rutina&quot;: 12,
            &quot;nombre&quot;: &quot;quos&quot;,
            &quot;descripcion&quot;: &quot;Non minima et eos sit.&quot;
        },
        {
            &quot;id_rutina&quot;: 13,
            &quot;nombre&quot;: &quot;cum&quot;,
            &quot;descripcion&quot;: &quot;Omnis qui eaque incidunt tenetur provident.&quot;
        },
        {
            &quot;id_rutina&quot;: 14,
            &quot;nombre&quot;: &quot;eum&quot;,
            &quot;descripcion&quot;: &quot;Iure error blanditiis dolores.&quot;
        },
        {
            &quot;id_rutina&quot;: 15,
            &quot;nombre&quot;: &quot;aut&quot;,
            &quot;descripcion&quot;: &quot;Facere aspernatur ab facere.&quot;
        },
        {
            &quot;id_rutina&quot;: 16,
            &quot;nombre&quot;: &quot;delectus&quot;,
            &quot;descripcion&quot;: &quot;Voluptas voluptatum laudantium sint minus ab.&quot;
        },
        {
            &quot;id_rutina&quot;: 17,
            &quot;nombre&quot;: &quot;ipsam&quot;,
            &quot;descripcion&quot;: &quot;Praesentium accusamus quia temporibus quasi et aspernatur quos laboriosam.&quot;
        },
        {
            &quot;id_rutina&quot;: 18,
            &quot;nombre&quot;: &quot;repellendus&quot;,
            &quot;descripcion&quot;: &quot;Aut illo nisi provident harum perspiciatis.&quot;
        },
        {
            &quot;id_rutina&quot;: 19,
            &quot;nombre&quot;: &quot;nostrum&quot;,
            &quot;descripcion&quot;: &quot;Officiis exercitationem nulla atque inventore accusantium molestias.&quot;
        },
        {
            &quot;id_rutina&quot;: 20,
            &quot;nombre&quot;: &quot;quod&quot;,
            &quot;descripcion&quot;: &quot;Esse aut inventore saepe velit repellat.&quot;
        },
        {
            &quot;id_rutina&quot;: 21,
            &quot;nombre&quot;: &quot;ducimus&quot;,
            &quot;descripcion&quot;: &quot;Deserunt neque pariatur soluta quo.&quot;
        },
        {
            &quot;id_rutina&quot;: 22,
            &quot;nombre&quot;: &quot;perferendis&quot;,
            &quot;descripcion&quot;: &quot;Nostrum sint et consectetur dolores aut.&quot;
        },
        {
            &quot;id_rutina&quot;: 23,
            &quot;nombre&quot;: &quot;vitae&quot;,
            &quot;descripcion&quot;: &quot;Doloribus numquam facere veritatis.&quot;
        },
        {
            &quot;id_rutina&quot;: 24,
            &quot;nombre&quot;: &quot;repellendus&quot;,
            &quot;descripcion&quot;: &quot;Architecto repellat quia labore sint.&quot;
        },
        {
            &quot;id_rutina&quot;: 25,
            &quot;nombre&quot;: &quot;enim&quot;,
            &quot;descripcion&quot;: &quot;Atque ex eos ipsa explicabo laudantium facere voluptas.&quot;
        },
        {
            &quot;id_rutina&quot;: 26,
            &quot;nombre&quot;: &quot;optio&quot;,
            &quot;descripcion&quot;: &quot;Sunt qui occaecati commodi maiores sed enim doloribus quia.&quot;
        },
        {
            &quot;id_rutina&quot;: 27,
            &quot;nombre&quot;: &quot;id&quot;,
            &quot;descripcion&quot;: &quot;Ipsum quasi animi aspernatur ipsa ut tenetur.&quot;
        },
        {
            &quot;id_rutina&quot;: 28,
            &quot;nombre&quot;: &quot;nisi&quot;,
            &quot;descripcion&quot;: &quot;Eum ea harum corporis sint alias a ullam.&quot;
        },
        {
            &quot;id_rutina&quot;: 29,
            &quot;nombre&quot;: &quot;voluptate&quot;,
            &quot;descripcion&quot;: &quot;Quia delectus molestias consequatur ut est et delectus.&quot;
        },
        {
            &quot;id_rutina&quot;: 30,
            &quot;nombre&quot;: &quot;culpa&quot;,
            &quot;descripcion&quot;: &quot;Enim sed veritatis facilis nam et harum aperiam porro.&quot;
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-rutinas" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-rutinas"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-rutinas"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-rutinas" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-rutinas">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-rutinas" data-method="GET"
      data-path="api/rutinas"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-rutinas', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-rutinas"
                    onclick="tryItOut('GETapi-rutinas');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-rutinas"
                    onclick="cancelTryOut('GETapi-rutinas');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-rutinas"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/rutinas</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-rutinas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-rutinas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-rutinas--id-">GET api/rutinas/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-rutinas--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/rutinas/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutinas/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-rutinas--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;rutina&quot;: {
        &quot;id_rutina&quot;: 1,
        &quot;nombre&quot;: &quot;eos&quot;,
        &quot;descripcion&quot;: &quot;Tempore tempora mollitia sed aut molestias quas.&quot;
    },
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-rutinas--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-rutinas--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-rutinas--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-rutinas--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-rutinas--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-rutinas--id-" data-method="GET"
      data-path="api/rutinas/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-rutinas--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-rutinas--id-"
                    onclick="tryItOut('GETapi-rutinas--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-rutinas--id-"
                    onclick="cancelTryOut('GETapi-rutinas--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-rutinas--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/rutinas/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-rutinas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-rutinas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-rutinas--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the rutina. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-rutinas">POST api/rutinas</h2>

<p>
</p>



<span id="example-requests-POSTapi-rutinas">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/rutinas" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"descripcion\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutinas"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "descripcion": "architecto"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-rutinas">
</span>
<span id="execution-results-POSTapi-rutinas" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-rutinas"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-rutinas"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-rutinas" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-rutinas">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-rutinas" data-method="POST"
      data-path="api/rutinas"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-rutinas', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-rutinas"
                    onclick="tryItOut('POSTapi-rutinas');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-rutinas"
                    onclick="cancelTryOut('POSTapi-rutinas');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-rutinas"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/rutinas</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-rutinas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-rutinas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="POSTapi-rutinas"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="POSTapi-rutinas"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-rutinas--id-">PUT api/rutinas/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-rutinas--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/rutinas/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"descripcion\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutinas/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "descripcion": "architecto"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-rutinas--id-">
</span>
<span id="execution-results-PUTapi-rutinas--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-rutinas--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-rutinas--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-rutinas--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-rutinas--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-rutinas--id-" data-method="PUT"
      data-path="api/rutinas/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-rutinas--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-rutinas--id-"
                    onclick="tryItOut('PUTapi-rutinas--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-rutinas--id-"
                    onclick="cancelTryOut('PUTapi-rutinas--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-rutinas--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/rutinas/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-rutinas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-rutinas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-rutinas--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the rutina. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PUTapi-rutinas--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="PUTapi-rutinas--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-rutinas--id-">PATCH api/rutinas/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-rutinas--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/rutinas/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"descripcion\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutinas/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "descripcion": "architecto"
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-rutinas--id-">
</span>
<span id="execution-results-PATCHapi-rutinas--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-rutinas--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-rutinas--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-rutinas--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-rutinas--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-rutinas--id-" data-method="PATCH"
      data-path="api/rutinas/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-rutinas--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-rutinas--id-"
                    onclick="tryItOut('PATCHapi-rutinas--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-rutinas--id-"
                    onclick="cancelTryOut('PATCHapi-rutinas--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-rutinas--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/rutinas/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-rutinas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-rutinas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PATCHapi-rutinas--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the rutina. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PATCHapi-rutinas--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="PATCHapi-rutinas--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-rutinas--id-">DELETE api/rutinas/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-rutinas--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/rutinas/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutinas/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-rutinas--id-">
</span>
<span id="execution-results-DELETEapi-rutinas--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-rutinas--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-rutinas--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-rutinas--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-rutinas--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-rutinas--id-" data-method="DELETE"
      data-path="api/rutinas/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-rutinas--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-rutinas--id-"
                    onclick="tryItOut('DELETEapi-rutinas--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-rutinas--id-"
                    onclick="cancelTryOut('DELETEapi-rutinas--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-rutinas--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/rutinas/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-rutinas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-rutinas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-rutinas--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the rutina. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-dietas">GET api/dietas</h2>

<p>
</p>



<span id="example-requests-GETapi-dietas">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/dietas" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/dietas"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-dietas">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;dietas&quot;: [
        {
            &quot;id_dieta&quot;: 20799,
            &quot;nombre&quot;: &quot;sadfrsadfgsad&quot;,
            &quot;descripcion&quot;: &quot;Prueba Prueba&quot;
        },
        {
            &quot;id_dieta&quot;: 4,
            &quot;nombre&quot;: &quot;vitae&quot;,
            &quot;descripcion&quot;: &quot;Modi beatae praesentium numquam eum voluptates in quo.&quot;
        },
        {
            &quot;id_dieta&quot;: 66,
            &quot;nombre&quot;: &quot;ullam&quot;,
            &quot;descripcion&quot;: &quot;Dolore corrupti omnis eius.&quot;
        },
        {
            &quot;id_dieta&quot;: 9223372036854775807,
            &quot;nombre&quot;: &quot;alias&quot;,
            &quot;descripcion&quot;: &quot;In nemo porro dolores nostrum aspernatur.&quot;
        },
        {
            &quot;id_dieta&quot;: 86,
            &quot;nombre&quot;: &quot;error&quot;,
            &quot;descripcion&quot;: &quot;Voluptatem nihil voluptatibus consequatur aut et fuga amet.&quot;
        },
        {
            &quot;id_dieta&quot;: 99,
            &quot;nombre&quot;: &quot;ipsum&quot;,
            &quot;descripcion&quot;: &quot;Et odit alias ut sapiente repellendus.&quot;
        },
        {
            &quot;id_dieta&quot;: 0,
            &quot;nombre&quot;: &quot;molestias&quot;,
            &quot;descripcion&quot;: &quot;Velit ut nihil molestias qui ut.&quot;
        },
        {
            &quot;id_dieta&quot;: 0,
            &quot;nombre&quot;: &quot;non&quot;,
            &quot;descripcion&quot;: &quot;Voluptatem non quisquam laudantium soluta et pariatur rem est.&quot;
        },
        {
            &quot;id_dieta&quot;: 0,
            &quot;nombre&quot;: &quot;dolorem&quot;,
            &quot;descripcion&quot;: &quot;In perspiciatis enim id quisquam beatae.&quot;
        },
        {
            &quot;id_dieta&quot;: 0,
            &quot;nombre&quot;: &quot;incidunt&quot;,
            &quot;descripcion&quot;: &quot;Et pariatur animi impedit velit.&quot;
        },
        {
            &quot;id_dieta&quot;: 0,
            &quot;nombre&quot;: &quot;Gloria Pepe&quot;,
            &quot;descripcion&quot;: &quot;Grasas saturadas&quot;
        },
        {
            &quot;id_dieta&quot;: 0,
            &quot;nombre&quot;: &quot;harum&quot;,
            &quot;descripcion&quot;: &quot;Aliquid optio maiores est quo velit.&quot;
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-dietas" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-dietas"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-dietas"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-dietas" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-dietas">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-dietas" data-method="GET"
      data-path="api/dietas"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-dietas', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-dietas"
                    onclick="tryItOut('GETapi-dietas');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-dietas"
                    onclick="cancelTryOut('GETapi-dietas');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-dietas"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/dietas</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-dietas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-dietas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-dietas--id-">GET api/dietas/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-dietas--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/dietas/20799" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/dietas/20799"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-dietas--id-">
            <blockquote>
            <p>Example response (404):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;message&quot;: &quot;Dieta no encontrada&quot;,
    &quot;status&quot;: 404
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-dietas--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-dietas--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-dietas--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-dietas--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-dietas--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-dietas--id-" data-method="GET"
      data-path="api/dietas/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-dietas--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-dietas--id-"
                    onclick="tryItOut('GETapi-dietas--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-dietas--id-"
                    onclick="cancelTryOut('GETapi-dietas--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-dietas--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/dietas/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-dietas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-dietas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-dietas--id-"
               value="20799"
               data-component="url">
    <br>
<p>The ID of the dieta. Example: <code>20799</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-dietas--id_dieta--alimentos">GET api/dietas/{id_dieta}/alimentos</h2>

<p>
</p>



<span id="example-requests-GETapi-dietas--id_dieta--alimentos">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/dietas/20799/alimentos" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/dietas/20799/alimentos"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-dietas--id_dieta--alimentos">
            <blockquote>
            <p>Example response (404):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;message&quot;: &quot;No se encontraron registros para esta dieta&quot;,
    &quot;status&quot;: 404
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-dietas--id_dieta--alimentos" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-dietas--id_dieta--alimentos"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-dietas--id_dieta--alimentos"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-dietas--id_dieta--alimentos" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-dietas--id_dieta--alimentos">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-dietas--id_dieta--alimentos" data-method="GET"
      data-path="api/dietas/{id_dieta}/alimentos"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-dietas--id_dieta--alimentos', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-dietas--id_dieta--alimentos"
                    onclick="tryItOut('GETapi-dietas--id_dieta--alimentos');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-dietas--id_dieta--alimentos"
                    onclick="cancelTryOut('GETapi-dietas--id_dieta--alimentos');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-dietas--id_dieta--alimentos"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/dietas/{id_dieta}/alimentos</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-dietas--id_dieta--alimentos"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-dietas--id_dieta--alimentos"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id_dieta"                data-endpoint="GETapi-dietas--id_dieta--alimentos"
               value="20799"
               data-component="url">
    <br>
<p>Example: <code>20799</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-dietas">POST api/dietas</h2>

<p>
</p>



<span id="example-requests-POSTapi-dietas">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/dietas" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_dieta\": \"architecto\",
    \"nombre\": \"n\",
    \"descripcion\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/dietas"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_dieta": "architecto",
    "nombre": "n",
    "descripcion": "architecto"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-dietas">
</span>
<span id="execution-results-POSTapi-dietas" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-dietas"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-dietas"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-dietas" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-dietas">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-dietas" data-method="POST"
      data-path="api/dietas"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-dietas', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-dietas"
                    onclick="tryItOut('POSTapi-dietas');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-dietas"
                    onclick="cancelTryOut('POSTapi-dietas');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-dietas"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/dietas</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-dietas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-dietas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="POSTapi-dietas"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="POSTapi-dietas"
               value="n"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>n</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="POSTapi-dietas"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-dietas--id-">PUT api/dietas/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-dietas--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/dietas/20799" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"descripcion\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/dietas/20799"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "descripcion": "architecto"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-dietas--id-">
</span>
<span id="execution-results-PUTapi-dietas--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-dietas--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-dietas--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-dietas--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-dietas--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-dietas--id-" data-method="PUT"
      data-path="api/dietas/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-dietas--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-dietas--id-"
                    onclick="tryItOut('PUTapi-dietas--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-dietas--id-"
                    onclick="cancelTryOut('PUTapi-dietas--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-dietas--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/dietas/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-dietas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-dietas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-dietas--id-"
               value="20799"
               data-component="url">
    <br>
<p>The ID of the dieta. Example: <code>20799</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PUTapi-dietas--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="PUTapi-dietas--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-dietas--id-">PATCH api/dietas/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-dietas--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/dietas/20799" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"descripcion\": \"architecto\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/dietas/20799"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "descripcion": "architecto"
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-dietas--id-">
</span>
<span id="execution-results-PATCHapi-dietas--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-dietas--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-dietas--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-dietas--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-dietas--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-dietas--id-" data-method="PATCH"
      data-path="api/dietas/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-dietas--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-dietas--id-"
                    onclick="tryItOut('PATCHapi-dietas--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-dietas--id-"
                    onclick="cancelTryOut('PATCHapi-dietas--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-dietas--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/dietas/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-dietas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-dietas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PATCHapi-dietas--id-"
               value="20799"
               data-component="url">
    <br>
<p>The ID of the dieta. Example: <code>20799</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PATCHapi-dietas--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="PATCHapi-dietas--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-dietas--id-">DELETE api/dietas/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-dietas--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/dietas/20799" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/dietas/20799"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-dietas--id-">
</span>
<span id="execution-results-DELETEapi-dietas--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-dietas--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-dietas--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-dietas--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-dietas--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-dietas--id-" data-method="DELETE"
      data-path="api/dietas/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-dietas--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-dietas--id-"
                    onclick="tryItOut('DELETEapi-dietas--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-dietas--id-"
                    onclick="cancelTryOut('DELETEapi-dietas--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-dietas--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/dietas/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-dietas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-dietas--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-dietas--id-"
               value="20799"
               data-component="url">
    <br>
<p>The ID of the dieta. Example: <code>20799</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-ejercicios">GET api/ejercicios</h2>

<p>
</p>



<span id="example-requests-GETapi-ejercicios">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/ejercicios" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ejercicios"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-ejercicios">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;ejercicios&quot;: [
        {
            &quot;id_ejercicio&quot;: 1,
            &quot;nombre&quot;: &quot;consequatur&quot;,
            &quot;descripcion&quot;: &quot;Sit adipisci molestiae vero explicabo natus.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/00bb88?text=exercise+aut&quot;,
            &quot;video_url&quot;: &quot;https://lang.com/natus-quia-eum-est-exercitationem-perspiciatis-fuga-deleniti-non.html&quot;,
            &quot;grupo_muscular&quot;: &quot;Piernas&quot;
        },
        {
            &quot;id_ejercicio&quot;: 2,
            &quot;nombre&quot;: &quot;quia&quot;,
            &quot;descripcion&quot;: &quot;Asperiores est repellendus aspernatur rem blanditiis.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/004444?text=exercise+dolores&quot;,
            &quot;video_url&quot;: &quot;http://www.hansen.net/&quot;,
            &quot;grupo_muscular&quot;: &quot;Espalda&quot;
        },
        {
            &quot;id_ejercicio&quot;: 3,
            &quot;nombre&quot;: &quot;nobis&quot;,
            &quot;descripcion&quot;: &quot;Repellat blanditiis illum ad consequatur harum qui.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/0077cc?text=exercise+quia&quot;,
            &quot;video_url&quot;: &quot;http://jerde.info/magnam-nihil-eum-assumenda-non-mollitia-fuga-quia-molestiae.html&quot;,
            &quot;grupo_muscular&quot;: &quot;Espalda&quot;
        },
        {
            &quot;id_ejercicio&quot;: 4,
            &quot;nombre&quot;: &quot;quam&quot;,
            &quot;descripcion&quot;: &quot;Minima quibusdam mollitia et ullam.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/003399?text=exercise+amet&quot;,
            &quot;video_url&quot;: &quot;http://collins.biz/autem-sed-et-eos-repellat-unde&quot;,
            &quot;grupo_muscular&quot;: &quot;Piernas&quot;
        },
        {
            &quot;id_ejercicio&quot;: 5,
            &quot;nombre&quot;: &quot;libero&quot;,
            &quot;descripcion&quot;: &quot;Quo dolorem possimus atque consequatur ut sequi voluptatem.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/009955?text=exercise+eos&quot;,
            &quot;video_url&quot;: &quot;http://kerluke.org/&quot;,
            &quot;grupo_muscular&quot;: &quot;Piernas&quot;
        },
        {
            &quot;id_ejercicio&quot;: 6,
            &quot;nombre&quot;: &quot;quam&quot;,
            &quot;descripcion&quot;: &quot;Dolor et unde dolorem ea ut.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/0077ee?text=exercise+nam&quot;,
            &quot;video_url&quot;: &quot;http://greenholt.com/iusto-ex-ab-maxime-sit-qui&quot;,
            &quot;grupo_muscular&quot;: &quot;Hombros&quot;
        },
        {
            &quot;id_ejercicio&quot;: 7,
            &quot;nombre&quot;: &quot;autem&quot;,
            &quot;descripcion&quot;: &quot;Et quis voluptatibus molestias.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/009933?text=exercise+unde&quot;,
            &quot;video_url&quot;: &quot;http://www.feest.com/&quot;,
            &quot;grupo_muscular&quot;: &quot;Hombros&quot;
        },
        {
            &quot;id_ejercicio&quot;: 8,
            &quot;nombre&quot;: &quot;ut&quot;,
            &quot;descripcion&quot;: &quot;Et nihil facilis asperiores nesciunt est voluptate minima dolorem.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/0099cc?text=exercise+enim&quot;,
            &quot;video_url&quot;: &quot;http://www.okeefe.com/&quot;,
            &quot;grupo_muscular&quot;: &quot;Espalda&quot;
        },
        {
            &quot;id_ejercicio&quot;: 9,
            &quot;nombre&quot;: &quot;consectetur&quot;,
            &quot;descripcion&quot;: &quot;Sapiente quidem recusandae vel consequatur debitis qui dolorum mollitia.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/00ff77?text=exercise+voluptate&quot;,
            &quot;video_url&quot;: &quot;https://www.fadel.info/non-rerum-voluptatem-earum-est&quot;,
            &quot;grupo_muscular&quot;: &quot;Hombros&quot;
        },
        {
            &quot;id_ejercicio&quot;: 10,
            &quot;nombre&quot;: &quot;aut&quot;,
            &quot;descripcion&quot;: &quot;Fugit autem est ex rem.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/007722?text=exercise+aut&quot;,
            &quot;video_url&quot;: &quot;http://cormier.com/laboriosam-veniam-aut-aut-minima-saepe-nihil.html&quot;,
            &quot;grupo_muscular&quot;: &quot;Espalda&quot;
        },
        {
            &quot;id_ejercicio&quot;: 11,
            &quot;nombre&quot;: &quot;corporis&quot;,
            &quot;descripcion&quot;: &quot;Optio ut modi odit.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/0066dd?text=exercise+eum&quot;,
            &quot;video_url&quot;: &quot;http://www.harvey.com/&quot;,
            &quot;grupo_muscular&quot;: &quot;Pecho&quot;
        },
        {
            &quot;id_ejercicio&quot;: 12,
            &quot;nombre&quot;: &quot;ut&quot;,
            &quot;descripcion&quot;: &quot;Omnis veniam quia magni porro a sed.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/00aa55?text=exercise+maiores&quot;,
            &quot;video_url&quot;: &quot;https://beahan.com/quasi-iusto-itaque-similique-voluptate-id-quasi.html&quot;,
            &quot;grupo_muscular&quot;: &quot;Brazos&quot;
        },
        {
            &quot;id_ejercicio&quot;: 13,
            &quot;nombre&quot;: &quot;aut&quot;,
            &quot;descripcion&quot;: &quot;Cumque optio quos voluptatum quo earum.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/0099ee?text=exercise+deserunt&quot;,
            &quot;video_url&quot;: &quot;http://www.koepp.biz/labore-aut-hic-eligendi-ullam-occaecati-at-non.html&quot;,
            &quot;grupo_muscular&quot;: &quot;Hombros&quot;
        },
        {
            &quot;id_ejercicio&quot;: 14,
            &quot;nombre&quot;: &quot;nostrum&quot;,
            &quot;descripcion&quot;: &quot;Vel quam maiores similique placeat nobis.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/00ff99?text=exercise+iure&quot;,
            &quot;video_url&quot;: &quot;http://klein.com/ut-illum-est-est-non-unde-consequatur&quot;,
            &quot;grupo_muscular&quot;: &quot;Hombros&quot;
        },
        {
            &quot;id_ejercicio&quot;: 15,
            &quot;nombre&quot;: &quot;ea&quot;,
            &quot;descripcion&quot;: &quot;Repellendus expedita incidunt molestiae a.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/00bb00?text=exercise+non&quot;,
            &quot;video_url&quot;: &quot;https://dickinson.biz/occaecati-nisi-dolore-quam-quis-id.html&quot;,
            &quot;grupo_muscular&quot;: &quot;Pecho&quot;
        },
        {
            &quot;id_ejercicio&quot;: 16,
            &quot;nombre&quot;: &quot;enim&quot;,
            &quot;descripcion&quot;: &quot;Vel minima non quis quisquam dicta reiciendis placeat et.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/0000ee?text=exercise+sapiente&quot;,
            &quot;video_url&quot;: &quot;http://greenfelder.biz/enim-eveniet-consequatur-ab-error-ut-tempora&quot;,
            &quot;grupo_muscular&quot;: &quot;Hombros&quot;
        },
        {
            &quot;id_ejercicio&quot;: 17,
            &quot;nombre&quot;: &quot;est&quot;,
            &quot;descripcion&quot;: &quot;Autem tenetur temporibus et ipsam.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/008844?text=exercise+et&quot;,
            &quot;video_url&quot;: &quot;http://www.huels.net/distinctio-fugit-et-animi-error-quod-nesciunt-sunt.html&quot;,
            &quot;grupo_muscular&quot;: &quot;Brazos&quot;
        },
        {
            &quot;id_ejercicio&quot;: 18,
            &quot;nombre&quot;: &quot;quia&quot;,
            &quot;descripcion&quot;: &quot;Voluptatem non voluptas quod in repudiandae expedita sint odit.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/00ddcc?text=exercise+sint&quot;,
            &quot;video_url&quot;: &quot;http://graham.com/&quot;,
            &quot;grupo_muscular&quot;: &quot;Pecho&quot;
        },
        {
            &quot;id_ejercicio&quot;: 19,
            &quot;nombre&quot;: &quot;voluptatem&quot;,
            &quot;descripcion&quot;: &quot;Qui soluta delectus facilis ea aut reiciendis aut.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/0000cc?text=exercise+id&quot;,
            &quot;video_url&quot;: &quot;https://www.dietrich.com/et-sed-dolores-expedita-aut-iste-atque-omnis&quot;,
            &quot;grupo_muscular&quot;: &quot;Espalda&quot;
        },
        {
            &quot;id_ejercicio&quot;: 20,
            &quot;nombre&quot;: &quot;cum&quot;,
            &quot;descripcion&quot;: &quot;Et consequatur tenetur provident non quibusdam libero totam.&quot;,
            &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/00cc33?text=exercise+ut&quot;,
            &quot;video_url&quot;: &quot;http://www.watsica.biz/nam-blanditiis-velit-eligendi-sint.html&quot;,
            &quot;grupo_muscular&quot;: &quot;Pecho&quot;
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-ejercicios" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-ejercicios"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-ejercicios"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-ejercicios" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-ejercicios">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-ejercicios" data-method="GET"
      data-path="api/ejercicios"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-ejercicios', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-ejercicios"
                    onclick="tryItOut('GETapi-ejercicios');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-ejercicios"
                    onclick="cancelTryOut('GETapi-ejercicios');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-ejercicios"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/ejercicios</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-ejercicios"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-ejercicios"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-ejercicios--id-">GET api/ejercicios/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-ejercicios--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/ejercicios/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ejercicios/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-ejercicios--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;ejercicio&quot;: {
        &quot;id_ejercicio&quot;: 1,
        &quot;nombre&quot;: &quot;consequatur&quot;,
        &quot;descripcion&quot;: &quot;Sit adipisci molestiae vero explicabo natus.&quot;,
        &quot;imagen_url&quot;: &quot;https://via.placeholder.com/640x480.png/00bb88?text=exercise+aut&quot;,
        &quot;video_url&quot;: &quot;https://lang.com/natus-quia-eum-est-exercitationem-perspiciatis-fuga-deleniti-non.html&quot;,
        &quot;grupo_muscular&quot;: &quot;Piernas&quot;
    },
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-ejercicios--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-ejercicios--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-ejercicios--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-ejercicios--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-ejercicios--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-ejercicios--id-" data-method="GET"
      data-path="api/ejercicios/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-ejercicios--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-ejercicios--id-"
                    onclick="tryItOut('GETapi-ejercicios--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-ejercicios--id-"
                    onclick="cancelTryOut('GETapi-ejercicios--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-ejercicios--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/ejercicios/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-ejercicios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-ejercicios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-ejercicios--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the ejercicio. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-ejercicios">POST api/ejercicios</h2>

<p>
</p>



<span id="example-requests-POSTapi-ejercicios">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/ejercicios" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"descripcion\": \"architecto\",
    \"imagen_url\": \"http:\\/\\/bailey.com\\/\",
    \"video_url\": \"http:\\/\\/rempel.com\\/sunt-nihil-accusantium-harum-mollitia\",
    \"grupo_muscular\": \"k\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ejercicios"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "descripcion": "architecto",
    "imagen_url": "http:\/\/bailey.com\/",
    "video_url": "http:\/\/rempel.com\/sunt-nihil-accusantium-harum-mollitia",
    "grupo_muscular": "k"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-ejercicios">
</span>
<span id="execution-results-POSTapi-ejercicios" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-ejercicios"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-ejercicios"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-ejercicios" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-ejercicios">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-ejercicios" data-method="POST"
      data-path="api/ejercicios"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-ejercicios', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-ejercicios"
                    onclick="tryItOut('POSTapi-ejercicios');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-ejercicios"
                    onclick="cancelTryOut('POSTapi-ejercicios');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-ejercicios"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/ejercicios</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-ejercicios"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-ejercicios"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="POSTapi-ejercicios"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="POSTapi-ejercicios"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>imagen_url</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="imagen_url"                data-endpoint="POSTapi-ejercicios"
               value="http://bailey.com/"
               data-component="body">
    <br>
<p>Must be a valid URL. Example: <code>http://bailey.com/</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>video_url</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="video_url"                data-endpoint="POSTapi-ejercicios"
               value="http://rempel.com/sunt-nihil-accusantium-harum-mollitia"
               data-component="body">
    <br>
<p>Must be a valid URL. Example: <code>http://rempel.com/sunt-nihil-accusantium-harum-mollitia</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>grupo_muscular</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="grupo_muscular"                data-endpoint="POSTapi-ejercicios"
               value="k"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>k</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-ejercicios--id-">PUT api/ejercicios/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-ejercicios--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/ejercicios/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"descripcion\": \"architecto\",
    \"imagen_url\": \"http:\\/\\/bailey.com\\/\",
    \"video_url\": \"http:\\/\\/rempel.com\\/sunt-nihil-accusantium-harum-mollitia\",
    \"grupo_muscular\": \"k\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ejercicios/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "descripcion": "architecto",
    "imagen_url": "http:\/\/bailey.com\/",
    "video_url": "http:\/\/rempel.com\/sunt-nihil-accusantium-harum-mollitia",
    "grupo_muscular": "k"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-ejercicios--id-">
</span>
<span id="execution-results-PUTapi-ejercicios--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-ejercicios--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-ejercicios--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-ejercicios--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-ejercicios--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-ejercicios--id-" data-method="PUT"
      data-path="api/ejercicios/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-ejercicios--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-ejercicios--id-"
                    onclick="tryItOut('PUTapi-ejercicios--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-ejercicios--id-"
                    onclick="cancelTryOut('PUTapi-ejercicios--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-ejercicios--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/ejercicios/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-ejercicios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-ejercicios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-ejercicios--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the ejercicio. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PUTapi-ejercicios--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="PUTapi-ejercicios--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>imagen_url</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="imagen_url"                data-endpoint="PUTapi-ejercicios--id-"
               value="http://bailey.com/"
               data-component="body">
    <br>
<p>Must be a valid URL. Example: <code>http://bailey.com/</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>video_url</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="video_url"                data-endpoint="PUTapi-ejercicios--id-"
               value="http://rempel.com/sunt-nihil-accusantium-harum-mollitia"
               data-component="body">
    <br>
<p>Must be a valid URL. Example: <code>http://rempel.com/sunt-nihil-accusantium-harum-mollitia</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>grupo_muscular</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="grupo_muscular"                data-endpoint="PUTapi-ejercicios--id-"
               value="k"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>k</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-ejercicios--id-">PATCH api/ejercicios/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-ejercicios--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/ejercicios/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"descripcion\": \"architecto\",
    \"imagen_url\": \"http:\\/\\/bailey.com\\/\",
    \"video_url\": \"http:\\/\\/rempel.com\\/sunt-nihil-accusantium-harum-mollitia\",
    \"grupo_muscular\": \"k\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ejercicios/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "descripcion": "architecto",
    "imagen_url": "http:\/\/bailey.com\/",
    "video_url": "http:\/\/rempel.com\/sunt-nihil-accusantium-harum-mollitia",
    "grupo_muscular": "k"
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-ejercicios--id-">
</span>
<span id="execution-results-PATCHapi-ejercicios--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-ejercicios--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-ejercicios--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-ejercicios--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-ejercicios--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-ejercicios--id-" data-method="PATCH"
      data-path="api/ejercicios/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-ejercicios--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-ejercicios--id-"
                    onclick="tryItOut('PATCHapi-ejercicios--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-ejercicios--id-"
                    onclick="cancelTryOut('PATCHapi-ejercicios--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-ejercicios--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/ejercicios/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-ejercicios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-ejercicios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PATCHapi-ejercicios--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the ejercicio. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="PATCHapi-ejercicios--id-"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="PATCHapi-ejercicios--id-"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>imagen_url</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="imagen_url"                data-endpoint="PATCHapi-ejercicios--id-"
               value="http://bailey.com/"
               data-component="body">
    <br>
<p>Must be a valid URL. Example: <code>http://bailey.com/</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>video_url</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="video_url"                data-endpoint="PATCHapi-ejercicios--id-"
               value="http://rempel.com/sunt-nihil-accusantium-harum-mollitia"
               data-component="body">
    <br>
<p>Must be a valid URL. Example: <code>http://rempel.com/sunt-nihil-accusantium-harum-mollitia</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>grupo_muscular</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="grupo_muscular"                data-endpoint="PATCHapi-ejercicios--id-"
               value="k"
               data-component="body">
    <br>
<p>Must not be greater than 100 characters. Example: <code>k</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-ejercicios--id-">DELETE api/ejercicios/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-ejercicios--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/ejercicios/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/ejercicios/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-ejercicios--id-">
</span>
<span id="execution-results-DELETEapi-ejercicios--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-ejercicios--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-ejercicios--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-ejercicios--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-ejercicios--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-ejercicios--id-" data-method="DELETE"
      data-path="api/ejercicios/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-ejercicios--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-ejercicios--id-"
                    onclick="tryItOut('DELETEapi-ejercicios--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-ejercicios--id-"
                    onclick="cancelTryOut('DELETEapi-ejercicios--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-ejercicios--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/ejercicios/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-ejercicios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-ejercicios--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-ejercicios--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the ejercicio. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-traslados">GET api/traslados</h2>

<p>
</p>



<span id="example-requests-GETapi-traslados">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/traslados" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/traslados"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-traslados">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;traslados&quot;: [
        {
            &quot;id_traslado&quot;: 1,
            &quot;id_usuario&quot;: &quot;e7b57067-9933-35ae-830e-cf67b1984ddc&quot;,
            &quot;cod_ciudad_origen&quot;: 7,
            &quot;cod_ciudad_destino&quot;: 8,
            &quot;fecha_solicitud&quot;: &quot;2020-07-24&quot;
        },
        {
            &quot;id_traslado&quot;: 2,
            &quot;id_usuario&quot;: &quot;fbd4d90a-fe42-3ff9-8a2f-8c0da69db00f&quot;,
            &quot;cod_ciudad_origen&quot;: 10,
            &quot;cod_ciudad_destino&quot;: 5,
            &quot;fecha_solicitud&quot;: &quot;1999-07-04&quot;
        },
        {
            &quot;id_traslado&quot;: 3,
            &quot;id_usuario&quot;: &quot;d628af92-b2cc-3784-842c-5bcc967c67dd&quot;,
            &quot;cod_ciudad_origen&quot;: 10,
            &quot;cod_ciudad_destino&quot;: 8,
            &quot;fecha_solicitud&quot;: &quot;1984-03-05&quot;
        },
        {
            &quot;id_traslado&quot;: 4,
            &quot;id_usuario&quot;: &quot;d9d7abac-6cfc-31eb-a2ed-7937dd1d1fa5&quot;,
            &quot;cod_ciudad_origen&quot;: 8,
            &quot;cod_ciudad_destino&quot;: 1,
            &quot;fecha_solicitud&quot;: &quot;2005-07-03&quot;
        },
        {
            &quot;id_traslado&quot;: 5,
            &quot;id_usuario&quot;: &quot;7cb76f51-f1ad-3cea-9239-9373642effb6&quot;,
            &quot;cod_ciudad_origen&quot;: 8,
            &quot;cod_ciudad_destino&quot;: 9,
            &quot;fecha_solicitud&quot;: &quot;1986-10-28&quot;
        },
        {
            &quot;id_traslado&quot;: 6,
            &quot;id_usuario&quot;: &quot;d9d7abac-6cfc-31eb-a2ed-7937dd1d1fa5&quot;,
            &quot;cod_ciudad_origen&quot;: 8,
            &quot;cod_ciudad_destino&quot;: 2,
            &quot;fecha_solicitud&quot;: &quot;1990-08-20&quot;
        },
        {
            &quot;id_traslado&quot;: 7,
            &quot;id_usuario&quot;: &quot;bc1458f7-faf0-3f33-b0dc-f2e5f2bba623&quot;,
            &quot;cod_ciudad_origen&quot;: 1,
            &quot;cod_ciudad_destino&quot;: 3,
            &quot;fecha_solicitud&quot;: &quot;2003-01-20&quot;
        },
        {
            &quot;id_traslado&quot;: 8,
            &quot;id_usuario&quot;: &quot;d9d7abac-6cfc-31eb-a2ed-7937dd1d1fa5&quot;,
            &quot;cod_ciudad_origen&quot;: 4,
            &quot;cod_ciudad_destino&quot;: 6,
            &quot;fecha_solicitud&quot;: &quot;2007-09-06&quot;
        },
        {
            &quot;id_traslado&quot;: 9,
            &quot;id_usuario&quot;: &quot;e62e921d-ede6-3bdf-b471-dc876d695600&quot;,
            &quot;cod_ciudad_origen&quot;: 3,
            &quot;cod_ciudad_destino&quot;: 5,
            &quot;fecha_solicitud&quot;: &quot;1995-07-21&quot;
        },
        {
            &quot;id_traslado&quot;: 10,
            &quot;id_usuario&quot;: &quot;e62e921d-ede6-3bdf-b471-dc876d695600&quot;,
            &quot;cod_ciudad_origen&quot;: 8,
            &quot;cod_ciudad_destino&quot;: 2,
            &quot;fecha_solicitud&quot;: &quot;2003-11-26&quot;
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-traslados" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-traslados"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-traslados"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-traslados" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-traslados">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-traslados" data-method="GET"
      data-path="api/traslados"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-traslados', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-traslados"
                    onclick="tryItOut('GETapi-traslados');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-traslados"
                    onclick="cancelTryOut('GETapi-traslados');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-traslados"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/traslados</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-traslados"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-traslados"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-traslados--id-">GET api/traslados/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-traslados--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/traslados/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/traslados/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-traslados--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;traslado&quot;: {
        &quot;id_traslado&quot;: 1,
        &quot;id_usuario&quot;: &quot;e7b57067-9933-35ae-830e-cf67b1984ddc&quot;,
        &quot;cod_ciudad_origen&quot;: 7,
        &quot;cod_ciudad_destino&quot;: 8,
        &quot;fecha_solicitud&quot;: &quot;2020-07-24&quot;
    },
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-traslados--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-traslados--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-traslados--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-traslados--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-traslados--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-traslados--id-" data-method="GET"
      data-path="api/traslados/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-traslados--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-traslados--id-"
                    onclick="tryItOut('GETapi-traslados--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-traslados--id-"
                    onclick="cancelTryOut('GETapi-traslados--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-traslados--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/traslados/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-traslados--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-traslados--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-traslados--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the traslado. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-traslados">POST api/traslados</h2>

<p>
</p>



<span id="example-requests-POSTapi-traslados">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/traslados" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_usuario\": \"architecto\",
    \"cod_ciudad_origen\": \"architecto\",
    \"cod_ciudad_destino\": \"architecto\",
    \"fecha_solicitud\": \"2025-04-29T16:21:50\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/traslados"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_usuario": "architecto",
    "cod_ciudad_origen": "architecto",
    "cod_ciudad_destino": "architecto",
    "fecha_solicitud": "2025-04-29T16:21:50"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-traslados">
</span>
<span id="execution-results-POSTapi-traslados" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-traslados"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-traslados"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-traslados" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-traslados">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-traslados" data-method="POST"
      data-path="api/traslados"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-traslados', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-traslados"
                    onclick="tryItOut('POSTapi-traslados');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-traslados"
                    onclick="cancelTryOut('POSTapi-traslados');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-traslados"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/traslados</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-traslados"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-traslados"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="POSTapi-traslados"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_usuario</code> of an existing record in the usuario table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cod_ciudad_origen</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="cod_ciudad_origen"                data-endpoint="POSTapi-traslados"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>cod_ciudad</code> of an existing record in the ciudad table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cod_ciudad_destino</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="cod_ciudad_destino"                data-endpoint="POSTapi-traslados"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>cod_ciudad</code> of an existing record in the ciudad table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fecha_solicitud</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="fecha_solicitud"                data-endpoint="POSTapi-traslados"
               value="2025-04-29T16:21:50"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2025-04-29T16:21:50</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-traslados--id-">PUT api/traslados/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-traslados--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/traslados/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_usuario\": \"architecto\",
    \"cod_ciudad_origen\": \"architecto\",
    \"cod_ciudad_destino\": \"architecto\",
    \"fecha_solicitud\": \"2025-04-29T16:21:50\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/traslados/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_usuario": "architecto",
    "cod_ciudad_origen": "architecto",
    "cod_ciudad_destino": "architecto",
    "fecha_solicitud": "2025-04-29T16:21:50"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-traslados--id-">
</span>
<span id="execution-results-PUTapi-traslados--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-traslados--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-traslados--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-traslados--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-traslados--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-traslados--id-" data-method="PUT"
      data-path="api/traslados/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-traslados--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-traslados--id-"
                    onclick="tryItOut('PUTapi-traslados--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-traslados--id-"
                    onclick="cancelTryOut('PUTapi-traslados--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-traslados--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/traslados/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-traslados--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-traslados--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-traslados--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the traslado. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="PUTapi-traslados--id-"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_usuario</code> of an existing record in the usuario table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cod_ciudad_origen</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="cod_ciudad_origen"                data-endpoint="PUTapi-traslados--id-"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>cod_ciudad</code> of an existing record in the ciudad table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cod_ciudad_destino</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="cod_ciudad_destino"                data-endpoint="PUTapi-traslados--id-"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>cod_ciudad</code> of an existing record in the ciudad table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fecha_solicitud</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="fecha_solicitud"                data-endpoint="PUTapi-traslados--id-"
               value="2025-04-29T16:21:50"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2025-04-29T16:21:50</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-traslados--id-">PATCH api/traslados/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-traslados--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/traslados/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"fecha_solicitud\": \"2025-04-29T16:21:50\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/traslados/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "fecha_solicitud": "2025-04-29T16:21:50"
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-traslados--id-">
</span>
<span id="execution-results-PATCHapi-traslados--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-traslados--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-traslados--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-traslados--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-traslados--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-traslados--id-" data-method="PATCH"
      data-path="api/traslados/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-traslados--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-traslados--id-"
                    onclick="tryItOut('PATCHapi-traslados--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-traslados--id-"
                    onclick="cancelTryOut('PATCHapi-traslados--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-traslados--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/traslados/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-traslados--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-traslados--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PATCHapi-traslados--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the traslado. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="PATCHapi-traslados--id-"
               value=""
               data-component="body">
    <br>
<p>The <code>id_usuario</code> of an existing record in the usuario table.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cod_ciudad_origen</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="cod_ciudad_origen"                data-endpoint="PATCHapi-traslados--id-"
               value=""
               data-component="body">
    <br>
<p>The <code>cod_ciudad</code> of an existing record in the ciudad table.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cod_ciudad_destino</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="cod_ciudad_destino"                data-endpoint="PATCHapi-traslados--id-"
               value=""
               data-component="body">
    <br>
<p>The <code>cod_ciudad</code> of an existing record in the ciudad table.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fecha_solicitud</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="fecha_solicitud"                data-endpoint="PATCHapi-traslados--id-"
               value="2025-04-29T16:21:50"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2025-04-29T16:21:50</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-traslados--id-">DELETE api/traslados/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-traslados--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/traslados/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/traslados/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-traslados--id-">
</span>
<span id="execution-results-DELETEapi-traslados--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-traslados--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-traslados--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-traslados--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-traslados--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-traslados--id-" data-method="DELETE"
      data-path="api/traslados/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-traslados--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-traslados--id-"
                    onclick="tryItOut('DELETEapi-traslados--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-traslados--id-"
                    onclick="cancelTryOut('DELETEapi-traslados--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-traslados--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/traslados/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-traslados--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-traslados--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-traslados--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the traslado. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-usuario-dieta">GET api/usuario-dieta</h2>

<p>
</p>



<span id="example-requests-GETapi-usuario-dieta">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/usuario-dieta" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-dieta"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-usuario-dieta">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;usuario_dietas&quot;: [
        {
            &quot;id_usuario_dieta&quot;: 3,
            &quot;id_usuario&quot;: &quot;4a9e906f-bba1-462b-9353-87f35d13722e&quot;,
            &quot;id_dieta&quot;: &quot;e42231ae-e7d5-4a13-bf81-f4e92899f8a7&quot;,
            &quot;peso_usuario&quot;: &quot;75.00&quot;,
            &quot;altura_usuario&quot;: &quot;1.70&quot;,
            &quot;actividad_fisica&quot;: &quot;Ligero&quot;,
            &quot;objetivo&quot;: &quot;Perder&quot;,
            &quot;estado&quot;: &quot;Activa&quot;
        },
        {
            &quot;id_usuario_dieta&quot;: 5,
            &quot;id_usuario&quot;: &quot;3a10a348-cbe0-4adc-be92-6785a8978431&quot;,
            &quot;id_dieta&quot;: &quot;20799f13-1c1c-47ba-9158-301fe0d20775&quot;,
            &quot;peso_usuario&quot;: &quot;75.00&quot;,
            &quot;altura_usuario&quot;: &quot;1.70&quot;,
            &quot;actividad_fisica&quot;: &quot;Sedentario&quot;,
            &quot;objetivo&quot;: &quot;Perder&quot;,
            &quot;estado&quot;: &quot;Activa&quot;
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-usuario-dieta" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-usuario-dieta"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-usuario-dieta"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-usuario-dieta" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-usuario-dieta">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-usuario-dieta" data-method="GET"
      data-path="api/usuario-dieta"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-usuario-dieta', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-usuario-dieta"
                    onclick="tryItOut('GETapi-usuario-dieta');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-usuario-dieta"
                    onclick="cancelTryOut('GETapi-usuario-dieta');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-usuario-dieta"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/usuario-dieta</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-usuario-dieta"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-usuario-dieta"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-usuario-dieta--id-">GET api/usuario-dieta/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-usuario-dieta--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/usuario-dieta/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-dieta/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-usuario-dieta--id-">
            <blockquote>
            <p>Example response (404):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;message&quot;: &quot;Registro de usuario_dieta no encontrado&quot;,
    &quot;status&quot;: 404
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-usuario-dieta--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-usuario-dieta--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-usuario-dieta--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-usuario-dieta--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-usuario-dieta--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-usuario-dieta--id-" data-method="GET"
      data-path="api/usuario-dieta/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-usuario-dieta--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-usuario-dieta--id-"
                    onclick="tryItOut('GETapi-usuario-dieta--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-usuario-dieta--id-"
                    onclick="cancelTryOut('GETapi-usuario-dieta--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-usuario-dieta--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/usuario-dieta/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-usuario-dieta--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-usuario-dieta--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="GETapi-usuario-dieta--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the usuario dietum. Example: <code>architecto</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-usuario-dieta">POST api/usuario-dieta</h2>

<p>
</p>



<span id="example-requests-POSTapi-usuario-dieta">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/usuario-dieta" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_usuario\": \"architecto\",
    \"id_dieta\": \"architecto\",
    \"peso_usuario\": 4326.41688,
    \"altura_usuario\": 4326.41688,
    \"actividad_fisica\": \"Activo\",
    \"objetivo\": \"Mantener\",
    \"estado\": \"Activa\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-dieta"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_usuario": "architecto",
    "id_dieta": "architecto",
    "peso_usuario": 4326.41688,
    "altura_usuario": 4326.41688,
    "actividad_fisica": "Activo",
    "objetivo": "Mantener",
    "estado": "Activa"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-usuario-dieta">
</span>
<span id="execution-results-POSTapi-usuario-dieta" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-usuario-dieta"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-usuario-dieta"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-usuario-dieta" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-usuario-dieta">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-usuario-dieta" data-method="POST"
      data-path="api/usuario-dieta"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-usuario-dieta', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-usuario-dieta"
                    onclick="tryItOut('POSTapi-usuario-dieta');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-usuario-dieta"
                    onclick="cancelTryOut('POSTapi-usuario-dieta');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-usuario-dieta"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/usuario-dieta</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-usuario-dieta"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-usuario-dieta"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="POSTapi-usuario-dieta"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_usuario</code> of an existing record in the usuario table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="POSTapi-usuario-dieta"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_dieta</code> of an existing record in the dieta table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>peso_usuario</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="peso_usuario"                data-endpoint="POSTapi-usuario-dieta"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>altura_usuario</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="altura_usuario"                data-endpoint="POSTapi-usuario-dieta"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>actividad_fisica</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="actividad_fisica"                data-endpoint="POSTapi-usuario-dieta"
               value="Activo"
               data-component="body">
    <br>
<p>Example: <code>Activo</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Sedentario</code></li> <li><code>Ligero</code></li> <li><code>Moderado</code></li> <li><code>Activo</code></li> <li><code>Muy-activo</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>objetivo</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="objetivo"                data-endpoint="POSTapi-usuario-dieta"
               value="Mantener"
               data-component="body">
    <br>
<p>Example: <code>Mantener</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Perder</code></li> <li><code>Mantener</code></li> <li><code>Ganar</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>estado</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="estado"                data-endpoint="POSTapi-usuario-dieta"
               value="Activa"
               data-component="body">
    <br>
<p>Example: <code>Activa</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Activa</code></li> <li><code>Finalizada</code></li></ul>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-usuario-dieta--id-">PUT api/usuario-dieta/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-usuario-dieta--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/usuario-dieta/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_usuario\": \"architecto\",
    \"id_dieta\": \"architecto\",
    \"peso_usuario\": 4326.41688,
    \"altura_usuario\": 4326.41688,
    \"actividad_fisica\": \"Muy-activo\",
    \"objetivo\": \"Perder\",
    \"estado\": \"Finalizada\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-dieta/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_usuario": "architecto",
    "id_dieta": "architecto",
    "peso_usuario": 4326.41688,
    "altura_usuario": 4326.41688,
    "actividad_fisica": "Muy-activo",
    "objetivo": "Perder",
    "estado": "Finalizada"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-usuario-dieta--id-">
</span>
<span id="execution-results-PUTapi-usuario-dieta--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-usuario-dieta--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-usuario-dieta--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-usuario-dieta--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-usuario-dieta--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-usuario-dieta--id-" data-method="PUT"
      data-path="api/usuario-dieta/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-usuario-dieta--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-usuario-dieta--id-"
                    onclick="tryItOut('PUTapi-usuario-dieta--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-usuario-dieta--id-"
                    onclick="cancelTryOut('PUTapi-usuario-dieta--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-usuario-dieta--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/usuario-dieta/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-usuario-dieta--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-usuario-dieta--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="PUTapi-usuario-dieta--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the usuario dietum. Example: <code>architecto</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="PUTapi-usuario-dieta--id-"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_usuario</code> of an existing record in the usuario table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="PUTapi-usuario-dieta--id-"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_dieta</code> of an existing record in the dieta table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>peso_usuario</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="peso_usuario"                data-endpoint="PUTapi-usuario-dieta--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>altura_usuario</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="altura_usuario"                data-endpoint="PUTapi-usuario-dieta--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>actividad_fisica</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="actividad_fisica"                data-endpoint="PUTapi-usuario-dieta--id-"
               value="Muy-activo"
               data-component="body">
    <br>
<p>Example: <code>Muy-activo</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Sedentario</code></li> <li><code>Ligero</code></li> <li><code>Moderado</code></li> <li><code>Activo</code></li> <li><code>Muy-activo</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>objetivo</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="objetivo"                data-endpoint="PUTapi-usuario-dieta--id-"
               value="Perder"
               data-component="body">
    <br>
<p>Example: <code>Perder</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Perder</code></li> <li><code>Mantener</code></li> <li><code>Ganar</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>estado</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="estado"                data-endpoint="PUTapi-usuario-dieta--id-"
               value="Finalizada"
               data-component="body">
    <br>
<p>Example: <code>Finalizada</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Activa</code></li> <li><code>Finalizada</code></li></ul>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-usuario-dieta--id-">PATCH api/usuario-dieta/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-usuario-dieta--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/usuario-dieta/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"peso_usuario\": 4326.41688,
    \"altura_usuario\": 4326.41688,
    \"actividad_fisica\": \"Ligero\",
    \"objetivo\": \"Ganar\",
    \"estado\": \"Activa\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-dieta/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "peso_usuario": 4326.41688,
    "altura_usuario": 4326.41688,
    "actividad_fisica": "Ligero",
    "objetivo": "Ganar",
    "estado": "Activa"
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-usuario-dieta--id-">
</span>
<span id="execution-results-PATCHapi-usuario-dieta--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-usuario-dieta--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-usuario-dieta--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-usuario-dieta--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-usuario-dieta--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-usuario-dieta--id-" data-method="PATCH"
      data-path="api/usuario-dieta/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-usuario-dieta--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-usuario-dieta--id-"
                    onclick="tryItOut('PATCHapi-usuario-dieta--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-usuario-dieta--id-"
                    onclick="cancelTryOut('PATCHapi-usuario-dieta--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-usuario-dieta--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/usuario-dieta/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-usuario-dieta--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-usuario-dieta--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="PATCHapi-usuario-dieta--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the usuario dietum. Example: <code>architecto</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="PATCHapi-usuario-dieta--id-"
               value=""
               data-component="body">
    <br>
<p>The <code>id_usuario</code> of an existing record in the usuario table.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="PATCHapi-usuario-dieta--id-"
               value=""
               data-component="body">
    <br>
<p>The <code>id_dieta</code> of an existing record in the dieta table.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>peso_usuario</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="peso_usuario"                data-endpoint="PATCHapi-usuario-dieta--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>altura_usuario</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="altura_usuario"                data-endpoint="PATCHapi-usuario-dieta--id-"
               value="4326.41688"
               data-component="body">
    <br>
<p>Example: <code>4326.41688</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>actividad_fisica</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="actividad_fisica"                data-endpoint="PATCHapi-usuario-dieta--id-"
               value="Ligero"
               data-component="body">
    <br>
<p>Example: <code>Ligero</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Sedentario</code></li> <li><code>Ligero</code></li> <li><code>Moderado</code></li> <li><code>Activo</code></li> <li><code>Muy-activo</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>objetivo</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="objetivo"                data-endpoint="PATCHapi-usuario-dieta--id-"
               value="Ganar"
               data-component="body">
    <br>
<p>Example: <code>Ganar</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Perder</code></li> <li><code>Mantener</code></li> <li><code>Ganar</code></li></ul>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>estado</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="estado"                data-endpoint="PATCHapi-usuario-dieta--id-"
               value="Activa"
               data-component="body">
    <br>
<p>Example: <code>Activa</code></p>
Must be one of:
<ul style="list-style-type: square;"><li><code>Activa</code></li> <li><code>Finalizada</code></li></ul>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-usuario-dieta--id-">DELETE api/usuario-dieta/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-usuario-dieta--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/usuario-dieta/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-dieta/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-usuario-dieta--id-">
</span>
<span id="execution-results-DELETEapi-usuario-dieta--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-usuario-dieta--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-usuario-dieta--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-usuario-dieta--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-usuario-dieta--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-usuario-dieta--id-" data-method="DELETE"
      data-path="api/usuario-dieta/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-usuario-dieta--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-usuario-dieta--id-"
                    onclick="tryItOut('DELETEapi-usuario-dieta--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-usuario-dieta--id-"
                    onclick="cancelTryOut('DELETEapi-usuario-dieta--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-usuario-dieta--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/usuario-dieta/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-usuario-dieta--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-usuario-dieta--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id"                data-endpoint="DELETEapi-usuario-dieta--id-"
               value="architecto"
               data-component="url">
    <br>
<p>The ID of the usuario dietum. Example: <code>architecto</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-rutina-ejercicio">GET api/rutina-ejercicio</h2>

<p>
</p>



<span id="example-requests-GETapi-rutina-ejercicio">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/rutina-ejercicio" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutina-ejercicio"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-rutina-ejercicio">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;rutina_ejercicios&quot;: [
        {
            &quot;id_rutina_ejercicio&quot;: 1,
            &quot;id_rutina&quot;: 11,
            &quot;id_ejercicio&quot;: 11,
            &quot;num_series&quot;: 4,
            &quot;num_repeticiones&quot;: 17
        },
        {
            &quot;id_rutina_ejercicio&quot;: 2,
            &quot;id_rutina&quot;: 12,
            &quot;id_ejercicio&quot;: 12,
            &quot;num_series&quot;: 1,
            &quot;num_repeticiones&quot;: 8
        },
        {
            &quot;id_rutina_ejercicio&quot;: 3,
            &quot;id_rutina&quot;: 13,
            &quot;id_ejercicio&quot;: 13,
            &quot;num_series&quot;: 3,
            &quot;num_repeticiones&quot;: 18
        },
        {
            &quot;id_rutina_ejercicio&quot;: 4,
            &quot;id_rutina&quot;: 14,
            &quot;id_ejercicio&quot;: 14,
            &quot;num_series&quot;: 1,
            &quot;num_repeticiones&quot;: 12
        },
        {
            &quot;id_rutina_ejercicio&quot;: 5,
            &quot;id_rutina&quot;: 15,
            &quot;id_ejercicio&quot;: 15,
            &quot;num_series&quot;: 3,
            &quot;num_repeticiones&quot;: 9
        },
        {
            &quot;id_rutina_ejercicio&quot;: 6,
            &quot;id_rutina&quot;: 16,
            &quot;id_ejercicio&quot;: 16,
            &quot;num_series&quot;: 3,
            &quot;num_repeticiones&quot;: 7
        },
        {
            &quot;id_rutina_ejercicio&quot;: 7,
            &quot;id_rutina&quot;: 17,
            &quot;id_ejercicio&quot;: 17,
            &quot;num_series&quot;: 1,
            &quot;num_repeticiones&quot;: 6
        },
        {
            &quot;id_rutina_ejercicio&quot;: 8,
            &quot;id_rutina&quot;: 18,
            &quot;id_ejercicio&quot;: 18,
            &quot;num_series&quot;: 3,
            &quot;num_repeticiones&quot;: 12
        },
        {
            &quot;id_rutina_ejercicio&quot;: 9,
            &quot;id_rutina&quot;: 19,
            &quot;id_ejercicio&quot;: 19,
            &quot;num_series&quot;: 2,
            &quot;num_repeticiones&quot;: 9
        },
        {
            &quot;id_rutina_ejercicio&quot;: 10,
            &quot;id_rutina&quot;: 20,
            &quot;id_ejercicio&quot;: 20,
            &quot;num_series&quot;: 2,
            &quot;num_repeticiones&quot;: 18
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-rutina-ejercicio" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-rutina-ejercicio"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-rutina-ejercicio"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-rutina-ejercicio" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-rutina-ejercicio">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-rutina-ejercicio" data-method="GET"
      data-path="api/rutina-ejercicio"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-rutina-ejercicio', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-rutina-ejercicio"
                    onclick="tryItOut('GETapi-rutina-ejercicio');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-rutina-ejercicio"
                    onclick="cancelTryOut('GETapi-rutina-ejercicio');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-rutina-ejercicio"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/rutina-ejercicio</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-rutina-ejercicio"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-rutina-ejercicio"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-rutina-ejercicio--id-">GET api/rutina-ejercicio/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-rutina-ejercicio--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/rutina-ejercicio/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutina-ejercicio/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-rutina-ejercicio--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;rutina_ejercicio&quot;: {
        &quot;id_rutina_ejercicio&quot;: 1,
        &quot;id_rutina&quot;: 11,
        &quot;id_ejercicio&quot;: 11,
        &quot;num_series&quot;: 4,
        &quot;num_repeticiones&quot;: 17
    },
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-rutina-ejercicio--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-rutina-ejercicio--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-rutina-ejercicio--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-rutina-ejercicio--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-rutina-ejercicio--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-rutina-ejercicio--id-" data-method="GET"
      data-path="api/rutina-ejercicio/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-rutina-ejercicio--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-rutina-ejercicio--id-"
                    onclick="tryItOut('GETapi-rutina-ejercicio--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-rutina-ejercicio--id-"
                    onclick="cancelTryOut('GETapi-rutina-ejercicio--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-rutina-ejercicio--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/rutina-ejercicio/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-rutina-ejercicio--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-rutina-ejercicio--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-rutina-ejercicio--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the rutina ejercicio. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-rutina-ejercicio">POST api/rutina-ejercicio</h2>

<p>
</p>



<span id="example-requests-POSTapi-rutina-ejercicio">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/rutina-ejercicio" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_rutina\": \"architecto\",
    \"id_ejercicio\": \"architecto\",
    \"num_series\": 16,
    \"num_repeticiones\": 16
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutina-ejercicio"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_rutina": "architecto",
    "id_ejercicio": "architecto",
    "num_series": 16,
    "num_repeticiones": 16
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-rutina-ejercicio">
</span>
<span id="execution-results-POSTapi-rutina-ejercicio" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-rutina-ejercicio"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-rutina-ejercicio"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-rutina-ejercicio" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-rutina-ejercicio">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-rutina-ejercicio" data-method="POST"
      data-path="api/rutina-ejercicio"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-rutina-ejercicio', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-rutina-ejercicio"
                    onclick="tryItOut('POSTapi-rutina-ejercicio');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-rutina-ejercicio"
                    onclick="cancelTryOut('POSTapi-rutina-ejercicio');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-rutina-ejercicio"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/rutina-ejercicio</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-rutina-ejercicio"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-rutina-ejercicio"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_rutina</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_rutina"                data-endpoint="POSTapi-rutina-ejercicio"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_rutina</code> of an existing record in the rutina table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_ejercicio</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_ejercicio"                data-endpoint="POSTapi-rutina-ejercicio"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_ejercicio</code> of an existing record in the ejercicio table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>num_series</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="num_series"                data-endpoint="POSTapi-rutina-ejercicio"
               value="16"
               data-component="body">
    <br>
<p>Example: <code>16</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>num_repeticiones</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="num_repeticiones"                data-endpoint="POSTapi-rutina-ejercicio"
               value="16"
               data-component="body">
    <br>
<p>Example: <code>16</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-rutina-ejercicio--id-">PUT api/rutina-ejercicio/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-rutina-ejercicio--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/rutina-ejercicio/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_rutina\": \"architecto\",
    \"id_ejercicio\": \"architecto\",
    \"num_series\": 16,
    \"num_repeticiones\": 16
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutina-ejercicio/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_rutina": "architecto",
    "id_ejercicio": "architecto",
    "num_series": 16,
    "num_repeticiones": 16
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-rutina-ejercicio--id-">
</span>
<span id="execution-results-PUTapi-rutina-ejercicio--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-rutina-ejercicio--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-rutina-ejercicio--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-rutina-ejercicio--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-rutina-ejercicio--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-rutina-ejercicio--id-" data-method="PUT"
      data-path="api/rutina-ejercicio/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-rutina-ejercicio--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-rutina-ejercicio--id-"
                    onclick="tryItOut('PUTapi-rutina-ejercicio--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-rutina-ejercicio--id-"
                    onclick="cancelTryOut('PUTapi-rutina-ejercicio--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-rutina-ejercicio--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/rutina-ejercicio/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-rutina-ejercicio--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-rutina-ejercicio--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-rutina-ejercicio--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the rutina ejercicio. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_rutina</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_rutina"                data-endpoint="PUTapi-rutina-ejercicio--id-"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_rutina</code> of an existing record in the rutina table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_ejercicio</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_ejercicio"                data-endpoint="PUTapi-rutina-ejercicio--id-"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_ejercicio</code> of an existing record in the ejercicio table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>num_series</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="num_series"                data-endpoint="PUTapi-rutina-ejercicio--id-"
               value="16"
               data-component="body">
    <br>
<p>Example: <code>16</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>num_repeticiones</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="num_repeticiones"                data-endpoint="PUTapi-rutina-ejercicio--id-"
               value="16"
               data-component="body">
    <br>
<p>Example: <code>16</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-rutina-ejercicio--id-">PATCH api/rutina-ejercicio/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-rutina-ejercicio--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/rutina-ejercicio/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"num_series\": 16,
    \"num_repeticiones\": 16
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutina-ejercicio/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "num_series": 16,
    "num_repeticiones": 16
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-rutina-ejercicio--id-">
</span>
<span id="execution-results-PATCHapi-rutina-ejercicio--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-rutina-ejercicio--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-rutina-ejercicio--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-rutina-ejercicio--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-rutina-ejercicio--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-rutina-ejercicio--id-" data-method="PATCH"
      data-path="api/rutina-ejercicio/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-rutina-ejercicio--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-rutina-ejercicio--id-"
                    onclick="tryItOut('PATCHapi-rutina-ejercicio--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-rutina-ejercicio--id-"
                    onclick="cancelTryOut('PATCHapi-rutina-ejercicio--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-rutina-ejercicio--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/rutina-ejercicio/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-rutina-ejercicio--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-rutina-ejercicio--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PATCHapi-rutina-ejercicio--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the rutina ejercicio. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_rutina</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="id_rutina"                data-endpoint="PATCHapi-rutina-ejercicio--id-"
               value=""
               data-component="body">
    <br>
<p>The <code>id_rutina</code> of an existing record in the rutina table.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_ejercicio</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="id_ejercicio"                data-endpoint="PATCHapi-rutina-ejercicio--id-"
               value=""
               data-component="body">
    <br>
<p>The <code>id_ejercicio</code> of an existing record in the ejercicio table.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>num_series</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="num_series"                data-endpoint="PATCHapi-rutina-ejercicio--id-"
               value="16"
               data-component="body">
    <br>
<p>Example: <code>16</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>num_repeticiones</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="num_repeticiones"                data-endpoint="PATCHapi-rutina-ejercicio--id-"
               value="16"
               data-component="body">
    <br>
<p>Example: <code>16</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-rutina-ejercicio--id-">DELETE api/rutina-ejercicio/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-rutina-ejercicio--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/rutina-ejercicio/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/rutina-ejercicio/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-rutina-ejercicio--id-">
</span>
<span id="execution-results-DELETEapi-rutina-ejercicio--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-rutina-ejercicio--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-rutina-ejercicio--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-rutina-ejercicio--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-rutina-ejercicio--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-rutina-ejercicio--id-" data-method="DELETE"
      data-path="api/rutina-ejercicio/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-rutina-ejercicio--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-rutina-ejercicio--id-"
                    onclick="tryItOut('DELETEapi-rutina-ejercicio--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-rutina-ejercicio--id-"
                    onclick="cancelTryOut('DELETEapi-rutina-ejercicio--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-rutina-ejercicio--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/rutina-ejercicio/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-rutina-ejercicio--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-rutina-ejercicio--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-rutina-ejercicio--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the rutina ejercicio. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-usuario-rutina">GET api/usuario-rutina</h2>

<p>
</p>



<span id="example-requests-GETapi-usuario-rutina">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/usuario-rutina" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-rutina"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-usuario-rutina">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;usuario_rutinas&quot;: [
        {
            &quot;id_usuario_rutina&quot;: 1,
            &quot;id_usuario&quot;: &quot;0deda01b-ba22-3840-9971-ee6c17e6f442&quot;,
            &quot;id_rutina&quot;: 21,
            &quot;fecha_inicio&quot;: &quot;2018-02-15&quot;,
            &quot;fecha_fin&quot;: &quot;2014-03-28&quot;
        },
        {
            &quot;id_usuario_rutina&quot;: 2,
            &quot;id_usuario&quot;: &quot;199438f7-69cc-3f17-bcb2-71f6e3e20b7e&quot;,
            &quot;id_rutina&quot;: 22,
            &quot;fecha_inicio&quot;: &quot;1991-12-04&quot;,
            &quot;fecha_fin&quot;: &quot;1981-11-28&quot;
        },
        {
            &quot;id_usuario_rutina&quot;: 3,
            &quot;id_usuario&quot;: &quot;4e9d9a4d-7d10-3101-926d-4004a828126c&quot;,
            &quot;id_rutina&quot;: 23,
            &quot;fecha_inicio&quot;: &quot;2010-02-22&quot;,
            &quot;fecha_fin&quot;: &quot;2022-06-24&quot;
        },
        {
            &quot;id_usuario_rutina&quot;: 4,
            &quot;id_usuario&quot;: &quot;c84a209e-8973-324b-ae91-fb48263ccab0&quot;,
            &quot;id_rutina&quot;: 24,
            &quot;fecha_inicio&quot;: &quot;1999-10-30&quot;,
            &quot;fecha_fin&quot;: &quot;2004-03-21&quot;
        },
        {
            &quot;id_usuario_rutina&quot;: 5,
            &quot;id_usuario&quot;: &quot;2f5e5159-948a-3d50-a7f0-1030715b0f98&quot;,
            &quot;id_rutina&quot;: 25,
            &quot;fecha_inicio&quot;: &quot;2012-01-23&quot;,
            &quot;fecha_fin&quot;: null
        },
        {
            &quot;id_usuario_rutina&quot;: 6,
            &quot;id_usuario&quot;: &quot;fa78716c-42d6-30f1-8894-6871f8481cbc&quot;,
            &quot;id_rutina&quot;: 26,
            &quot;fecha_inicio&quot;: &quot;2009-04-10&quot;,
            &quot;fecha_fin&quot;: &quot;1974-09-24&quot;
        },
        {
            &quot;id_usuario_rutina&quot;: 7,
            &quot;id_usuario&quot;: &quot;57196e0f-1fff-360a-8f31-4711638c59a0&quot;,
            &quot;id_rutina&quot;: 27,
            &quot;fecha_inicio&quot;: &quot;2014-04-04&quot;,
            &quot;fecha_fin&quot;: null
        },
        {
            &quot;id_usuario_rutina&quot;: 8,
            &quot;id_usuario&quot;: &quot;4c3833ba-4291-3f61-8de3-8846cc8476f9&quot;,
            &quot;id_rutina&quot;: 28,
            &quot;fecha_inicio&quot;: &quot;2011-12-09&quot;,
            &quot;fecha_fin&quot;: null
        },
        {
            &quot;id_usuario_rutina&quot;: 9,
            &quot;id_usuario&quot;: &quot;c3232655-1c9e-390f-96b4-973cc341dd61&quot;,
            &quot;id_rutina&quot;: 29,
            &quot;fecha_inicio&quot;: &quot;2007-12-18&quot;,
            &quot;fecha_fin&quot;: &quot;2005-06-09&quot;
        },
        {
            &quot;id_usuario_rutina&quot;: 10,
            &quot;id_usuario&quot;: &quot;f57bcb5d-1cf7-3bbf-a130-fcc07ec44808&quot;,
            &quot;id_rutina&quot;: 30,
            &quot;fecha_inicio&quot;: &quot;1971-05-08&quot;,
            &quot;fecha_fin&quot;: null
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-usuario-rutina" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-usuario-rutina"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-usuario-rutina"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-usuario-rutina" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-usuario-rutina">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-usuario-rutina" data-method="GET"
      data-path="api/usuario-rutina"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-usuario-rutina', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-usuario-rutina"
                    onclick="tryItOut('GETapi-usuario-rutina');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-usuario-rutina"
                    onclick="cancelTryOut('GETapi-usuario-rutina');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-usuario-rutina"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/usuario-rutina</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-usuario-rutina"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-usuario-rutina"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-usuario-rutina--id-">GET api/usuario-rutina/{id}</h2>

<p>
</p>



<span id="example-requests-GETapi-usuario-rutina--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/usuario-rutina/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-rutina/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-usuario-rutina--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;usuario_rutina&quot;: {
        &quot;id_usuario_rutina&quot;: 1,
        &quot;id_usuario&quot;: &quot;0deda01b-ba22-3840-9971-ee6c17e6f442&quot;,
        &quot;id_rutina&quot;: 21,
        &quot;fecha_inicio&quot;: &quot;2018-02-15&quot;,
        &quot;fecha_fin&quot;: &quot;2014-03-28&quot;
    },
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-usuario-rutina--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-usuario-rutina--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-usuario-rutina--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-usuario-rutina--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-usuario-rutina--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-usuario-rutina--id-" data-method="GET"
      data-path="api/usuario-rutina/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-usuario-rutina--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-usuario-rutina--id-"
                    onclick="tryItOut('GETapi-usuario-rutina--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-usuario-rutina--id-"
                    onclick="cancelTryOut('GETapi-usuario-rutina--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-usuario-rutina--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/usuario-rutina/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-usuario-rutina--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-usuario-rutina--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-usuario-rutina--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the usuario rutina. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-usuario-rutina">POST api/usuario-rutina</h2>

<p>
</p>



<span id="example-requests-POSTapi-usuario-rutina">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/usuario-rutina" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_usuario\": \"architecto\",
    \"id_rutina\": \"architecto\",
    \"fecha_inicio\": \"2025-04-29T16:21:51\",
    \"fecha_fin\": \"2025-04-29T16:21:51\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-rutina"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_usuario": "architecto",
    "id_rutina": "architecto",
    "fecha_inicio": "2025-04-29T16:21:51",
    "fecha_fin": "2025-04-29T16:21:51"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-usuario-rutina">
</span>
<span id="execution-results-POSTapi-usuario-rutina" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-usuario-rutina"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-usuario-rutina"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-usuario-rutina" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-usuario-rutina">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-usuario-rutina" data-method="POST"
      data-path="api/usuario-rutina"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-usuario-rutina', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-usuario-rutina"
                    onclick="tryItOut('POSTapi-usuario-rutina');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-usuario-rutina"
                    onclick="cancelTryOut('POSTapi-usuario-rutina');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-usuario-rutina"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/usuario-rutina</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-usuario-rutina"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-usuario-rutina"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="POSTapi-usuario-rutina"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_usuario</code> of an existing record in the usuario table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_rutina</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_rutina"                data-endpoint="POSTapi-usuario-rutina"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_rutina</code> of an existing record in the rutina table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fecha_inicio</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="fecha_inicio"                data-endpoint="POSTapi-usuario-rutina"
               value="2025-04-29T16:21:51"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2025-04-29T16:21:51</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fecha_fin</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="fecha_fin"                data-endpoint="POSTapi-usuario-rutina"
               value="2025-04-29T16:21:51"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2025-04-29T16:21:51</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PUTapi-usuario-rutina--id-">PUT api/usuario-rutina/{id}</h2>

<p>
</p>



<span id="example-requests-PUTapi-usuario-rutina--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/usuario-rutina/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_usuario\": \"architecto\",
    \"id_rutina\": \"architecto\",
    \"fecha_inicio\": \"2025-04-29T16:21:51\",
    \"fecha_fin\": \"2025-04-29T16:21:51\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-rutina/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_usuario": "architecto",
    "id_rutina": "architecto",
    "fecha_inicio": "2025-04-29T16:21:51",
    "fecha_fin": "2025-04-29T16:21:51"
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-usuario-rutina--id-">
</span>
<span id="execution-results-PUTapi-usuario-rutina--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-usuario-rutina--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-usuario-rutina--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-usuario-rutina--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-usuario-rutina--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-usuario-rutina--id-" data-method="PUT"
      data-path="api/usuario-rutina/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-usuario-rutina--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-usuario-rutina--id-"
                    onclick="tryItOut('PUTapi-usuario-rutina--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-usuario-rutina--id-"
                    onclick="cancelTryOut('PUTapi-usuario-rutina--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-usuario-rutina--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/usuario-rutina/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-usuario-rutina--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-usuario-rutina--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PUTapi-usuario-rutina--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the usuario rutina. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="PUTapi-usuario-rutina--id-"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_usuario</code> of an existing record in the usuario table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_rutina</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_rutina"                data-endpoint="PUTapi-usuario-rutina--id-"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_rutina</code> of an existing record in the rutina table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fecha_inicio</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="fecha_inicio"                data-endpoint="PUTapi-usuario-rutina--id-"
               value="2025-04-29T16:21:51"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2025-04-29T16:21:51</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fecha_fin</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="fecha_fin"                data-endpoint="PUTapi-usuario-rutina--id-"
               value="2025-04-29T16:21:51"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2025-04-29T16:21:51</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-usuario-rutina--id-">PATCH api/usuario-rutina/{id}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-usuario-rutina--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/usuario-rutina/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"fecha_inicio\": \"2025-04-29T16:21:51\",
    \"fecha_fin\": \"2025-04-29T16:21:51\"
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-rutina/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "fecha_inicio": "2025-04-29T16:21:51",
    "fecha_fin": "2025-04-29T16:21:51"
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-usuario-rutina--id-">
</span>
<span id="execution-results-PATCHapi-usuario-rutina--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-usuario-rutina--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-usuario-rutina--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-usuario-rutina--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-usuario-rutina--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-usuario-rutina--id-" data-method="PATCH"
      data-path="api/usuario-rutina/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-usuario-rutina--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-usuario-rutina--id-"
                    onclick="tryItOut('PATCHapi-usuario-rutina--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-usuario-rutina--id-"
                    onclick="cancelTryOut('PATCHapi-usuario-rutina--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-usuario-rutina--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/usuario-rutina/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-usuario-rutina--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-usuario-rutina--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="PATCHapi-usuario-rutina--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the usuario rutina. Example: <code>1</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="PATCHapi-usuario-rutina--id-"
               value=""
               data-component="body">
    <br>
<p>The <code>id_usuario</code> of an existing record in the usuario table.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_rutina</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="id_rutina"                data-endpoint="PATCHapi-usuario-rutina--id-"
               value=""
               data-component="body">
    <br>
<p>The <code>id_rutina</code> of an existing record in the rutina table.</p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fecha_inicio</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="fecha_inicio"                data-endpoint="PATCHapi-usuario-rutina--id-"
               value="2025-04-29T16:21:51"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2025-04-29T16:21:51</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>fecha_fin</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="fecha_fin"                data-endpoint="PATCHapi-usuario-rutina--id-"
               value="2025-04-29T16:21:51"
               data-component="body">
    <br>
<p>Must be a valid date. Example: <code>2025-04-29T16:21:51</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-usuario-rutina--id-">DELETE api/usuario-rutina/{id}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-usuario-rutina--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/usuario-rutina/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario-rutina/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-usuario-rutina--id-">
</span>
<span id="execution-results-DELETEapi-usuario-rutina--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-usuario-rutina--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-usuario-rutina--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-usuario-rutina--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-usuario-rutina--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-usuario-rutina--id-" data-method="DELETE"
      data-path="api/usuario-rutina/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-usuario-rutina--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-usuario-rutina--id-"
                    onclick="tryItOut('DELETEapi-usuario-rutina--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-usuario-rutina--id-"
                    onclick="cancelTryOut('DELETEapi-usuario-rutina--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-usuario-rutina--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/usuario-rutina/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-usuario-rutina--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-usuario-rutina--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="DELETEapi-usuario-rutina--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the usuario rutina. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-alimento-dieta">GET api/alimento-dieta</h2>

<p>
</p>



<span id="example-requests-GETapi-alimento-dieta">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/alimento-dieta" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimento-dieta"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-alimento-dieta">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;alimento_dietas&quot;: [
        {
            &quot;id_alimento&quot;: 29,
            &quot;id_dieta&quot;: &quot;e42231ae-e7d5-4a13-bf81-f4e92899f8a7&quot;,
            &quot;cantidad&quot;: 2,
            &quot;created_at&quot;: &quot;2025-04-22T16:42:43.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-04-22T16:42:43.000000Z&quot;
        }
    ],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-alimento-dieta" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-alimento-dieta"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-alimento-dieta"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-alimento-dieta" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-alimento-dieta">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-alimento-dieta" data-method="GET"
      data-path="api/alimento-dieta"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-alimento-dieta', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-alimento-dieta"
                    onclick="tryItOut('GETapi-alimento-dieta');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-alimento-dieta"
                    onclick="cancelTryOut('GETapi-alimento-dieta');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-alimento-dieta"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/alimento-dieta</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-alimento-dieta"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-alimento-dieta"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-POSTapi-alimento-dieta">POST api/alimento-dieta</h2>

<p>
</p>



<span id="example-requests-POSTapi-alimento-dieta">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/alimento-dieta" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_alimento\": \"architecto\",
    \"id_dieta\": \"architecto\",
    \"cantidad\": 39
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimento-dieta"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_alimento": "architecto",
    "id_dieta": "architecto",
    "cantidad": 39
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-alimento-dieta">
</span>
<span id="execution-results-POSTapi-alimento-dieta" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-alimento-dieta"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-alimento-dieta"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-alimento-dieta" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-alimento-dieta">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-alimento-dieta" data-method="POST"
      data-path="api/alimento-dieta"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-alimento-dieta', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-alimento-dieta"
                    onclick="tryItOut('POSTapi-alimento-dieta');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-alimento-dieta"
                    onclick="cancelTryOut('POSTapi-alimento-dieta');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-alimento-dieta"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/alimento-dieta</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-alimento-dieta"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-alimento-dieta"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_alimento</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_alimento"                data-endpoint="POSTapi-alimento-dieta"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_alimento</code> of an existing record in the alimento table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="POSTapi-alimento-dieta"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_dieta</code> of an existing record in the dieta table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cantidad</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="cantidad"                data-endpoint="POSTapi-alimento-dieta"
               value="39"
               data-component="body">
    <br>
<p>Must be at least 0. Example: <code>39</code></p>
        </div>
        </form>

                    <h2 id="endpoints-GETapi-alimento-dieta--id_dieta-">GET api/alimento-dieta/{id_dieta}</h2>

<p>
</p>



<span id="example-requests-GETapi-alimento-dieta--id_dieta-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/alimento-dieta/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimento-dieta/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-alimento-dieta--id_dieta-">
            <blockquote>
            <p>Example response (404):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;message&quot;: &quot;No se encontraron registros para esta dieta&quot;,
    &quot;status&quot;: 404
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-alimento-dieta--id_dieta-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-alimento-dieta--id_dieta-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-alimento-dieta--id_dieta-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-alimento-dieta--id_dieta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-alimento-dieta--id_dieta-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-alimento-dieta--id_dieta-" data-method="GET"
      data-path="api/alimento-dieta/{id_dieta}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-alimento-dieta--id_dieta-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-alimento-dieta--id_dieta-"
                    onclick="tryItOut('GETapi-alimento-dieta--id_dieta-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-alimento-dieta--id_dieta-"
                    onclick="cancelTryOut('GETapi-alimento-dieta--id_dieta-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-alimento-dieta--id_dieta-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/alimento-dieta/{id_dieta}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-alimento-dieta--id_dieta-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-alimento-dieta--id_dieta-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="GETapi-alimento-dieta--id_dieta-"
               value="architecto"
               data-component="url">
    <br>
<p>Example: <code>architecto</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-PUTapi-alimento-dieta-multiples">PUT api/alimento-dieta/multiples</h2>

<p>
</p>



<span id="example-requests-PUTapi-alimento-dieta-multiples">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/alimento-dieta/multiples" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"id_dieta\": \"architecto\",
    \"alimentos\": [
        {
            \"id_alimento\": \"architecto\",
            \"cantidad\": 22
        }
    ]
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimento-dieta/multiples"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "id_dieta": "architecto",
    "alimentos": [
        {
            "id_alimento": "architecto",
            "cantidad": 22
        }
    ]
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-alimento-dieta-multiples">
</span>
<span id="execution-results-PUTapi-alimento-dieta-multiples" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-alimento-dieta-multiples"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-alimento-dieta-multiples"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-alimento-dieta-multiples" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-alimento-dieta-multiples">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-alimento-dieta-multiples" data-method="PUT"
      data-path="api/alimento-dieta/multiples"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-alimento-dieta-multiples', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-alimento-dieta-multiples"
                    onclick="tryItOut('PUTapi-alimento-dieta-multiples');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-alimento-dieta-multiples"
                    onclick="cancelTryOut('PUTapi-alimento-dieta-multiples');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-alimento-dieta-multiples"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/alimento-dieta/multiples</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-alimento-dieta-multiples"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-alimento-dieta-multiples"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="PUTapi-alimento-dieta-multiples"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_dieta</code> of an existing record in the dieta table. Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
        <details>
            <summary style="padding-bottom: 10px;">
                <b style="line-height: 2;"><code>alimentos</code></b>&nbsp;&nbsp;
<small>object[]</small>&nbsp;
 &nbsp;
<br>

            </summary>
                                                <div style="margin-left: 14px; clear: unset;">
                        <b style="line-height: 2;"><code>id_alimento</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="alimentos.0.id_alimento"                data-endpoint="PUTapi-alimento-dieta-multiples"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_alimento</code> of an existing record in the alimento table. Example: <code>architecto</code></p>
                    </div>
                                                                <div style="margin-left: 14px; clear: unset;">
                        <b style="line-height: 2;"><code>cantidad</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="alimentos.0.cantidad"                data-endpoint="PUTapi-alimento-dieta-multiples"
               value="22"
               data-component="body">
    <br>
<p>Must be at least 1. Example: <code>22</code></p>
                    </div>
                                    </details>
        </div>
        </form>

                    <h2 id="endpoints-GETapi-alimento-dieta--id_alimento---id_dieta-">GET api/alimento-dieta/{id_alimento}/{id_dieta}</h2>

<p>
</p>



<span id="example-requests-GETapi-alimento-dieta--id_alimento---id_dieta-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/alimento-dieta/architecto/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimento-dieta/architecto/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-alimento-dieta--id_alimento---id_dieta-">
            <blockquote>
            <p>Example response (404):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;message&quot;: &quot;Registro no encontrado&quot;,
    &quot;status&quot;: 404
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-alimento-dieta--id_alimento---id_dieta-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-alimento-dieta--id_alimento---id_dieta-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-alimento-dieta--id_alimento---id_dieta-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-alimento-dieta--id_alimento---id_dieta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-alimento-dieta--id_alimento---id_dieta-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-alimento-dieta--id_alimento---id_dieta-" data-method="GET"
      data-path="api/alimento-dieta/{id_alimento}/{id_dieta}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-alimento-dieta--id_alimento---id_dieta-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-alimento-dieta--id_alimento---id_dieta-"
                    onclick="tryItOut('GETapi-alimento-dieta--id_alimento---id_dieta-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-alimento-dieta--id_alimento---id_dieta-"
                    onclick="cancelTryOut('GETapi-alimento-dieta--id_alimento---id_dieta-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-alimento-dieta--id_alimento---id_dieta-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/alimento-dieta/{id_alimento}/{id_dieta}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-alimento-dieta--id_alimento---id_dieta-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-alimento-dieta--id_alimento---id_dieta-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_alimento</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_alimento"                data-endpoint="GETapi-alimento-dieta--id_alimento---id_dieta-"
               value="architecto"
               data-component="url">
    <br>
<p>Example: <code>architecto</code></p>
            </div>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="GETapi-alimento-dieta--id_alimento---id_dieta-"
               value="architecto"
               data-component="url">
    <br>
<p>Example: <code>architecto</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-PUTapi-alimento-dieta--id_alimento---id_dieta-">PUT api/alimento-dieta/{id_alimento}/{id_dieta}</h2>

<p>
</p>



<span id="example-requests-PUTapi-alimento-dieta--id_alimento---id_dieta-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PUT \
    "http://localhost/api/alimento-dieta/architecto/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"cantidad\": 27
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimento-dieta/architecto/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "cantidad": 27
};

fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PUTapi-alimento-dieta--id_alimento---id_dieta-">
</span>
<span id="execution-results-PUTapi-alimento-dieta--id_alimento---id_dieta-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PUTapi-alimento-dieta--id_alimento---id_dieta-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PUTapi-alimento-dieta--id_alimento---id_dieta-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PUTapi-alimento-dieta--id_alimento---id_dieta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PUTapi-alimento-dieta--id_alimento---id_dieta-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PUTapi-alimento-dieta--id_alimento---id_dieta-" data-method="PUT"
      data-path="api/alimento-dieta/{id_alimento}/{id_dieta}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PUTapi-alimento-dieta--id_alimento---id_dieta-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PUTapi-alimento-dieta--id_alimento---id_dieta-"
                    onclick="tryItOut('PUTapi-alimento-dieta--id_alimento---id_dieta-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PUTapi-alimento-dieta--id_alimento---id_dieta-"
                    onclick="cancelTryOut('PUTapi-alimento-dieta--id_alimento---id_dieta-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PUTapi-alimento-dieta--id_alimento---id_dieta-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-darkblue">PUT</small>
            <b><code>api/alimento-dieta/{id_alimento}/{id_dieta}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PUTapi-alimento-dieta--id_alimento---id_dieta-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PUTapi-alimento-dieta--id_alimento---id_dieta-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_alimento</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_alimento"                data-endpoint="PUTapi-alimento-dieta--id_alimento---id_dieta-"
               value="architecto"
               data-component="url">
    <br>
<p>Example: <code>architecto</code></p>
            </div>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="PUTapi-alimento-dieta--id_alimento---id_dieta-"
               value="architecto"
               data-component="url">
    <br>
<p>Example: <code>architecto</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cantidad</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="cantidad"                data-endpoint="PUTapi-alimento-dieta--id_alimento---id_dieta-"
               value="27"
               data-component="body">
    <br>
<p>Must be at least 0. Example: <code>27</code></p>
        </div>
        </form>

                    <h2 id="endpoints-PATCHapi-alimento-dieta--id_alimento---id_dieta-">PATCH api/alimento-dieta/{id_alimento}/{id_dieta}</h2>

<p>
</p>



<span id="example-requests-PATCHapi-alimento-dieta--id_alimento---id_dieta-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request PATCH \
    "http://localhost/api/alimento-dieta/architecto/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"cantidad\": 27
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimento-dieta/architecto/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "cantidad": 27
};

fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-PATCHapi-alimento-dieta--id_alimento---id_dieta-">
</span>
<span id="execution-results-PATCHapi-alimento-dieta--id_alimento---id_dieta-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-PATCHapi-alimento-dieta--id_alimento---id_dieta-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-PATCHapi-alimento-dieta--id_alimento---id_dieta-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-PATCHapi-alimento-dieta--id_alimento---id_dieta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-PATCHapi-alimento-dieta--id_alimento---id_dieta-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-PATCHapi-alimento-dieta--id_alimento---id_dieta-" data-method="PATCH"
      data-path="api/alimento-dieta/{id_alimento}/{id_dieta}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('PATCHapi-alimento-dieta--id_alimento---id_dieta-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-PATCHapi-alimento-dieta--id_alimento---id_dieta-"
                    onclick="tryItOut('PATCHapi-alimento-dieta--id_alimento---id_dieta-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-PATCHapi-alimento-dieta--id_alimento---id_dieta-"
                    onclick="cancelTryOut('PATCHapi-alimento-dieta--id_alimento---id_dieta-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-PATCHapi-alimento-dieta--id_alimento---id_dieta-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-purple">PATCH</small>
            <b><code>api/alimento-dieta/{id_alimento}/{id_dieta}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="PATCHapi-alimento-dieta--id_alimento---id_dieta-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="PATCHapi-alimento-dieta--id_alimento---id_dieta-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_alimento</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_alimento"                data-endpoint="PATCHapi-alimento-dieta--id_alimento---id_dieta-"
               value="architecto"
               data-component="url">
    <br>
<p>Example: <code>architecto</code></p>
            </div>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="PATCHapi-alimento-dieta--id_alimento---id_dieta-"
               value="architecto"
               data-component="url">
    <br>
<p>Example: <code>architecto</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>cantidad</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="number" style="display: none"
               step="any"               name="cantidad"                data-endpoint="PATCHapi-alimento-dieta--id_alimento---id_dieta-"
               value="27"
               data-component="body">
    <br>
<p>Must be at least 0. Example: <code>27</code></p>
        </div>
        </form>

                    <h2 id="endpoints-DELETEapi-alimento-dieta--id_alimento---id_dieta-">DELETE api/alimento-dieta/{id_alimento}/{id_dieta}</h2>

<p>
</p>



<span id="example-requests-DELETEapi-alimento-dieta--id_alimento---id_dieta-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request DELETE \
    "http://localhost/api/alimento-dieta/architecto/architecto" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/alimento-dieta/architecto/architecto"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-DELETEapi-alimento-dieta--id_alimento---id_dieta-">
</span>
<span id="execution-results-DELETEapi-alimento-dieta--id_alimento---id_dieta-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-DELETEapi-alimento-dieta--id_alimento---id_dieta-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-DELETEapi-alimento-dieta--id_alimento---id_dieta-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-DELETEapi-alimento-dieta--id_alimento---id_dieta-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-DELETEapi-alimento-dieta--id_alimento---id_dieta-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-DELETEapi-alimento-dieta--id_alimento---id_dieta-" data-method="DELETE"
      data-path="api/alimento-dieta/{id_alimento}/{id_dieta}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('DELETEapi-alimento-dieta--id_alimento---id_dieta-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-DELETEapi-alimento-dieta--id_alimento---id_dieta-"
                    onclick="tryItOut('DELETEapi-alimento-dieta--id_alimento---id_dieta-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-DELETEapi-alimento-dieta--id_alimento---id_dieta-"
                    onclick="cancelTryOut('DELETEapi-alimento-dieta--id_alimento---id_dieta-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-DELETEapi-alimento-dieta--id_alimento---id_dieta-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-red">DELETE</small>
            <b><code>api/alimento-dieta/{id_alimento}/{id_dieta}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="DELETEapi-alimento-dieta--id_alimento---id_dieta-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="DELETEapi-alimento-dieta--id_alimento---id_dieta-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_alimento</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_alimento"                data-endpoint="DELETEapi-alimento-dieta--id_alimento---id_dieta-"
               value="architecto"
               data-component="url">
    <br>
<p>Example: <code>architecto</code></p>
            </div>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_dieta</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_dieta"                data-endpoint="DELETEapi-alimento-dieta--id_alimento---id_dieta-"
               value="architecto"
               data-component="url">
    <br>
<p>Example: <code>architecto</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-POSTapi-usuario--id_usuario--dieta">POST api/usuario/{id_usuario}/dieta</h2>

<p>
</p>



<span id="example-requests-POSTapi-usuario--id_usuario--dieta">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request POST \
    "http://localhost/api/usuario/0deda01b-ba22-3840-9971-ee6c17e6f442/dieta" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"nombre\": \"b\",
    \"descripcion\": \"architecto\",
    \"alimentos\": [
        {
            \"id_alimento\": \"architecto\",
            \"cantidad\": 39
        }
    ]
}"
</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario/0deda01b-ba22-3840-9971-ee6c17e6f442/dieta"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "nombre": "b",
    "descripcion": "architecto",
    "alimentos": [
        {
            "id_alimento": "architecto",
            "cantidad": 39
        }
    ]
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-POSTapi-usuario--id_usuario--dieta">
</span>
<span id="execution-results-POSTapi-usuario--id_usuario--dieta" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-usuario--id_usuario--dieta"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-usuario--id_usuario--dieta"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-POSTapi-usuario--id_usuario--dieta" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-usuario--id_usuario--dieta">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-POSTapi-usuario--id_usuario--dieta" data-method="POST"
      data-path="api/usuario/{id_usuario}/dieta"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-usuario--id_usuario--dieta', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-usuario--id_usuario--dieta"
                    onclick="tryItOut('POSTapi-usuario--id_usuario--dieta');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-usuario--id_usuario--dieta"
                    onclick="cancelTryOut('POSTapi-usuario--id_usuario--dieta');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-usuario--id_usuario--dieta"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/usuario/{id_usuario}/dieta</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="POSTapi-usuario--id_usuario--dieta"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="POSTapi-usuario--id_usuario--dieta"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="POSTapi-usuario--id_usuario--dieta"
               value="0deda01b-ba22-3840-9971-ee6c17e6f442"
               data-component="url">
    <br>
<p>Example: <code>0deda01b-ba22-3840-9971-ee6c17e6f442</code></p>
            </div>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>nombre</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="nombre"                data-endpoint="POSTapi-usuario--id_usuario--dieta"
               value="b"
               data-component="body">
    <br>
<p>Must not be greater than 255 characters. Example: <code>b</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
            <b style="line-height: 2;"><code>descripcion</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
<i>optional</i> &nbsp;
                <input type="text" style="display: none"
                              name="descripcion"                data-endpoint="POSTapi-usuario--id_usuario--dieta"
               value="architecto"
               data-component="body">
    <br>
<p>Example: <code>architecto</code></p>
        </div>
                <div style=" padding-left: 28px;  clear: unset;">
        <details>
            <summary style="padding-bottom: 10px;">
                <b style="line-height: 2;"><code>alimentos</code></b>&nbsp;&nbsp;
<small>object[]</small>&nbsp;
 &nbsp;
<br>

            </summary>
                                                <div style="margin-left: 14px; clear: unset;">
                        <b style="line-height: 2;"><code>id_alimento</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="alimentos.0.id_alimento"                data-endpoint="POSTapi-usuario--id_usuario--dieta"
               value="architecto"
               data-component="body">
    <br>
<p>The <code>id_alimento</code> of an existing record in the alimento table. Example: <code>architecto</code></p>
                    </div>
                                                                <div style="margin-left: 14px; clear: unset;">
                        <b style="line-height: 2;"><code>cantidad</code></b>&nbsp;&nbsp;
<small>number</small>&nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="alimentos.0.cantidad"                data-endpoint="POSTapi-usuario--id_usuario--dieta"
               value="39"
               data-component="body">
    <br>
<p>Must be at least 0.01. Example: <code>39</code></p>
                    </div>
                                    </details>
        </div>
        </form>

                    <h2 id="endpoints-GETapi-usuario--id_usuario--dietas">GET api/usuario/{id_usuario}/dietas</h2>

<p>
</p>



<span id="example-requests-GETapi-usuario--id_usuario--dietas">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/usuario/0deda01b-ba22-3840-9971-ee6c17e6f442/dietas" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/usuario/0deda01b-ba22-3840-9971-ee6c17e6f442/dietas"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-usuario--id_usuario--dietas">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;dietas&quot;: [],
    &quot;status&quot;: 200
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-usuario--id_usuario--dietas" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-usuario--id_usuario--dietas"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-usuario--id_usuario--dietas"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-usuario--id_usuario--dietas" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-usuario--id_usuario--dietas">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-usuario--id_usuario--dietas" data-method="GET"
      data-path="api/usuario/{id_usuario}/dietas"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-usuario--id_usuario--dietas', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-usuario--id_usuario--dietas"
                    onclick="tryItOut('GETapi-usuario--id_usuario--dietas');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-usuario--id_usuario--dietas"
                    onclick="cancelTryOut('GETapi-usuario--id_usuario--dietas');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-usuario--id_usuario--dietas"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/usuario/{id_usuario}/dietas</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-usuario--id_usuario--dietas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-usuario--id_usuario--dietas"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id_usuario</code></b>&nbsp;&nbsp;
<small>string</small>&nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="id_usuario"                data-endpoint="GETapi-usuario--id_usuario--dietas"
               value="0deda01b-ba22-3840-9971-ee6c17e6f442"
               data-component="url">
    <br>
<p>Example: <code>0deda01b-ba22-3840-9971-ee6c17e6f442</code></p>
            </div>
                    </form>

            

        
    </div>
    <div class="dark-box">
                    <div class="lang-selector">
                                                        <button type="button" class="lang-button" data-language-name="bash">bash</button>
                                                        <button type="button" class="lang-button" data-language-name="javascript">javascript</button>
                            </div>
            </div>
</div>
</body>
</html>
