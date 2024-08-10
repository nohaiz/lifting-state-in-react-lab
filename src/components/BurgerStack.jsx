// `src/components/BurgerStack.jsx`
const BurgerStack = ({ stack, handleRemoveItem }) => {
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button type="button" onClick={()=>handleRemoveItem(index)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
