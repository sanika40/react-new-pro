import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './components/common/Footer';
import BackTop from './components/common/BackTop';
import { FiltersProvider } from './contexts/filters/filtersContext';
import { useState, CSSProperties,useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };


const App = () => {
  const[isLoading,setIsLooading]=useState(true)
  useEffect(()=>{
    // fetch("http://localhost:3500")
    // .then((data)=> data.json())
    // .then((data)=> console.log(data))

    setTimeout(()=>{
      setIsLooading(false)
    },3000)
  },[])

  //json-server link:-   http://localhost:3000/data

  //backend link:-  "http://localhost:3500"
 
  return (
    <>
{isLoading?
<ClipLoader
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:  <CommonProvider>
      <FiltersProvider>
        <CartProvider>
          <Header />
          <RouterRoutes />
          <Footer />
          <BackTop />
        </CartProvider>
      </FiltersProvider>
    </CommonProvider>                             }

     
    </>
  );
};

export default App;
