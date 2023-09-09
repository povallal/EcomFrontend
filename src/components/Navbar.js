import './Navbar.css'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useMemo,useState,useEffect} from 'react'
import {logout} from '../utils/localstorage'
import {setInitialState} from '../redux/actions/userAction'

const Navbar = ({click}) => {
  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((json) => setNotices(json));
      console.log(notices);
  }, []);
  const [notices ,setNotices]=useState(
    ""
  )
  const cart = useSelector(state => state.cart)
  const history = useHistory()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    setUserName(user.userInfo.details.fullName)
    console.log(user.userInfo.details.fullName);
    
  }, [user])
  // console.log({user})

  const {cartItems} = cart
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const _handleLogout = () => {
    dispatch(setInitialState())
    logout()
    history.push('/')
  }
  const [modalShow, setModalShow] = useState(false);


  return (
    <nav className="navbar">
      <div className="navbar__logo">
      <Link to="/" className="h2 text-white" style={{textDecoration:"none"}}>
            Store7
          </Link>
       </div>

      <ul className="navbar__links">
        <li>
        <p5 className="text-white"> Hi {userName? userName:""}&nbsp;!</p5>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/shop" className="cart__link">Shop</Link>
        </li>
        <li>
          <Link to="/notices" className="cart__link">Notices</Link>
        </li>
        <li>
        

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


        </li>
        

        {!user.userInfo.isLogin ? (
          <li>
            <Link to="/signin" className="cart__link">Login</Link>
          </li>
        ) : (
          <li>
            <p onClick={_handleLogout} className="cart__link">Logout</p>
          </li>
        )}
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>

     
    </nav>
  )
}

export default Navbar
