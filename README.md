<h1>SPA Frontend PokeAPI</h1>
<hr><p>Web app sobre personajes de la serie animada POKEMON. Construida usando React, React Router Dom, y React Bootstratp.</p><h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>JavaScript</li>
</ul><ul>
<li>React</li>
</ul><ul>
<li>NodeJS</li>
</ul><ul>
<li>vite</li>
</ul><ul>
<li>sweetalert2</li>
</ul><ul>
<li>React Bootstrap</li>
</ul><h2>Features</h2>
<hr><ul>
<li>Pantalla que enlista 10 pokemones y cuenta con un buscador</li>
</ul><ul>
<li>Pantalla Pokemon, donde se muestra información sobre un pokemon específico</li>
</ul><ul>
<li>Login</li>
</ul><ul>
<li>Registro</li>
</ul><h5>Steps</h5><ul>
<li>Preparar el ambiente de desarrollo, tener instalado nodejs, y un VSCode como editor de código.</li>
</ul><ul>
<li>Instalación de dependencias como axios como cliente HTTP, React Bootstrap para estilos y diseño responsive.</li>
</ul><ul>
<li>Diseño de la UI, usé UXPin.</li>
</ul><ul>
<li>Iniciar el projecto con npm create vite --template react</li>
</ul><ul>
<li>Establecer la estructura del proyecto siguiendo una arquitectura limpia, empleando servicios, contexts, routers, etc.</li>
</ul><ul>
<li>Reconocer las pantallas a desarrollarse, que son login, registro, pantalla para listar y otra para info de un personaje en particular.</li>
</ul><ul>
<li>Usé componentes que partes de las pantallas que pueden reusarse en otras, por ejemplo el TopNavbar</li>
</ul><ul>
<li>Crear los servicios, que se encargan de establecer comunicaciones HTTP.</li>
</ul><ul>
<li>Crear el router donde se establecen las pantallas previas mediante react router dom.</li>
</ul><ul>
<li>Para proteger las rutas privadas usé React router dom v6, de modo que solo se pueden visualizar al logearse</li>
</ul><ul>
<li>Usé contextApi hook de React, provider y reducer para manejar la el estado de la autenticación.</li>
</ul><ul>
<li>Encerrar a la app dentro del proveedor AuthProvider para proveerle el estado de la autenticación.</li>
</ul><ul>
<li>Implementar los diseños previos hechos en UXPin.</li>
</ul><ul>
<li>Finalmente generar el build para producción.</li>
</ul><h5>Code Examples</h5><ul>
<li>En ambiente de desarrollo</li>
</ul><p><code>Ejecutar npm run dev</code></p><ul>
<li>Para ambiente de producción ejecutar el build</li>
</ul><p><code>npm run build</code></p><h2>Project Status</h2>
<hr><p>Completed</p><h2>Improvements</h2>
<hr><ul>
<li>Paginación en la pantalla de pokemons</li>
</ul><h2>Contact</h2>
<hr><p><span style="margin-right: 30px;"></span><a href="linkedin.com/in/bryan-pérez-4190aa118"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 10%;"></a></p>


</ul><h2>GitHub repo</h2>
<hr><p><a href="https://github.com/bryanPEREZ1497/pokemon-frontend">https://github.com/bryanPEREZ1497/pokemon-frontend</a></p>
</ul><h2>Visualizacion de diseño</h2>
<hr><p><a href="https://preview.uxpin.com/bf54cefd7fb8801d7845625386d167858a31fabc#/pages/159368381/simulate/sitemap">https://preview.uxpin.com/bf54cefd7fb8801d7845625386d167858a31fabc#/pages/159368381/simulate/sitemap</a></p>