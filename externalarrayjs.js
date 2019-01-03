
var numArray = [1,2,3,4,5,6,7,8,9,10,12,14];


var fruits =  ["Apple","Grapes", "Mango","Banana","Pineapple","goava"];
function arraysort()
{
    fruits.sort();
    document.getElementById("sortpid").innerHTML = fruits;
}


var numSortArray =  [1,2,4,5,11,12,22,23,31,55];

function ascendingSort()
{
    numSortArray.sort(function(num1,num2){return num1 - num2});
    document.getElementById("ascsortpid").innerHTML = numSortArray;
}
function descendingSort()
{
    numSortArray.sort(function(num1,num2){return num2 - num1});
    document.getElementById("descsortpid").innerHTML = numSortArray;
}

function sortfilterarray(arrayelement)
{
    var evenArrayFilter = [];
    if(arrayelement % 2 === 0) 
    { 
        return evenArrayFilter.push(arrayelement);   
    }
}

function callsortfilter() 
{
    document.getElementById("filterevenpid").innerHTML = numSortArray.filter(sortfilterarray);
}

function greaternumFilter(numMax)
{
    if (numMax > 50)
    {
        return true;
    }
    else
    {
        return false;
    } 
}

function callGreaterNumber() 
{
    document.getElementById("greaternumpid").innerHTML = numSortArray.filter(greaternumFilter);
}


