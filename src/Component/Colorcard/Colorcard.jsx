/* eslint-disable react/prop-types */


const Colorcard =({color, colorcode, colorname,textColor}) => {
    return(
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width : '230px',
                height:'80px',
                backgroundColor:color,
                borderRadius: '10px',
                padding: '20px',
                color:'#F8FDFF'
                
            }}>
             <p style={{margin:0 , color:textColor}}>{colorname}</p> 
             <p style={{color:textColor ,
            fontSize:'12px'}}>{colorcode}</p>
            </div>
        </div>
    )
}

export default Colorcard;