/**
 * Created by shawnsandy on 6/4/15.
 */

var React = require("react");
//var $ = require('jquery');

/**
 * webpack compiled components sample file
 */

// import the component
var Sample = require('../src/libs/samples.jsx');
// render the main component
React.render(<Sample />, document.getElementById('component'));
// render the NameSpaced child component using the
React.render(<Sample.Button />, document.getElementById('button'));
// render the NameSpaced child component with props
React.render(<Sample.Button name="Sample Button" />, document.getElementById('sbutton'));

