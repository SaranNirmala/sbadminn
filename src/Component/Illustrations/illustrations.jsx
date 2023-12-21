/* eslint-disable react/prop-types */
// import React from "react";

const Illustation = ({para , image, linkUrl, link}) => {
    return(
        <>
        <div>
            {image}
        <p>{para}</p>
        <a href={linkUrl}>{link}</a>
        </div>
        </>
    )
}

export default Illustation;