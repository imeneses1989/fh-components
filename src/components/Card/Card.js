import React, { Component } from 'react';
import ButtonOptions from '../Buttons/ButtonOptions';
import ButtonExpand from '../Buttons/ButtonExpand';
import ButtonLike from '../Buttons/ButtonLike';
import ButtonShare from '../Buttons/ButtonShare';
import CardText from '../CardText/CardText';

import { Transition } from 'react-transition-group';

import './Card.css';

import PropTypes from 'prop-types';

class Card extends Component {

    state = {
        cardExpanded: false,
    }

    expandClicked = () => {
        this.setState({ cardExpanded: !this.state.cardExpanded });
    }

    render() {

        const { cardExpanded } = this.state;
        let text = this.state.cardExpanded ? <CardText text={this.props.text}/> : null;

        return (
            <div className="card">
                <div className="card-header">
                    <div className="card-header-icon">R</div>
                    <div className="card-header-info">
                        <span className="card-title">{this.props.title}</span>
                        <span className="card-date">{this.props.date}</span>
                    </div>
                    <div className="card-header-options">
                        <ButtonOptions />
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-body-image">
                    </div>
                    <div className="card-body-excerpt">
                        <p>{this.props.excerpt}</p>
                    </div>
                 </div>
                 <div className="card-footer">
                    <div className="card-footer-like">
                        <ButtonLike />
                    </div>
                    <div className="card-footer-share">
                        <ButtonShare />
                    </div>
                    <div className="card-footer-expand">
                        <ButtonExpand click={this.expandClicked} expanded={this.state.cardExpanded} />
                    </div>
                </div>     
                <Transition
                    in={cardExpanded}
                    timeout={1000}
                    unmountOnExit
                    >
                    <CardText text={this.props.text} />
                </Transition>
            </div>
        );
    }
}

Card.propTypes = {

};

export default Card;