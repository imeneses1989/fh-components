import React from 'react';
import PropTypes from 'prop-types';
import './Level.scss';

export const Level = (props) => {
    const {
        as: Component,
        children,
        className
    } = props;
    return (
        <Component className={`${className} level`}>{children}</Component>
      );
}

Level.propTypes = {
    as: PropTypes.string,
    className: PropTypes.string
}

Level.defaultProps = {
    as: 'nav',
    className: ''
}