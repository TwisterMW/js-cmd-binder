/==========================/
/ Command-Binder           /
/ by TwisterMW             /
/==========================/

Javascript Library for bind commands to keys for making shortcuts.

USING THE PLUGIN (Needs jQuery)
===============================

- Simple usage:

1) Copy the jCMDBind-1.0.js library to your JS directory

2) Include the library in your HTML or PHP file by "script src='js/jCMDBind-1.0.js'"

3) Declare an associative array for the bindings like this:
      
      var bindings = {
		    "m": "my_function()",
		    ...
		  }

- Advanced usage:

4) Declare an array for descripting the bindings like this:

      var descriptions = Array(
		    "Title for the binding",
		    ...
		  );

- Calling function:

1) Simple usage: "body onLoad="shortCuts(bindings);"
      
      where "bindings" is the associative array previously defined,
      
2) Advanced usage: "body onLoad="shortCuts(bindings,true,'div','color',descriptions);"

      where "bindings" is the associative array previously defined,
      
            "true" makes able to show a legend to display the bindings,
            
            "div" is the id of the div container of a button for displaying the legend,
            
            "color" is the color of the background of the legend,
            
            "description" is the array of descriptions for the bindings


For using in advanced mode, you need to download the images associate to the keys, for displaying the legend.

Go to: http://bit.ly/19abcgB for downloading it!
