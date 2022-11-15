const jwt = require('jwt-simple');
const { DateTime } = require('luxon');

const createToken = (user) => {
    const payload = { 
        sub: user._id,
        iat: DateTime.now().toMillis(),
        exp: DateTime.now().plus({ day: 14 }).toMillis()
    };
    return jwt.encode(payload, process.env.SECRET_TOKEN);
}

const decodeToken = (token) => {
    const decode = new Promise((resolve, reject) => {
        try{
            const payload = jwt.decode(token, process.env.SECRET_TOKEN);

            if(payload.exp <= DateTime.now().toMillis()){
                reject({
                    status: 401,
                    message: "expired token",
                });
        }

        resolve(payload.sub);
       
        } catch(error) {
        reject({
            status: 500,
            message: "Invalid Token"
        });
        }
    });        
    return decode;
}
module.exports = {
    createToken,
    decodeToken,
}