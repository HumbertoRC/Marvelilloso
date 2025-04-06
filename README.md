# Marvelilloso
Esta es una plataforma que simula ser una pagina de streaming de entretenimiento, especificamente para ver la mayoria del contenido de Marvel con un diseño que intenta ser agradable a el usuario con estilos simples pero tratar de ser eficiente.

![Captura de pantalla 2025-04-05 205838](https://github.com/user-attachments/assets/f2feae06-b22b-4848-9e37-216cb194f3f7)
![Captura de pantalla 2025-04-05 210104](https://github.com/user-attachments/assets/81e5e21d-7c0f-49e8-a3a5-d7c5238f2688)
![Captura de pantalla 2025-04-05 210144](https://github.com/user-attachments/assets/d4241c39-a8cd-45cd-bc2e-b022cbea2ff7)
![Captura de pantalla 2025-04-05 210225](https://github.com/user-attachments/assets/199b511e-fd33-46b2-89b8-40d6c805e53c)
![Captura de pantalla 2025-04-05 210254](https://github.com/user-attachments/assets/c74bea8a-6f96-46ed-abf0-316cc421252c)

MockUp de la idea principal.
![MockUp](https://github.com/user-attachments/assets/6dea2912-1eda-47b6-a04a-81516936a428)

Instrucciones de uso:
1.- Descargar el repositorio.
2.- Ubicar el repositorio y ejecutar el codigo de manera local ya que momentaneamente es solo una demo.
3.- Si las imagenes no llegaran a cargarse verificar correctamente las rutas hacia ellas. Llas rutas se encuentran en el archivo "indexStyles.css"
background-image: url("../images/stars.webp") y en  background-image: url("../images/bannerlogo.webp") al igual, verificar que las imagenes del contenido tambien carguen, de no ser asi asegurarse que tenga la carpeta "images" y dentro "series" y "movies". Verificar la ruta en las cards por ejemplo:
<img src="images/series/groot.webp"

4.- Indagar en la pagina y disfrutar del diseño.


¿Como lo hice?
Primero comenzó como una idea de contenido puesto que disfruto mucho del UCM.
Para hacer la pagina fue sencillo al inicio ya que comencé con el banner de logo de la pagina, seguido de comenzar con las secciones de cada apartado tal como son las peliculas y series, al ver que no tendria mucho desplazamiento en la pagina decidi separar las peliculas en las sagas que existen por ahora, y al final dejar las series.
Despues agregué la parte de favoritos que al inicio evidentemente está vacia.
Lo mas complicado fue agregar la barra de navegacion la cual el diseño no resulto tan complicado pues opte por usar "svg's" para los iconos, la barra es desplegable, esto significa que al acercar el mouse a la barra de navegacion lateral se despliega el menu con diferentes opciones, incluyendo el cierre de sesión.



Problemas conocidos:
1.- La optimización de codigo.
2.- El diseño de algunas ventanas.
3.- La disfunción de la barra de busqueda.
4.- No implementar botones de desplazamiento para cada apartado de series y peliculas.


Retrospectiva:
¿Que hice bien?
Me gustó mucho como hice la barra lateral y la idea de las cards que desplazan horizontalmente.

¿Qué no salió bien?
Los botones de desplazamiento.
Deficiencia de mucho codigo para cada pelicula y serie.

¿Qué puedo hacer diferente?
Optimizar el codigo agregando un archivo json para poder incluir la informacion de las cards y mostrarlas en lugar de todo el codigo realizado.
