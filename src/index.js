//IMPORTS
const express = require ('express');
const app = express();

//CONFIG


//rutas
app.set('port', 8080);

app.get('/home', (req, res) => {
	res.sendFile(__dirname+'/views/home.ejs');
}),

//escucha
app.listen(app.get('port'), () => {
    console.log(__dirname);
    console.log('conectado al puerto: ', app.get('port'));
});