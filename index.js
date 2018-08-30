// Code your solution in this file
function findMatching (collection, name) {
  return collection.filter(function (collectionName) {
    return collectionName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.slice(0, (string.length)) === string;
  })
}

function matchName (drivers, stringName) {
  return drivers.filter (function (driver) {
    return driver.name === stringName;
  })
}