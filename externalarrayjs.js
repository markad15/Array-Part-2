
var numArray = [1,2,3,4,5,6,7,8,9,10,12,14];

function funOddEven(total, number1)
{
    var oddarray1 = [];
    var evenarray1 = [];
    var flagnum = 0;
    if (total % 2 == 0 && flagnum == 0)
    {
        evenarray1.push(total);
        flagnum = 1;
    }
    if (total % 2 != 0 && flagnum == 0)
    {
        oddarray1.push(total);
    }
    if (number1 % 2 == 0)
    {
        evenarray1.push(number1);
    }
    if (number1 % 2 != 0)
    {
        oddarray1.push(number1);
    }

    document.getElementById("oddevenpid").innerHTML = "Even Numbers:" + evenarray1 + "<br/>Odd Numbers:" + oddarray1;
}



var fruits =  ["Apple","Grapes", "Mango","Banana","Pineapple","goava"];
function arraysort()
{
    fruits.sort();
    document.getElementById("sortpid").innerHTML = fruits;
}


var numSortArray =  [1,2,4,5,11,12,22,23,31];

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

function callGreaterNumber()
{
    for (var i=0;i<numSortArray.length;i++)
    {
        if(numSortArray[i] > 50) 
        { 
            document.getElementById("greaternumpid").innerHTML = "Number greater than 50 is found"; 
        }
        else
        {
            document.getElementById("greaternumpid").innerHTML = "Number greater than 50 is not found";
        }
    }
    
}

function calldatetime()
{
    var datetime = new Date();
    document.getElementById("datetimepid").innerHTML = datetime;
}


