'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      song: {}
    };
    return _this;
  }

  _createClass(App, [{
    key: 'getSong',
    value: function getSong() {
      console.log('getSong called');
      $.ajax({
        url: '/',
        type: 'POST',
        dataType: 'json',
        success: function success(data) {
          console.log('song data was received from server');
          this.setState({ song: data });
        }
      });
    }
  }, {
    key: 'render',
    value: function render(props) {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Go Away ',
          this.props.name,
          '!'
        ),
        React.createElement(
          'button',
          { onClick: this.getSong },
          'Click Me For song'
        )
      );
    }

    //How to render Search component without bundler???

    //if i want to render recently meowed songs

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //get request for last 5 recently meowed songs
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, { name: 'Krista' }), document.getElementById('app'));