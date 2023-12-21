export const Earnings = ({title, value, color, icon, children}) => {
  return (
    <div className="earning"  style={{
        width : "230px",
        height : "100px",
        backgroundColor : "white",
        display: 'flex',
        marginTop: '20px',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        padding: '15px',
        borderLeft:`5px solid ${color}`,
        borderRadius: "5px",
        color:"black"
    }} >
      <div>
        <h6 style={{
          color:color,
          fontSize: "10px",
        }}>{title}</h6>
        <h4 style={{fontSize:"20px"}}>{value}</h4> 
        <div>{children}</div>
        </div>
      
        <div style={{
          display:'flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          color:"rgb(221,223,235)",
          }}>{icon}</div>
      
    </div>
  );
};

