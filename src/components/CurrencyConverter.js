import React, { Component } from 'react';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyChosen: false,
      selectedCurrency: 'Select Currency',
      amount: 0
    }
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        amount: prevState.amount + 1
      }
    })
  };

  handleDecrement = () => {
    return (
      this.state.amount > 0 &&
      this.setState((prevState) => {
        return {
          amount: prevState.amount - 1
        }
      })
    )
  };

  handleUserSelect = (event) => {
    const userValue = event.target.value
    this.setState(() => {
      return {
        selectedCurrency: userValue,
        currencyChosen: userValue === 'Select Currency' ? false : true
      }
    })
  }

  render() {
    const { selectedCurrency, amount } = this.state;

    const currencyData = [
      { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
      { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
      { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
      { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
      { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
    ];

    const currencyOptions = currencyData.map((obj, i) => (
      <option key={obj.id} value={i}>
        {obj.name}
      </option>
    ))

    return (

      <div>
        <select value={selectedCurrency} onChange={this.handleUserSelect}>
          <option value='Select Currency'> Select Currency</option>
          {currencyOptions}
        </select>

        <div>
          <button className='add' onClick={() => this.handleIncrement()} >+</button>
          <button className='minus' onClick={() => this.handleDecrement()} >-</button>

        </div>

      </div>
    )
  }
};

export default CurrencyConverter;