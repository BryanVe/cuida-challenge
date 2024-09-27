# Reto técnico de Cuida

Este proyecto es una aplicación web construida con **React** y **Vite** como parte de un reto técnico para **Cuida**.

## Requisitos

Debe tener instalado [`Node`](https://nodejs.org/en/download/package-manager) a partir de la versión 20 en adelante.

El proyecto utiliza [`pnpm`](https://pnpm.io/es/) como manejador de paquetes por su gestión eficiente y rápida. Puede instalarlo con [`npm`](https://pnpm.io/es/installation#usando-pnpm) a través del siguiente comando.

```sh
npm install -g pnpm
```

## Instalación

Primero, debe clonar el repositorio y luego instalar las dependencias:

```sh
# con https
git clone https://github.com/BryanVe/cuida-challenge.git
# o con ssh
git clone git@github.com:BryanVe/cuida-challenge.git

cd cuida-challenge
pnpm install
```

Esto instalará todas las dependencias necesarias para poder correr la aplicación web localmente.

## Ejecución

Para iniciar el servidor de desarrollo, ejecute:

```sh
pnpm dev

VITE v5.4.3  ready in 240 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Esto iniciará la aplicación en [`http://localhost:3000`](http://localhost:3000) y escuchará cambios en el proyecto de forma local.

## Despliegue

Para generar el bundle de producción:

```sh
pnpm build
```

Los archivos generados estarán disponibles en la carpeta `dist/`, listos para ser desplegados en cualquier servidor de hosting estático (como Netlify, Vercel o Render).

## Scripts disponibles

- **pnpm dev**: Inicia el servidor de desarrollo.
- **pnpm build**: Crea un bundle del código para producción.
- **pnpm lint**: Ejecuta ESLint para verificar la calidad del código.
- **pnpm preview**: Inicia una vista previa del bundle para producción en local.
- **pnpm format**: Ejecuta Prettier para formatear el código acorde al 'code style'.
- **pnpm typecheck**: Ejecuta tsc para verificar errores con TypeScript.
- **pnpm prepare**: Ejecuta husky para generar los scripts default.

## Estructura del proyecto

```txt
├── .husky/                     # Scripts de husky revisar y formatear el código antes de hacer commit
├── src/                        # Código fuente
│   ├── @types/                 # Tipos globales accesibles en toda la aplicación
│   ├── assets/                 # Contiene recursos estáticos como imágenes y fuentes
│   │   ├── fonts/              # Fuentes accesibles en todo el proyecto
│   │   └── images/             # Imágenes accesibles en todo el proyecto
│   ├── components/             # Componentes reutilizables en toda la aplicación
│   ├── theme/                  # Archivos de estilos globales y variables SCSS (colores, fuentes, etc)
│   │   ├── fonts.scss          # Estilos de fuentes
│   │   ├── globals.scss        # Variables globales
│   │   └── utils.scss          # Utilidades globales con SCSS (mixins, funciones, etc)
│   ├── views/                  # Vistas de la aplicación
│   │   └── LandingView/
│   │       └── components/     # Componentes que solo se usan en la vista Landing
│   ├── App.tsx                 # Componente raíz de la aplicación
│   ├── index.scss              # Archivo de estilos raíz de la aplicación
│   └── main.tsx                # Punto de entrada de la aplicación
├── .gitignore                  # Archivo para ignorar carpetas o ficheros con git
├── .prettierignore             # Archivo para ignorar carpetas o ficheros con prettier
├── .prettierrc.json            # Configuración de prettier
├── eslint.config.js            # Configuración de eslint
├── index.html                  # Archivo HTML principal
├── package.json                # Información del proyecto y scripts
├── vite.config.js              # Configuración de Vite
└── README.md                   # Documentación del proyecto
```

## Dependencias de desarrollo utilizadas

El proyecto utiliza varias herramientas para mantener una alta calidad de código y mejorar el flujo de desarrollo:

- [**eslint**](https://www.npmjs.com/package/eslint): Para asegurar consistencia en el estilo del código y detectar posibles errores.
- [**prettier**](https://www.npmjs.com/package/prettier): Formateador de código automático para mantener un estilo consistente.
- [**husky**](https://typicode.github.io/husky/): Para ejecutar scripts antes de los commits, asegurando que el código esté limpio.
- [**lint-staged**](https://www.npmjs.com/package/lint-staged): Ejecuta linters en los archivos que han sido 'stageados' para commit.
- [**sass**](https://www.npmjs.com/package/sass): Extensión de CSS que permite usar variables, mixins y anidación.
- [**typescript**](https://www.npmjs.com/package/typescript): Superconjunto de JavaScript que añade tipado estático.
- [**vite**](https://www.npmjs.com/package/vite): Bundler ultrarrápido para aplicaciones web modernas.
- [**@trivago/prettier-plugin-sort-imports**](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports): Para ordenar automáticamente las importaciones.
- [**vite-tsconfig-paths**](https://www.npmjs.com/package/vite-tsconfig-paths): Plugin de Vite para resolver paths definidos en `tsconfig.json`.

## Razonamiento de selección de librerías

- **Vite**: Seleccionado por su velocidad en la construcción y la facilidad de configuración.
- **eslint y prettier**: Para mantener la calidad del código y consistencia en el estilo de código.
- **typescript**: Para mejorar la calidad del código mediante el tipado estático.
- **sass**: Para escribir CSS de manera más eficiente con soporte para variables y anidación.
