import React from 'react';

import PropTypes from 'prop-types';

const CardText = (props) => {

    const {
        content,
    } = props;
    
    const paragraphs = content.map((p, i) => <p key={i}>{p}</p>);
    
    return (
        <div className="card-text">
            {paragraphs}
        </div>
    );
};

CardText.propTypes = {
    content: PropTypes.array.isRequired
}

export default CardText;