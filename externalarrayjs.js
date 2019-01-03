
var numArray = [1,2,3,4,5,6,7,8,9,10,12,14];


var fruits =  ["Apple","Grapes", "Mango","Banana","Pineapple","goava"];
function arraysort()
{
    fruits.sort();
    document.getElementById("sortpid").innerHTML = fruits;
}


var numSortArray =  [1,2,4,5,11,12,22,23,31];
function ascdescSort()
{
    numSortArray.sort(function(num1,num2){return num1 - num2});
    document.getElementById("ascdescsortpid").innerHTML = numSortArray;
}


