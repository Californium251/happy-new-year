import React from "react";
import image from "./assets/end.png"

export default class End extends React.Component {
  render() {
    return (
      <>
        <img className="End" src={image} alt="Конец игры" />
      </>
    )
  }
}