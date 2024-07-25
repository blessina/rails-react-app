import '../styles/TrackImage.css';

import PropTypes from 'prop-types';
import React from 'react';
import image from '../images/5CC21D_3.jpg';

export default function TrackImage({
  track,
}) {
  return (
    <div
      alt="track"
      className="track-image--container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h4>{track.title}</h4>

      <p>{track.description}</p>
    </div>
  );
}

TrackImage.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
