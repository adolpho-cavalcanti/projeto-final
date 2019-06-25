const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const authMiddleware = require('./middlewares/auth')

const routes = express.Router();

routes.use(authMiddleware);

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post(
    '/boxes/:id/files',
     multer(multerConfig).single('file'), FileController.store);

module.exports = routes;