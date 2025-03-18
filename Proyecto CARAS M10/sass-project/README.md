# SASS Project

Este proyecto utiliza SASS para organizar y gestionar los estilos de una manera más eficiente y modular. A continuación se describen los archivos y su propósito dentro del proyecto.

## Estructura del Proyecto

```
sass-project
├── scss
│   ├── _variables.scss      # Variables de estilo reutilizables (colores, tamaños, etc.)
│   ├── _mixins.scss         # Mixins para reutilizar bloques de código CSS
│   ├── _base.scss           # Estilos base del proyecto (márgenes, padding, etc.)
│   ├── _layout.scss         # Estilos de diseño general (header, main, footer)
│   ├── _components.scss      # Estilos para componentes específicos (formularios, botones, etc.)
│   ├── _footer.scss         # Estilos específicos para el footer
│   └── style.scss           # Punto de entrada principal para SASS
├── css
│   └── style.css            # Resultado final de la compilación de SASS
└── README.md                # Documentación del proyecto
```

## Instrucciones para Compilar SASS

1. Asegúrate de tener SASS instalado en tu máquina. Puedes instalarlo globalmente usando npm:

   ```
   npm install -g sass
   ```

2. Navega a la carpeta del proyecto en tu terminal.

3. Ejecuta el siguiente comando para compilar los archivos SASS:

   ```
   sass scss/style.scss css/style.css
   ```

4. Esto generará el archivo `style.css` en la carpeta `css`, que contendrá todos los estilos aplicados al proyecto.

## Notas Adicionales

- Asegúrate de mantener los archivos parciales organizados y actualizados a medida que el proyecto evoluciona.
- Puedes agregar más mixins o variables en sus respectivos archivos para mejorar la reutilización de estilos.
- Para un desarrollo más eficiente, considera usar un watcher de SASS que compile automáticamente los cambios en los archivos SASS.