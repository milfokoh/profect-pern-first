const Router = require('express');
const sectionController = require('../controllers/sectionController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const router = new Router();

router.post('/', checkRoleMiddleware('ADMIN'), sectionController.create);
router.get('/', sectionController.getAll);
router.get('/:id', sectionController.getOne);

module.exports = router;
