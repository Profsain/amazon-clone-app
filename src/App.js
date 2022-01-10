import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />

        <Routes>
          <Route exact path='/checkout' element={<Checkout />}>
          </Route>
          <Route exact path='/' element={<Home />}>
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
    // <Router>
    //   <div className='app'>
    //     <Switch>
    //       <Route path='/'>
    //         <Header />
    //         <Home />
    //         <Footer />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
