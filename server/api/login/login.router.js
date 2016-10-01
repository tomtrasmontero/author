var router = require('express').Router();
var User = require('../users/user.model');

module.exports = router;

// router.post('/', function (req, res, next) {
//   console.log('login route');
//   User.findOne({
//     where: { 
//       email: req.body.email,
//       password: req.body.password
//     }
//   })
//   .then(function (user) {
//     if (!user) {
//       res.sendStatus(401);
//     } else {
//       req.session.userId = user.id;
//       res.sendStatus(204);
//     }
//   })
//   .catch(next);
// });

router.post('/', function (req, res, next) {
  console.log(req);
  User.findOne({
    where: {email: req.body.email, password: req.body.password}
  })
  .then(function (user) {
    if (!user) {
      res.send('not authorized')
    } else {
      req.session.userId = user.id;
      res.send('authorized')
    }
  })
  .catch(next);
});