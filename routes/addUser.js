const Axios = require('axios');
const express = require('express');
const router = express.Router();

//http://localhost:8080/adduser API is used to add new user in external API and return response
router.post('/', async (req, res) => {
    await Axios.post('https://api.instantwebtools.net/v1/passenger', {
        "name": req.body.name, "trips": req.body.trips, "airline": req.body.airline
    }).then((resp) => {
        res.send(resp.data);
    })
        .catch((error) => {
            res.send(error);
        });

});

module.exports = router;
