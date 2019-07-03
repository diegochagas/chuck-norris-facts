import React from 'react';
import './WarningMessage.scss';

class WarningMessage extends React.Component {
    render () {
        return (
            <div className="warning-message" data-test="warning">
                <h2>{this.props.title}</h2>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

WarningMessage.defaultProps = {
    title: "Warning!"
}

export default WarningMessage;