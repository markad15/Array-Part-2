
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

    return "Even Numbers:" + evenarray1 + "<br/>Odd Numbers:" + oddarray1;
}

function callOddEvenFun(item1)
{
    document.getElementById("oddevenpid").innerHTML = numArray.reduce(funOddEven);
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
    var varMonth, varMonth1, varDay, varDay1, varyear;

    varMonth = (datetime.getMonth() + 1);
    varDay = (datetime.getDate());
    varYear = (datetime.getFullYear().toString().substr(-2));

  /*  if (varMonth.length == 0)
    {
        varMonth1 = "0" + varMonth;
    }
    else{
        varMonth1 = varMonth;
    }

    if (varDay.length == 1)
    {
        varDay1 = "0" + varDay;
    }
    else{
        varDay1 = varDay;
    }
    */

    datetime =  varMonth + "/" + varDay +"/"+ varYear;
    document.getElementById("datetimepid").innerHTML = datetime;
}

function funmaxnumber()
{
    
    var maxValue = 0;
    numSortArray.forEach(function(element1)
        {
            if(maxValue < element1) 
            maxValue = element1;
            document.getElementById("maxValuePid").innerHTML = maxValue;
        }
    );
    
   /* document.getElementById("maxValuePid").innerHTML = Math.max(1,2,4,5,11,12,22,23,31);  */
}

function funminnumber()
{
    var minValue = 9999;
    numSortArray.forEach(function(element1)
        {
            if(minValue > element1) 
            minValue = element1;
            document.getElementById("minValuePid").innerHTML = minValue;
        }
    );
    
  /* document.getElementById("minValuePid").innerHTML = Math.min(1,2,4,5,11,12,22,23,31); */
}

function funrandomnum()
{
    var rndNum = Math.floor((Math.random() * 10));
    document.getElementById("rndpid").innerHTML = rndNum;
}


