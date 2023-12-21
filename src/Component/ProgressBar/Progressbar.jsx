/* eslint-disable react/prop-types */
// import React from "react";

const Progressbar = ({title, colorbar,value,valtitle}) => {
return (
<div style={{margin:'10px',
padding:'10px 0px'}}>
{/* <label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress> */}
  <div
  style={{
    display: 'flex',
    flexWrap : 'wrap',
    justifyContent : 'space-between',
    alignContent : 'center',
    fontSize : '14px',
  }}> 
    <h4 className="small font-weight-bold" style={{
        // padding: '10px',
        margin: 0, }}>
        {title} 
    </h4> 
    <span className="float-right">{valtitle}</span>
    </div> 
    <div className="progress-bar" role="progressbar"  aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{
    width: `${value}%`,
    backgroundColor : colorbar,
    height :"15px",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  }}></div>
</div>
)
}

export default Progressbar;