const Beer = require('../models/beer-model');

const beerController = {};

beerController.index = (req, res, next) => {
  Beer.findAll()
    .then(beer => {
      res.status(200).json({
        message: 'ok',
        data: {
          beer,
        },
      });
    })
    .catch(next);
};

beerController.show = (req, res, next) => {
  Beer.findById(req.params.id)
    .then(beer => {
      res.status(200).json({
        message: 'ok',
        data: {
          beer,
        },
      });
    }).catch(next);
};

beerController.create = (req, res, next) => {
  try {
    new Beer({
      brewid:req.body.brewid
    })
      .save()
      .then(beer => {
        res.status(201).json({
          message: 'Beer successfully created',
          data: {
            beer,
          },
        });
      }).catch(next);
  } catch (err) {
    return next(err);
  }
};

beerController.update = (req, res, next) => {
  Beer.findById(req.params.id)
    .then(beer => {
      return beer.update({
        name: req.body.name,
        brewery: req.body.brewery,
        country: req.body.country,
        abv: req.body.abv,
        url: req.body.url,
      })
    }).then(beer => {
      res.status(202).json({
        message: 'Beer successfully updated',
        data: {
          beer,
        },
      });
    }).catch(next);
};

beerController.delete = (req, res, next) => {
  Beer.destroy(req.params.id)
    .then(() => {
      res.status(202).json({
        message: 'Beer successfully deleted',
      });
    }).catch(next);
}

module.exports = beerController;
