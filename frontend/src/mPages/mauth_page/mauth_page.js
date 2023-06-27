import React ,{useEffect,useState}from "react";
import './mauth_page.css';
import { authenticationOTP, sendOTP } from "../../store/actions/auth_action";
import { saveCustomerInfo } from "../../store/actions/user_action";

const logo = "https://www.chrequipment.co.uk/wp-content/uploads/2017/06/chr-equipment-cadbury-logo-news.jpg"

const  MAuthPage =()=> {

    const [mode,setMode] = useState("Number");
    const [phone,setPhone] = useState("");
    const [userExist, setUserExist] = useState(false)
    const [otp,setOtp] = useState("");
    const [loader1, setLoader1] = useState(false);
    const [loader2, setLoader2] = useState(false);
    const [otpStage, setOtpStage] = useState("Start");
    const [otpTimer, setOtpTimer] = useState(60);

    async function handelSendOtp() {
        setLoader1(true);
        setLoader2(true);
        if(phone.length===10){
        let obj = {
            mode: 'Customer',
            phone: phone
        }
        const json = await sendOTP(obj);
        if(json.success){
            setUserExist(json.userExist)
            setLoader1(false);
            setLoader2(false);
            setMode("OTP");
            setOtpStage("Sent");
        } else{
            setLoader1(false);
            setLoader2(false);
            window.alert("Something Went Wrong");
        }
    } else{
        setLoader1(false);
        setLoader2(false);
        window.alert("Phone number is not valid!");
    }
    }

    async function handelAuthenticateOtp() {
        setLoader1(true);
        let obj = {
            mode: 'Customer',
            phone: phone,
            otp: otp,
            password: "",
            email: "",
            authMode: userExist? "Login" : "Signup"
        }
        const json = await authenticationOTP(obj);
        if(json.success){
            if(userExist === false){
                obj.customer_id = json.userID;
                const json2 = await saveCustomerInfo(obj);
                if(json2.success){
                    setLoader1(false);
                    window.open("/",'_self')
                }
            } else{
                setLoader1(false);
                window.open("/",'_self')
            }
        } else{
            setLoader1(false);
            window.alert("Something Went Wrong");
        }
    }

    useEffect(() => {
        if (otpStage === "Sent") {
          const timer = setInterval(() => {
            setOtpTimer((prevTime) => {
              if (prevTime === 0) {
                clearInterval(timer);
                setOtpStage("Resend");
                setOtpTimer(60)
                return prevTime;
              } else {
                return prevTime - 1;
              }
            });
          }, 1000);
    
          return () => clearInterval(timer);
        }
      }, [otpStage]);

useEffect(() => {

}, []);

    return (
      mode === "Number" ? <div className="map">

        <div className="map-topbar">
            <img className="mhp-topbar-top-logo" src={logo}/>
            <i onClick={()=>{window.open(`/`,'_self')}} style={{fontSize: '24px'}} class="fa-solid fa-xmark"></i>
        </div>

        <p className="map-login">Login</p>
        <div className="map-body">
            <p className="map-body-head">Enter Your Mobile Number</p>
            <div className='map-body-box'>
                <p className='map-body-box-91'>+91 </p>
                <input value={phone} onChange={(val)=>{setPhone(val.target.value)}} className='map-body-box-input' type="number" placeholder='' />
            </div>
        </div>

        {loader1 ? <div className="map-loader1"></div> : <div onClick={()=>{handelSendOtp()}} className="map-send">Send OTP</div>}

      </div> : 
      <div className="map">

        <div className="map-topbar">
            <img className="mhp-topbar-top-logo" src={logo}/>
            <i style={{fontSize: '24px'}} class="fa-solid fa-xmark"></i>
        </div>
        <div className="map-body-otp">
                <p className='map-body-otp-head-text'>Mobile Number</p>
                <p className='map-body-otp-head-91'>+91 {phone}</p>
                <p className='map-body-otp-head-change'>Change?</p>
        </div>
        <p className='map-body-otp-enter'>Enter OTP</p>
        <div className='map-body-otp-box'>
        <input onChange={(val)=>{
            setOtp(val.target.value)
            }} className='map-body-otp-box-input' type="number" placeholder='OTP' />
        </div>
        <div onClick={()=>{
        //   const obj = {
        //     phone: phone,
        //     mode: 'Influencer'
        //   }
        //   processOTP(obj);
          }} className='map-body-otp-resend'>
        {loader2? <div></div> :<div onClick={()=>{
                    if(otpStage === "Resend"){
                        handelSendOtp();
                    }
                }} className={otpStage === "Sent"?"map-body-otp-resend-inactive":"map-body-otp-resend-active"}>{ otpStage === "Sent" ? `Resend in ${otpTimer}`: otpStage === "Resend" ? "Resend OTP" : ""}</div>}
        </div >
        {loader1 ? <div className="map-loader1"></div> :
        <div onClick={ async ()=>{
            handelAuthenticateOtp();
          }} className='map-body-otp-verify'>Verify</div>}
      </div>
    );
  }


export default  MAuthPage;
