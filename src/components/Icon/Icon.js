import React from 'react';
import PropTypes from 'prop-types'; 
import './Icon.scss';
import '../icons.svg';

export const Icon = (props) => {

    const {
        onClick,
        state,
        icon,
        className
    } = props;

    const iconPath = `#icons_${icon}`;
    return (
        <svg className={`icon ${className} ${state}`} onClick={onClick}><use xlinkHref={iconPath} /></svg>
      );
}

Icon.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired,
    state: PropTypes.string,
    className: PropTypes.string
}

Icon.defaultProps = {
    state: 'enable',
    className: 'is-24x24'
}
