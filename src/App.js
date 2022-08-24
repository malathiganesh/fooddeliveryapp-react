
import './App.css';
import pic from './images/briyani.jpg'
import Foods from './components/swiggy';

function App() {
  return (
    <div className='App'>
      <header className='App header'>
      <div className='header'>
        <h1>SWIGGY</h1>
        </div>
        <div className='input'>
          <input type={'text'} placeholder='Search.....' size={30} />
        </div>
        <div className='nav'>
          <a className='a1'>log in</a>
          <a className='a2'>sign up</a>
        </div>
      </header>
      <div className='about'>Home / Tirunelveli / Collections / Non-veg / Veggie</div>
      <div className='imagehead'>
      <div className='images'>
       <img src={pic} width={1348} height={600}/>
      </div>
      <div className='textonimg'><h1>Good Food Is The Foundation Of Genuine Happiness...</h1></div>
      </div>
      <Foods></Foods>
    </div>
  );
}

export default App;
