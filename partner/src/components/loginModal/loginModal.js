import React ,{useEffect,useState}from "react";
import Modal from "react-modal";
import { authenticationOTP, sendOTP, verifyPassword } from "../../store/action/auth_action";
import './loginModal.css'


const LoginModal =({phn, alreadyExist, snackbarObject, showSnackbarMessage})=> {

    const [showPass, setShowPass] = useState(false);

    const [otpStage, setOtpStage] = useState("");

    const [otpTimer, setOtpTimer] = useState(60);

    const [phone, setPhone] = useState('');

    const [otp, setOtp] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [loginMode, setLoginMode] = useState('Password');

    const [loading1, setLoading1] = useState(false);

    const [loading2, setLoading2] = useState(false);

    async function sendMobileOtp () {
      setLoading1(true);
      const obj = {
        phone: phone,
        mode: 'Manufacturer'
      }
      const json = await sendOTP(obj);
      setLoading1(false);
          if(json.success ===true && json.userExist === true){
            setOtpStage("Sent");
            setOtpTimer(60);
            setLoginMode("OTP");
          } else if(json.success ===true && json.userExist === false) {
            snackbarObject['message'] = "User Doesn't Exist";
            showSnackbarMessage(snackbarObject);
          } else {
            snackbarObject['message'] = "Something Went Wrong";
            showSnackbarMessage(snackbarObject);
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

      async function login () {
        setLoading2(true)
        const obj = {
            phone: phone,
            email: email,
            otp: otp,
            password: password,
            mode: "Manufacturer",
            authMode: "Login"
          };

        if(loginMode === "Password"){
            if(phone === "" || email === "" || password === ""){
              setLoading2(false);
              snackbarObject['message'] = "Fill All The Fields";
              showSnackbarMessage(snackbarObject);
            } else{
                  let json = await verifyPassword(obj);
                  setLoading2(false)
                  if(json.success) {
                    window.open('/supplier','_self')
                  } else {
                    snackbarObject['message'] = "User Doesn't Exist";
                    showSnackbarMessage(snackbarObject);
                  }
            }
        } else{
            if(phone === "" || email === "" || otp === ""){
                setLoading2(false);
                snackbarObject['message'] = "Fill All The Fields";
                showSnackbarMessage(snackbarObject);
            } else{
                  let json = await authenticationOTP(obj);
                  setLoading2(false)
                  if(json.success) {
                    window.open('/supplier','_self')
                  } else {
                    snackbarObject['message'] = json.msz;
                    showSnackbarMessage(snackbarObject);
                  }
            }
        }
      }

      function handelEmailPhone(e) {
        if(/^\d+$/.test(e.target.value)){
            if(e.target.value.length===10){
                setOtpStage('Start')
            } else{
                setOtpStage('')
            }
        }
            setEmail(e.target.value);
            setPhone(e.target.value);
      }

      useEffect(()=>{
        if(alreadyExist){
          setPhone(phn);
          setEmail(phn);
          setOtpStage("Sent");
          setLoginMode("OTP")
        }
      },[])
  
    return (
        <div className="logmBox">
                    <p className="logmHeadT1">Login</p>
                    <input value={phone} onChange={handelEmailPhone} className="logmInput" placeholder="Enter Email ID or Mobile Number"/>

                    {loading1 ? <div className="logmLoader1"></div> : otpStage === ""?null:otpStage==="Start" ?<span onClick={()=>{sendMobileOtp();}} className="logmGet1">Get OTP to Log In <span className="logmGet2">(or Enter Password Below)</span></span>
                    : <div onClick={()=>{
                        if(otpStage === "Resend"){
                            sendMobileOtp();
                        }
                    }} className={otpStage === "Sent"?"logmOTPInactive":"logmOTP"}>{otpStage === "Sent" ? `Resend in ${otpTimer}`: otpStage === "Resend" ? "Resend OTP" : ""}
                    </div>}
                    {loading1 ? null : loginMode === "Password" ? <div className="logmPB">
                <input onChange={(val)=>{setPassword(val.target.value)}} className="logmPBInput" type={showPass?'text':'password'} placeholder="Set Password"/>
                <div onClick={()=>{setShowPass(!showPass)}} className="logmPBShow">
                    <i style={{fontSize: '16px',color: '#554BDA'}}  class={showPass?"fa-solid fa-eye-slash":"fa-solid fa-eye"}></i>
                    <p className="logmPBShowT1">{showPass?"Hide":"Show"}</p>
                </div>
                </div> : 
                <input onChange={(val)=>{setOtp(val.target.value)}} className="logmInputOtp" placeholder="Enter OTP"/>}

                {loading1 ? <></> : loading2? <div className="logmLoader2"></div>  :<div onClick={login} className="logmLogin">Login</div>}
      </div>
    );
  }


export default  LoginModal;
