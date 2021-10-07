const fs = require('fs');


function escribirJSON(unArray){   
    let unArrayString = JSON.stringify(unArray);
    fs.writeFileSync('./tareas.json',unArrayString);

}


module.exports = escribirJSON;