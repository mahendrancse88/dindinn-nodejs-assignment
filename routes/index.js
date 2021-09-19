const { Router } = require('express');
const authorize = require('../_middleware/authorize')
const userController = require('../controllers/userController');
const geoLocationController = require('../controllers/geoLocationController');

const router = Router();

router.get('/getGeoLocationDistance', geoLocationController.getGeoLocationDistance);
router.post('/authenticate', userController.authenticate);
router.get('/', (req, res) => res.send('This is root!'));
router.post('/users', userController.createUser);
router.get('/users', authorize(), userController.getAllUsers);
router.get('/users/:id',authorize(), userController.getUserById);
router.put('/users/:id', authorize(), userController.updateUser)
router.delete('/users/:id',authorize(), userController.deleteUser)
module.exports = router