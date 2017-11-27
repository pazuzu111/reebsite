const express = require('express');

const beerRouter = express.Router();
const beerontroller = require('../controllers/beer-controller');

beerRouter.route('/')
  .get(beerController.index)
  .post(beerController.create);

beerRouter.route('/:id')
  .get(beerController.show)
  .put(beerController.update)
  .delete(beerController.delete);

module.exports = beerRouter;
