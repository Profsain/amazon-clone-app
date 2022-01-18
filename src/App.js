import React, {useEffect} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ }, dispatch] = useStateValue()
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
        console.log('Login User', authUser)
      if (authUser) {
        dispatch({
            type: "SET_USER",
            user: authUser,

          })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
          })
        }
      })
  }, [])

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/checkout' element={[<Header />,<Checkout />, <Footer />]}>
          </Route>

          <Route exact path='/login' element={<Login />}>
          </Route>

          <Route exact path='/signup' element={<Signup />}>
          </Route>

          <Route exact path='/' element={[<Header />, <Home />, <Footer />]}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
