[![Build Status](https://travis-ci.org/TwisterMW/js-cmd-binder.svg?branch=master)](https://travis-ci.org/TwisterMW/js-cmd-binder)

## jsCMDBinder
Javascript Library for bind commands to keys for making shortcuts.

## REQUIREMENTS
- jQuery (included by Bower)
- Node
- NPM

## USAGE
- Simple usage

      1) Copy the jsCmdBinder.js library to your JS directory

      2) Include the library in your HTML or PHP file by "script src='path-to-library/jsCmdBinder.js'"

      3) Declare an associative array for the bindings like this:
            ```javascript
            var bindings = {
      	    "m": "my_function()",
      	    ...
      	}
            ```

- Advanced usage:

      4) Declare an array for descripting the bindings like this:
            ```javascript
            var descriptions = Array(
		    "Title for the binding",
		    ...
	      );
            ```

- Calling function:

1) Simple usage: "body onLoad="shortCuts(bindings);" where:
      - "bindings" is the associative array previously defined,
      
2) Advanced usage: "body onLoad="shortCuts(bindings, true, 'div', 'color', descriptions);" where:
      - "bindings" is the associative array previously defined,
      - "true" makes able to show a legend to display the bindings,
      - "div" is the id of the div container of a button for displaying the legend,
      - "color" is the color of the background of the legend,
      - "description" is the array of descriptions for the bindings

## TESTING
For run testing suite tip on console ```karma start karma.conf.js```