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
