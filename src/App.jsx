/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Content from "./layout/Content";
import { Footer } from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";


function App() {
  const[open, setOpen] = useState(false)
 

  const [close, setClose] = useState(false)


  return (
    <div>
      <div>
        <Navbar topNavOpen={open} setOpen={setOpen} />
        {/* <Nav topNavOpen={open} setOpen={setOpen}/> */}
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
      <Sidebar navOpen={open} setOpen={setOpen} />
    </div>
  );
}

export default App;

