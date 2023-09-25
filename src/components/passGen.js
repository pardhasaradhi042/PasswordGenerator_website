function generator(type, length) {
  var newString = "";
  for (var i = 0; i < length; i++) {
    var random_num = Math.floor(Math.random() * type.length);
    newString += type[random_num];
  }

  return newString;
}

function passGen(inputs) {
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smalls = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  const capitalPassword = generator(capitals, Number(inputs.capital));
  const smallPassword = generator(smalls, Number(inputs.small));
  const numberPassword = generator(numbers, Number(inputs.number));
  const symbolPassword = generator(symbols, Number(inputs.symbols));

  var finalPassword = capitalPassword + smallPassword + numberPassword + symbolPassword;
  console.log(finalPassword);
  var shuffled = finalPassword
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  return shuffled;
}

export default passGen;
