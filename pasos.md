## [MODULOS Y WEBPACK]

# [Pasos para hacer el package json en nuestra aplicación]

    1. ingresar en Consola **npm init**
    2. Va a pedir el nombre del proyecto 'package name:' dejamos el mismo nombre.
    3. Va a pedir la versión 'version: (1.0.0)' la dejamos así.
    4. Pide 'descripción:' escribimos al que sea adecuada y tenga relación el proyecto.
    5. Pide punto inicial de la aplicación 'entry point: (index.js)' lo dejamos así.
    6. Comando para pruebas 'test command:' por el momento no lo definimos.
    7. repositorio 'git repository:' damos enter.
    8. Nos permite subir el repositorio a Node. 'keywords' lo dejamos así.
    9. Pide 'author' ingresamos nuestro nombre.
    10. Pide licensia 'license:' damos enter.
    11. Nos genera el archivo package.json
        {
            "name": "webpack-inicial",
            "version": "1.0.0",
            "description": "este es un cascaron de un proyecto de webpack",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
        },
            "author": "Julio Romero",
            "license": "ISC"
        },
    12. Is this OK? damos enter.

# [Instalar Webpack]

    1. Ejecutar el siguiente comando en la terminanl de la raiz de tu proyecto.
       npm install webpack webpack-cli --save-dev
    2. Crear una carpeta dist en la raiz.
    3. Ingresar al archivo package.json y en la sección de "scripts" ingresar lo siguiente:
       "build": "webpack"
       y guardamos.
    4. Ejecutar el siguiente comando en consola
       **npm run build**
       Se creará un archivo dentro de la carpeta build llamado **main.js**
       Este archivo contine codigo js compatible con otros navegadores.

# [Archivo de Configuración del webpack]

    1. En la raiz del proyecto, crea un archivo llamado **webpack.config.js**
    2. en el archivo creado, ongresa el siguiente codigo:
        module.exports = {
        mode: 'development',
       };
    3. Ingresamos a nuestra terminal de comanando y ejecutamos lo sigiente:
       **npm run build**
    4. ingresamos mas codigo de configuración en nuestro archivo **webpack.config.js**, así se tiene que mirarar:
       module.exports = {
            mode: 'development',

                module: {
                    rules: []
            },

            optimization: [],


            plugins: [],
        };

# [Instalar plugins]

    1. Ejecuta el siguiente comando:
       npm install --save-dev html-loader
       npm install --save-dev html-webpack-plugin
       "npm install --save-dev html-webpack-plugin@5.3.2 para instalar una versión en especifico" **NO EJECUTAR COMANDO**
    2. ingresa todo el codigo siguiente en el archivo webpack:
       const HtmlWebPack = require('html-webpack-plugin');
 
        module.exports = {
            mode: 'development',
 
            output: {
                clean: true
            },
 
        module: {
            rules: [{
 
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            }]
        },
        plugins: [
            new HtmlWebPack({
            title: 'Mi Webpack App',
            template: './src/index.html',
            })
        ]
        }

# [Webpack - dev - server]

        1. instalar webpack server con el siguiente comando en la raiz:
           npm install -D  webpack-dev-server
        2. configurar el archivo package.json para correr el servidor:
           "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1",
           "build": "webpack --config webpack.config.js",
           "start": "webpack serve --config webpack.config.js --open --port=8080"
            },
        3. En consola ejucutar el comando **npm start**
