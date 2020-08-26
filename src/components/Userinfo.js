import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import '../components/Userinfo.css'


const Userinfo = (props) => {
    //console.log(props)
    const { name, phone, email, id, income, ProfileImage } = props.user
    const imgSyle = { width: '200px' }
    

    const handleAddUsers = props.handleAddUser // handleaddUser k receive korlam app.js theke

    return (
        <div className="user-style">
            <img style={imgSyle} src={ProfileImage} alt="" />
            <h3>users name: {name}</h3>
            <h5>users phone: {phone}</h5>
            <p>users email: {email}</p>
            <p>user income: ${income}k</p>
            <p>users id: {id}</p>

            {/* ekne props.user holo sei data jeta amra app.js a j button a click korcilam.. oita amra props diya pass kore data pailam.*/}
            <button onClick={() => handleAddUsers(props.user)}>
                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>  add Users</button>

        </div>
       
    );
};

export default Userinfo;