const { response } = require('express');
let express = require('express');

const PORT = 3002;

let app = express();

app.use((req, res, next) => {
    let requestIP = req.socket.remoteAddress;
    if(requestIP.indexOf("172.19.0.8") >= 0)
        res.send(`request from domain ${requestIP} is not allowed`)
    else
        next()
});

app.get('/apiclosed', (req, res) => {
    res.send('api closed working well...');
});

app.listen(PORT, () => console.log(`server listening on ${PORT}`))