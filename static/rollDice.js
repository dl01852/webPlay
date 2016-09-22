/**
 * Created by David on 9/14/2016.
 */
var sumDict = {}; // dictionary to keep track of the total number of sums.
var dice1;
var dice2;


function generate() {
    for (var i = 0; i < 36000; i++) {
        dice1 = Math.ceil(Math.random() * 6);
        dice2 = Math.ceil(Math.random() * 6);

        if(isNaN(sumDict[dice1+dice2])) // if this is a new sum.
            sumDict[dice1 + dice2] = 1; // initialize the first value to 1.
        else
            sumDict[dice1 +dice2] +=1; // else just increment it.

    }
}

// just to make sure the generate code works
function display()
{
     generate(); // generate 36,000 combinations
    var data = "<h1> Data </h1>";
    data += "<table border=2>";
    data += "<caption> <strong>Rolling Dice</strong></caption>";
    data += "<thead><tr><th>Sum</th><th># Rolls</th><th>Percentage</th></tr>";
    data += "<tbody>";

    for(var j = 2; j < 13; j++)
    {
        data += "<tr><td>"+ j + "</td>"; // the sum.
        data += "<td>" + sumDict[j] +"</td>";// total occurance of the sum
        data += "<td>" + (sumDict[j] / 36000).toFixed(2) + "</td></tr>" // percentage of that sum
    }
    data += "</tbody></table>";

    document.getElementById('stats').innerHTML = data;
    
}


