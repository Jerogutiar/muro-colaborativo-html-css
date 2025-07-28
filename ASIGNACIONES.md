# Asignaciones para los 30 Coders

## Reglas Generales:
- Los estilos deben incluir al menos 3 propiedades CSS
- El contenido debe ser relevante para la etiqueta asignada

## Estructura HTML Base:
La página seguirá esta estructura jerárquica básica:
```html
<body>
    <header>     <!-- Coder 1 -->
    <nav>        <!-- Coder 2 -->
    <main>       <!-- Coder 3 -->
        <article><!-- Coder 4 -->
        <section><!-- Coder 5 -->
    </main>
    <aside>      <!-- Coder 7 -->
    <footer>     <!-- Coder 6 -->
</body>
```

## Asignaciones Detalladas por Coder:

1. Coder 1: `<header>` 
   - Ubicación: Primera sección de la página
   - Contenido: Logo, título principal y subtítulo
   - Debe ocupar el ancho completo

2. Coder 2: `<nav>`
   - Ubicación: Dentro o después del header
   - Contenido: Menú de navegación con al menos 4 enlaces
   - Debe ser responsive (menú hamburguesa en móvil)

3. Coder 3: `<main>`
   - Ubicación: Contenedor principal después del nav
   - Contenido: Contendrá article y section
   - Es el contenedor principal de la página

4. Coder 4: `<article>`
   - Ubicación: Dentro del main
   - Contenido: Artículo sobre tecnología con título y párrafos
   - Debe incluir al menos una imagen

5. Coder 5: `<section>`
   - Ubicación: Dentro del main, después del article
   - Contenido: Sección de servicios con títulos y descripciones
   - Usar grid o flexbox para el layout

6. Coder 6: `<footer>`
   - Ubicación: Parte final de la página
   - Contenido: Enlaces, copyright y redes sociales
   - Debe incluir el address (Coder 25)

7. Coder 7: `<aside>`
   - Ubicación: Lateral al main o dentro de article
   - Contenido: Enlaces relacionados y widgets
   - Debe ser responsive (oculto en móvil)

8. Coder 8: `<figure>` y `<figcaption>`
   - Ubicación: Dentro de article o section
   - Contenido: Imagen relevante con descripción
   - La imagen debe ser responsive

9. Coder 9: `<video>`
   - Ubicación: Dentro de article o section
   - Contenido: Video con controles y poster
   - Debe tener fallback para navegadores antiguos

10. Coder 10: `<audio>`
    - Ubicación: Dentro de aside o section
    - Contenido: Archivo de audio con controles
    - Incluir descripción del audio

11. Coder 11: `<form>`
    - Ubicación: Dentro de section o main
    - Contenido: Formulario de contacto con validación
    - Incluir diferentes tipos de inputs

12. Coder 12: `<table>`
    - Ubicación: Dentro de section
    - Contenido: Tabla de precios o características
    - Debe ser responsive

13. Coder 13: `<ul>`
    - Ubicación: Dentro de nav o aside
    - Contenido: Lista de características o enlaces
    - Estilizar los bullets personalizados

14. Coder 14: `<ol>`
    - Ubicación: Dentro de article o section
    - Contenido: Pasos numerados de un proceso
    - Personalizar los números

15. Coder 15: `<dl>`
    - Ubicación: Dentro de article o aside
    - Contenido: Glosario de términos técnicos
    - Estilizar términos y definiciones

16. Coder 16: `<blockquote>`
    - Ubicación: Dentro de article
    - Contenido: Cita relevante con autor
    - Usar estilos decorativos para las comillas

17. Coder 17: `<details>` y `<summary>`
    - Ubicación: Dentro de section o aside
    - Contenido: FAQ con preguntas desplegables
    - Animar la apertura/cierre

18. Coder 18: `<progress>`
    - Ubicación: Dentro de section
    - Contenido: Barra de progreso con etiqueta
    - Estilizar con colores y animaciones

19. Coder 19: `<meter>`
    - Ubicación: Dentro de article o section
    - Contenido: Medidor de valoración o progreso
    - Usar diferentes colores según el valor

20. Coder 20: `<time>`
    - Ubicación: En article o footer
    - Contenido: Fecha y hora con formato
    - Estilizar la presentación

21. Coder 21: `<mark>`
    - Ubicación: Dentro de párrafos en article
    - Contenido: Texto destacado
    - Usar colores y efectos al hover

22. Coder 22: `<code>`
    - Ubicación: Dentro de article o section
    - Contenido: Fragmento de código
    - Usar sintaxis highlighting

23. Coder 23: `<pre>`
    - Ubicación: Dentro de article
    - Contenido: Bloque de código formateado
    - Mantener el formato y espaciado

24. Coder 24: `<kbd>`
    - Ubicación: Dentro de section o article
    - Contenido: Atajos de teclado
    - Estilizar como teclas reales

25. Coder 25: `<address>`
    - Ubicación: Dentro del footer
    - Contenido: Información de contacto
    - Incluir iconos para cada dato

26. Coder 26: `<div>`
    - Ubicación: Dentro de section
    - Contenido: Tarjeta de contenido
    - Usar sombras y efectos hover

27. Coder 27: `<span>`
    - Ubicación: Dentro de párrafos
    - Contenido: Textos con estilos especiales
    - Usar diferentes colores o efectos

28. Coder 28: `<button>`
    - Ubicación: En form o section
    - Contenido: Botón interactivo
    - Incluir efectos hover y active

29. Coder 29: `<hr>`
    - Ubicación: Entre secciones
    - Estilo: Separador decorativo
    - Usar gradientes o patrones

30. Coder 30: `<iframe>`
    - Ubicación: Dentro de section o aside
    - Contenido: Mapa o video embebido
    - Debe ser responsive

31. Coder 31: `<picture>` y `<source>`
    - Ubicación: Dentro de article o section
    - Contenido: Imagen responsive con diferentes versiones
    - Usar media queries para diferentes tamaños de pantalla

32. Coder 32: `<dialog>`
    - Ubicación: En cualquier parte del documento
    - Contenido: Ventana modal con formulario o mensaje
    - Agregar animaciones de apertura/cierre

33. Coder 33: `<datalist>` y `<input>`
    - Ubicación: Dentro de form
    - Contenido: Campo de búsqueda con autocompletado
    - Estilizar las sugerencias del datalist

34. Coder 34: `<output>`
    - Ubicación: Dentro de form
    - Contenido: Mostrar resultado de un cálculo
    - Actualizar dinámicamente con JavaScript

## Notas Técnicas:
- Cada elemento debe ser responsive
- Usar CSS moderno (flexbox/grid)
- Incluir estados hover donde sea apropiado
- Agregarcolores y estilos
- Comentar el código CSS
