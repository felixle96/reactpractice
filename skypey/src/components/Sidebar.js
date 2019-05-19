import React from "react";

import "./Sidebar.css";
import User from "../containers/User";

class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                {this.props.contacts.map(contact => {
                    return (
                        <User user={contact} key={contact.user_id} />
                    );
                })}
            </aside>
        );
    }
}

export default Sidebar;