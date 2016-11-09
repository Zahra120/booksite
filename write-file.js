//'write a hello-world.txt file'
// 'inside the file you should have only "hello-world" as content'
//program should write hello world to hello-world.txt with fs.writeFiles
//Lastly, print 'writing operation is finished ' when writeFile function finishe
var fs = require('fs');
fs.writeFile('hello-world.txt', 'hello-world', function(){
   console.log('writing operation is finished');
});
