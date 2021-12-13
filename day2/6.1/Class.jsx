import React from "react";
import "./style.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url, title, description } = this.props;
    return (
      <div className="card-container">
        <div className="img">
          <img src={url} alt={title} />
        </div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <button>explore</button>
        <button>share</button>
      </div>
    );
  }
}

export default Card;
