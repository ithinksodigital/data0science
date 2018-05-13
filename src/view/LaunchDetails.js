import React from 'react';
import PropTypes from 'prop-types';

import './LaunchDetails.sass';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import StartLaunch from '../components/StartLaunch';
import MissionLinks from '../components/MissionLinks';
import LaunchDescriptionEntry from '../components/LaunchDescriptionEntry';

class LaunchDetails extends React.Component {
  static propTypes = {
    rocket: PropTypes.object.isRequired,
    launch: PropTypes.object.isRequired,
    launchPad: PropTypes.object.isRequired,
    onBackClick: PropTypes.func.isRequired,

  }

  render() {
    let descriptionEntryLaunchSite = [
      {"NAME": this.props.launchSite["full_name"].toUpperCase()},
      {"LOCATION": this.props.launchSite["location"]["name"].toUpperCase()}
    ]
    let descriptionEntryRocket = [
      {"NAME": this.props.rocket["name"].toUpperCase()},
      {"DIAMETER (m)": this.props.rocket["diameter"]["meters"]},
      {"FIRST FLIGHT": this.props.rocket["first_flight"].toUpperCase()},
      {"SUCCESS RATE (%)": this.props.rocket["success_rate_pct"]},
      {"COMPANY": this.props.rocket["company"].toUpperCase()},
      {"MASS (kg)": this.props.rocket["mass"]["kg"]},
      {"COUNTRY": this.props.rocket["country"].toUpperCase()},
      {"COST PER LAUNCH ($)": this.props.rocket["cost_per_launch"]},
    ]
    return (
      <div className="start-details">


        <Navbar onBackClick={this.props.onBackClick}/>
        <div className="start-details__body">
          <div className="body-column-l">
            <StartLaunch launch={this.props.launch}/>
          </div>
          <div className="body-column-r">
              <LaunchDescriptionEntry
              descriptionTitle="DETAILS"
              description={this.props.launch.details}
              />
              <LaunchDescriptionEntry
              descriptionTitle="ROCKET"
              description={this.props.rocket.description}
              descriptionDetailsList={descriptionEntryRocket}
              />
              <LaunchDescriptionEntry
              descriptionTitle="LAUNCH PAD"
              description={this.props.launchSite.details}
              descriptionDetailsList={descriptionEntryLaunchSite}
              />
          </div>
        </div>
        <MissionLinks launch={this.props.launch}/>
        <Footer/>
      </div>
    );
  }
}

export default LaunchDetails;
