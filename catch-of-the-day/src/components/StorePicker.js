import React from 'react';
import { getFunName } from '../helpers';

export class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the from for submitting:
    event.preventDefault();
    // 2. Get the text from the input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-inputted
    // this.history stores all component's history and
    // push is used to redirect to another route
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* This is a Store picker */}
        <h2>Please enter the store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store name" defaultValue={getFunName()} />
        <button type="submit"> Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
