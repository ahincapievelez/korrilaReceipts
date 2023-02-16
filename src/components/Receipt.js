function Receipts({ person, order, main, protein, rice, toppings, sauce, drink, cost, getPaid, id }) {


  return (
    <div className="receipt">
        <h1>{person}</h1>
        <p>{order}</p>
        <ul>
            <li>Main: {main}</li>
            <li>Protein: {protein}</li>
            <li>Rice: {rice}</li>
            <li>Toppings: {toppings}</li>
            <li>Sauce: {sauce}</li>
            <li>Drink: {drink}</li>
            <li>Cost: {cost}</li>
        </ul>
        <button onClick={() => getPaid(id)}>Paid</button>
    </div>
  );
}

export default Receipts;