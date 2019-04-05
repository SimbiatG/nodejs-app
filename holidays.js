const http = require('https');
const axios = require('axios');
const externalRequest = ( req, res) => {
    const url = 'https://holidayapi.com/v1/holidays';
    const params = {
        country: 'NG',
        key: '052bfe2d-c18b-4f16-8b16-02d99d0206ba',
        day: '25',
        month: '12',
        year:'2018'
    }

        axios.get(url, { params})
            .then(response => {
                res.json(response.data);
            }, error => {
                res.status(400)
                res.json({message: error.message})
            
        });


}


module.exports = externalRequest;