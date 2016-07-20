
var class07lab = {};

class07lab.array = [1, 4, 6, 3, 2, 6, 7, 3, 2, 7, 8, 5, 3, 5, 5, 7, 3, 4, 6, 1];

class07lab.mapFunction = function() {
  var mappedArray = class07lab.array.map(function(currentValue, index, array) {
    return currentValue * 3;
  });
  return mappedArray;
};

class07lab.reduceFunction = function() {
  var reducedArray = class07lab.mapFunction().reduce(function(acc, cur) {
    if(acc.indexOf(cur) === -1) {
      acc.push(cur);
    }
    return acc;
  }, []);
  return reducedArray;
};

var zebra = class07lab.reduceFunction();

//appends result to the bottom of the index page
$('#class-07-lab-result').append(zebra);
