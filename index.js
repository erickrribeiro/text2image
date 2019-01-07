const exec = require('child_process').exec;
const fs   = require('fs');
const path = require('path');

const getRandom = (max, min) => Math.floor( Math.random() * (max-min+1)) + min;

class Text2Image {
    generate(text, color, storage,  random=true) {
        return new Promise((resolve, reject) => {
        	const colors = ['#b7afdd', '#560f44', '#d5af66', ' #55758b'];

        	if (random && !color){
        		const position = getRandom(0, colors.length);
        		color = colors[position];
        	}
    
            const absolutePath = path.join(`${__dirname}`, 'lib');

            if(!storage){
                storage =  path.join(absolutePath, '..', 'images');
            }

            const command = `sh ${absolutePath}/generate.sh "${color}" "${text}" "${storage}"`;
            const child = exec(command);
            //console.log(command);

            child.stdout.on('data', (data) => {            
            	const out = JSON.parse(data.toString());
            	console.log(out);
                resolve(out);
            });

            child.on('erro', (err) => {
                console.log(err);
                reject(err)
            });

            child.on('exit', function () {

            });
        });

    }
}

module.exports.Text2Image = Text2Image;