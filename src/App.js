import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';
import {Player} from './components/player';

// class 컨포넌트 규칙
//0. class 첫문자는 대문자
//1. React.Component 상속
//2. render 구현
//3. return 해야한다


class App extends React.Component{
  state = {
    players: [
      {name: 'Yeom', age: 36, score: 3},
      {name: 'Chan', age: 40, score: 4},
      {name: 'Kim', age: 12, score: 5},
      {name: 'Hun', age: 20, score: 6}
    ]
  };

  setRemoveItem = (_index) => {
    this.setState(prevState => {
      const players = prevState.players.filter((item, i)=>{
        return i !== _index;
      });

      return {players};
    });
  }

  render() {
    const {players} = this.state;
    return(
        <div className="scoreboard">
          <Header title="Scoreboard" players={players.length} />
          {
            players.map(
                (item, i) => <Player name={item.name} age={item.age} index={i} key={i} callback={this.setRemoveItem} />
            )
          }
        </div>
    )
  }
}

export default App;
