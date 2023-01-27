import {useState, useEffect} from 'react'
import axios from 'axios'

import './App.css';

import Location from './components/location'
import Add from './components/add'
import Edit from './components/edit'

const App = () => {
const [locations,setLocations] = useState([])
const [API,setAPI] = useState([])

const getLocations = () =>{
  axios.get('http://localhost:3500/travels')
  .then((response) =>setLocations(response.data), (err) => console.log(err))
  .catch((error) => console.log(error))
}
const handleCreate = (data) => {
  axios.post('http://localhost:3500/travels', data)
  .then((response) => {
     console.log(response)
     setLocations([...locations, response.data])
  })
}


const handleEdit = (data) => {
 axios.put('http://localhost:3500/travels/' + data._id, data)
 .then((response) => {
    let newLocations = locations.map((location) => {
      return location._id !== data._id? location:data         
    })
    setLocations(newLocations)
 })
}

const handleDelete = (deletedLocation
) => {
  axios.delete('http://localhost:3500/travels/' + deletedLocation._id)
  .then((response) => {
   let newLocations = locations.filter((location) => {
      return location._id !== deletedLocation._id
   })
   setLocations(newLocations)
  })
}
const[show,setShow]=useState(false);
const[showbody,setShowbody]=useState(false);
const[showHome,setshowHome]=useState(true);


useEffect(() => {
  getLocations()
}, [])

const showAdd = () => {
  setShow(true)
  setShowbody(false)
  setshowHome(false)
}

const showBody = () => {
  setShow(false)
  setShowbody(true)
  setshowHome(false)
}

const showHomebtn = () => {
  setShow(false)
  setShowbody(false)
  setshowHome(true)
}

return(

  <div >
    <nav className="navbar bg-light ">
      <div className="container-fluid d-flex   justify-content-around ">
  
      <div className=' text-center'>
    <button className="btn btn-primary" onClick={showBody}>Body</button>
    <button className="btn btn-success" onClick={showAdd}>Add</button>
    <button className="btn btn-success" onClick={showHomebtn}>Home</button>
    </div>
        
        <h1>Travel Log</h1> 
      </div>
    </nav>
    {
      showHome?
    <div className=" welcome text-center">
      <h1 className="header">Welcome To My Travel Log</h1>
      <img className="welcome-img" src="https://www.traveloffpath.com/wp-content/uploads/2021/10/Encouraging-Travel-And-Hotel-Occupancy-Figures-Project-A-Busy-Winter-Of-Travel.jpg"></img>
      <h3 className="welcome-messege">Checkout all of these awesome place I have visited around the world. In the travel log you can view different locations with an image, references to the heritages in the region and cost to travel to the location. </h3> 
    </div>:null
    }
    
    {
        show? <Add handleCreate={handleCreate}/>
        :null
      }


    <div className='row'>
    {locations.map((location) => {
       return (

          showbody ?
        <div className="col-3 ">
          <Location location={location} />
          <Edit location={location} handleEdit={handleEdit}/>
          <button class="btn btn-danger" onClick={() => {handleDelete(location)            
          }} value={location._id}>Delete a Travel</button>
        </div>
        :null
       )
    })}
  </div>
  </div>
 )
  
}
export default App;
