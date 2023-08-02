const express = require ('express')
const app = express();
const mainRouter = require('./routers/mainRouter') 
app.use(express.static('public'))


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.use('/',mainRouter)