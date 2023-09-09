import {React,useState,useEffect} from 'react'
import Navbar  from '../components/Navbar'

function Notice() {
    const [users, setUsers] = useState([])

    const fetchData = () => {
      fetch("http://localhost:5000/api/notice")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
    
  return (
    <div className='col-10 mx-auto m-2' style={{height:"1000px"}}>
      <div class="p-3 mb-2  text-white text-center col-6 border rounded mx-auto" style={{ backgroundColor: "#15172b", fontSize:'20px' }}  >Notices</div>
        {users.length > 0 && (
        <ul>
          {users.map(user => (
            <div class="card">
            <div class="card-header">
              notice
            </div>
            <div class="card-body">
              <h5 class="card-title">{user.type}</h5>
              <p class="card-text">{user.details}</p>
            </div>
          </div>
          ))}
        </ul>
      )}



    </div>
    
  

        
        
        
    
  )
}

export default Notice