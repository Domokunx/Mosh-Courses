// Update game character

import { useState } from 'react'

const Game = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            id: 1,
            name: "Cliff"
        }
    })

    const handleClick = () => {
        setGame({...game, player: { ...game.player, name: "Bob" }});
    }

    // Exercise 2, add topping
    const [pizza, setPizza] = useState({
        name: 'Spicy Pepperoni',
        toppings: ['Mushroom']
    })

    const handleAddTopping = () => {
        setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese']});
    }

    // Exercise 3, add ShoppingCart quantity id 1
    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id: 1, title: 'Product 1', quantity: 1},
            {id: 2, title: 'Product 2', quantity: 1}
        ]
    })

    const handleCartQuantity = (id: number) => {
        setCart({ ...cart, items: cart.items.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)})
    }

  return (
    <>
      <div>Player Information:</div>
      <p>ID: {game.id}</p>
      <p>Name: {game.player.name}</p>
      <button onClick={handleClick}>Bobify</button>

      <div>Pizza Information</div>
      <p>Name: {pizza.name}</p>
      <ul>
        Toppings
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleAddTopping}>Cheesify</button>

      <ul>
        Shopping Cart
        {cart.items.map((item) => (
          <>
            <li key={item.id}>
              {item.title} {item.quantity}
            </li>
            <button onClick={() => handleCartQuantity(item.id)}>
              Add Item
            </button>
          </>
        ))}
      </ul>
    </>
  );
}

export default Game