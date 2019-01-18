import React from "react";
import { connect } from "react-redux";
import Jobcard from "../../components/JobCard/Jobcard";
import Searchbar from "../../components/Searchbar/Searchbar";

const Home = (props) => {
  const jobs = Object.values(props.recent).reverse();
  return (
    <section className="section">
      <div className="container">
        <div className="is-hidden-desktop">
          <div className="columns is-centered">
            <div className="column is-narrow">
              <Searchbar />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-offset-1 is-5">
            {jobs[0] && <Jobcard job={jobs[0]} showSkills />}
          </div>
          <div className="column is-offset-2 is-4">
            {jobs.length > 0 && <p>Recent Jobs</p>}
            {jobs.length > 0 &&
              jobs.map(item => {
                return <Jobcard key={item.job_uuid} job={item} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    recent: state.recent
  };
};

export default connect(mapStateToProps)(Home);
