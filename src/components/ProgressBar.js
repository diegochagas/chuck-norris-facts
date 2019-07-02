import React from 'react';
import './ProgressBar.scss';

function ProgressBar () {
    return (
        <div className="progress-bar">
            <h2>Loading...</h2>
            <progress></progress>
        </div>
    );
}

export default ProgressBar;