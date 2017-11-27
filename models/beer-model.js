const db = require('../db/config');

class Beer {
  constructor(beer) {
    this.id = beer.id || null;
    this.name = this.__validate(beer.name, 'name');
    this.brewery = this.__validate(beer.brewery, 'brewery');
    this.country = this.__validate(beer.country, 'country');
    this.abv = this.__validate(beer.abv, 'abv');
    this.url = this.__validate(beer.url, 'url');

  }

  __validate(property, propType) {
    if (propType === 'image' || propType === 'url') {
      const url = /^(https?:\/\/)?([\da-z\.-]+)\..*/;
      if (!property.match(url)) throw new Error('Invalid URL');
    }
    if (property) return property;
    else throw new Error(`Missing property ${propType}`);
  }

  __modify(changes) {
    for (let prop in changes) {
      this.__validate(changes[prop], prop);
    }
    return Object.assign(this, changes);
  }

  static findAll() {
    return db.manyOrNone('SELECT * FROM beer');
  }

  static findById(id) {
    return db.one('SELECT * FROM beer WHERE id = $1', id)
      .then(beer => new Beer(beer));
  }

  static destroy(id) {
    return db.none('DELETE FROM beer WHERE id = $1', id);
  }

  save() {
    return db.one(`
      INSERT INTO beer
      (name, brewery, country, abv, url)
      VALUES ($/name/, $/brewery/, $/country/, $/abv/, $/url/)
      RETURNING *
    `, this).then(beer => this.__modify(beer));
  }

  update(changes) {
    this.__modify(changes);
    return db.one(`
      UPDATE beer SET
      name = $/name/,
      brewery = $/brewery/,
      country = $/country/,
      abv = $/abv/,
      url = $/url/
      WHERE id = $/id/
      RETURNING *
    `, this).then(beer => this.__modify(beer));
  }

}

module.exports = Beer;
