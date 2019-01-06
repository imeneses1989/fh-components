import React from 'react';
import PropTypes from 'prop-types';
import './Media.scss';

export const MediaType = (props) => {
    const {
        as: Component,
        children,
        type,
        className
    } = props;
    return (
        <Component className={`${className} media-${type}`}>{children}</Component>
      );
}

MediaType.propTypes = {
    /** Optional HTML element */
    as: PropTypes.string,

    /** Additional class names */
    className: PropTypes.string,

    /** Media types include [left, right, content] */
    type: PropTypes.string.isRequired
}

MediaType.defaultProps = {
    as: 'div',
    className: ''
}