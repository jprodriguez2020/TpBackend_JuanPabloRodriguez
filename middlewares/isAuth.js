const { authService } = require("../services");

const isAuth = (req, res, next) => {
       if(!req.headers.authorization){
        return res.status(401).send({ message: "User is not login"})
    }

    const token = req.headers.authorization.split(" ")[1];
    
    authService.decodeToken(token).then((response) => {
        req.user = response;
        next();
    }).catch((response) => {
        return res.status(response.status).send(response.message)
        
    });
}

module.exports = isAuth;