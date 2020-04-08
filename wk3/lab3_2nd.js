const buf = Buffer.from([0x62, 0x75, 0x66, 0x65, 0x72]);

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('convert', myCallBack = (arr) => {
    for (el of arr) {
        console.log(el.toString());
    }
    console.log('buffer converted');
});

eventEmitter.emit('convert', buf); //argument must be passed here


//const myCallBack = (arr) => {
  //  for (el of arr) {
    //    console.log(el.toString());
    //}
    //console.log('buffer converted');
//};


/* was trying this, won't work
eventEmitter.on('convert', myCallBack(buf));
*/