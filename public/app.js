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
      song: ''
    };
    _this.getSong = _this.getSong.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'getSong',
    value: function getSong() {
      var _this2 = this;

      $.ajax({
        url: '/random',
        type: 'GET',
        success: function success(data) {
          console.log('song data was received from server');
          _this2.setState({ song: JSON.parse(data)[0] });
        }
      });
    }
  }, {
    key: 'addSong',
    value: function addSong(data) {
      console.log('addSong called');
      $.ajax({
        url: '/',
        type: 'POST',
        body: '' + data,
        success: function success(response) {
          console.log('song data was sent');
        }
      });
    }
  }, {
    key: 'clearFields',
    value: function clearFields() {
      document.getElementById("form").value = "";
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(SubmitForm, { addSong: this.addSong, clearFields: this.clearFields }),
        React.createElement(
          'h3',
          null,
          'Or'
        ),
        React.createElement(
          'button',
          { onClick: this.getSong },
          'Click To Get Random Song Recommendation'
        ),
        React.createElement(
          'div',
          null,
          this.state.song ? 'Title: ' + this.state.song.title : '',
          '  '
        ),
        React.createElement(
          'div',
          null,
          this.state.song ? 'Artist: ' + this.state.song.artist : '',
          '  '
        )
      );
    }
  }]);

  return App;
}(React.Component);

var SubmitForm = function SubmitForm(_ref) {
  var addSong = _ref.addSong,
      clearFields = _ref.clearFields;


  var val = {};

  return React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      { id: 'form' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          null,
          'Song Title'
        ),
        React.createElement('input', { type: 'text', value: undefined.state.title, onChange: undefined.handleChange.bind(undefined) })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          null,
          'Artist Name'
        ),
        React.createElement('input', { id: 'input', ref: function ref(node) {
            return '' + (val.artist = node);
          } })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          null,
          'Genre'
        ),
        React.createElement('input', { id: 'input', ref: function ref(node) {
            return '' + (val.genre = node);
          } })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: function onClick() {
              console.log(val);
              // addSong(val);
              // clearFields();
            } },
          'Save A Recommendation For Future'
        )
      )
    )
  );
};

ReactDOM.render(React.createElement(App, { name: 'Krista' }), document.getElementById('app'));