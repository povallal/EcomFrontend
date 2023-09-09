import './HomeScreen.css'
import {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Corousel from "../components/Carousel"
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
    console.log(user);
    
  }, [user])

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
     
      <Corousel/>
      
      <div class="Category-Center">
        <h2 className="homescreen__title">Select Product Category</h2>

        <select class="form-select" 
        onChange={(e)=>{
          setCatagory(e.target.value)
          console.log(catagory)
        }}>
          <option selected>Open this select menu</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Groceries">Grocery</option>
          <option value="Other">Others</option>
        </select>
      </div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : ((catagory? products.filter(product => product.catagory === catagory):products)
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
