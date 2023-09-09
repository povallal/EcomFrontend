import './App.css'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Suggestions from "./screens/suggestions"
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'
import Topbar from './components/Topbar'
import Notices from './screens/notices'
import Shop from './screens/shop'

import Carousel from './components/Carousel'
import Footer from './components/Footer'
// Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import SignUp from './screens/SignUp'
import SignIn from './screens/SignIn'
import {useDispatch} from 'react-redux'
import {fetchCart} from './redux/actions/cartActions'
import {setUserDeatils} from './redux/actions/userAction'

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  // fetchCart
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCart())
    dispatch(setUserDeatils())
  }, [dispatch])

  return (
    <Router>
      {/* <Topbar></Topbar> */}
      <Navbar click={() => setSideToggle(true)} />
      
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/notices" component={Notices} />
          <Route exact path="/notices" component={Notices} />

          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/suggestions" component={Suggestions} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
        <Footer/>
      </main>

    </Router>
  )
}

export default App
