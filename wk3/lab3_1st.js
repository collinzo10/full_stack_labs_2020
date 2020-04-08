const buffer_array = Buffer.from([ 8, 6, 7, 5, 3, 0, 9]);

const buffer_string = Buffer.from("I'm a string!", "utf-8");

hex = buffer_string.toString('hex');
console.log(buffer_array);
console.log(buffer_string.toString()); // have to convert it to string first
console.log(hex); // convert to hex
console.log(buffer_string.toString().slice(0,10)); //slice method
myArr = [buffer_array, buffer_string]
const join_buffer = Buffer.concat(myArr);
console.log(join_buffer);
console.log(join_buffer.toJSON());