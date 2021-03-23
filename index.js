const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var Gpio = require('onoff').Gpio; //require onoff to control GPIO
var door = new Gpio(4, 'out'); //declare GPIO4 an output
app.use(bodyParser());

app.route('/test')
    .post((req, res) => {
        const token = req.body.token
        console.log(token)
        if (token == "open") {
            door.writeSync(true);
            sleep(3000).then(() => {
                door.writeSync(false);
            })   
        }
        res.send("thanks to use hub epitech api")
    })

app.listen(4242, () => {
    console.log("Serveur à l'écoute")
})