import {Routes,Route} from "react-router-dom"
import  {Navbar,HomePage,Exchanges,Currencies,Crypto,News}  from "./components"
import '../app.css'
// import 'antd/dist/antd.css';
function App() {

  return (
    <>
    <div className="app">
    <Navbar/>
<div className="main">
  <Routes>
     <Route path="/" element={<HomePage/>} />
     <Route path="/exchanges" element={<Exchanges/>} />
     <Route path="/Currencies" element={<Currencies/>} />
     <Route path="/crypto/:coinId" element={<Crypto/>} />
     <Route path="/news" element={<News/>} />
  </Routes>

</div>
  <div className="footer">

   </div>
    </div>

  
    </>
  )
}

export default App
