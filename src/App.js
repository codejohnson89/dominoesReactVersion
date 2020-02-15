import React from 'react';

import Player from './components/Player'

// import index from '../styles/index.scss'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.scoreFive = this.scoreFive.bind(this);
        this.scoreTen = this.scoreTen.bind(this);
        this.scoreFifteen = this.scoreFifteen.bind(this);
        this.scoreTwenty = this.scoreTwenty.bind(this);
        this.scoreTwentyFive = this.scoreTwentyFive.bind(this);
        this.scoreThirty = this.scoreThirty.bind(this);
        this.scoreThirtyFive = this.scoreThirtyFive.bind(this);
        this.newGame = this.newGame.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
        this.removePlayer = this.removePlayer.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
        this.state = { 
            score: [0, 0, 0, 0],
            players: 2,
            gameCount: 1
         }
    }
    scoreFive(key) {
        this.setState((prevState) => {
            return {
                score: prevState.score.map((value, index) => index === key ? value + 5 : value)
            }
        })
    }

    scoreTen(key) {
        this.setState((prevState) => {
            return {
                score: prevState.score.map((value, index) => index === key ? value + 10 : value)
            }
        })
    }

    scoreFifteen(key) {
        this.setState((prevState) => {
            return {
                score: prevState.score.map((value, index) => index === key ? value + 15 : value)
            }
        })
    }

    scoreTwenty(key) {
        this.setState((prevState) => {
            return {
                score: prevState.score.map((value, index) => index === key ? value + 20 : value)
            }
        })
    }

    scoreTwentyFive(key) {
        this.setState((prevState) => {
            return {
                score: prevState.score.map((value, index) => index === key ? value + 25 : value)
            }
        })
    }

    scoreThirty(key) {
        this.setState((prevState) => {
            return {
                score: prevState.score.map((value, index) => index === key ? value + 30 : value)
            }
        })        
    }

    scoreThirtyFive(key) {
        this.setState((prevState) => {
            return {
                score: prevState.score.map((value, index) => index === key ? value + 35 : value)
            }
        })
    }

    newGame() {
        this.setState((prevState) => {
            return {
                score: [0,0,0,0],
                gameCount: prevState.gameCount + 1
            }
        })
    }

    addPlayer() {
        this.setState((prevState) => {
            return {
                players: (prevState.players === 4) ? 4 : prevState.players + 1
            }
        })
    }

    removePlayer() {
        this.setState((prevState) => {
            return {
                players: (prevState.players === 2) ? 2 : prevState.players - 1
            }
        })
    }

    resetBoard() {
        this.setState(() => {
            return {
                score: [0,0,0,0],
                gameCount: 1,
                players: 2
            }
        })
    }


    render() { 
        return ( 
            <div className="container">
            <h1>Dominoes</h1>
            <p>Game: {this.state.gameCount}</p>
                <div className="row main-content">
                
               
                <Player 
                key={1} 
                name="Player 1"
                score={this.state.score[0]} 
                scoreFive={() => this.scoreFive(0)} 
                scoreTen={() => this.scoreTen(0)} 
                scoreFifteen={() => this.scoreFifteen(0)} 
                scoreTwenty={() => this.scoreTwenty(0)} 
                scoreTwentyFive={() => this.scoreTwentyFive(0)} 
                scoreThirty={() => this.scoreThirty(0)} 
                scoreThirtyFive={() => this.scoreThirtyFive(0)}
                />
                <Player 
                key={2} 
                name="Player 2"
                score={this.state.score[1]}  
                scoreFive={() => this.scoreFive(1)} 
                scoreTen={() => this.scoreTen(1)} 
                scoreFifteen={() => this.scoreFifteen(1)} 
                scoreTwenty={() => this.scoreTwenty(1)} 
                scoreTwentyFive={() => this.scoreTwentyFive(1)} 
                scoreThirty={() => this.scoreThirty(1)} 
                scoreThirtyFive={() => this.scoreThirtyFive(1)}
                />

                {(this.state.players >= 3) ? <Player 
                    key={3} 
                    name="Player 3"
                    score={this.state.score[2]}  
                    scoreFive={() => this.scoreFive(2)} 
                    scoreTen={() => this.scoreTen(2)} 
                    scoreFifteen={() => this.scoreFifteen(2)} 
                    scoreTwenty={() => this.scoreTwenty(2)} 
                    scoreTwentyFive={() => this.scoreTwentyFive(2)} 
                    scoreThirty={() => this.scoreThirty(2)} 
                    scoreThirtyFive={() => this.scoreThirtyFive(2)}
                    /> : <div></div>}
                
                {(this.state.players === 4) ? <Player 
                    key={4} 
                    name="Player 4"
                    score={this.state.score[3]} 
                    scoreFive={() => this.scoreFive(3)} 
                    scoreTen={() => this.scoreTen(3)} 
                    scoreFifteen={() => this.scoreFifteen(3)} 
                    scoreTwenty={() => this.scoreTwenty(3)} 
                    scoreTwentyFive={() => this.scoreTwentyFive(3)} 
                    scoreThirty={() => this.scoreThirty(3)} 
                    scoreThirtyFive={() => this.scoreThirtyFive(3)}
                    /> : <div></div>}
                    
                </div>
                <div className="row">
                <button onClick={this.newGame}>New Game</button>
                <button onClick={this.addPlayer}>Add Player</button>
                <button onClick={this.removePlayer}>Remove Player</button>
                <button onClick={this.resetBoard}>Reset Board</button>
                </div>
            </div>
         );
    }
}
