/*var logger = function(output){
     console.log(output)
     } ;
      export var appName = "ES6 Review";
      export var dummyFunction = function(){
            return "I am a dummy function";  
        } 
        export default logger; */

        //Lexical block scoping
        const logger = output => {
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
             
        export default logger;