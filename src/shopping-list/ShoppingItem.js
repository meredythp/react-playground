import React from "react";
import './ShoppingItem.css';

export default class ShoppingItem extends React.Component { 
  static defaultProps = {
    item: {},
    index: {}
  }

  render() {
    return (
      <li>
        <h2 style={{
          textDecoration: this.props.item.checked ? "line-through" : null,
        }}>
          {this.props.item.name} 
        </h2>
        <button
          onClick={() => this.props.onCheckItem(this.props.item, this.props.index)}
          type="button">
          check
        </button>
        <button
          onClick={() => this.props.onDeleteItem(this.props.item, this.props.index)}
          type="button">
          delete
          </button>
      </li>
    )
  }
}