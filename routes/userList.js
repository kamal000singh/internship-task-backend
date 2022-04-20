const Axios = require('axios');
var express = require('express');
var router = express.Router();

//this api is used to fetch data accounding to page number and size
router.get('/', async (req, res) => {
    let urlData = req.url.split('?');
    let api = `https://api.instantwebtools.net/v1/passenger?${urlData[1]}`;
    let response = await Axios.get(api);
    if (response.status === 200) {
        let result = response.data.data.map((r) => {
            return { "passenger_Name": r.name, "id": r.airline[0].id, "name": r.airline[0].name, "country": r.airline[0].country }
        })
        res.send({
            "status": response.status, "totalPages": response.data.totalPages, "data": result
        });
    }
    else {
        res.send("error");
    }
});





module.exports = router;
