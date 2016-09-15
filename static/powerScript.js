/**
 * Created by David on 9/14/2016.
 */

var base;
var exponent;
    function grabData()
    {
        base = parseInt(document.getElementById('base').value);
        exponent = parseInt(document.getElementById('exponent').value);

        if(!isNaN(base) && !isNaN(exponent)) // error checking to make sure numbers are entered
        {
            document.getElementById('answer').innerHTML = power(base,exponent);
        }
        else
            window.alert("Bad data")

    }

    // recursive function to generate the power
    function power(b,e) // b = base, e = exponent.
    {
        if(e == 0)
            return 1;
        else if(e == 1)
            return b;
        else
            return b * power(b,e-1);
    }
