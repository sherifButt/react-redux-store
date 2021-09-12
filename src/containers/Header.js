import { Link,useLocation } from 'react-router-dom'

const Header = () => {
   const location = useLocation();
   const renderLogo = location.pathname === "/" ? 'FakeShop' : <Link to="/" >FakeShop</Link>

   return (
      <div className="ui fixed menu">
         <div className="ui container center">
            <h2>{renderLogo} </h2>
         </div>
      </div>
   )
}
export default Header