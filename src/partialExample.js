//Please notice that the MIT license applies to my code below.  The other links or sites that are provided 
//may have their own licenses.

//http://www.opensource.org/licenses/mit-license.php

//Example from: http://ejohn.org/blog/partial-functions-in-javascript/
 
  Function.prototype.partial = function(){
    var fn = this, args = Array.prototype.slice.call(arguments);
    return function(){
      var arg = 0;
      for ( var i = 0; i < args.length && arg < arguments.length; i++ )
        if ( args[i] === undefined )
          args[i] = arguments[arg++];
      return fn.apply(this, args);
    };
  };
  
  var delay = setTimeout.partial(undefined, 10);
  
  delay(function(){
    alert( "A call to this function will be temporarily delayed." );
  });