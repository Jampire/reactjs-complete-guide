import React from "react";

function person(props) {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
        </div>

    );
}

export default person;
