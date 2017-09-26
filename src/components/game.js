import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import {connect} from 'react-redux';
import {makeGuess, newGame} from '../actions';

export class Game extends React.Component {

    newGame() {
        this.props.dispatch(newGame());
    }

    makeGuess(guess) {
        this.props.dispatch(makeGuess(guess));
    }

    render() {
      console.log(this.props.correctAnswer);
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.makeGuess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);
