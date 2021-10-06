# Buscador de series

![buscador](src/images/buscador_serie.png)

-Esta aplicación permite buscar series por nombre.

## Cómo funciona:

1. Escribe el nombre de tu serie favorita.
2. Dale click a la serie y se añadirá a favorito.
3. Si vuelves añadir la misma serie a favoritos esta se te marcara con un corazón indicando que ya la tienes añadida en la lista de los favoritos.
4. Con el botón de eliminar puedes eliminar la serie de tu lista de favoritos.

## Herramientas empleadas

- Adalab web starter kit, que es una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas, que nos facilita la automatización de tareas, ya que incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local y muchas cosas más, que nos ayudan a trabajar más cómodamente, debido a la automatización de tareas.

- Editor de código Visual Studio Code

- Node JS

- Git

**NOTA:** Estas herramientas son las requeridas para poder utilizar o colaborar en el proyecto.

## Estructura de carpetas

A si se ve la estructura de carpetas:

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ images
 |  └─ logo.jpg
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |  └─ events.js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```

> **NOTA:** Los partials de HTML y SASS del proyecto son orientativos.

## Vídeotutoriales del Starter kit

- [Qué es, trabajar con la versión de desarrollo y rutas relativas](https://www.youtube.com/watch?v=XwvhXvBijos)
- [Migración de un proyecto, trabajar con la versión de producción y GitHub Pages](https://www.youtube.com/watch?v=qqGClcgt9Uc)
- [Motor de plantillas](https://www.youtube.com/watch?v=4GwXOJ045Zg)
