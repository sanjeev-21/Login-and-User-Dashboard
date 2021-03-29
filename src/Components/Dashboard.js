import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../Styles/Dashboard.css';
import { useDispatch, useSelector } from "react-redux";
import Auth from "./Auth";
import { useHistory } from "react-router-dom";
export default function Dashboard(){
    const history = useHistory();
const [capsules, setCapsules] = useState();
const [upComingCapsules, setUpComingCapsules] = useState();
const [pastCapsules, setPastCapsules] = useState();
const [capsuleDetails, setCapsuleDetails] = useState();
const [upComingCapsuleDetails, setUpComingCapsuleDetails] = useState();
const [pastCapsuleDetails, setPastCapsuleDetails] = useState();

let userData = useSelector((state) => state && state.data);
let num = userData.id % 2;
useEffect(()=>{
axios.get('https://api.spacexdata.com/v3/capsules').then((res)=>{
    setCapsules(res && res.data);
})
axios.get('https://api.spacexdata.com/v3/capsules/upcoming').then((res)=>{
    console.log('upcoming res', res)
    setUpComingCapsules(res && res.data);
})
axios.get('https://api.spacexdata.com/v3/capsules/past').then((res)=>{
    console.log('past res', res)
    setPastCapsules(res && res.data);
})
},[])
function capsuleOnChange(e, value){
    axios.get(`https://api.spacexdata.com/v3/capsules/${e.target.value}`).then((res)=>{
       if(value === "present") setCapsuleDetails(res.data);
       if(value === "upcoming") setUpComingCapsuleDetails(res.data);
       if(value === "past") setPastCapsuleDetails(res.data);
    })
}
    return(
        <div className={userData && userData.id === 0 || num === 0? "dashboard-main-div":"dashboard-main-div-2"}>          
            
            <div className="row container">
                <div className="header-div">
                    <h1 className="welcome-text">Welcome Admin</h1>
                    <button className="btn btn-secondary logout-btn" onClick={()=> Auth.logout(()=>{
                        history.push('/');
                    })}>Logout</button>
                </div><br></br>
                <div className={capsuleDetails?"col-md-4 col-sm-4 col-lg-4":"col-md-4 col-sm-4 col-lg-4 margin-class"}>
                    <label className="label-style">All Capsules</label><br></br>
                    <select onChange={(e)=>capsuleOnChange(e,"present")} className="select-item-box">
                        {capsules && capsules.map((value, i)=>{
                            return(
                                <option>{value.capsule_serial}</option>
                            )
                        })}
                    </select><br></br><br></br>
                    {capsuleDetails && <div>
                        <label className="label-style"><u>Capsule Details</u></label><br></br>
                        <label className="label-style">Capsule ID: </label>&nbsp;<label className="label-style-2">{capsuleDetails.capsule_id}</label><br></br>
                        <label className="label-style">Capsule Serial: </label>&nbsp;<label className="label-style-2">{capsuleDetails.capsule_serial}</label><br></br>
                        <label className="label-style">Detalis: </label>&nbsp;<label className="label-style-2">{capsuleDetails.details}</label><br></br>
                        <label className="label-style">Landings: </label>&nbsp;<label className="label-style-2">{capsuleDetails.landings}</label><br></br>
                        <label className="label-style">Original Launch Date: </label>&nbsp;<label className="label-style-2">{capsuleDetails.original_launch}</label><br></br>
                        <label className="label-style">Reuse Count: </label>&nbsp;<label className="label-style-2">{capsuleDetails.reuse_count}</label><br></br>
                        <label className="label-style">Status: </label>&nbsp;<label className="label-style-2">{capsuleDetails.status}</label><br></br>
                        <label className="label-style">Type: </label>&nbsp;<label className="label-style-2">{capsuleDetails.type}</label><br></br>
                        <label className="label-style"><u>Missions</u></label> <br></br>
                        {capsuleDetails.missions.map((value,i)=>{
                            return(
                            <>
                                <label className="label-style">Name: </label>&nbsp;<label className="label-style-2">{value.name}</label><br></br>
                                <label className="label-style">Flight: </label>&nbsp;<label className="label-style-2">{value.flight}</label>
                            </>)
                        })}
                    </div>}
                </div>
                <div className={upComingCapsuleDetails?"col-md-4 col-sm-4 col-lg-4":"col-md-4 col-sm-4 col-lg-4 margin-class"}>
                    <label className="label-style">Upcoming Capsules</label><br></br>
                    <select onChange={(e)=>capsuleOnChange(e,"upcoming")} className="select-item-box">
                        {upComingCapsules && upComingCapsules.map((value, i)=>{
                            return(
                                <option>{value.capsule_serial}</option>
                            )
                        })}
                    </select><br></br><br></br>
                    {upComingCapsuleDetails && <div>
                        <label className="label-style"><u>Capsule Details</u></label><br></br>
                        <label className="label-style">Capsule ID: </label>&nbsp;<label className="label-style-2">{upComingCapsuleDetails.capsule_id}</label><br></br>
                        <label className="label-style">Capsule Serial: </label>&nbsp;<label className="label-style-2">{upComingCapsuleDetails.capsule_serial}</label><br></br>
                        <label className="label-style">Detalis: </label>&nbsp;<label className="label-style-2">{upComingCapsuleDetails.details}</label><br></br>
                        <label className="label-style">Landings: </label>&nbsp;<label className="label-style-2">{upComingCapsuleDetails.landings}</label><br></br>
                        <label className="label-style">Original Launch Date: </label>&nbsp;<label className="label-style-2">{upComingCapsuleDetails.original_launch}</label><br></br>
                        <label className="label-style">Reuse Count: </label>&nbsp;<label className="label-style-2">{upComingCapsuleDetails.reuse_count}</label><br></br>
                        <label className="label-style">Status: </label>&nbsp;<label className="label-style-2">{upComingCapsuleDetails.status}</label><br></br>
                        <label className="label-style">Type: </label>&nbsp;<label className="label-style-2">{upComingCapsuleDetails.type}</label><br></br>
                        <label className="label-style"><u>Missions</u></label> <br></br>
                        {upComingCapsuleDetails.missions.map((value,i)=>{
                            return(
                            <>
                                <label className="label-style">Name: </label>&nbsp;<label className="label-style-2">{value.name}</label><br></br>
                                <label className="label-style">Flight: </label>&nbsp;<label className="label-style-2">{value.flight}</label>
                            </>)
                        })}
                    </div>}
                </div>
                <div className={pastCapsuleDetails?"col-md-4 col-sm-4 col-lg-4":"col-md-4 col-sm-4 col-lg-4 margin-class"}>
                    <label className="label-style">Past Capsules</label><br></br>
                    <select onChange={(e)=>capsuleOnChange(e, "past")} className="select-item-box">
                        {pastCapsules && pastCapsules.map((value, i)=>{
                            return(
                                <option>{value.capsule_serial}</option>
                            )
                        })}
                    </select><br></br><br></br>
                    {pastCapsuleDetails && <div>
                        <label className="label-style"><u>Capsule Details</u></label><br></br>
                        <label className="label-style">Capsule ID: </label>&nbsp;<label className="label-style-2">{pastCapsuleDetails.capsule_id}</label><br></br>
                        <label className="label-style">Capsule Serial: </label>&nbsp;<label className="label-style-2">{pastCapsuleDetails.capsule_serial}</label><br></br>
                        <label className="label-style">Detalis: </label>&nbsp;<label className="label-style-2">{pastCapsuleDetails.details}</label><br></br>
                        <label className="label-style">Landings: </label>&nbsp;<label className="label-style-2">{pastCapsuleDetails.landings}</label><br></br>
                        <label className="label-style">Original Launch Date: </label>&nbsp;<label className="label-style-2">{pastCapsuleDetails.original_launch}</label><br></br>
                        <label className="label-style">Reuse Count: </label>&nbsp;<label className="label-style-2">{pastCapsuleDetails.reuse_count}</label><br></br>
                        <label className="label-style">Status: </label>&nbsp;<label className="label-style-2">{pastCapsuleDetails.status}</label><br></br>
                        <label className="label-style">Type: </label>&nbsp;<label className="label-style-2">{pastCapsuleDetails.type}</label><br></br>
                        <label className="label-style"><u>Missions</u></label> <br></br>
                        {pastCapsuleDetails.missions.map((value,i)=>{
                            return(
                            <>
                                <label className="label-style">Name: </label>&nbsp;<label className="label-style-2">{value.name}</label><br></br>
                                <label className="label-style">Flight: </label>&nbsp;<label className="label-style-2">{value.flight}</label>
                            </>)
                        })}
                    </div>}
                </div>
            </div>
        </div>
    )
}