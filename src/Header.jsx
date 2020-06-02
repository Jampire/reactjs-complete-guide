import React from "react";

function header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <span className="navbar-brand">{props.title}</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <span className="nav-link">Task 4
                                <span className="sr-only">(current)</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default header;
