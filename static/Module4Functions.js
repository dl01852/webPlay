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

function counter()
{
    var counter = document.getElementById('div').innerHTML;
    counter++;

}

