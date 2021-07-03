import React from 'react';
import PropTypes from 'prop-types';

import './SectionStep.scss';

const SectionStep = props => {
    const { contents } = props;

    const stepColumn = contents => {
        return (
            contents.map(content => {
                return (
                    <div className="col-sm-4 step-col">
                        <div className="row step-row step-icon">
                            {content.icon}
                        </div>
                        <div className="row step-row step-text">
                            <h4 className="h4">{content.text}</h4>    
                        </div>
                    </div>
                )
                }
            )
        )
    }

    return (
        <div className="row flex-row step">
            {stepColumn(contents)}
        </div>
    )
}

SectionStep.propTypes = {
    contents: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.shape({
                icon: PropTypes.node,
                text: PropTypes.string
            })
        )
    )
};

export default SectionStep;