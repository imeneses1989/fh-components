import React from 'react';

const CardText = (props) => {
    
    const paragraphs = props.text.map((p, i) => <p key={i}>{p}</p>);
    
    return (
        <div className="card-text">
            {paragraphs}
        </div>
    );
};

export default CardText;