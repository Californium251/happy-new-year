import React from "react";

export default class Button extends React.Component {
  render () {
    return (
      <button type="button" onClick={this.props.nextQuestion} className="button">Тяну новый вопрос</button>
    )
  }
}