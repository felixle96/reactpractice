import React from "react";
import "./User.css";

import store from "../store";
import { setActiveUserId } from "../actions";

const User = (props) => {
    const { name, profile_pic, status } = props.user;

    return (
        <div className="user" onClick={handleUserClick.bind(null, props.user.user_id)} >
            <img src={profile_pic} alt={name} className="user__pic" />
            <div className="user__details">
                <p className="user__details-name">{name}</p>
                <p className="user__details-status">{status}</p>
            </div>
        </div>
    );
}

function handleUserClick(user_id) {
    store.dispatch(setActiveUserId(user_id));
}

export default User;