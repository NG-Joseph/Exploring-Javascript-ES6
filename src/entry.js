require("@babel/register")({ 
      presets: ["@babel/preset-env"] 
    }); 
/* Use classical node approach to import index.js (the application’s entry point).*/ 
module.exports = require('./index.js'); 