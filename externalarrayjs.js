
var numArray = [1,2,3,4,5,6,7,8,9,10,12,14];

function findOddEvenvalues(numArray1)
{
    var oddarray1 = [];
    var evenarray1 = [];
    for (var i=0;i<numArray1.length;i++)
    {
        if(i % 2 == 0) 
        { 
            evenarray1.push(a[i]);   
        }
        else
        {
            oddarray1.push(a[i]); 
        }
    }

    document.getElementById("oddevenpid").innerHTML = evenarray1;
    document.getElementById("oddevenpid").innerHTML = oddarray1;
}