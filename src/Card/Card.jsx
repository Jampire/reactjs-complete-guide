import React from "react";

function card(props) {
    return (
        <div className="card my-4">
            <h5 className="card-header">{props.title}</h5>
            <div className="card-body">
                <p className="text-justify">{props.content}</p>
            </div>
        </div>
    );
}

export default card;
