import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    //distructure values that component is expecting to use
    //pass entire object through so that this props is going to be exactly whole object
    const { id, name, email } = this.props.monster;

    return (
      <div className='card-container' key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
