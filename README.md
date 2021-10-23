# AVES - Alfred Hitchcock film "The Birds" inspired videogame
 > EN: This will be the proyect for PVLI, whose proyect is a Phaser 3 implementation, in which we will use JavaScrypt, HTML5, CSS and JSON files. 
 
 > SP: Este repositorio está dedicado al proyecto de PVLI, cuyo proyecto será una implementación de Phaser 3, en el cual se usarán archivos de tipo JavaScrypt, HTML5, CSS y JSON.
 ___
 #### Proyecto desarrollado por: _Grupo 12_
 ___
 #### IMPORTANTE:
 - En la carpeta **_videojuego__** se encuentran los archivos que componen el videojuego.
 - Contiene su propio _readme_ con información relevante para su uso.
 - En la carpeta **_assets_** se encuentran los archivos que componen el videojuego.
 
 ###### website: [visitar web][WEB]
 
 ###### video-demo: [visitar canal de youtube][video]
 
 ###### Pivotal Tracker: [visualizar en la web][Pivotal Tracker]

 ###### Link Arquitectura: [visualizar UML][Nueva Arquitectura]
 <!-- ___ -->
 <!-- ![Imagen de JRJ con su burrito][logo] -->
 ___
 
 ##### Webs útiles:
 
 - Curso completo de edición de archivos CSS: https://www.w3schools.com/css/default.asp
 - Manual de uso de archivos JSON: https://www.json.org/json-es.html
 ___
 ___

 ##### GDD: Game Design Document / Documento de Diseño del Videojuego
 #### **AVES - Alfred Hitchcock's inspired film-videogame**
**Documento de Diseño - Grupo 12**

**Contribuidores:**
- Alejandro González Sánchez - Algonz39@ucm.es, 
- Jianuo Wen - Jwen@ucm.es, 
- Manuel Prada Mínguez - manuelpr@ucm.es, 
- Pedro Pablo Cubells Talavera - pablocub@ucm.es.

#### **Resumen**
**Géneros**: Aventura, Supervivencia.

**Modos**: Un jugador.

**Público objetivo**:

● Adolescentes y adultos jóvenes - PEGI-16.

● Idioma: Inglés.

**Plataformas**: Web con teclado y ratón.

**Cantidades**:

● Personaje principal.

● Pájaros - enemigos.

● Materiales.

**Versiones del documento**:

<!-- ![Captura del menú][capturamenu] -->

<!-- ![Captura de Juego][capturajuego] -->

**Descripción**

Aves es un juego top down de acción y supervivencia. Combina combate y sigilo e involucra mecánicas de aggro y distancia a los enemigos.

El protagonista es el líder nato del pueblo, con una personalidad humanista que intenta ayudar a los habitantes del pueblo a pasar la tormenta.

La dificultad avanza con cada nivel, las hordas de pájaros van aumentando y son cada vez son más letales. 

El objetivo principal es rescatar a los pueblerinos.

La puntuación final está basada en el número de niveles completados y pájaros eliminados.

**Índice**

**I. Aspectos generales**
• Vista general
• Relato de un nivel

**II. Menús y modos de juego**
• Configuración
• Interfaz y controles

**III. Jugabilidad**
• Mecánicas
• Dinámicas
• Estética

**IV. Contenidos**
• Historia
• Niveles
• Personajes
• Objetos y enemigos

**V. Referencias**

1. **Aspectos generales**

1.2 **Relato de un nivel :**
El jugador llegará al pueblo en coche, desde donde comenzará el nivel tras un rápido preview del mapa para que el jugador tenga una idea del layout. 
Nada más comenzar el jugador será perseguido por bandadas de cuervos y deberá recorrer las calles para encontrar al habitante que esté en peligro. 
Una vez rescatado, el jugador tendrá que hacerse camino de vuelta al coche.

<!-- 2. **Menús y modos de juego**

2.1 **Configuración**
Al iniciar el juego desde el menú principal, se mostrará al personaje protagonista en su casa, 
este entorno hace de menú de inicio. 

2.2 **Interfaz y control**

2.2.1. **Interfaz**

**MENÚ PRINCIPAL:**
- Botón de ajuste de sonido.
- Botón de inicio de partida.

**DENTRO DEL JUEGO:**
- Pausa: Permite ver el inventario y los controles.
- Habilidades: Radio. (ON/OFF para evitar enemigos.)

2.2.2. **Control**
- Ratón: interacción en el menú.
- Movimiento con cursores y combinaciones de dos teclas para las diagonales.
- Abrir puertas pulsando "Z" en el teclado. 
- Usar radio manteniendo pulsada la tecla "X".  -->

3. **Jugabilidad**

3.1. **Mecánicas**

**Jugador**:
El jugador tiene un movimiento ortodireccional controlado con WASD.
Se apunta con el cursor y ataca golpeando a melé con un bate en un área en forma de cono.
Interactúa con objetos pulsando la ‘E’.

**Sistema de Vida**:
	Hay dos barras de salud distintas. 

● *Vida del personaje*: 
    Cuando el jugador entra en contacto con los pájaros se quita vida por segundo, cuantos más hay, más daño hacen. 
    Se regenera cuando se termina el nivel o recogiendo la “comida” repartida por el nivel.

● *Aguante de la casa*: 
    La salud de la casa se mantiene entre niveles y disminuye cuando se termina un nivel. 
    Si el jugador recoge materiales a lo largo del nivel, se regenera una cantidad de vida proporcional al número de materiales recogidos.

**Objetivos**:
    Habrá dos objetivos a cumplir:

● *Principal*: 
    El objetivo principal es rescatar a las personas que se encuentran en apuros. 
    Se debe completar este objetivo para avanzar al siguiente nivel.

● *Flexible*:
    En cada zona se tienen que recoger suministros para poder mantener segura la casa donde se refugian los supervivientes.

**Sigilo**:
    Por los niveles hay cabinas telefónicas y otras estructuras repartidas por el mapa para poder esconderse.  
    Al entrar en ellas, las aves dejan de atacar y se empeziezan a mover de forma errática.

**Enemigos**:
	Los enemigos de este juego son las aves.  Estas aparecen por las esquinas de la pantalla y se accercan al jugador para atacarle. 
Hacen daño por contacto, el daño depende del número de aves atacando al jugador.
Hay enemigos individuales, representados por un ave además de enemigos bandada, varias aves juntas que cuentan como una sola entidad con mayor salud y daño.

3.2. **Dinámicas**

El juego está dividido en niveles. 
Se llega a la ubicación de cada nivel en coche, una vez ahí se tiene que completar el objetivo principal (rescatar al habitante) y volver al coche para completar el nivel. Además, de conseguir recursos para el hogar.

● Hay un tiempo límite indicado con un contador que tiene el objetivo de causar el estrés que infunde la película.
● La dificultad de los niveles aumenta con cada nivel completado y a medida que avanza el contador aumenta también la dificultad. 
● El juego es injugable (debido a la dificultad) una vez termina el contador.

3.3. **Estética**

● Años 60 en un pueblo pesquero.

● Vista cenital (top-down), claro-oscuro, paisaje exterior.

● Salpicaduras y charcos de sangre y cristales rotos.

<!-- **Música utilizada**
Menú principal: Stasis by Steve Oxen.
Sonidos: FreeSound.org. -->

<!-- 4. **Contenidos**

4.1. **Historia**

Juan Ramón Jiménez es un escritor que vive en el pueblo de Moguer, Huelva, y su mejor
amigo es su burro Platero ("...tan blando por fuera, que se diría todo algodón..."). 
Todos los días sale en su búsqueda para que le alegre el día, 
pero no siempre lo encuentra con facilidad, 
en ocasiones tiene que recorrer todo el pueblo para encontrarle.

4.2. **Niveles**

El juego consta de un único nivel debido a la limitación del tiempo, 
cada uno de ellos representa una zona del pueblo o sus
alrededores, se cuenta con una clase que permitiría igualmente añadir más niveles.
El primer nivel comienza al salir de la casa del protagonista, en una zona apartada
del pueblo cerca de la casa del mercader de su zona.

4.3. **Personajes**
- Juan Ramón Jiménez: el personaje jugable. Es controlado por el jugador para lograr
superar los niveles.
- Platero: fiel compañero de Juan Ramón Jiménez. Espera quieto en un lugar del
mapa y hay que encontrarlo para avanzar al siguiente nivel.
- Vecinos: son los enemigos dentro del juego. Para representar su área de daño de autoestima,
hay un área de terror representada como un triángulo en la dirección a la que miran.

4.4. **Objetos y enemigos**
- Objetos Plateriños: Herraduras
- Objetos No Plateriños: Periódicos con noticias trágicas de la época
- Objetos no dañinos, útiles: Baterías y LLaves
- Radio del protagonista: recargable
- Baterías: utilizadas para recargar la radio.

5. **Arquitectura y Gestión**
- En cuanto a la arquitectura UML, hemos utilizado el software proporcionado por Diagrams.net,
nuestra arquitectura ha cambiado con respecto a la original debido a los cambios durante el desarrollo, 
en un principio se planeaba tener un juego mayormente extendido pero debido a la falta de comunicación
y ciertos problemas a la hora de trabajar en grupo, no pudo ser.
- Pivotal como sistema de gestión utilizado para asignar tareas entre los miembros del grupo.
- Discord como sistema de comunicación para realizar las reuniones grupales y trabajar en conjunto, así
como sistema de mensajería. También se ha usado Telegram para fijar reuniones. -->

6. **Referencias**

● Alfred Hitchcock - Pájaros

● AC - Assassin 's  Creed: tema de sigilo y agro.

● Counter strike: sistema de rehenes.

● Boxhead:  oleadas de pájaros y dinámica de la IA.

● Hotline Miami: Cámara, movimiento por la escena y combate a melé.

<!-- **Arquitectura**

![Arquitectura][capturaarquitectura]

 ###### Link Arquitectura: [Diagrama: Platero's Tale (on-line)][Nueva Arquitectura]

 ###### Antiguo GDD: [Game Design Document][GDD] - [Archivo en repositorio][GDD en repo]

 ###### Arquitectura Antigua: [Diagrama: Platero y Yo (on-line)][Arquitectura antigua] - [Formato PNG][PNG Arquitectura antigua] -->

[Nueva arquitectura]: https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Diagrama%20de%20GameObjects.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FAcedpol%2FProyecto_PVLI---AVES%2Fmaster%2Fassets%2Fdocuments%2FArquitectura%2520-%2520UML%2FDiagrama%2520de%2520GameObjects.drawio "Visualizador web"
[Pivotal Tracker]: https://www.pivotaltracker.com/n/projects/2534895 "Herramienta de gestión del Proyecto"
[WEB]: https://acedpol.github.io/Proyecto_PVLI---AVES/ "Web del Proyecto"
<!-- [logo]: assets/images/adaptacion.png "Platero's Tale"
[video]: https://youtu.be/q81Hx4C6JRw
[GDD]: http://acedpol.github.io/Proyecto_PVLI_/assets/documents/GDD/Plateros_Tale_GDD_v1.1.pdf "Enlace a la web (versión html)"
[GDD en repo]: https://github.com/Acedpol/Proyecto_PVLI_/blob/master/assets/documents/GDD/Plateros_Tale_GDD_v1.1.pdf "Link a la ubicación en el repositorio"
[PNG Arquitectura antigua]: https://github.com/Acedpol/Proyecto_PVLI_/blob/master/assets/documents/Arquitectura%20-%20UML/Arquitectura%20Platero%20y%20Yo.png
[PNG Nueva Arquitectura]: https://github.com/Acedpol/Proyecto_PVLI_/blob/master/assets/documents/Arquitectura%20-%20UML/ArquitecturaPlaterosTale_1.1.png
[capturamenu]: assets/images/captura.png "Captura de Menu"
[capturajuego]: assets/images/juego.png "Captura de Juego"
[capturaarquitectura]: assets/images/ArquitecturaNuevaPNG.png "Arquitectura" -->
