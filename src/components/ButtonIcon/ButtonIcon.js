import React from 'react';
import PropTypes from 'prop-types'; 

import './ButtonIcon.scss';

const ButtonIcon = (props) => {

    const {
        disabled,
        onClick,
        children,
    } = props;

    return (
        <button className="ripple"
            disabled={disabled}
            onMouseDown={onClick}>
            {children}
         </button>
      );
}

ButtonIcon.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
}

ButtonIcon.defaultProps = {
    disabled: false,
}

export default ButtonIcon;