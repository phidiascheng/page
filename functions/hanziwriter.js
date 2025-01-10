//import HanziWriter from 'hanzi-writer-data';

function getchar(char){
    console.log(char);
    var url ="hanzi-writer-data/"+char;
    const data = require(url);
    return(data);
}

module.exports = {getchar}