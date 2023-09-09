import './HomeScreen.css'
import {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Corosal from "../components/Carousel"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Components
import Product from '../components/Product'

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'
import {setUserDeatils} from '../redux/actions/userAction'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("")

  const [catagory, setCatagory]= useState("")
  const user = useSelector(state => state.user)
  useEffect(() => {
    setUserName(user.userInfo.details.fullName)
    
  }, [])

  const getProducts = useSelector(state => state.getProducts)
  const {products, loading, error} = getProducts

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  useEffect(() => {
    console.log(catagory);
  }, [catagory])

  useEffect(() => {
    dispatch(setUserDeatils())
  }, [dispatch])
  
 

  return (
    
    <div className="homescreen">
      <div class="p-3 mb-2  text-white text-center col-6 border rounded mx-auto" style={{ backgroundColor: "#15172b", fontSize:'20px' }} >Promotions</div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (( products.filter(person => person.price !=person.Nprice))
        .map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              Nprice={product.Nprice}
            />
          ))
        )}
      </div>
      <div class="p-3 mb-2  text-white text-center col-6 border rounded mx-auto" style={{ backgroundColor: "#15172b", fontSize:'20px' }} >Vegetables</div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (( products.filter(person => person.catagory === "Vegetables"))
        .map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              Nprice={product.Nprice}
            />
          ))
        )}
      </div>
      <div class="p-3 mb-2  text-white text-center col-6 border rounded mx-auto" style={{ backgroundColor: "#15172b", fontSize:'20px' }}  >Fruits</div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (( products.filter(person => person.catagory === "Fruits"))
        .map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              Nprice={product.Nprice}

            />
          ))
        )}
        
      </div>
      <div class="p-3 mb-2  text-white text-center col-6 border rounded mx-auto" style={{ backgroundColor: "#15172b", fontSize:'20px' }}  >Groceries</div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (( products.filter(person => person.catagory === "Groceries"))
        .map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              Nprice={product.Nprice}

            />
          ))
        )}
      </div>
      <div class="p-3 mb-2   text-white text-center col-6 col-6 border rounded mx-auto" style={{ backgroundColor: "#15172b", fontSize:'20px' }}  >Others</div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (( products.filter(person => person.catagory === "Other"))
        .map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              Nprice={product.Nprice}

            />
          ))
        )}
      </div>
      
    </div>
  )
}

export default HomeScreen
