const auth = require('../model/UserModel')
const jwt = require('jsonwebtoken')

exports.authenticatetoken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
        // console.log(token)
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, 'shaival', function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        res.status(200).send(decoded);
    });
    next()

}


exports.SaveUser = (req, res) => {
    let user = new auth(req.body)
    user.isActive = true
    user.roles = "user"

    user.save().then((success, err) => {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(success)
        }
    })
}

exports.login = (req, res) => {
    auth.findOne({ email: req.body.email, password: req.body.password }).then((data, err) => {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            if (data) {
                const user = {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    isActive: data.isActive,
                    roles: data.roles
                };
                const secretKey = 'shaival'; // Change this to your own secret key
                const token = jwt.sign(user, secretKey, { expiresIn: '1s' });
                res.json({ token });
                //console.log(token)
                res.status(200)
            } else {

                res.status(404).send({ message: "Invalid Credentials" })
            }
        }
    })
}