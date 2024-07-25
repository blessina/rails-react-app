import '../styles/tracks.css';

import React, { Component } from 'react';
import { API_URL } from '../../constants';
import axios from 'axios';
import TrackImage from '../components/TrackImage';

// fix CSRF error raised by Rails
if (document.querySelector('meta[name="csrf-token"]')) {
  axios.defaults.headers.common = {
    'X-CSRF-TOKEN': document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute('content'),
    'X-Requested-With': 'XMLHttpRequest',
  };
}

class TracksContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: []
    };
  }

  componentDidMount() {
    this.fetchTracks();
  }

  fetchTracks = () => {
    axios({
      method: 'get',
      url: API_URL,
    })
      .then((response) => {
        this.setState({
          tracks: response.data
        })
      });
  }

  render() {
    const {
      tracks
    } = this.state;

    return (
      <div className="tracks__container">
        {tracks.map((track) => (
          <TrackImage key={track.id}
            track={track}
          />
        ))}
      </div>
    );
  }
}

export default TracksContainer;
