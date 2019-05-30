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
        console.log('getDerivedStateFromError');
        return { error };
    }
    
    componentDidCatch(error, info) {
        console.log('componentDidCatch()\nerror: ', error, '\ninfo: ', info);
        this.setState({
            error: error,
            errorInfo: info
        })
    }

    render() {

        if (this.state.error !== null) {    // display error
            console.log('render(): ', this.state.errorInfo)
            return (
                <div>
                    <h2>Something went wrong!</h2>
                    {this.state.error.toString()}
                    <br></br>
                    {this.state.errorInfo ? this.state.errorInfo.componentStack : null}
                </div>
            );
        }

        // no error, display children
        return (
            <div>
                <h2>No Errors</h2>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary;