import React from "react";
import "./Empty.css";

const Empty = ({ user }) => {
    const { name, profile_pic, status } = user;
    const first_name = name.split(" ")[0];

    return (
        <div className="empty">
            <h1 className="empty__name">Welcome, {first_name}</h1>
            <img src={profile_pic} alt={name} className="empty__img" />
            <p className="empty__status">
                <b>Status:</b> {status}
            </p>
            <button className="empty__btn">Start a conversation</button>
            <p className="empty__info">
                Search for someone to start chatting with or go to Contacts
                to see who is available.
            </p>
        </div>
    );
}


export default Empty;