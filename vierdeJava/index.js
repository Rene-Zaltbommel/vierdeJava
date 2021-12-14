/* 
const age= 18;
const isFemale= true;
const driverStatus= 'bob';
const firstName='Bram';
const totalAmount = 100; 
*/


const age = 16; 
const isFemale = false;
const driverStatus= 'joop'; 
const firstName='Wim';
const totalAmount = 14;


if (age > 18){
    console.log( 'you can go in');
} else if ( age == 18){
    console.log( 'you can go in');
}else{ 
    console.log( 'you need te be 18 so i am sorry but i can not let you in');
}


if (isFemale){
    console.log( 'yeahh lets have a girls night');
} else{
    console.log( 'please note you are not allowed in, it is only for girls this evening');
}


if (driverStatus === 'bob'){
    console.log( 'yes you may drive');
} else{
    console.log( 'please do not drive!!!! it is dangerous with alcohol');
}

if (age>=18 && age <=25){
    console.log("You get 50% off!")
} else {
    console.log( 'sorry but you do not get anny discounts an the drinks')
}

if (firstName === 'Bram' || firstName === 'Sarah'){
    console.log("because youre name you earn get free beers")
} else {
    console.log( 'sorry but you do not get FREE drinks')
}


if (totalAmount >25 && totalAmount<51 ){
    console.log( 'you get a free portion of Bitterballs');
} else if ( totalAmount >50 && totalAmount <100  ){
    console.log( 'You get a free portion of Nachos');
}else if ( totalAmount >=100){ 
    console.log( 'you get a free bottle of Champagne!!!!');
} else{
console.log( 'Sorry you did NOT spend enough to get free retreats');
}