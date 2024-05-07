import './App.css';
import Carousel from '../src/components/carousel/carousel'
import Navbar from '../src/components/navbar/navbar';
import Life from './components/life/life';

function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <br />
      <section>
        <Life/>
      </section>
            </div>
  );
}

export default App;
