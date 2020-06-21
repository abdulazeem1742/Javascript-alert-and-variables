//Assignment 21-25
//Task1 Question 1
var nam1 =prompt('Enter your first name')
var nam2 =prompt('Enter your last name')
document.write("Asalam Alaikum" +  nam1  +  nam2)

//Assignment 21-25
//Task 1 Question 2
var str = prompt("Enter Your fav mobile name");
var n = str.length;
document.write("My fav mob is :" + n)
//console.log(n)



//Assignment 21-25
//Task 1 Question 3
var str = "Pakistan";
var n = str.indexOf("n");
document.write(n)



//Assignment 21-25
//Task 1 Question 4
var str = "Hello World";
var n = str.lastIndexOf("l");
document.write("Last index of l is :" + n)


//
//






//Assignment 21-25
//Task 1 Question 6
var nam1 =prompt('Enter your first name')
var nam2 =prompt('Enter your last name')
var res = nam1.concat(nam2)
document.write("Asalam Alaikum" +  nam1  +  nam2)


//Assignment 21-25
//Task 1 Question 7
var str ="Hyderabad";
var res =str.replace("Hydera", "Islama");
document.write(res)


//Assignment 21-25
//Task 1 Question 8
var str ="This is azeem and I am student of Dawood University.";
var res =str.replace("and", "&");
document.write(res)


//Assignment 21-25
//Task 1 Question 9
var str = "472";
var res = str.toString();
document.write(res)


//Assignment 21-25
//Task 1 Question 10
var str = "banana";
var res = str.toUpperCase();
document.write(res)


//
//Q11





//Assignment 21-25
//Task 1 Question 12
var num = 15.7;
var n = num.toString();
document.write(n)


//Assignment 21-25
//Task 1 Question 16
var str = 'University of karachi';
var ar =str.split('');
document.write(ar)


//Assignment chapter 26-30
//Task 2 Question 3
var value = Math.abs(-10);
document.write("The absolute value is: " + value );


//Assignment 26-30
//Task 2 Question 4
var diceRoll = Math.floor( Math.random() * 6 ) +1;
document.write("Random Dice Value :" + diceRoll);


//Assignment 26-30
//Task 2 Question 5
var heads = 0;
var tails = 0;
function coinToss() {
    var x = Math.floor(Math.random() * 2);
    if (x === 0) {
        heads += 1;
    } else {
        tails += 1;
    }
    document.write(x)

//Assignment 26-30
//Task 2 Question 6
var x = Math.floor((Math.random() * 100) + 1);
document.write(x)


//Assignment 26-30
//Task 2 Question 7
var weg =prompt("Enter your weight in kilograms")
document.write(weg)


//Assignment chapter 31-34
//Task 3 Question 1
var a = new Date();
document.write(a)


//Assignment chapter 31-34
//Task 3 Question 2
var d =new Date(2020,06,21);
var n =d.getMonth();
document.write(n)


//Assignment chapter 31-34
//Task 3 Question 3
var d =new Date(2020,06,21);
var n =d.getDay();
document.write(n)


//Assignment chapter 31-34
//Task 3 Question 4
var today = new Date();
if(today.getDay()== 6 || today.getDay()==0)
alert('Its Fun Day')


//Assignment chapter 31-34
//Task 3 Question 13
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
document.write(calculate_age(new Date(1999, 03, 01)));


//Assignment chapter 35-38
//Task 4 Question 1
var a = new Date();
document.write(a)


//Assignment chapter 35-38
//Task 4 Question 2
var nam1 =prompt('Enter your first name')
var nam2 =prompt('Enter your last name')
document.write("Asalam Alaikum" +  nam1  +  nam2)


//Assignment chapter 35-38
//Task 4 Question 3
var val1=prompt('enter your first value')
var val2=prompt('enter your second value')
var sign=prompt('enter you operator')

console.log(val1+sign+val2)
if(sign === '+'){
    alert((+val1)+(+val2))
}


//Assignment chapter 35-38
//Task 4 Question 4
var val1=prompt('enter your first value')
var val2=prompt('enter your second value')
var sign=prompt('enter you operator')

console.log(val1+sign+val2)
if(sign === '+'){
    alert((+val1)+(+val2))
}else if(sign === '-'){
    alert(val1-val2)
}else if(sign === '*'){
    alert(val1*val2)
}else if(sign === '/'){
    alert(val1/val2)
}


//Assignment chapter 35-38
//Task 4 Question 5
var val1=prompt('enter your first value')
var sign=prompt('enter you operator')

console.log(val1+sign)
if(sign === '^'){
    alert((+val1)*2)
}