import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({navOpen, setOpen}) => {
 
  const [sideNav, setSideNav] = useState(`${styles.sidebar}`)

const setTopNav = () =>{
  if(navOpen === true){
    setSideNav(`${styles.sidebar_open}`);
  } else {
    setSideNav(`${styles.sidebar}`)
  }
}

useEffect(() => {
setTopNav();
},[navOpen])

  return (
    // <div className={`${styles}${sideNav}`}>
    <div className={sideNav}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          color: "white",
          padding: "10px",
          fontSize: "10px",
          alignItems: "center",
        }}
      >
        <i
          class="fa-solid fa-face-laugh-wink"
          style={{
            fontSize: "30px",
            rotate: "-20deg",
          }}
        ></i>
        <h5 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "8px" }}>
          SB ADMIN2
        </h5>
      </div>
      <hr style={{ color: "white" }} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        <i
          className="fas fa-fw fa-tachometer-alt"
          style={{ color: "white" }}
        ></i>
        <h6
          style={{
            color: "white",
            paddingLeft: "10px",
          }}
        >
          Dashboard
        </h6>
      </div>
      <hr style={{color:'white'}}/>
      <div>
        <h6 style={{color:'white',
      fontSize:'13px'}}>
          INTERFACE
        </h6>
      <div style={{ color:"white",
         fontSize:'14px',
         paddingTop:"10px" ,
         position:'relative'}}>
         <p><i className="fas fa-fw fa-cog text-muted" style={{paddingRight:'25px'}}></i>Components</p>
         <p><i className="fas fa-fw fa-wrench text-muted" style={{ color:'#DDDFEB' ,paddingRight:'25px', marginTop:"25px"}}></i>Utilities</p>
      </div>
      </div>
      <hr style={{color:'white', marginTop:'2px'}} />  
      <div>
        <h6 style={{color:'white',
      fontSize:'13px'}}>ADDONS</h6>
       <div style={{ color:"white",
         fontSize:'14px',
         paddingTop:"10px"}}>
         <p><i className="fas fa-fw fa-folder text-muted" style={{paddingRight:'25px'}}></i>Pages</p>
         <p><i className="fas fa-fw fa-chart-area text-muted" style={{ color:'#DDDFEB' ,paddingRight:'25px', marginTop:"25px"}}></i>Charts</p>
         <p><i className="fas fa-fw fa-table text-muted" style={{ color:'#DDDFEB' ,paddingRight:'25px', marginTop:"25px"}}></i>Tables</p>
      </div>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;



/*  <ul>
          <li style={{justifyContent:"flex-start"}}>
            <i className="fas fa-fw fa-cog" style={{paddingRight:'10px'}}></i>
            Components
          </li>
          <li>
            <i className="fas fa-fw fa-wrench"></i>
            Utilities
          </li>
        </ul> */