import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react';

toast.configure()

const cartlocalstorage = JSON.parse(localStorage.getItem("cartItems") || '[]')

function App() {
  const{ products } = data;
  const [cartItems,setCartItems] = useState(cartlocalstorage);

  useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

//function to add to cart
  const onAdd = (product) =>{
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => 
        x.id === product.id ?{...exist, qty:exist.qty +1}:x
        )
        );
    } else{
      setCartItems([...cartItems,{...product, qty: 1}]);
    }
  };
  //reduce/remove item amount from cart
  const onRemove =(product)=>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x)=> x.id !==product.id));
    } else{
      setCartItems(cartItems.map(x => 
        x.id === product.id ?{...exist, qty:exist.qty -1}:x
        )
        );
    }
  };
  //delete item from cart
  const onDelete =(product)=>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty){
      setCartItems(cartItems.filter((x)=> x.id !==product.id));
      toast.error("Item has been deleted", {position: toast.POSITION.TOP_CENTER, autoClose: 1500});
    } 
  };

  return (
    <div className="App">
    <Main onAdd={onAdd} products={products}></Main>
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Cart countCartItems={cartItems.length}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
        cartItems={cartItems}
        ></Cart>
        <Basket countCartItems={cartItems.length}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
        cartItems={cartItems}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
