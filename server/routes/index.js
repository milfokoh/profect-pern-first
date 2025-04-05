const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const sectionRouter = require('./sectionRouter');
const materialRouter = require('./materialRouter');
const studentRouter = require('./studentRouter');

router.use('/user', userRouter);
router.use('/section', sectionRouter);
router.use('/material', materialRouter);
router.use('/student', studentRouter);

module.exports = router;
