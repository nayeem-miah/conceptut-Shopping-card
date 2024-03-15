import { useEffect } from "react";
import "./App.css";

import { useState } from "react";
import SingleProduct from "./SingleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);

  useEffect(() => {
    fetch("./FakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // console.log(products);
  const handleCard = (p) => {
    // setCart([p]);
    const isExit = cart.find(item => item.id == p.id);
    if(!isExit){
      setCart([...cart, p]);
    }
    else{
      alert('Already Exit this Cart');
    }
  };

//  remove cart 
const handleDelate= id=>{
  const newCart = cart.filter(item => item.id !== id);
  // console.log(newCart)
  setCart(newCart)
}


  // console.log(cart);
  return (
    <>
      <div className="lg:flex md:flex justify-around gap-5">
        <div className="text-center lg:w-2/4 border shadow-xl">
          {products.map((pd) => (
            <SingleProduct
              key={pd.id}
              product={pd}
              handleCard={handleCard}
            ></SingleProduct>
          ))}
        </div>
        <div className="lg:w-1/3 w-full shadow-2xl">
          <h2 className="text-4xl text-center border-b-2">This is Cart</h2>
          <div className="flex justify-around font-bold text-xl">
            <h2>Name </h2>
            <h2>Price</h2>
          </div>
          <div>
            {
            
            cart.map((item,inx)  => (
              <div key={item.id} className="flex justify-around items-center rounded-lg shadow-md bg-gray-100 mb-4 p-4">
                <p>{inx+1}</p>
                <h2>{item.title.slice(0,10)} </h2>
                <h2>{item.price}</h2>
                <button onClick={()=>handleDelate(item.id)} className="border-2 bg-gray-400 p-1 rounded-lg hover:bg-slate-400">delate</button>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;