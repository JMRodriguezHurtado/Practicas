//Esta es la parte de la aplicacion que genera el bundle una vez se hayan instalando las dependencias atraves del npm run build una vez realizado en el package.json.

module.exports = {
    entry: "./browser/app.js",
    output: {
        path:__dirname + "/browser",
        filename: "bundle.js"
    }
}