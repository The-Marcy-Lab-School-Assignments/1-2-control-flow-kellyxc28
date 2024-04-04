const measureRainSwitch = (inches) => {
    switch (inches) {
      case 0:
        console.log('drought');
        break;
      case 1:
        console.log('dry');
        break;
      case 2:
        console.log('average');
        break;
      case 3:
        console.log('average');
        break;  
      case 4:
        console.log('rainy');
        break;
      case 5:
        console.log('rainy');
        break;
      case 6:
        console.log('flood');
        break;  
      case 7:
        console.log('flood');
        break; 
      case 8:
        console.log('flood');
        break; 
      case 9:
        console.log('flood');
        break;   
      case 10:
        console.log('flood');
        break;
    }
};

const rounderSwitch = () => {
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
