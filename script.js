// Multiple of 3 and 5
let a ;
for(a=1;a<=100;a++){
    if(a%3==0 && a%5==0){
        console.log("FizzBuzz");
        
    }
    else if(a%3==0){
        console.log("Fizz");
        
    }
    else if(a%5==0){
        console.log("Buzz");
    }
    else{
        console.log(a);
    }
}

// palindrome

let txt2 ="vanakkam"
let rev ="";
console.log(txt2)
for(let i=txt2.length-1;i>=0;i--){
    rev+=txt2[i];
    }
if(txt2==rev){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}

// returns the largest number

let arr=[3,5,1,4,7];
let max3=arr[0];
for(let a=1;a<arr.length;a++){
    if(arr[a]>max3){
        max3=arr[a];
    }
    console.log(arr);
    console.log(max3);
}

// Occurance value

let txt1 = "Welcome to Great Magic Show"
console.log(txt1);
let count = 0;
for (let a = 0; a < txt1.length; a++) {
    if (txt1[a] == "e") {
        count += 1;
    }
}
console.log(count);

// Longest word in String

let txt = "Good Evening";
console.log(txt);
let max = 0;
let word = "";
for (let i = 0; i < txt.length; i++) {
    if (txt[i] == " ") {
        if (max < word.length) {
            max = word.length;
            word = word;
        }
        word = "";
    } else {
        word += txt[i];
    }
}
console.log(word);

//factorial number

let num = 10;
console.log("Number is ", num);
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact = fact * i;
    console.log("Factorial is", fact);
}

// Celsius to FahrenHeit

let celsius = 120;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Celsius is", celsius) 
console.log("Fahrenheit is", fahrenheit)

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array

let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let missNum = arr2.length;

for (let i = 0; i < arr2.length; i++) {
    missNum ^= arr2[i];
}

console.log("Missing number is ", missNum);


