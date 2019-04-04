const http = require('https');
// const { get } = require('request');
const externalRequest = ( req, res) => {
    const url = 'https://holidayapi.com/v1/holidays?key=e52bfe2d-c18b-4f16-8b16-02d99d0206ba';

    http.get(url, (response) =>{
        let body = '';
        response
        .on('data', (chunk) => {
            body += chunk.toString();
        })
        .on('end', () => {
            const parsed = JSON.parse(body);
            const holidays = parsed.data.map(holiday => ({
                holiday_name: holiday.name
            }));

            res.json({
                count: holidays.length,
                holidays
            });
        })
    });


}


module.exports = externalRequest;