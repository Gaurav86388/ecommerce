import React from 'react'

const Display = ({item, setHoverOn}) => {



  return (
   
    <div className='product-overview'>

<div className="product-header">
  <h3>{item.title}</h3>
  <button onClick={()=>setHoverOn(false)}> close</button>
</div>

<div className="product-details">
  <div className="image"><img src={item.images[0]} alt="product image" /></div>
  <div className = "description">
    {item.description}

  </div>

  
</div>

</div>



  )
}

export default Display