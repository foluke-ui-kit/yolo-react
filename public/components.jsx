/**
 * Created by shawnsandy on 6/4/15.
 */

var React = require("react");
//var Styles = require("../node_modules/datatables/media/css/jquery.dataTables.css");
//var $ = require('jquery');

/**
 * webpack compiled components sample file
 */

// import the component
var Yolo = require('../src/libs/yolo.jsx');
// render the main component
React.render(<Yolo dataUrl="data/users.json" />, document.getElementById('component'));
// render the NameSpaced child component using the
React.render(<Yolo.Button />, document.getElementById('button'));
// render the NameSpaced child component with props
React.render(<Yolo.Button name="Sample Button" />, document.getElementById('sbutton'));

