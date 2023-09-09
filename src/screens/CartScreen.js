import './CartScreen.css'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


// Components
import CartItem from '../components/CartItem'

// Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions'
import useLogin from '../utils/hooks/useLogin'

const CartScreen = () => {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  const {loginInfo} = useLogin()

  const {cartItems} = cart

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeFromCartHandler = item => {
    dispatch(removeFromCart({pId: item.product, _id: item._id}))
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2)
  }

  if (loginInfo.loading) return <h1>Loading.....</h1>
  else if (!loginInfo.loading && loginInfo.isLogin)
    return (
      <>
        <div className="cartscreen">
          <div className="cartscreen__left">
          
            <h2 class="p-3 mb-2  text-white text-center col-6 border rounded mx-auto" style={{ backgroundColor: "#15172b", fontSize:'20px'}}>Shopping Cart</h2>

            {cartItems.length === 0 ? (
              <div>
                Your Cart Is Empty <Link to="/">Go Back</Link>
              </div>
            ) : (
              cartItems.map(item => (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={() => removeFromCartHandler(item)}
                />
              ))
            )}
          </div>

          <div className="cartscreen__right text-center" >
            <div className="cartscreen__info">
              <p>Subtotal ({getCartCount()}) items</p>
              <p>LKR.{getCartSubTotal()}</p>
            </div>
            <div style={{marginTop:"14px"}}>
            <input placeholder='Enter deliver address' className='input text-center' style={{height:"60px" ,width:"300px"}} ></input>
            <button style={{ marginTop:"40px"}} >
              Submit
            </button>
            </div>
          </div>
        </div>
      </>
    )
}

export default CartScreen
