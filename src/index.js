//import logger, {appName, dummyFunction} from './tools' 
//logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".` ); 

import logger, { multiplier1 } from "./tools";

//import logger, {genericFunction} from './tools' 
//logger(`This is a function that returns "${genericFunction()}".` ); 
try{


logger(multiplier1(1,9,3,53));
}catch(error){
    logger(error.message);
}
