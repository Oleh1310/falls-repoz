import Nice from "./assets/Jordan-1.jpg";
import Adidas from "./assets/adidas.jpg";
import Puma from "./assets/puma.jpg.";
import NewBalance from "./assets/new-balance.jpg.";

import './App.css';

const MyHeader = () => {
  return (
    <div className="header">
        <h1>Sneakers</h1>
            <h2>Products List View</h2>
            <h2>Products View</h2>
            <h2>My Favorites</h2>
    </div>
  );
}

const Items = () => {
  return (
    <div className="product_list">
        <h1> nike air jordan 1</h1>
            <img src={Nice}/>
        <h1> adidas Yeezy Boost</h1>
            <img src={Adidas}/>
        <h1> puma clyde</h1>
            <img src={Puma}/>
        <h1> new-balance</h1>
            <img src={NewBalance}/>
    </div>
  );
}









function App() {
  return (
  <div className="App">
    <MyHeader />
    <Items />
    </div>
  )
} 
export default App;
