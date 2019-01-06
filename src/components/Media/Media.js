import React from 'react';
import PropTypes from 'prop-types';
import './Media.scss';

export const Media = (props) => {
    const {
        as: Component,
        children,
        className
    } = props;
    return (
        <Component className={`${className} media`}>{children}</Component>
      );
}

Media.propTypes = {
    as: PropTypes.string,
    className: PropTypes.string
}

Media.defaultProps = {
    as: 'article',
    className: ''
}
