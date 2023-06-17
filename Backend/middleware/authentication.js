const jwt = require("jsonwebtoken")
const{blacklistModel}=require("../model/blacklist.model")
const { userModel } = require("../model/user.model")

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        // const token = req.headers.authorization
        
        // Checking for blacklisted token
        const isBlacklisted = await blacklistModel.findOne({ token });
        
        if (isBlacklisted) {
            return res.status(401).send('Token is blacklisted');
        } else {
            const decodedToken = jwt.verify(token, "masai");
            const { userID } = decodedToken;

            // Check if the user exists
            const user = await userModel.findById(userID);
            console.log(user)
            if (!user) {
                return res.status(401).json({ message: 'pls login' });
            }

            // Attach the user to the request object
            req.user = user;

            next();
        }

    } catch (error) {
        res.status(401).json({ message: 'pls login 2' });
        console.log(error)
    }
}

module.exports = { authenticate }
