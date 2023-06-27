import React ,{useEffect,useState}from "react";
import Modal from "react-modal";
import LoginModal from "../../components/loginModal/loginModal";
import { authenticationOTP, isValidUser, sendOTP } from "../../store/action/auth_action";
import { getManufacturerInfo } from "../../store/action/manufacturer_action";
import './auth_page.css'
import Snackbar from "../../components/snackbar/snackbar";


const AuthPage =()=> {

    const [showPass, setShowPass] = useState(false);

    const [otpStage, setOtpStage] = useState("Start");

    const [otpTimer, setOtpTimer] = useState(60);

    const [phone, setPhone] = useState('');

    const [otp, setOtp] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [lModalIsOpen,setLModalIsOpen] = useState(false);

    const [loading1, setLoading1] = useState(false);

    const [loading2, setLoading2] = useState(false);

    const [alreadyExist, setAlreadyExist] = useState(false)


    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarObject, setSnackbarObject] = useState({message: "", backgroundColor: "#181818", color: "white", okColor: "white"})

  // Function to show the snackbar
  const showSnackbarMessage = (sObject) => {
    setSnackbarObject(sObject)
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
      setSnackbarObject({message: "", backgroundColor: "#181818", color: "white", okColor: "white"});
    }, 5000);
  }

    async function getData() {
      const m_id = localStorage.getItem('manufacturer_id');
      if(m_id === "" || m_id === null || m_id === undefined){
          // window.open('/supplier/auth','_self')
      } else {
          let obj = {
              _id: m_id,
              mode: 'Manufacturer'
          }
          const json = await isValidUser(obj);
          if(json.success) {
              let obj2 = {
                  manufacturer_id: m_id,
              }
              const json2 = await getManufacturerInfo(obj2);
              if(json2.success === true && json2.isNew === false) {
                  if(json2.msz.gst_details["gstin"] === "" || json2.msz.gst_details["gstin"] === null || json2.msz.gst_details["gstin"] === undefined || json2.msz.bank_details["account_number"] === "" || json2.msz.bank_details["account_number"] === null || json2.msz.bank_details["account_number"] === undefined ){
                      window.open('/supplier/fillinfo','_self'); 
                  } else {
                      window.open('/supplier/home','_self');
                  }
              } else if(json2.success === true && json2.isNew === true) {
                  window.open('/supplier/fillinfo','_self');
              } else {
                let sbObject = {message: "Something Went Wrong", backgroundColor: "#181818", color: "white", okColor: "white"}
                showSnackbarMessage(sbObject)
              }
          } else {
              localStorage.clear();
              // window.open('/supplier/auth','_self');
          }
      }
  }


  useEffect(()=>{
    getData();
  },[])

    async function sendMobileOtp () {
      setLoading1(true);
      const obj = {
        phone: phone,
        mode: 'Manufacturer'
      }
      const json = await sendOTP(obj);
      setLoading1(false);
      if(json.success === true && json.userExist === false){
        setOtpStage("Sent");
      } else if(json.success ===true && json.userExist === true) {
        setAlreadyExist(true);
        setLModalIsOpen(true);
        let sbObject = {message: "User already exist, Enter OTP to log in", backgroundColor: "green", color: "white", okColor: "white"}
        showSnackbarMessage(sbObject)
        // showSnackbarMessage("User already exist, Enter OTP to log in")
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

      async function createAccount () {
        if(email.includes('@') === false){
          snackbarObject['message'] = "Enter a valid email";
          showSnackbarMessage(snackbarObject);
        }
        else if(phone === "" || otp === "" || email === "" || password === ""){
            snackbarObject['message'] = "Fill All The Fields";
            showSnackbarMessage(snackbarObject);
        } else {
          if(otpStage === "Sent" || otpStage === "Resend"){
            console.log("Yes")
          setLoading2(true)
            const obj = {
                phone: phone,
                email: email,
                otp: otp,
                password: password,
                mode: "Manufacturer",
                authMode: "Signup"
              };
              let json = await authenticationOTP(obj);
              console.log("ASAL: ",json)
              setLoading2(false)
              if(json.success) {
                window.open('/supplier/fillinfo','_self')
              } else {
                snackbarObject['message'] = json.msz;
                showSnackbarMessage(snackbarObject);
              }
            } else {
              snackbarObject['message'] = "Click On Send OTP First";
              showSnackbarMessage(snackbarObject);
            }
        }
      }

      const customStyles = {
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'fit-content',
            height: 'fit-content',
            padding: '5vh 4vw',
        },
        overlay: {zIndex: 1000,backgroundColor: 'rgb(0,0,0,0.5)'}
      };
  
    return (
        <div className="papBox">

            <div className="papTB">
                <img className="papTBImage" src={"https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_GrowthImg.svg"} />

                <div onClick={()=>{setLModalIsOpen(true)}} className="papTBR">
                    <p className="papTBRT1">Already a user?</p>
                    <div className="papTBRD1">Login</div>
                </div>
            </div>

            <div className="papRB">
                <p className="papRBHeadT1">Create Account</p>
                <div className="papRBMB">
                <input type='number' max={9999999999} onChange={(val)=>{
                    setPhone(val.target.value)
                    if(val.target.value.length === 10){
                        setOtpStage("Mobile");
                    } else{
                        setOtpStage("Start")
                    }
                }} className="papRBMBInput" placeholder="Enter Mobile Number"/>
                {loading1? <div className="papLoader1"></div> :<div onClick={()=>{
                    if(otpStage === "Mobile" || otpStage === "Resend"){
                        sendMobileOtp();
                    }
                }} className={otpStage === "Start" || otpStage === "Sent"?"papRBMBOTPInactive":"papRBMBOTP"}>{otpStage ==="Start" || otpStage === "Mobile" ? "Send OTP" : otpStage === "Sent" ? `Resend in ${otpTimer}`: otpStage === "Resend" ? "Resend OTP" : ""}</div>}
                </div>
                <input onChange={(val)=>{setOtp(val.target.value)}} className="papRBInput" placeholder="Enter OTP"/>
                <input onChange={(val)=>{setEmail(val.target.value)}} className="papRBInput" placeholder="Enter Email"/>
                <div className="papRBPB">
                <input onChange={(val)=>{setPassword(val.target.value)}} className="papRBPBInput" type={showPass?'text':'password'} placeholder="Set Password"/>
                <div onClick={()=>{setShowPass(!showPass)}} className="papRBPBShow">
                    <i style={{ cursor: 'pointer', fontSize: '16px',color: '#554BDA'}}  class={showPass?"fa-solid fa-eye-slash":"fa-solid fa-eye"}></i>
                    <p className="papRBPBShowT1">{showPass?"Hide":"Show"}</p>
                </div>
                </div>

                {loading2? <div className="papLoader2"></div>  :<div onClick={createAccount} className="papRBCreate">Create Account</div>}

                <Modal
                className="papLModal"
                isOpen={lModalIsOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={()=>{setAlreadyExist(false); setLModalIsOpen(false)}}
                style={customStyles}>
                    <LoginModal phn={phone} alreadyExist={alreadyExist} snackbarObject={snackbarObject} showSnackbarMessage={showSnackbarMessage}/>
                </Modal>
            </div>
            {showSnackbar ? <Snackbar msz={snackbarObject.message} backgroundColor={snackbarObject.backgroundColor} setShowSnackbar={setShowSnackbar}/> : null}

      </div>
    );
  }


export default  AuthPage;
