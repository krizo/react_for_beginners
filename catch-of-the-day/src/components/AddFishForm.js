import React from 'react';

class AddFishForm extends React.Component {
  priceRef = React.createRef();

  nameRef = React.createRef();

  statusRef = React.createRef();

  descRef = React.createRef();

  imageRef = React.createRef();

  createFish = event => {
    // 1. stop the form from submitting
    event.preventDefault();
    // 2. Create a ref
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addFish(fish);
    // reset the form:
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="price" type="text" ref={this.priceRef} placeholder="price" />
        <input name="name" type="text" ref={this.nameRef} placeholder="name" />
        <select name="status" type="text" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" type="text" ref={this.descRef} placeholder="desc" />
        <input name="image" type="text" ref={this.imageRef} placeholder="image" />
        <button type="submit"> Add Fish </button>
      </form>
    );
  }
}

export default AddFishForm;
