module.exports = {
    Router: {
        Link: require('react-router').Link,
        IndexLink: require('react-router').IndexLink
    },
    Flexbox: {
        Row: require('../../src/client/views/Flexbox/Row.jsx'),
        Col: require('../../src/client/views/Flexbox/Col.jsx'),
        Box: require('../../src/client/views/Flexbox/Box.jsx')
    },
    MaterialUI: {
        FlatButton: require('material-ui').FlatButton,
        RaisedButton: require('material-ui').RaisedButton,
        IconButton: require('material-ui').IconButton,
        DatePicker: require('material-ui').DatePicker,
        Paper: require('material-ui').Paper,
        RefreshIndicator: require('material-ui').RefreshIndicator,
        Checkbox: require('material-ui').Checkbox,
        RadioButton: require('material-ui').RadioButton,
        RadioButtonGroup: require('material-ui').RadioButtonGroup,
        Toggle: require('material-ui').Toggle,
        TextField: require('material-ui').TextField
    }
};