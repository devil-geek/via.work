import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import "./Jobcard.scss";

const skillTags = skills => {
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

const Jobcard = (props) => {
  
  return (
    <div className="card">
      {!props.showSkills && (
        <button className="delete is-pulled-right" onClick={() => props.deleteRecent(props.job.job_uuid)} />
      )}
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <span className="icon is-large">
              <i className="fa fa-user-tie fa-3x" />
            </span>
          </div>
          <div className="media-content">
            <p className="title is-5">{props.job.job_title}</p>
            <p className="subtitle is-6">
              {moment(props.job.date).format("DD-MM-YYYY HH:mm:ss")}
            </p>
          </div>
        </div>
        {props.showSkills && (
          <div className="content">
            <hr />
            <p>Skills required: </p>
            {skillTags(props.job.skills)}
            <button className="button is-info is-pulled-right is-inverted">
              Detail
              </button>
            &nbsp;
            </div>
        )}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteRecent: item => dispatch({ type: "DELETE", value: item })
  };
};

export default connect(null,mapDispatchToProps)(Jobcard);
