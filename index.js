const app = require("./src/app");
const {conn}=require("./src/db");


const PORT = 3001;


conn.sync({ force: true }).then(() => {
    
    app.listen(PORT, () => {
        console.log(` Base de datos conectada`);
        console.log(` Servidor escuchando en el puerto ${PORT}`);

    });
}).catch(err => {
    console.error(" Error al sincronizar la base de datos:", err);
});