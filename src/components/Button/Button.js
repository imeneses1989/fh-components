import React from 'react';
import PropTypes from 'prop-types'; 

const Button = (props) => {
    return (
        <button className={props.state}
            disabled={props.disabled}
            onMouseDown={props.onClick}>
            {props.children}
         </button>
      );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    disabled: false,
    state: 'primary'
}

export default Button;