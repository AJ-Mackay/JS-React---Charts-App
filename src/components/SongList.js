import React from 'react';
import Song from './Song';

const SongList = (props) => {
  const songNodes = props.songs.map((song, index) => {
    return <Song key={index} position={index+1} name={song["im:name"].label} artist={song["im:artist"].label} />
  })

  return (
    <div className="song-list">
      {songNodes}
    </div>
  );
}

export default SongList;
