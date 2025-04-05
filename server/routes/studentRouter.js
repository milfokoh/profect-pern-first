const Router = require('express');
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/registration', studentController.registration);
router.post('/login', studentController.login);
router.get('/auth', authMiddleware, studentController.check);
router.get('/get', studentController.getAll);

module.exports = router;
