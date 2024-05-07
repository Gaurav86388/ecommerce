import React, { useState, useEffect } from 'react'
import Display from './Display'

import { useDispatch } from "react-redux";
import { productActions } from "../productslice";

const ProductItem = ({item}) => {

const [hoverOn, setHoverOn] = useState(false)
const dispatch = useDispatch()


useEffect(()=>{

    if(hoverOn === true){
        dispatch(productActions.showModal({status: true}))
    }
    else{
        dispatch(productActions.showModal({status:false}))
    }
        
  
    
}, [hoverOn, dispatch])


  return (<>
  {hoverOn && <Display item={item} setHoverOn={setHoverOn}/>}
      <li key={item.id} className="product-items" >
    <img src={item.images[0]} alt="product image" id="product-images" onMouseEnter={()=>setHoverOn(true)} />
  </li> 
  </>

 
  )
}

export default ProductItem