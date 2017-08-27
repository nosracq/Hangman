import React from 'react';

// a stateless functional component
const Intro = () => {
  return(
    <div className="intro">
      <h1>Welcome to Hangman!</h1>
      <h3>You get 8 incorrect guesses to complete the mystery word</h3>
    </div>
  )
}

export default Intro;
