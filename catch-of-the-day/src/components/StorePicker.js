import React from 'react';
import { getFunName } from '../helpers';

export class StorePicker extends React.Component {
  myInput = React.createRef();

  constructor() {
    super();
    // New custom methods like goToStore() is not being mounted by default,
    // so it can't reach this.goToStore until it is bound
    // Binding method to a component:
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {
    // 1. Stop the from for submitting:
    event.preventDefault();
    // 2. Get the text from the input
    console.log(this);
    
    // 3. Change the page to /store/whatever-inputted

  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* This is a Store picker */}
        <h2>Please enter the store</h2>
        <input
          type="text"
          ref={()}
          required
          placeholder="Store name"
          defaultValue={getFunName()}
        />
        <button type="Submit"> Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
