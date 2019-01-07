import React from 'react';
import PropTypes from 'prop-types';
import '../styles/grid/columns.scss';  

export const Container = (props) => {
    const {
        as: Component,
        children,
        className
    } = props;
    return (
        <Component className={`${className} container`}>{children}</Component>
      );
}

Container.propTypes = {
    as: PropTypes.string,
    className: PropTypes.string
}

Container.defaultProps = {
    as: 'div',
    className: ''
}