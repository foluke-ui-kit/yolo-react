/**
 * @jsx React.DOM
 */

/**
 *
 * @type {*|exports}
 */
var React = require('react');
var $ = require('jquery');
var DataTable = require('datatables');
/**
 * Briefly describe your Element here
 */

var Yolo = React.createClass({

    getDefaultProps(){

        return {
            dataUrl: ''
        }

    },

    componentDidMount(){


        $.ajax({
            type: "GET",
            url: this.props.dataUrl,
            dataType: "json",
            success: function (data) {
                this.setState({data: data});
                //console.log(this.state.data)
            }.bind(this)
        });

        $(React.findDOMNode(this.refs.dataTable)).DataTable({});


    },
    componentWillUpdate: function () {
        var table = $(React.findDOMNode(this.refs.dataTable)).DataTable();
        table.destroy();
    },
    componentDidUpdate: function () {
        $(React.findDOMNode(this.refs.dataTable)).DataTable();
    },
    componentWillUnmount: function () {
        var table = $(React.findDOMNode(this.refs.dataTable)).DataTable();
        table.destroy();
    },
    getInitialState: function () {

        return {
            'data': []
        }

    },

    render: function () {

        var rows = this.state.data.map(function (row) {
            return (
                <tr key={row.id}>
                    <td>{row.first_name} {row.last_name} </td>
                    <td>{row.username}</td>
                    <td>{row.password} </td>
                    <td>{row.ssn} </td>
                    <td>{row.gender}</td>
                    <td>{row.updated_at}</td>
                </tr>
            );
        })

        return (
            <div>
                <table id="datatable" ref="dataTable" className="table table-hover">
                    <Yolo.Caption />
                    <Yolo.Header />
                    <Yolo.Header tag="tfoot"/>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }

});


Yolo.Body = React.createClass({
    render: function () {
        return (
            <div>Table Body</div>
        )
    }
});


Yolo.Caption = React.createClass({

    getDefaultProps(){
        return {
            caption: "UI DATATABLE"
        }
    },

    render: function () {
        return (
            <caption>{ this.props.caption }</caption>
        );
    }

});

Yolo.Header = React.createClass({

    getDefaultProps(){
        return {

            tag: 'thead',
            pagingType: 'full_numbers'

        }
    },

    render: function () {

        var tag = this.props.tag;

        if (tag == 'tfoot')
            return (
                <tfoot>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>SSN</th>
                    <th>Gender</th>
                    <th>Updated</th>
                </tr>
                </tfoot>
            );
        else
            return (
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>SSN</th>
                    <th>Gender</th>
                    <th>Updated</th>
                </tr>
                </thead>
            );


    }

});


/**
 * Namespaced react component
 */
Yolo.Button = React.createClass({

    /**
     * set your prop validations
     *  // You can declare that a prop is a specific JS primitive. By default, these
     *  // are all optional.
     *  optionalArray: React.PropTypes.array,
     *  optionalBool: React.PropTypes.bool,
     *  optionalFunc: React.PropTypes.func,
     *  optionalNumber: React.PropTypes.number,
     *  optionalObject: React.PropTypes.object,
     *  optionalString: React.PropTypes.string,
     */


    /**
     * define misins
     */
    //mixins: [],

    /**
     * Set the default values for your states
     */
    //getInitialState: function () {},

    /**
     * det the props default
     */
    getDefaultProps: function () {
        return {
            name: 'My Button'

        }
    },

    /**
     *
     */
    //componentWillMount: function () {},

    /**
     *
     */
    //componentWillReceiveProps: function () {},

    /**
     *
     */
    //componentDidMount: function () {},

    /**
     *
     */
    //componentWillUnmount: function () {},

    render: function () {
        return (
            <button className="btn btn-default">
                { this.props.name }
            </button>
        );
    }
});


/**
 * export the element
 */
module.exports = Yolo;