import React from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { error: error };
    }
    
    componentDidCatch(error, info) {
        console.log('componentDidCatch()\nerror: ', error, '\ninfo: ', info);
    }

    render() {
        if (this.state.error !== null) {    // display error
            return (
                <div>
                    <h2>Something went wrong!</h2>
                    {this.state.error}
                    <br></br>
                    {this.state.errorInfo}
                </div>
            );
        }

        // no error, display children
        return this.props.children;
    }
}

export default ErrorBoundary;