const express = require('express');
const router = express.Router();
const cron = require('node-cron');



router.get("/ping", (req, res) =>
{
    res.send("pong");
});


module.exports = router;