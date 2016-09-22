/**
 * Created by David Lewis on 9/19/16.
 */

function timeDisplay()
{
    var date = document.getElementById('date').value;
    var data = date.split('-');
    var year = data[0];
    var month = data[1];
    var day = data[2];

    document.getElementById('display').innerHTML = month + "-" + day + "-" + year;
    document.getElementById('display').innerHTML += "<br>" + year + "-" + month + "-" + day;
    document.getElementById('display').innerHTML += "<br>" + month + "\\" + day + "\\" + year;
    document.getElementById('display').innerHTML += "<br>" + year + "\\" + month + "\\" + day;
}

function counter() {
    var counter = parseInt(document.getElementById('div').innerHTML, 10);
    if (counter == "NaN") {
        counter = 0
    }
    else
    {
        counter+=1
    }
    document.getElementById('div').innerHTML = counter;
}

function CanvasCreation()
{
    var side = 100;
    var body = document.getElementById("body");

    for(var i = 0; i < side; i++) {
        var row = document.createElement("tr");


        for (var k = 0; j < side; j++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }

    document.getElementById("canvas").addEventListener("move",MouseMove,false);
}

function MouseMove(e)
{
    if(e.target.tagName.toLowerCase() == "td")
    {
        if(e.ctrlKey)
        {
            e.target.setAttribute("class","blue");
        }
        if(e.shiftKey)
            e.target.setAttribute("class","red");

        if(e.altKey)
        {
            e.target.setAttribute("class","white");
        }
    }
}

