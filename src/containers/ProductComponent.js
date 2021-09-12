import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ProductComponent = ({ id }) => {

   const products = useSelector(state => state.allProducts.products)
   //filter product based on id coming from productLIst.
   let product = products.filter(product => product.id == id);
   // seletct product object from array
   product = product[0]
   // distructure product object to variables
   const { title, price, description, category, image, rating } = product

   const renderList = (
      <div className="four wide column" >
         <Link to={`/product/${id}`}>
            <div className="ui link cards">
               <div className="card">
                  <div className="image"><img src={image} alt="" /></div>
                  <div className="content">
                     <div className="header">{title}</div>
                     <div className="meta price">${price}</div>
                     <div className="meta">{category}</div>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   );

   return (
      <>
         {renderList}
      </>
   )
}
export default ProductComponent