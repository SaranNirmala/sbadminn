/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({topNavOpen, setOpen}) => {

  const [nav, setNav]=useState("fa fa-bars")
 
const handleClick = () => {
  if(topNavOpen === true) {
    setNav("fa fa-bars")
    setOpen(false)
  } else{
    setNav("fa fa-times")
    setOpen(true)
  }
}

  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.btnDiv}>
         <button onClick={handleClick} className={styles.humBtn}><i className={nav} aria-hidden="true" /></button>
                {" "}
                <input
                  type="text"
                  name="searchInput"
                  placeholder="Search for..."
                  className={styles.searchInput}
                />
                <button type="button" className={styles.searchBtn}>
                  <i
                    className="fa-sharp fa-solid fa-magnifying-glass"
                    style={{ color: "#ffffff" }}
                  ></i>
                </button>
            
            </div>
        <div className={styles.listItem}>
          
          <ul type="none" className={styles.listItems}>
           
            <li className={styles.lists}>
              <div>
                <i
                  className="fa-solid fa-bell fa-1x "
                  style={{ color: "#9ba7bb", position: "absolute" }}
                ></i>
                <span
                  className="badge badge-danger badge-counter"
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    position: "relative",
                    left: 8,
                    top: -10,
                    fontSize: "8px",
                  }}
                >
                  3+
                </span>
              </div>
              <div style={{
                padding:"0px 20px",
                margin:"0px 20px"
              }}
              // style={{ display: "flex", alignItems: "center" }}
              >
                <i
                  className="fas fa-envelope fa-fw"
                  style={{ color: "#9ba7bb", position: "absolute" }}
                ></i>
                <span
                  className="badge badge-danger badge-counter"
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    position: "relative",
                    left: 10,
                    top: -10,
                    fontSize: "8px",
                  }}
                >
                  7
                </span>
              </div>
              <div
                className="nav-item dropdown no-arrow"
                style={{
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  
                }}
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Douglas McGee
                </span>
                <img
                  className="img-profile rounded-circle"
                  style={{
                    height: "50px",
                    width: "45px",
                  }}
                  src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
                  alt="Image "
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
