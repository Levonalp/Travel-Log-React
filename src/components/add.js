import {useState} from 'react'

const Add = (props) => {
   const [location, setlocation] = useState({name: '', cost:'', heritages:'', image:''})

   const handleChange = (event) => {
    setlocation({...location, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreate(location)
   }

   return(
      <div className="shadow-none p-3 mb-5 bg-light rounded w-25 m-auto">
      <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label htmlFor='name' class="form-label">Name: </label>
    <input type="text" name='name' onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Type in the name of location</div>
  </div>
  <div class="mb-3">
    <label htmlFor='cost' class="form-label">Cost of Travel</label>
    <input type="text" name='cost' onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Type in the cost of travel.</div>
  </div>
  <div class="mb-3">
    <label htmlFor='heritages' class="form-label">Heritages</label>
    <input type="text" name='heritages' onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Type in the heritages.</div>
  </div>
  <div class="mb-3">
    <label htmlFor='img' class="form-label">Image</label>
    <input type="text" name='image' onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Type in the URL Image Adress</div>
    <input type="submit"/>
  </div>
</form> 
</div>
   )
}

export default Add


//  <form>
//   <div class="mb-3">
//     <label htmlFor='name' class="form-label">Name: </label>
//     <input type="text" name='name' onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//     <div id="emailHelp" class="form-text">Type in the name of location</div>
//   </div>
//   <div class="mb-3">
//     <label htmlFor='cost' class="form-label">Cost of Travel</label>
//     <input type="text" name='cost' onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//     <div id="emailHelp" class="form-text">Type in the cost of travel.</div>
//   </div>
//   <div class="mb-3">
//     <label htmlFor='heritages' class="form-label">Heritages</label>
//     <input type="text" name='heritages' onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//     <div id="emailHelp" class="form-text">Type in the heritages.</div>
//   </div>
//   <div class="mb-3">
//     <label htmlFor='img' class="form-label">Image</label>
//     <input type="text" name='image' onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//     <div id="emailHelp" class="form-text">Type in the URL Image Adress</div>
//   </div>
 
// </form> 


// <div class="shadow-lg p-3 mb-5 bg-body rounded w-25 
// position-relative top-0 end-0">
//  <form onSubmit={handleSubmit}>
//     <label htmlFor='name'>Name: </label>
//     <input type='text' name='name' onChange={handleChange}/>
//     <br/>
//     <br/>
//     <label htmlFor='cost'>cost: $  </label>
//     <input type='text' name='cost' onChange={handleChange}/>
//     <br/>
//     <br/>
//     <label htmlFor='heritages'>heritages: </label>
//     <input type='text' name='heritages' onChange={handleChange}/>
//     <br/>
//     <br/>
//     <label htmlFor='img'>Image:</label>
//     <input type='text' name='image' onChange={handleChange}/>
//     <br/>
//     <br/>
//     <input type="submit"/>
//   </form>
// </div>