import { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../redux/actions/productActions"

// COMPONENTS
import ProductComponent from "./ProductComponent"

const ProductListing = () => {
   const dispatch = useDispatch()
   const products = useSelector(state => state.allProducts.products)
   useEffect(() => { fetchProducts() }, [])

   const fetchProducts = async () => {
      try {
         const res = await axios.get('https://fakestoreapi.com/products')
         dispatch(setProducts(res.data))
         return res.data

      } catch (err) { console.error(err) }
   }

   const productsRender = products.length === 0 ? <div>...Loading</div> : products.map(product =>
      <ProductComponent key={product.id} id={product.id} />
   )

   return (
      <div className="ui grid container">
         {productsRender} 
      </div>
   )
}
export default ProductListing