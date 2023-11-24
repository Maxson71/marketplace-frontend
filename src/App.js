import './styles/style.css';

import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header';

const App = () => {
  return (
      <>
      <Header></Header>
        <Routes>
          <Route path="" element={<Home/>} />
        </Routes>
      </>
  );
}


export default App;
