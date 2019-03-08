import React from 'react';

export class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        {/* This is a Store picker */}
        <h2>Please enter the store</h2>
        <input type="text" required placeholder="Store name" />
        <button type="Submit"> Visit Store →</button>
      </form>
    );
  }
}
