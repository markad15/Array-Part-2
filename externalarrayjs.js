

function findOddEvenvalues()
{
    var numArray = [1,2,3,4,5,6,7,8,9,10,12,14];
    var oddarray1 = [];
    var evenarray1 = [];
    for (var i=0;i<numArray.length;i++)
    {
        if(i % 2 === 0) 
        { 
            evenarray1.push(numArray[i]);   
        }
        else
        {
            oddarray1.push(numArray[i]); 
        }
    }

    document.getElementById("oddevenpid").innerHTML = "Even Numbers:" + evenarray1 + "<br/>Odd Numbers:" + oddarray1;
}