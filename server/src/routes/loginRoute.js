const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  console.log(req.body);

  if (req.body.password === process.env.PASSWORD) {
    /*
    This is not encrypted so don't put sensitive info in here like social security number, pasword etc.
    This is just a token that is crptographically signed.
    */
    const token = jwt.sign({

    userId: 1,
    firstName: 'Ram',
    LastName: 'adhikari',
    email: '',
    password: '',
    phone: '',
    CreatedAt: '',
    UpdateAt,
    DeletedAt: '',
    RefereshToken: '',

    }, process.env.JWT_SECRET);

    res.json({
        token,
    })
  } else {
    res.status(401).send("Password didn't match");
  }
};
