import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/grid/columns.scss'; 

export const Columns = (props) => {
    const {
        as: Component,
        children,
        className
    } = props;
    return (
        <Component className={`${className} columns is-variable`}>{children}</Component>
      );
}

Columns.propTypes = {
    as: PropTypes.string,
    className: PropTypes.string
}

Columns.defaultProps = {
    as: 'div',
    className: ''
}
