const express = require('express');
const path = require('path');
const externalRequest = require('./holidays');
const port = 1245;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, './public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/holidays', externalRequest);


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.info(`Your express server is now running on: ${port}`);
    }
});