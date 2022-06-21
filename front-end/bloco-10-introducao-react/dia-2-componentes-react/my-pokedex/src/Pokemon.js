import React from "react";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.about;
   return (
    <div className="pokemon-card">
      <ul>
        <li>{name}</li>
        <li>{type}</li>
        <li>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</li>
      </ul>
      <img src={image} alt={name + ' image'} />
    </div>
   );
  }
}

export default Pokemon;
