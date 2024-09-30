const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const sectionRouter = require('./sectionRouter');
const materialRouter = require('./materialRouter');

router.use('/user', userRouter);
router.use('/section', sectionRouter);
router.use('/material', materialRouter);

module.exports = router;
