import React, { Component } from "react";
import moment from "moment";
import './Jobcard.scss'

class Jobcard extends Component {
  skillTags = skills => {
    const tags = [];
    for (let i = 0; i < 6; i++) {
      tags.push(
        <span key={skills[i].skill_uuid} className="tag is-info is-capitalized">
          {skills[i].skill_name}
        </span>
      );
    }
    return <div className="tags">{tags}</div>;
  };

  render() {
    return (
      <div className="card">
        {!this.props.showSkills && (
          <button className="delete is-pulled-right" />
        )}
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <span className="icon is-large">
                <i className="fa fa-user-tie fa-3x" />
              </span>
            </div>
            <div className="media-content">
              <p className="title is-5">{this.props.job.job_title}</p>
              <p className="subtitle is-6">
                {moment(this.props.job.date).format("DD-MM-YYYY HH:mm:ss")}
              </p>
            </div>
          </div>
          {this.props.showSkills && (
            <div className="content">
              <hr />
              <p>Skills required: </p>
              {this.skillTags(this.props.job.skills)}
              <button className="button is-info is-pulled-right is-inverted">
                Detail
              </button>
              &nbsp;
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Jobcard;
