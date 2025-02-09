import Navbar from './components/navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';
import iphone_banner from './components/assets/iphone_banner2.avif'
import watch_banner from './components/assets/watch_banner.jpg'
import airPod_banner from './components/assets/airpods_banner.jpg'
import PhoneNavbar from './components/phoneNavbar/PhoneNavbar';
function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Shop />} />
  <Route path="/iphone" element={<ShopCategory banner={iphone_banner} category='iphone'/>} />
  <Route path="/watch" element={<ShopCategory banner={watch_banner} category='watch'/>} />
  <Route path="/airpod" element={<ShopCategory banner={airPod_banner} category='airpods'/>} />
  <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
  </Route>
  <Route path="/cart" element={<Cart />} />
  <Route path="/login" element={<LoginSignup />} />
</Routes>
<PhoneNavbar/>
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;
