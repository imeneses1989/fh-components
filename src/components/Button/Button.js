import React from 'react';
import PropTypes from 'prop-types'; 

export const Button = ({children, onClick, disabled, state}) => {
    return (
        <button className={state} disabled={disabled} onMouseDown={onClick}>{children}</button>
      );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    state: PropTypes.string
}

Button.defaultProps = {
    disabled: false,
    state: 'primary'
}
