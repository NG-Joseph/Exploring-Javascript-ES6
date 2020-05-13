//Using var and function

/* 
import logger from './tools'  
logger("Welcome! We are now having fun with modularity"); 
*/
// using Back -ticks
import logger, 
{appName, dummyFunction, genericFunction,multiplier, multiplier2, timeout, timeoutwithpromise,coordinateGenerator} from './tools'; 
logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`); 
logger  (genericFunction());

logger  (multiplier(44,23));

logger  (multiplier2(1,2,3,4,5,6,7));
try{
  let result = multiplier2(3,5);
  logger(result);
}
catch(Error)
{
    logger(Error.message);
    
}

//Typescript

import log, {Person} from './tools'; 
//Accessing object properties
 let ﬁrstName = "Pius";
  let lastName = "Onobhayedo";
   let gender = "male";
    let height = 1.7;
     let hobbies = ['Tennis','Programming'];
      let birthday = new Date(1900,4,5);
       let isAlive = true; 
let person1 = new Person(ﬁrstName, lastName, gender, height,      hobbies, birthday, isAlive) 
log(`Person 1 is ${person1.ﬁrstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`); 

//Define the function that will return new Promise that wraps the asynchronous call to setTimeout()
const promiseAwareTimeout = (milliseconds=1000) => { //The function expects milliseconds to be passed. If not passed, milliseconds parameter defaults to 1000
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using resolve
    }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
    });
   }
   //define a function that uses our Promise executor
   const usePromiseAwareTimeout = async (milliseconds) => {
    log('About to call timeout')
    try{
    log(await promiseAwareTimeout(milliseconds));
    }catch(error){
    log(error);
    }
   };
   //call the async function.
   usePromiseAwareTimeout(3000); 


timeout(7000);
timeoutwithpromise(7000);
//logger(coordinateGenerator(2,3,4,5,6));

