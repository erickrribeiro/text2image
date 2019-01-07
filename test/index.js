const path         = require('path');
const Text2Image   = require('../').Text2Image;
const absolutepath = path.join(__dirname, '..', 'images');


t2i = new Text2Image();
t2i.generate('Imperdível! Todos os produtos por apenas 9,90.');
t2i.generate('Imperdível! Todos os produtos por apenas 9,90.', 'red');
t2i.generate('Imperdível! Todos os produtos por apenas 9,90.', 'green', absolutepath);
