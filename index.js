// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(array, driverName) {
  const newDrivers = array.filter(function (aDriver) {
    if (aDriver.toUpperCase() === driverName.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  });
  return newDrivers;
}

console.log(findMatching(drivers, "Bobby"));

////////////////////////////

function driversReset() {
  drivers.length = 0;

  drivers.push("Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby");
}

///////////////////////////

function fuzzyMatch(array, driverName) {
  const slicedDrivers = array.filter(function (wholeName) {
    if (wholeName.slice(0, 2) === driverName.slice(0, 2)) {
      return true;
    } else {
      return false;
    }
  });
  return slicedDrivers;
}

console.log(fuzzyMatch(drivers, "Sa"));

/////////////////////////////

function driversReset() {
  drivers.length = 0;

  drivers.push("Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby");
}

/////////////////////////////

const driversObject = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(array, string) {
  const filteredArray = array.filter(
    (array) => array.name === string
  );
  return filteredArray
}
console.log(matchName(driversObject, "Bobby"));

// function matchName(array, string) {
//   const newArray = [];

//   for (const user of array) {
//     if (string(user)) {
//       newArray.push(user);
//     }
//   }
//   return newArray;
// }
// console.log(matchName(driversObject, "Bobby"));

// function matchName(array, string) {
//   for (const element of array) {
//     if (element.name === string) {
//       return element;
//     }
//   }
// }
// console.log(matchName(driversObject, "Bobby"));

// function matchName(array, string) {
//   const userProfiles = array.name.filter(function (matchedDriver) {
//     if (matchedDriver.name === string) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return userProfiles;
// }

// console.log(matchName(driversObject, "Bobby"));
