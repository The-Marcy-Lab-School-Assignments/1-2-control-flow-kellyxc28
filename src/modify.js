/** FEEDBACK: Perfect! Not sure if we can return a console.log but it seems to work here. I do want to note that because we have our guard clause, we no longer need the else statement! */
const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') {   // guard clause 
    return console.log('Yea that place is cool I guess');
  } else {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
  }
};

// named exports 
module.exports = {
  wildlyBiasedReview,
};
