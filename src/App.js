import './App.css';
import Receipt from './components/Receipt'; 
import { useState } from "react";

const receipts = [ 
  { person: 'Karolin', order: { main: 'Burrito', protein: 'Organic Tofu', rice: 'Purple Rice', sauce: 'Green Crack', toppings: [ 'Baby Bok Choy', 'Cucumber Kimchi' ], drink: 'Korchata', cost: 22 }, paid: false, id: crypto.randomUUID()}, 
  { person: 'Mark', order: { main: 'Rice Bowl', protein: 'Ginger Soy Chix', rice: 'Sticky Rice', sauce: 'Korilla', toppings: [ 'Yuzu Pickled Sweet Pepper', 'Kale' ], drink: 'Korchata', cost: 19 }, paid: false, id: crypto.randomUUID()},
  { person: 'Matt', order: { main: 'Salad Bowl', protein: 'Organic Tofu', rice: 'none', sauce: "K'lla", toppings: [ 'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi' ], drink: 'Sparkling Blood Orange Soda', cost: 20 }, paid: false, id: crypto.randomUUID()}
] 

function App() {

  let [receipt, setReceipts] = useState(receipts)

  function getPaid(id){
    let newReceipt = [...receipt]
    let index = newReceipt.findIndex((receiptItem) => receiptItem.id === id);
    newReceipt[index].paid = true;
    setReceipts(newReceipt)
  }

  let receiptComponent = receipts.map((receipt) => {

    return (
      !receipt.paid ? <Receipt
      key={receipt.id}
      person={receipt.person}
      main={receipt.order.main}
      protein={receipt.order.protein}
      rice={receipt.order.rice}
      toppings={receipt.order.toppings}
      sauce={receipt.order.sauce}
      drink={receipt.order.drink}
      cost={receipt.order.cost}
      id={receipt.id}
      getPaid={getPaid}
    /> : 
    <div></div>
    ) 
  });

  return (
    <div className='app'>
      {receiptComponent}
    </div>
  );
}

export default App;
