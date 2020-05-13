/*var logger = function(output){
     console.log(output)
     } ;
      export var appName = "ES6 Review";
      export var dummyFunction = function(){
            return "I am a dummy function";  
        } 
        export default logger; */

        //Lexical block scoping
    /*    const logger = output => {
            console.log(output);
        }

        export const appName = "ES6 Primer"

        export const dummyFunction = () => {  
            let feedback = "I am a dummy function"; //mutable variable 
            feedback = "I am still a dummy function";//value changed
            return feedback;  
        } 
//spread operators
        export const genericFunction = () => {
            const languages = ["Python", "Java","C#", "C++"];
            const [fL,sL, ...otherLanguages] = languages; //deconstruction
            return `First Language is ${fL} and the second is ${sL} and the rest are  ${otherLanguages}`;
        }

        export const multiplier1 = (...numbers) => {
            let product = 1;
            if (numbers.length < 2){
            throw new Error("Illegal arguments counts. Number of Arguments passed Arguments must be greater than 1")
             }    
                   //loop through using the old forEach approach which still works
                  //numbers.forEach((number)=>{
                 //    product = product * number;     
                 //});    
                  //More elegantly we can replace the above forEach with ES6's for...of     
                  for(let number of numbers){     
                          product = product * number;    
                         }    
                         
                         return product;
        }
             
        export default logger;*/
        
//Using Var and Fucntion

/*var logger = function(output)
{   
    console.log(output) 
}  
export default logger;
*/

/*
var logger = function(output)
{ 
    console.log(output);
} 
export var appName = "ES6 Review"; 
export var dummyFunction = function()
{  
    return "I am a dummy function";  
}
export default logger;
*/

//Parameter scenarios- new styles
/*
var logger = output => 
{
    console.log(output);
}
export var appName = "ES6 Review"; 

export var dummyFunction = ()=>
{
    return"I am a dummy function";
}
*/

//Lexical Blcok scoping
// Using Const or Let

const logger = output => {

    console.log(output);
}
export let appName = "ES6 Review"; 

export const dummyFunction = ()=>{

    return"I am a dummy function";
}

/* Spread Operators*/
//Destructuring Assignment
export let genericFunction = () => {
    const languages = ['python','javascript','c#', 'c++']
    const [firstLang,secondLang,...Otherlanguages] = languages;
    return `first language is ${firstLang} and the second Language is ${secondLang} and the rest are ${Otherlanguages}`;
}

export let multiplier = (a,b=1) => {
    return(a*b);
}

export const multiplier2 = (...numberstomultiply)=>
{
    if(numberstomultiply.length < 2){
        throw new Error("Illegal Argument Count,the number of  Arguments passed must be greater than one");
    }
   let product = 1;
   for(let number of numberstomultiply){
       product = product * number;
   }
   return product;
}
 export default logger;
//TypeScript
 export class Person
 { 
    constructor(ﬁrstName, lastName, gender, height, hobbies, birthday, isAlive)
    {  this.ﬁrstName = ﬁrstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;         
        this.birthday = birthday;         
        this.isAlive = isAlive;
    } 
};

export const timeout = millisecond =>{
    setTimeout(()=>
{        
   return logger("Timeout is over by "+ millisecond/1000+" seconds"); 
   //send out a success feedback with data using resolve 
}, 
    millisecond) 

}

/*export const timeoutwithpromise = (millisecond) =>{
        new Promise ((resolve, reject) =>{
        setTimeout(()=>{  
            resolve("Timeout is over by "+ millisecond/1000+" seconds");
            reject("Timeout is over but I am upset. You should not have invoked a timeout in the ﬁrst place. Hence I am sending a <em> reject </em> instead of a <em>resolve</em>!"); 
            //send out a reject feedback     
               }, 1000)    
              }).then((data) => { 
                        logger(`${data}`);
                        //This should output "Timeout is over"    
                        }).catch((error) => {
                          //This will only be reached it the asynchronous function returned a reject statement.        
                           return logger(`Error message received: ${error}`);   
                           }).then(() =>{       
                               return logger(`This function is executed after success or failure is returned`) 
                                 }, millisecond)
}*/


    export const genericFunction1 = (m, c, ...x) => {    
        //This function returns an array of {x,y} objects for all the x arguments passed.

        //Map the array of x into an array of {x,y} object, with the y value calculated each time.    
         let coordinates = x.map((x) => {        
              return {'x': x, 'y' : (m*x) + c};    
            })   
              //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below     
              let output = 'The (x,y) values are as follows: '     
              for (let coordinate of coordinates){         
                   let xy = `(${coordinate.x},${coordinate.y})`         
                   output+=xy;     
               }   
                //Previous style…(Going forward, we shall only be using the new for…of loop in such scenario)
               //coordinates.forEach((coordinate)=>{ 
               //     let xy = `(${coordinate.x},${coordinate.y})`;    
                //    output+=xy;     //})     
                          return output; 
                       } 
   
         
   export const coordinateGenerator = (m, c, ...xValues) => {
       //This function returns an array of {x,y} objects for all the x arguments passed to it.
       
       let coordinates = xValues.map(
           (x) =>{
               return {'x':x, 'y':(m*x)+ c};
           }
       );
       let output = 'The (x,y) values are as follows '
       for (let coordinate of coordinates){
           let xy = `(${coordinate.x}, ${coordinate.y})`;
           //output = output + xy  //This is the same as below.
           output +=xy;
       }
       return output;
   
   }
   