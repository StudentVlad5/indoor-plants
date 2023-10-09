import React from 'react';
import { Container } from './Courses.styled';
import YouTube from 'react-youtube';

export class Courses extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div>
        <YouTube videoId="U6Gdf2_DHUQ" opts={opts} onReady={this._onReady} />
        <YouTube videoId="NlS_dTDsHHQ" opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
