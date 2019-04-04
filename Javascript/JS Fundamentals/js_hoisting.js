// console.log(hello);                                   
// var hello = 'world';                                 

// prediction: hello is undefined
// output: undefined

// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

// prediction: 'magnet'
// output: 'magnet'

// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// prediction: 'super cool'
// output: 'super cool'

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

// prediction: 'chicken' 'half-chicken'
// output: 'chicken' 'half-chicken'

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// prediction: 'chicken' 'fish' undefined
// output: mean is not a function

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// prediction: undefined 'rock' 'r&b' 'r&b'
// output: undefined 'rock' 'r&b' 'disco'

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// prediction: undefined undefined 'burbank' undefined
// output: 'san jose' 'seattle' 'burbank' 'san jose'

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

// prediction: {name: 'Chicago', students: 65, hiring: true}, {'closed for now'}
// output: {name: 'Chicago', students: 65, hiring: true}
