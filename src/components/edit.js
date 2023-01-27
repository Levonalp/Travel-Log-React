import {useState} from 'react'

const Edit = (props) => {
  const [location, setlocation] = useState({...props.location})

  const handleChange = (event) => {
    setlocation({...location, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(location)
   }

  return(
    <div>
      <details>
        <summary>Edit Location</summary>
        <form class="form-control form-control-sm d-flex flex-column  w-75" type="text"  onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' onChange={handleChange} value={location.name}/>
          <br/>
          <br/>
          <label htmlFor='cost'>cost:</label>
          <input type='text' name='cost' onChange={handleChange} value={location.cost}/>
          <br/>
          <br/>
          <label htmlFor='heritages'>Heratiges:</label>
          <input type='text' name='heritages' onChange={handleChange} value={location.heritages}/>
          <br/>
          <br/>
          <label htmlFor='img'>Image:</label>
          <input type='text' name='image' onChange={handleChange} value={location.image}/>
          <br/>
          <br/>
          <input type="submit"/>
        </form>
      </details>
    </div>
  )
}

export default Edit