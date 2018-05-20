import React from 'react';
import PropTypes from 'prop-types';

import './LaunchesList.sass';

import Logo from '../assets/space_x_logo_bw_centered.svg';
import Moon from '../assets/moon.png';
import Footer from '../components/Footer';
import FilterButtons from '../components/FilterButtons';
import Timeline from '../components/Timeline';
import { GridLoader } from 'react-spinners';

class LaunchesList extends React.Component {
  static propTypes = {
    launches: PropTypes.array.isRequired,
    onLaunchClick: PropTypes.func.isRequired,
  };

  state = {
    rocketNameFilter: "FALCON 1",
    filteredLaunches: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({
      filteredLaunches: await this.fetchLaunchByRocketName(this.state.rocketNameFilter)
    });
  }

  get availableRocketNames() {
    return ["ALL ROCKETS", "FALCON 1", "FALCON 9", "FALCON 10", "FALCON HEAVY"];
  };

  async fetchLaunchByRocketName(rocketName) {
    try {
      const rocketId = rocketName.split(" ").join("").toLowerCase();
      const URL = `https://api.spacexdata.com/v2/launches?rocket_id=${rocketId}`;
      this.setState({ isLoading: true });
      const fetchResult = fetch(URL);
      const response = await fetchResult;
      const jsonResponse = await response.json();
      this.setState({ isLoading: false });
      return jsonResponse;
    } catch(error) {
      this.setState({ error, isLoading: false })
    }
  }

  async getFilteredLaunches(rocketNameFilter){
    if(rocketNameFilter === "ALL ROCKETS") {
      const filteredLaunches = await this.fetchLaunchByRocketName('');
      this.setState({ filteredLaunches: filteredLaunches });
    } else {
      const filteredLaunches = await this.fetchLaunchByRocketName(rocketNameFilter);
      this.setState({ filteredLaunches: filteredLaunches });
    }
  };

  handleFilterChange(value) {
    this.setState({ rocketNameFilter: value });
    this.getFilteredLaunches(value);
  };

  render() {
    return (
      <div className="launches-list">
        <div className="launches-list__body">
          <img src={Moon} className="launches-list__moon"/>
          <Logo className="launches-list__logo"/>
          <h2>LAUNCHES 2018</h2>
          <FilterButtons
            options={this.availableRocketNames}
            onChange={this.handleFilterChange.bind(this)}/>
          { this.state.error !== null ? <h3>Connecting with SpaceX API failed. Please try again later.</h3> :
            this.state.isLoading ?
              <GridLoader color={'#fefefe'} loading={this.state.isLoading}/> :
              this.state.filteredLaunches.length <= 0 ?
                <h3>Sorry, no launches found.</h3> :
                <Timeline
                  filteredLaunches={this.state.filteredLaunches}
                  onLaunchClick={this.props.onLaunchClick}/>
          }
        </div>
        <div className="launches-list__footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default LaunchesList;
