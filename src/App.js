import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
// 1.전체상품페이지, 로그인, 상품상세페이지
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품디테일을 눌렀으나, 로그인이 안되어있을경우에는 로그인 페이지로 이동한다.
// 5. 로그인이 되어있을경우 상품디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 8. 상품을 검색할 수 있다.
function App() {
  const [authenticate, setAuthenticate] = useState(false); //true -> 로그인됨

  useEffect( () => {
    console.log("AAAA", authenticate);
  }, [authenticate])

  return (
    <div className="App">
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
