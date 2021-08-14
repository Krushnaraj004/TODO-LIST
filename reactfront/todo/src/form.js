import React, { useState , useEffect } from 'react';
import './App.css';
import { Render } from './table';
import axios from 'axios';

export const Form = () => {

    const [userData, setUserData] = useState({
        userName: " ",
        email: " ",
        Phone: " ",
    });

    useEffect(()=>{
      console.log("called");
      fetchUser();
    },[]);
    const [userArr, setUserArr] = useState([]);

    const [changeText,setChangeText]=useState("Submit");
    const [docId, setId] = useState();

    const addToDo = async () => {
        try{
            if (changeText === "Submit")
            {
                 var response = await axios.post("http://localhost:8080/add/friend",userData);
            }
            else{
                var response = await axios.put(`http://localhost:8080/update/friend?_id=${docId}`, userData);
                setChangeText("Submit");
            }
                 console.log("response",response);
            fetchUser();
        }catch(error){
            console.log("error",error.response);
        };
    }
    const fetchUser = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get/friend");
            console.log("response", response);
            setUserArr(response.data);
        } catch (error) {
            console.log("error", error.response);
        };
    }
    const deleteUser = async(_id)=>
    {
        try {
            const response = await axios.delete(`http://localhost:8080/delete/friend?_id=${_id}`);
            console.log("response", response);
           fetchUser();
        } catch (error) {
            console.log("error", error.response);
        };
    }
    const HandleChange = (e) => {
        setUserData({...userData,[e.target.name]:e.target.value});
     };

    return (
        <div className="main">
            <div className="box1">
                <div className="linput">
                    <span>Name</span>
                    <input
                        className="input-box"
                        type="text"
                        name="userName"
                        placeholder="please enter your name"
                        value={userData.userName}
                        onChange={HandleChange}
                    />
                </div>

                <div className="box2">
                    <span>Email</span>
                    <input
                        className="input-box"
                        type="text"
                        name="email"
                        placeholder="please enter your email"
                        value={userData.email}
                        onChange={HandleChange}
                    />
                </div>

                <div className="box5">
                    <span>Phone</span>
                    <input
                        className="input-box"
                        type="number"
                        name="Phone"
                        placeholder="please enter your phone"
                        onChange={HandleChange}
                        value={userData.Phone}
                    />

                </div>

                <button id="submit1" onClick={addToDo}>{changeText}</button>
                <button id="submit2" onClick={fetchUser}>GET</button>

            </div>
            <div className="box3">
                {userArr.map((item) => {
                    return <Render key={item._id} setId={setId} setChangeText={setChangeText} userData={userData} setUserData={setUserData} item={item} fetchUser={fetchUser} deleteUser={deleteUser} />
                })}
            </div>
        </div>
    )
}
