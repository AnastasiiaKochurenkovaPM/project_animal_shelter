const express = require("express");
const router = express.Router();
const user = require('../controllers/ShelController');
const files = require('../controllers/FilesController')
const advert = require('../controllers/AdvertController');
const cache = require('../../routeCache')
require("dotenv").config();


router.post('/Registration', user.saveShelter);
router.post('/LogIn', user.authForm);
router.get('/Cabinet', user.viewUser);
router.get('/Edit', user.editUser)
router.get('/GetShelter/:id', user.viewShelter)
router.post('/Upload', user.upload);
router.get('/Logout', user.logout)


router.post('/Advert', advert.createAdvert);
router.get('/AllAdvert', advert.getAll);
router.get('/OneAdvert/:id', advert.getOne);
router.get('/EditAdvert/:id', advert.editAdvert);
router.post('/UploadAdvert/:id', advert.uploadAdvert);
router.get('/GetAllAdvertsSession', advert.getAllAdvertssession);
router.get('/GetSomeAdvert', advert.getSomeAdvert);
router.get('/GetOneInProfile/:id', advert.viewOneAdInProfile);
router.get('/Delete/:id', advert.deleteAdvert);


router.get('/files/:id', files.get);
router.post('/files', files.create);

module.exports = router;
