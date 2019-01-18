import React, { Component } from 'react'
import { connect } from 'react-redux'
import Jobcard from '../../components/JobCard/Jobcard'

class Home extends Component {
  render () {
    console.log(this.props.recent)
    const jobs = Object.values(this.props.recent)
    return (
      <section className='section'>
        <div className='container'>
        <div className='columns'>
            <div className='column is-5'>
              {jobs[jobs.length - 1] && 
                <Jobcard job={jobs[jobs.length - 1]} showSkills />
              }
            </div>
          <div className='column is-offset-3 is-4'>
              {jobs.length > 1 && jobs.reverse().map(item => {
                return (
                  <Jobcard key={item.job_uuid}  job={item}/>
                )
              })}
          </div>
        </div>
          
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    recent: state.recent
  }
}

export default connect(mapStateToProps)(Home)