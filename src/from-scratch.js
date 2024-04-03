const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought');
  }
  else if (inches < 2) {
    console.log('dry');
  }
  else if (inches < 4) {
    console.log('average');
  }
  else if (inches < 6) {
    console.log('rainy');
  }
  else if (inches >= 6) {
    console.log('flood');
  }
};

const happyBirthdayPet = (breed, age) => {
    if (breed === 'snake' && age >= 0) {
      console.log('Hiss hiss!');
    }
    else if (breed === 'cat' && age < 5) {
      console.log('Mew mew!');
    }
    else if (breed === 'cat' && age >= 5) {
      console.log('Meow meow!');
    }
    else if (breed === 'dog' && age < 5) {
      console.log('Arf arf!');
    }
    else if (breed === 'dog' && age >= 5 && age < 10) {
      console.log('Woof woof!');
    }
    else if (breed === 'dog' && age >= 10) {
      console.log('Boof!');
    }
    else {
      console.log('Happy birthday!');
    }
};

const funTypes = (jsType) => {
    if (typeof jsType === 'string') {
        console.log('That\'s just some text.');
    }
    else if (Number.isNaN(jsType)) {              // special case: under number 
      console.log('Well, now you\'re just showing off.');
    }
    else if (typeof jsType === 'number') {
      console.log('That\'s a good number.');
    }
    else if (typeof jsType === 'boolean') {
      console.log('To bool, or not to bool?');
    }
    else if (typeof jsType === 'undefined') {
      console.log('Nothing, but I didn\'t set that.');
    }
    else if (jsType === null) {                  // special case: no ' ' needed, under object
      console.log('Nothing, and I did set that.');
    }
    else if (Array.isArray(jsType)) {           // special case: under object 
      console.log('I order you to be indexed.');
    }
    else if (typeof jsType === 'object') {      // special case: under object   
      console.log('Anybody got the key?');
    }
};

// For Testing 
// funTypes("Hello");    // Output: That's just some text.
// funTypes(42);         // Output: That's a good number.
// funTypes(true);       // Output: To bool, or not to bool?
// funTypes(undefined);  // Output: Nothing, but I didn't set that.
// funTypes(null);       // Output: Nothing, and I did set that.
// funTypes({});         // Output: Anybody got the key?
// funTypes([1, 2, 3]);  // Output: I order you to be indexed.
// funTypes(NaN);        // Output: Well, now you're just showing off.

const rounder = (float, roundingSetting) => {
    if (roundingSetting === 'up') {
        return Math.ceil(float);
    }
    else if (roundingSetting === 'down') {
      return Math.floor(float);
    }
    else if (roundingSetting === 'honest') {
      return Math.round(float);
    }
};

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
