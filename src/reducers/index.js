import * as actions from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const hotColdReducer = (state=initialState, action) => {
    if (action.type === actions.MAKE_GUESS) {
        const guess = parseInt(action.guess, 10);

        if (isNaN(guess)) {
            return Object.assign({}, state, {
              feedback: 'Please enter a valid number'});
        }

        const difference = Math.abs(guess - state.correctAnswer);
        let feedback;

        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        return Object.assign({}, state, { //copy the state object
            guesses: [...state.guesses, guess],
            feedback: feedback
        });
    }
    if(action.type === actions.NEW_GAME) {
      return {
          guesses: [],
          feedback: 'Make your guess!',
          correctAnswer: Math.floor(Math.random() * 100) + 1
      };
    }
    return state;
};
