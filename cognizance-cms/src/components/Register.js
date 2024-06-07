import React,{useState}from 'react'
import "../styles/Register.css"
import { Link } from 'react-router-dom'
import logo from '../assets/cognizance-logo.png'
function Register() {
    const [newPwd, setNewPwd] = useState('');
    const [confPwd, setConfPwd] = useState('');

    const handleNewPwd = (event) => {
        setNewPwd(event.target.value);
    }
    const handleConfPwd = (event) => {
        setConfPwd(event.target.value);
    }
    const handleResetPwd = (event) => {
        event.preventDefault();
        if (newPwd !== confPwd) {
            alert("Passwords do not match!");
        }
    }
  return (
    <div>
    <div className='reset-pwd-sec'>
        <div className='reset-col left-col'>
            <img height="300px" src={logo} alt="Cognizance Logo" />
        </div>
        <div className='reset-col right-col'>
            <div className='reset-text'>
                <div className='reset-back-btn'><Link to ="/login">
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="40" height="40" rx="11.5" fill="white" stroke="#E8ECF4"/>
                        <path d="M23.1576 13.3669C23.0656 13.2747 22.9564 13.2016 22.8362 13.1517C22.716 13.1019 22.5871 13.0762 22.4569 13.0762C22.3268 13.0762 22.1979 13.1019 22.0777 13.1517C21.9574 13.2016 21.8482 13.2747 21.7563 13.3669L15.1776 19.9456C15.1042 20.0189 15.0459 20.1059 15.0062 20.2017C14.9665 20.2974 14.946 20.4001 14.946 20.5038C14.946 20.6075 14.9665 20.7101 15.0062 20.8059C15.0459 20.9017 15.1042 20.9887 15.1776 21.0619L21.7563 27.6406C22.1442 28.0286 22.7696 28.0286 23.1576 27.6406C23.5455 27.2527 23.5455 26.6273 23.1576 26.2394L17.4259 20.4998L23.1655 14.7602C23.5455 14.3802 23.5455 13.7469 23.1576 13.3669Z" fill="black" stroke="black" stroke-width="0.2" />
                    </svg>
                </Link>
                </div>
                Register</div>
            <form onSubmit={handleResetPwd}>
            <input placeholder='Enter User Name'></input>
            <input placeholder='Enter Email'></input>
            <input placeholder='Mobile Number'></input>
            <input placeholder='LinkedIn'></input>
            <input placeholder='GitHub'></input>
            <input placeholder='Your Headline'></input>
            <button type="submit" className='update-btn'>Register</button>
            </form>
        </div>
    </div>

</div>
  )
}
export default Register