import React from "react";

export class Counter extends React.Component{
    constructor(props) {
        super();
        //여기서 아래 처럼 선언해 주면 onClick에는 .bind없이 실행할수 있다.
        //this.setDecIncButton = this.setDecIncButton.bind(this);
        //onClick={this.setDecIncButton.bind(this)} => onClick={this.setDecIncButton}
        this.state = {
            age: props.age
        };
    }

    setDecIncButton(delta) {
        //prevState 이전데이터
        this.setState(prevState => {
            return {age: prevState.age + delta};
        });
    }

    render() {
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={()=>this.setDecIncButton(-1)}> -</button>
                <span className="counter-score">{this.state.age}</span>
                <button className="counter-action increment" onClick={()=>this.setDecIncButton(1)}> +</button>
            </div>
        );
    }
}