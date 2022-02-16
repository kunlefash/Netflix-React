const jwt = require('jsonwebtoken');
const User = require('../models/User');

function verify(req, res, next){
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY,(err, user) => {

            if(err) res.status(403).json("token is mot valid ");
            req.user = user
            next()
        })

    }else{
        return res.status(401).json("Error")
    }

}
module.exports = router
module.exports = verify