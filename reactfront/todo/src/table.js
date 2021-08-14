import axios from 'axios';
import React from 'react';

export const Render = (props) => {
    // const updateUser = async (_id) => {
    //     try{
    //         const response = await axios.update(`http://localhost:8080/update/friend?_id=${_id}`)
    //         console.log("response",response);
    //         props.fetchUser();
    //     }
    //     catch(error)
    //     {
    //         console.log("error",error);
    //     }
    // }
    return (
        <table className="table">
             <thead>
                 <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th>Buttons</th>
                 </tr>
             </thead>
             <br/>
             <tbody>
                 <tr>
                    <td>{props.item.userName}</td>
                    <td>{props.item.email}</td>
                    <td>{props.item.Phone}</td>
                    <td style={{}} onClick={()=>props.deleteUser(props.item._id)}><button>Delete</button></td>
                    <td style={{}} onClick={() => {
                   props.setChangeText("Edit");
                    props.setId(props.item._id);
                   props.setUserData({ ...props.userData,
                        userName:props.item.userName,
                        email: props.item.email,
                        Phone: props.item.Phone,
                        });
                    }}
                        ><button>Edit</button></td>
                 </tr>
              </tbody>
        </table>
    )
}