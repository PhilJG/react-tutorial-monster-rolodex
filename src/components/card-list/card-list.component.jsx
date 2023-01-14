import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

//export Allows other files to import what is inside if they dont try to destructure the file
export default CardList;
