let namesList = require("../country/state/city/index.js");
let firstNameFunction = require("../utilities/utils/index.js");
let getPeopleInCity = (namesList)=>{
    return firstNameFunction(namesList);
}
console.log(getPeopleInCity(namesList));
module.exports = getPeopleInCity;
