import React from "react";
import {Counter} from "./counter";

export const Player = (props) => (
    <div className="player" key={props.index}>
            <span className="player-name">
                <button className="remove-player" onClick={()=>{props.callback(props.index)}}>x</button>
                {props.name}
            </span>
        <Counter age={props.age} />
    </div>
);