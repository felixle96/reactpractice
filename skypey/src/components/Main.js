import React from "react";
import "./Main.css";

import Empty from "./Empty";
import ChatWindow from './ChatWindow';

function Main({ activeUserId, user }) {
    const renderMainContent = () => {
        if (!activeUserId) {    // no active user/contact selected
            // display user instead
            return <Empty user={user} activeUserId={activeUserId} />
        } else {    
            // display currently selected contact
            return <ChatWindow activeUserId={activeUserId} />
        }   
    };

    return (
        <main className="main">{renderMainContent()}</main>
    )
}

export default Main;