import React from "react";

const Video = (props) => {
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={props.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={props.title}
            />
            <h1>{props.title}</h1>
            <p>{props.views} Views | Uploaded {props.createdAt}</p>
        </div>
    );
}

export default Video;