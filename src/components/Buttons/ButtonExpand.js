import React from 'react';
import PropTypes from 'prop-types';
import Hoc from '../../Hoc/Hoc';
import './ripple.css';

const ButtonExpand = props => {

    const style = props.expanded ? 
    {
        transform: 'rotate(180deg)',
        transformOrigin: '50% 50%'
    } : 
    null;

    return (
        <Hoc>
            <button className="ripple" type='button' onClick={props.click}>
                <span>
                    <svg viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path style={style} d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'></path>
                    </svg>
                </span>
            </button>
        </Hoc>
    );
};

ButtonExpand.propTypes = {
};

export default ButtonExpand;