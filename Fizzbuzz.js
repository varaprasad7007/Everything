// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//       // Is the number a multiple of 3 and 5?
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//       } else if (i % 3 === 0) {
//         // Is the number a multiple of 3?
//         console.log('fizz');
//       } else if (i % 5 === 0) {
//         console.log('buzz');
//       } else {
//         console.log(i);
//       }
//     }
//   }
  
//   module.exports = fizzBuzz;

(function (window) {
  'use strict';
  var counter = 1;
  var limit = 100;
  var options = {
    3: 'Fizz',
    5: 'Buzz',
    'default': function (input) {
      return input;
    }
  };

  var noop = function () {
    return;
  };

  var print = function (input) {
    var output = [];
    Object.keys(options).map(
      function (key) {
        (((typeof options[key] !== 'function') && ((parseInt(input, 10) % parseInt(key, 10)) === 0)) ? Array.prototype.push : noop).call(output, options[key]);
      }
    );
    return console.log.call(console, output.length ? output.join('') : options.default.call(this, input));
  };

  for (; counter <= limit; counter += 1) {
    print.call(this, counter);
  }
})(this);