import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productActions } from "../productslice";

import Categories from "./categories";

const Products = () => {
  const products = useSelector((store) => store.ecom.items);
  const {firstItemId, lastItemId}  = useSelector((store) => store.ecom.paginate);
  const selectedCategory = useSelector((store) => store.ecom.category);
  const dispatch = useDispatch();

console.log(products)

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch(productActions.addItems({ products: data.products }));
          return;
        }
      })
      .catch((e) => console.log(e));
  }


  return (
    <div className="products">
      <div className="category">
        <Categories />
      </div>

      <div className="products-display">

        <button className="navigation-buttons" id="left-button"
        onClick={()=>dispatch(productActions.paginateDecrease())}
        > ◀️  </button>

        <ul className="product-list">
          {products.map((item, index) => {
            return (<>
            { (selectedCategory === "all" && item.id >= firstItemId &&  item.id <= lastItemId)
                ?
                <li key={item.id} className="product-items">
                    <img src={item.images[0]} alt="product image" id="product-images"/>
                  </li>  
                  
                  :(selectedCategory === item.category) 
                  &&  <li key={item.id} className="product-items">
                  <img src={item.images[0]} alt="product image" id="product-images"/>
                </li>  
                }
                  
                  </>
          
                )} )}
        </ul>
        <button className="navigation-buttons" id="right-button"
         onClick={()=>dispatch(productActions.paginateIncrease())}
        > ▶️ </button>
      </div>
    </div>
  );
};

export default Products;
