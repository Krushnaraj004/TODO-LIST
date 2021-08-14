import React from "react";
import "./App.css";

const Home = (props) => {
    console.log("props", props);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <h1 className="heading" id="heading">
                {props.title}
            </h1>
            <h1 className="heading" id="heading">
                {props.description}
            </h1>
        </div>
    );
};

export default Home;