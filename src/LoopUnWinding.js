//Please notice that the MIT license applies to my code below.  The other links or sites that are provided 
//may have their own licenses.

//http://www.opensource.org/licenses/mit-license.php


//Modified from Jeff Greenberg first js duff device from c conversion 
// http://home.earthlink.net/~kendrasg/info/js_opt/
var unRollSwitch = function(list,func) {
	var unRolledRuns = Math.ceil(list.length / 8);
	var remainder = list.length % 8;
	var i = 0;

	do {
		switch(remainder){
			case 0: func(list[i++]);
			case 7: func(list[i++]);
			case 6: func(list[i++]);
			case 5: func(list[i++]);
			case 4: func(list[i++]);
			case 3: func(list[i++]);
			case 2: func(list[i++]);
			case 1: func(list[i++]);
		}
		remainder = 0;
	} while (--unRolledRuns > 0);
};

//http://oreilly.com/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html
var unRoll = function(list,func) {
    var unRolledRuns = Math.floor(list.length / 8);
    var remainder = list.length % 8;
    var i = 0;

    if (remainder > 0){
        do {
            func(list[i++]);
        } while (--remainder > 0);
    }

    do {
        func(list[i++]);
        func(list[i++]);
        func(list[i++]);
        func(list[i++]);
        func(list[i++]);
        func(list[i++]);
        func(list[i++]);
        func(list[i++]);
    } while (--unRolledRuns > 0);
};