import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/grid/columns.scss'; 

export const Column = (props) => {
    const {
        as: Component,
        children,
        className
    } = props;
    return (
        <Component className={`${className} column`}>{children}</Component>
      );
}

Column.propTypes = {
    as: PropTypes.string,
    className: PropTypes.string
}

Column.defaultProps = {
    as: 'div',
    className: ''
}
