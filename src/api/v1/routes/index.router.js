const express = require('express');

const router = express.Router();
const userRouter = require('./user.router');

router.use('/users', userRouter);

router.get('/checkstatus', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'api ok',
  });
});

module.exports = router;
