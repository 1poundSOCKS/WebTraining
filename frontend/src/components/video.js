import React from 'react';
import './video.css';

function Video(props) {
    return(
        <div class="model-box">
            <iframe class="model" title="Why we don't have Free Will & Why that's OK" width="100%" height="315" allowfullscreen="allowfullscreen" src={props.url}></iframe>
        </div>
    //    <h1>{props.title}</h1>
    );
}

export default Video;
