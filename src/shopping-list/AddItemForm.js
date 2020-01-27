import React from "react";
import "./AddItemForm.css";

export default class AddItemForm extends React.Component {
  onSubmitForm(e) {
    e.preventDefault()
    this.props.onAddItem(e.target.itemToAdd.value)
  }
  
  render() {
    return (
      <form onSubmit={(e) => this.onSubmitForm(e)}>
        <input
          name="itemToAdd"
          type="text"
          placeholder="carrots"
          aria-label="Shopping list item"
        />
        <button type="submit">Add Item</button>
      </form>
    )
  }
}