import React from 'react';
import './SectionContainer.scss';

const SectionContainer = props => {
    const { children, backgroundColor } = props;

    return (
        <div className={`section section--${backgroundColor}`}>
            <div className="row align-items-center justify-content-center section-row flex-row">
                {children}
            </div> 
        </div>
    )
}

export default SectionContainer;