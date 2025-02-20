/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work. x
 * 
 * Otherwise, we want to pick something up and eat it in the lab when we've got less than 20 minutes x
 * 
 * or to try a place nearby if we've got between 20 and 30 minutes. x
 * 
 * If we have any more time than that, we want to remind ourselves that we're in a bootcamp and that we should reconsider how much time we actually have to spare. x
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function(hungry, availableTime) {
  if(!hungry) {
    return console.log('Get back to work!'); // return because we don't need to check any other conditions if this is false. 
  };

  //since hungy can only be true or false, I already checked the hungry being false, therefore everything else is hungry === true. 
  if(availableTime < 20) {
    console.log('pick something up and eat it in the lab');
  } else if (availableTime >= 20 && availableTime <= 30) {
    console.log('Try a place nearby!');
  } else { // don't need an else if because we already covered everything else, below 20, between 20 and 30 and so everything remaining is more than 30 minutes. 
    console.log("we're in bootcamp! We should reconsider how much time we have to spare")
  };
};


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);