const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') {
    return console.log('Yea that place is cool I guess');
  } else {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
  }
};

module.exports = {
  wildlyBiasedReview,
};
