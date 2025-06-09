const Router = require('express');
const quizController = require('../controllers/quizController');
const router = new Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:studentId', quizController.getOne);
router.put('/:studentId', quizController.update);

module.exports = router;
