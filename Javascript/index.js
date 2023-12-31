/*
Psdeudocode: 
1. Need a formula that allows for counting of the total number of months
2. Need total amount of profit or losses over entire period Jan 2010- Feb 2017
  e.g arr[i][1]” selects the current array’s second item and loop it so it goes back and adds the next one.
  Need to then define the array: var arr= finances
3. The average of changes in profit/losses over the entire period:need to track what the total change in 
Profit/Losses are from month to month and then find the average. Total/(Number of months - 1)
First compute the change for each month
The greatest increase in Profit/Losses (date and amount) over the entire period.
The greatest decrease in Profit/Losses (date and amount) over the entire period.
*/

// i = 0

// finances[i+1][1] - finances[i][1] = change1

// i = 1

// finances[i+1][1] - finances[i][1] = change2

// finances[3][1] - finances[2][1] = change2
// finances[4][1] - finances[3][1] = change2
// finances[5][1] - finances[4][1] = change2
// finances[6][1] - finances[5][1] = change2


 

var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532], 
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

//total Months
console.log (finances.length);

//The net total amount of Profit/Losses over the entire period.
let total = 0;

var arr= finances
for (var i = 0; i < arr.length; i++) {
total += arr[i][1];
}

console.log(total)

var totalChange = 0;

//track what the total change in Profit/Losses are from month to month and then find the average.
for(i = 0; i < finances.length - 1; i++) {
    var num2 = finances[i+1][1]
    var num1 = finances[i][1]

    // finances[i+1][1] - finances[i][1]
    var change = num2 - num1

    console.log(change)
    console.log("----------")

    totalChange+=change
}

console.log("Total change:" + totalChange)

var averageChange = (totalChange / (finances.length - 1))

console.log("Average change: " + averageChange)

var roundedNum = Math.round(averageChange * 100) / 100

console.log(roundedNum)

/*

for(i = 0; i < 3; i++) {
 console.log("Hello")
}

for(1 ; 2; 3) {
  code inside
}

1 -> iterator initialization
   -> this is where we define where we start our count

2 -> conditional statement
   -> decides whether to allow the code iniside to execute
  
3 -> iterator step
   -> decides how much we add to the iterator as we count


simulation

1st iteration
---- i = 0
---- i < 3 --> 0 < 3 ---> true
---- "Hello"
---- i++ ---> i = i + 1 ----> i = 0 + 1
---- i = 1

2nd iteration
---- i = 1
---- i < 3 ---> 1 < 3 ---> true
---- "Hello"
---- i++ ---> i = i + 1 ----> i = 1 + 1
---- i = 2

3rd iteration
---- i = 2
---- i < 3 ---> 2 < 3 ---> true
---- "Hello"
---- i++ ---> i = i + 1 ----> i = 2 + 1
---- i = 3

4th iteration
---- i = 3
---- i < 3 ----> 3 < 3 ---> false
--- END

*/


//The greatest increase in Profit/Losses (date and amount) over the entire period.

// The greatest decrease in Profit/Losses (date and amount) over the entire period.