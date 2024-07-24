// import '../styles/tracks.scss';

import React, { Component } from 'react';
import { API_URL } from '../../constants';
import axios from 'axios';

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
        console.log(response.data)
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
      <div className="learning-path__container">
        {tracks.map((track) => (
          <div key={track.id} className = 'track_container'>
            <h2>{track.title}</h2>
            <p>{track.description}</p>
          </div>

        ))}
      </div>
    );
  }
}

export default TracksContainer;
