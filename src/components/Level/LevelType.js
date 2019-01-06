import React from 'react';
import PropTypes from 'prop-types';
import './Level.scss';

export const LevelType = (props) => {
    const {
        as: Component,
        children,
        className,
        centered,
        type,
    } = props;
    const isCentered = centered ? 'has-text-centered' : '';
    return (
        <Component className={`${className} level-${type} ${isCentered}`}>{children}</Component>
      );
}

LevelType.propTypes = {
    /** Any HTML element*/
    as: PropTypes.string,

    /** Additional class names */
    className: PropTypes.string,

    /** Type could be [left, right, item] */
    type: PropTypes.string.isRequired,

    /** If text align center */
    centered: PropTypes.bool
}

LevelType.defaultProps = {
    as: 'nav',
    className: '',
    centered: false,
}
