import React from 'react';

import './cardstyle.scss';

import cat from '../assets/img/cat.png';

class Card extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      views: {
        selectedView : false
      },
      parametrs: {
        viewColor : '#D91667'
      }
    };
    this.onSelect = this.onSelect.bind(this);
  }

    onSelect() {
      const { views } = this.state;
      const { selectedView } = views;
      if (!selectedView) {
        this.setState(element => ({
          views: {
            selectedView: true
          }, 
          parametrs: {
            viewColor: '#1698D9'
          }
        }));
      } else {
        this.setState(element => ({
          views: {
            selectedView: false
          }, 
          parametrs: {
            viewColor: '#D91667'
          }
        }));
      }
    }

     

  render() {
    const { parametrs } = this.state;
    const { card } = this.props; 

      return (
        <React.Fragment>
        <div onClick={this.onSelect} className = "cardPack" style={{ background: parametrs.viewColor }}>
          <div className={(card.instock) ? 'card' : 'card disabledcard'} >
            <div className="card__overhead">{card.overhead}</div>
            <h3 className="card__title">{card.title}</h3>
            <div className="card__subtitle">{card.subtitle}</div>
            <div className="card__portion"><strong>{card.portion}</strong> порций</div>
            <div className="card__portion">{card.present}</div>
            {(card.content) ? <div className="card__portion">заказчик доволен</div> : ''}
            <img className="card__img" src={cat} alt="cat" />
            <div className="card__kilos">{card.kilos}</div>
          </div>
        </div>
        </React.Fragment>
      );
    
    }

}

export default Card;