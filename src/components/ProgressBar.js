import React from 'react';
import './ProgressBar.scss';

function ProgressBar () {
    return (
        <div className="progress-bar" data-test="progress">
            <h2>Loading...</h2>
            <progress></progress>
        </div>
    );
}

export default ProgressBar;