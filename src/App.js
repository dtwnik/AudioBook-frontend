import {Routes,Route} from "react-router-dom" 
import MainPage from "./pages/MainPage";
import BookPage from "./pages/BookPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
          <div>
            <Routes>
              <Route path='/' element={<MainPage/>} />
              <Route path='/search/:params' element={<SearchPage/>} />
              <Route path='/wishlist/' element={<Wishlist/>} />
              <Route path='/register/' element={<RegisterPage/>} />
              <Route path='/login/' element={<LoginPage/>} />
              <Route path='/book/:id' element={<BookPage/>} />
            </Routes>
          </div>
        
  );
}

export default App;
