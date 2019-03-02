import React from 'react';
import PropTypes from 'prop-types';
import Hoc from '../../Hoc/Hoc';
import './ripple.css';

const ButtonOptions = props => {

    return (
        <Hoc>
            <button className="ripple" type='button' onClick={props.click}>
                <span>
                    <svg viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
                    </svg>
                </span>
            </button>
        </Hoc>
    );
};

ButtonOptions.propTypes = {
};

export default ButtonOptions;