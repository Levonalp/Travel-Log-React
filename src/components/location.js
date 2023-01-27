
 const Location = (props) => {
  return( 
    
 <div className="card" style={{width: "18rem"}}>
  <img  src={props.location.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Location: {props.location.name}</h5>
    <p className="card-text">Heritage: {props.location.heritages}</p>
    <p className="card-text">Cost of Travel: ${props.location.cost}</p>
  </div>
</div>
)
 }
 
 export default Location