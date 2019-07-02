import React from 'react';
import './ErrorMessage.scss';

class ErrorMessage extends React.Component {
    render () {
        return (
            <div className="error-message" data-test="error">
                <h2>{this.props.message}</h2>
            </div>
        );
    }
}

export default ErrorMessage;