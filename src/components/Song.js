import React from 'react';

function Song(props) {
    return (
      <div>
        <p>
       {props.position} - {props.artist} <br/> "{props.name}"
        </p>
      </div>
    );
  }

export default Song;
