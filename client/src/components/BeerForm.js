import React, { Component } from 'react';

export default class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavor: props.beer ? props.beer.name : '',
      brewery: props.beer ? props.beer.brewery : '',
      country: props.beer ? props.beer.country : '',
      url: props.beer ? props.beer.url : '',
      abv: props.beer ? props.beer.abv : '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const val = e.target.value;

    this.setState({
      [name]: val,
    });
  }

  render() {
    return (
      <div className="add">
      <form className={this.props.isAdd ? 'addform' : 'editform'}
        onSubmit={this.props.isAdd
            ? e => this.props.beerSubmit('POST', e, this.state)
            : e => this.props.beerSubmit('PUT', e, this.state, this.props.beer.id)}>
        <input type="text" name="name"  value={this.state.name} onChange={this.handleInputChange} />
        <input type="text" name="brewery" value={this.state.brewery} onChange={this.handleInputChange} />
        <input type="text" name="country" value={this.state.country} onChange={this.handleInputChange} />
        <input type="text" name="url" value={this.state.url} onChange={this.handleInputChange} />
        <input type="text" name="abv" value={this.state.abv} onChange={this.handleInputChange} />
        <input type="submit" value={this.props.isAdd ? 'Add it!' : 'Edit it!'} />
      </form>
      </div>
    );
  }
}
