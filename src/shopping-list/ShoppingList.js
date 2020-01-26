import React from "react";
import ShoppingItem from "./ShoppingItem";

export default class ShoppingList extends React.Component {    
  static defaultProps = {
    items: []
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) =>
          <ShoppingItem
            key={index}
            index={index}
            item={item}
            onDeleteItem={this.props.onDeleteItem}
            onCheckItem={this.props.onCheckItem}
          />
        )}
      </ul>
    )
  }
}