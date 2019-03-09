import React, { Component } from 'react';

import ButtonIcon from '../ButtonIcon/ButtonIcon';
import CardText from './CardText';

import { Icon } from 'fht-components/Icon/Icon';
import { text } from '@storybook/addon-knobs';

import './Card.scss';

import PropTypes from 'prop-types';

export default class Card extends Component {

    state = {
        cardExpanded: false,
    }

    expandClicked = () => {
        this.setState((prevState) => { return { cardExpanded: !prevState.cardExpanded} })
    }

    render() {

        const {
            content,
            title,
            date,
            excerpt,
            onMoreClicked,
            onLikeClicked,
            onShareClicked,
        } = this.props;

        let cardContent = this.state.cardExpanded ? <CardText content={content}/> : null;

        return (
            <div className="card">
                <div className="card-header">
                    <div className="card-header-icon">R</div>
                    <div className="card-header-info">
                        <span className="card-title">{title}</span>
                        <span className="card-date">{date}</span>
                    </div>
                    <div className="card-header-options">
                        <ButtonIcon
                            disabled={false}
                            onClick={onMoreClicked}>
                            <Icon icon={text('icon', 'outline-more-vert-24px')} />
                        </ButtonIcon>
                    </div>
                </div>
                <div className="card-body">
                    {/* <div className="card-body-image" style={{backgroundImage: `url(${image})`}}> */}
                    <div className="card-body-image">
                    </div>
                    <div className="card-body-excerpt">
                        <p>{excerpt}</p>
                    </div>
                 </div>
                 <div className="card-footer">
                    <div className="card-footer-like">
                        <ButtonIcon
                            disabled={false}
                            onClick={onLikeClicked}>
                            <Icon icon={text('icon', 'outline-favorite-24px')} />
                        </ButtonIcon>
                    </div>
                    <div className="card-footer-share">
                        <ButtonIcon
                            disabled={false}
                            onClick={onShareClicked}>
                            <Icon icon={text('icon', 'outline-share-24px')} />
                        </ButtonIcon>
                    </div>
                    <div className="card-footer-expand">
                        <ButtonIcon
                            disabled={false}
                            onClick={this.expandClicked}>
                            <Icon
                                icon={text('icon', 'outline-expand-more-24px')}
                                className={`is-24x24 ${this.state.cardExpanded ? 'rotate180' : ''}`}/>
                        </ButtonIcon>
                    </div>
                </div>     
                {cardContent}
            </div>
        );
    }
}

ButtonIcon.propTypes = {
    disabled: PropTypes.bool,
    content: PropTypes.string,
    // title: PropTypes.string.isRequired, 
    // date: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
}

ButtonIcon.defaultProps = {
    disabled: false,
}