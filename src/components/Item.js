import React from "react";

function Item({ item, onUpdateItem, onDeleteItems }) {

  function handleAddToCartClick() {
   fetch(`http://localhost:4000/items/${item.id}`,{
    method: "PATCH",
    headers:{
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      isInCart:!item.isInCart,
    })
   })
   .then((resp)=> resp.json())
   .then((updatedItem)=> onUpdateItem(updatedItem));
  }

  function handleDeleteClick(){
    fetch (`http://localhost:4000/items/${item.id}`,{
      method: "DELETE",
    })
    .then ((resp) => resp.json())
    .then((item)=> onDeleteItems(item))

  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}
      onClick={handleAddToCartClick}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Item;
