const path         = require('path');
const Text2Image   = require('../').Text2Image;
const absolutepath = path.join(__dirname, '..', 'images');


t2i = new Text2Image();
t2i.generate('bom dia!');
t2i.generate('bom dia!', 'red');
t2i.generate('bom dia!', 'green', absolutepath);
