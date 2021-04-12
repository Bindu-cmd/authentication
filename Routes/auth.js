

const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Incorrect email or password.');
    }
    const validPassword = await compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }

    res.send(true);
});

module.exports = router;