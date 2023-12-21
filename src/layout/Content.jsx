import Dashboard from "../Component/Dashboard/Dashboard";
import { Earnings } from "../Component/Earnings/Earnings";
import LineChart from "../Component/Charts/LineChart";
import PieChart from "../Component/Charts/PieChart";
import Progressbar from "../Component/ProgressBar/Progressbar";
// import Illustation from "../Component/Illustrations/illustrations";
import Colorcard from "../Component/Colorcard/Colorcard";
import { Footer } from "./Footer";
import styles from './Content.module.css'
const Content = () => {
  return (

    <div className={styles.content_wrapper}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: "black" }}>Dashboard</h4>
        <button
          className="btn btn-primary"
          style={{
            border: "none",
          }}
        >
          <i className="fas fa-download fa-sm" />
          Generate Report
        </button>
      </div>
     
      <div style={{
        display : "flex",
        flexWrap: "wrap",
        justifyContent : "space-evenly",
        alignItems : "center",
      }}>
        <Earnings 
        title={'EARNINGS(MONTHLY)'}
        value={'$40000'}
        color={"rgb(78,115,223)"}
        icon={<i className="fa-solid fa-calendar fa-2x"></i>}
        />
        <Earnings 
          title={'EARNINGS(ANNUAL)'}
          value={'$215,000'}
          color={"rgb(28,200,138)"}
          icon={<i className="fa fa-usd fa-2x" aria-hidden="true"></i>}/>
        <Earnings 
         title={'TASKS'}
         color={"rgb(54,185,204"}
         icon={<i className="fas fa-clipboard-list fa-2x"></i>}
        > <div className="progressBar" style={{fontSize:"18px"}}>
          <label htmlFor="progressBar" >50%</label>
          <progress id="progressBar" value='50' max="100" style={{width:"120px"}}>50%</progress>
          </div> </Earnings>
        <Earnings   title={'PENDING REQUESTS'}
        value={'18'}
        color={"rgb(246,194,62)"}
        icon={<i className="fa fa-comments fa-2x text-grey-300" aria-hidden="true"></i>}/>
      </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent:"space-evenly",
          marginTop: "24px"
        }}>
        <Dashboard 
        title={"Earnings Overview"}
        width={'col-12 col-sm-12 col-md-7'}
        > <LineChart /> </Dashboard>
         <Dashboard 
        title={"Revenue Resources"}
        width={'col-12 col-sm-12 col-md-4'}
        > <PieChart /> </Dashboard>
      </div>
      <div className="row" style={{
        marginBottom: '10px',
      }}>
      <Dashboard 
        title ={"Projects"}
        width={'col-12 col-sm-12 col-md-6'}>
        <div>
          <Progressbar title={"Server Migration"} valtitle={'20%'} value={'20'} colorbar={'#E74A3B'}/>
          <Progressbar title={"Sales Tracking"} valtitle={'40%'} value={'40'} colorbar={'#F6C23E'}/>
          <Progressbar title={"Customer Database"} valtitle={'60%'} value={'60'} colorbar={'#4E73DF'}/>
          <Progressbar title={"Payout Details"} valtitle={'80%'} value={'80'} colorbar={'#36B9CC'}/>
          <Progressbar title={"Account Setup"} valtitle={'100%'} value={'100'} colorbar={'#1CC88A'}/>
        </div>
      </Dashboard>
      {/* <Dashboard 
        title ={"Illustrations"}
        width={'col-12 col-sm-12 col-md-6'}>
          <div>
          <Illustation image={"./img/undraw_posting_photo.svg"} para={"Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!"} linkUrl="https://undraw.co/" link="Browse Illustrations on unDraw →"/>
          </div>
        </Dashboard> */}
<Dashboard title ={"Illustrations"}
        width={'col-12 col-sm-12 col-md-6'}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px',
          }}>
            <img style={{
                      width: '450px',
                      height: '200px',
                      margin:"20px"
                    }} src='https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg' alt="ilustationImage" />
         </div>
          <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
          <a href='https://undraw.co/'>Browse Illustrations on unDraw </a>
        </Dashboard>
       
          <div className={'col-12 col-sm-12 col-md-6'} style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
           
            <Colorcard color={"#4e73df"} colorname={"Primary"} colorcode={"#4e73df"}/>
            <Colorcard color={"#1cc88a"} colorname={"Primary"} colorcode={"#1cc88a"}/>
            <Colorcard color={"#36b9cc"} colorname={"Primary"} colorcode={"#36b9cc"}/>
            <Colorcard color={"#f6c23e"} colorname={"Primary"} colorcode={"#f6c23e"}/>
            <Colorcard color={"#e74a3b"} colorname={"Primary"} colorcode={"#e74a3b"}/>
            <Colorcard color={"#858796"} colorname={"Primary"} colorcode={"#858796"}/>
            <Colorcard color={"#f8f9fc"} colorname={"Primary"} colorcode={"#f8f9fc"} textColor={'black'}/>
            <Colorcard color={"#5a5c69"} colorname={"Primary"} colorcode={"#5a5c69"} />
            
          </div>
       
        <Dashboard title ={"Development Approach"}
        width={'col-12 col-sm-12 col-md-6'}>
            <div style={{
              marginTop: '25px'
            }}>
              <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
            <p>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
            </div>
        </Dashboard>
      </div>
      <Footer/>
       </div>
  );
};

export default Content;
