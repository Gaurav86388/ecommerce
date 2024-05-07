import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../productslice'
export default function Categories(){

    const products = useSelector(store=>store.ecom.items)
    const dispatch = useDispatch()
    const categoriesArray = products.map(item=> {if(item.category) return item.category})
    
    const filteredCategories= ["all"]
    
    for (let i =0; i<categoriesArray.length; i++){
    
        if(!filteredCategories.includes(categoriesArray[i])){
            const productCategory = categoriesArray[i]
            filteredCategories.push(productCategory)
        }
    }

    function addCategory(value){
       
        dispatch(productActions.addCategory({category: value}))
    }
 

    return <select id="select-category" onChange={(e)=>addCategory(e.target.value)}>
        {filteredCategories.map(item=>{

            return <option value={item} key={item}>{item}</option>
        })}
                
            </select>


}
