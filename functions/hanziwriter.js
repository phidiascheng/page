//import HanziWriter from 'hanzi-writer-data';
const path = require('path');

function getchar(char){
//    console.log(char);
//    const a = path.join(__dirname,'../../../../','data/hanzi-writer-data',char+'.json')
    const a = path.join('hanzi-writer-data','我.json');
//    const json = require('hanzi-writer-data/阿');
//    const a = '../../../../data/hanzi-writer-data/'+char+'.json'
    const json = require(a);
    return(json);
}

module.exports = {getchar}