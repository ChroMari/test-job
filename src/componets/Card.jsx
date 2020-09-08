import React from 'react';

import './cardstyle.scss';

import cat from '../assets/img/cat.png';
import Additive from './Additive.jsx';

class Card extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      views: {
        defaultHover : (props.card.instock && !props.card.status.selected) ? true : false,
        defaultView : false,
        selectedView : props.card.status.selected,
        selectedHover : false,
        disabledView : (!props.card.instock) ? true : false
      },
      parameters: {
        color : (!props.card.instock) ? '#B3B3B3' : (!props.card.status.selected) ? '#1698D9' : '#D91667',
        value: 'Сказачное заморское яство',
        classOverhead: 'card__overhead__gray'
      }
    };
    this.click = this.click.bind(this);
    this.mouseenter = this.mouseenter.bind(this);
    this.mouseleave = this.mouseleave.bind(this);
  }

    click() { 
      const { defaultHover, defaultView, selectedView, selectedHover } = this.state.views;
      if (defaultHover || defaultView)
        this.setState(item => ({
          views: { ...item.views, defaultView: false, defaultHover: false, selectedView: true },
          parameters: { ...item.parameters, color: '#D91667' } }));
      else if (selectedHover || selectedView)
        this.setState(item => ({
          views: { ...item.views, defaultView: true, selectedView: false, selectedHover: false },
          parameters: { value: 'Сказачное заморское яство', color: '#1698D9', classOverhead: 'card__overhead__gray' } }));
    }

    mouseenter() {
      const { defaultHover, defaultView, selectedView, selectedHover } = this.state.views;
      if (defaultView && !selectedView)
        this.setState(item => ({
          views: { ...item.views, defaultView: !defaultView, defaultHover: !defaultHover },
          parameters: { ...item.parameters, color: '#2EA8E6' } }));
      else if (!defaultView && selectedView)
        this.setState(item => ({
          views: { ...item.views, selectedView: !selectedView, selectedHover: !selectedHover },
          parameters: { value: 'Котэ не одобряет?', color: '#E52E7A', classOverhead: 'card__overhead__pink' } })); 
    }

    mouseleave() {
      const { defaultHover, defaultView, selectedView, selectedHover } = this.state.views;
      if (defaultHover && !selectedHover) 
        this.setState(item => ({
          views: { ...item.views, defaultView: !defaultView, defaultHover: !defaultHover },
          parameters: { ...item.parameters, color: '#1698D9' } }));
      else if (!defaultHover && selectedHover)
        this.setState(item => ({
          views: { ...item.views, selectedView: !selectedView, selectedHover: !selectedHover },
          parameters: { value: 'Сказачное заморское яство', color: '#D91667', classOverhead: 'card__overhead__gray' } }));
    }

  render() {
      return (
        <React.Fragment>
        <div>
        <div onClick={this.click} 
             onMouseEnter={this.mouseenter}
             onMouseLeave={this.mouseleave}
             className = "cardPack" style={{ background: this.state.parameters.color }}>
          <div className={(this.props.card.instock) ? 'card' : 'card disabledcard'} >
            <div className={"card__overhead "+  this.state.parameters.classOverhead}>{this.state.parameters.value}</div>
            <h3 className="card__title">{this.props.card.title}</h3>
            <div className="card__subtitle">{this.props.card.subtitle}</div>
            <div className="card__portion"><strong>{this.props.card.portion}</strong> порций</div>
            <div className="card__portion">{this.props.card.present}</div>
            {(this.props.card.content) ? <div className="card__portion">заказчик доволен</div> : ''}
            <img className="card__img" src={cat} alt="cat" />
            <div className="card__kilos" style={{ background: this.state.parameters.color }}>{this.props.card.kilos}</div>
          </div>
        </div>
        <Additive type={this.state.views} element={this.props.card} cl={this.click} />
        </div>
        </React.Fragment>
      );
    }
}

export default Card;