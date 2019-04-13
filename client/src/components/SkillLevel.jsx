import React, { Component } from "react";

import { updateSkillLevel } from "../api/users";

import "../assets/css/SkillLevel.css";

/**
 * TODO: this component is not working properly.
 * It fails to show the level when used multiple times in the same page.
 */
class SkillLevel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: this.props.level
    };
  }

  updateLevel = e => {
    e.stopPropagation();

    const { userId, skillName } = this.props;
    const level = e.target.value;

    updateSkillLevel(userId, skillName, level).then(res => {
      if (res.status === "ERROR") {
        alert(`Error updating skill level for ${skillName}: '${res.message}'`);
        return;
      }
      this.props.updateLevelHandler(skillName, level);
      this.setState({ level });
    });
  };

  render() {
    const { userId, skillName } = this.props;
    const id = userId + "_" + skillName;
    const { level } = this.state;

    // the empty onChange function is just to avoid React warning about
    // missing onChange which it is already covered by onClick
    return (
      <div className="skill-level">
        <div className="rating">
          <input
            type="radio"
            name="rating-star"
            className="rating__control"
            defaultValue="1"
            id={"rc1_" + id}
            checked={level >= 1}
            onClick={this.updateLevel}
            onChange={() => {}}
          />
          <input
            type="radio"
            name="rating-star"
            className="rating__control"
            defaultValue="2"
            id={"rc2_" + id}
            checked={level >= 2}
            onClick={this.updateLevel}
            onChange={() => {}}
          />
          <input
            type="radio"
            name="rating-star"
            className="rating__control"
            defaultValue="3"
            id={"rc3_" + id}
            checked={level >= 3}
            onClick={this.updateLevel}
            onChange={() => {}}
          />
          <input
            type="radio"
            name="rating-star"
            className="rating__control"
            defaultValue="4"
            id={"rc4_" + id}
            checked={level >= 4}
            onClick={this.updateLevel}
            onChange={() => {}}
          />
          <input
            type="radio"
            name="rating-star"
            className="rating__control"
            defaultValue="5"
            id={"rc5_" + id}
            checked={level >= 5}
            onClick={this.updateLevel}
            onChange={() => {}}
          />

          <label htmlFor={"rc1_" + id} className="rating__item">
            <i className="rating__star fa fa-star" title="1 star" />
            <span className="rating__label">1</span>
          </label>
          <label htmlFor={"rc2_" + id} className="rating__item">
            <i className="rating__star fa fa-star" title="2 stars" />
            <span className="rating__label">2</span>
          </label>
          <label htmlFor={"rc3_" + id} className="rating__item">
            <i className="rating__star fa fa-star" title="3 stars" />
            <span className="rating__label">3</span>
          </label>
          <label htmlFor={"rc4_" + id} className="rating__item">
            <i className="rating__star fa fa-star" title="4 stars" />
            <span className="rating__label">4</span>
          </label>
          <label htmlFor={"rc5_" + id} className="rating__item">
            <i className="rating__star fa fa-star" title="5 stars" />
            <span className="rating__label">5</span>
          </label>
        </div>
      </div>
    );
  }
}

export default SkillLevel;
