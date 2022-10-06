import { Navigation } from './components/Navigation'
import { Cardsss } from './components/Cardsss';
import { data } from "./components/data";
import { CartProvider } from "react-use-cart";


function Home(){
    return(
        <div className="App">
  <Navigation/>
  {data.productData.map((item, index) => {
        return (
          <Cardsss  title={item.title} key={index} item={item} price = {item.price}/>
       )
      })}
  
      
    </div>
 );
} 
export {Home};