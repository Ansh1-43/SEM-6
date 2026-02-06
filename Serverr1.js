const fs = require ('fs');

async function readfileExample(){
    try {
        const data = await fs.readfile('myfile.txt', 'utf8');
        console.log('file content:', data );
    }catch (err){
        console.error('error reading file: ' , err);
    }
}

readfileExample();

const {promisify} = require( 'util');
const readFileAsync = promisify(fs.readFile);

async function readFileExample(){
    try{
        const data= await readFileAsync('myfile.txt', 'utf8');
        console.log(data);
    }catch (err){
        console.error('error reading file:', err);
    }
}