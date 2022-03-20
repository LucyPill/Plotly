

//TRANSFORMATION USING THE MAP() METHOD ///// ENTER THE CODE IN THE CONSOLE
var numbers = [0, 2, 6, 8];

var dos = numbers.map(function(add){
  return add + 5;
})
dos


/// Here's another way to use map(). In this example,map() is used to extract a specific property from each object in an array.
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var populationNum = cities.map(function(population){
    return population;
});
console.log(populationNum);

["1511946", "1626078", "1341075"]

///// GETTING THE CITY NAME /////
var cities = [
  {
    "Rank": 1,
    "City": "San Antonio ",
    "State": "Texas",
    "Increase_from_2016": "24208",
    "population": "1511946"
  },
  {
    "Rank": 2,
    "City": "Phoenix ",
    "State": "Arizona",
    "Increase_from_2016": "24036",
    "population": "1626078"
  },
  {
    "Rank": 3,
    "City": "Dallas",
    "State": "Texas",
    "Increase_from_2016": "18935",
    "population": "1341075"
  }
];

var cityNames = cities.map(function(city){
  return city.City;
});
console.log(cityNames);
['San Antonio ', 'Phoenix ', 'Dallas']

// THE filter() METHOD ///// ENTER THE CODE IN THE CONSOLE 12.2.1
// Let's see what this means in an example. Run the following code in your console. What does larger return?
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);
(4) [2, 3, 4, 5]

// The anonymous function inside map() and filter() can be simplified as an arrow function. Here's an example: 12.2.1

var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num * 2);
console.log(doubled);

// The sort()method

//Will the following code sort the familyAge array in ascending or descending order? Des

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);

// The slice() Method.  12.2.1
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
