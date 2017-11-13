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
    _this.clearForm = _this.clearForm.bind(_this);
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
    key: 'clearForm',
    value: function clearForm() {
      setTimeout(document.getElementById("songDetails").reset(), 3000);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('iframe', { name: 'myform', style: { display: 'none' } }),
        React.createElement(
          'form',
          { action: '/', method: 'post', target: 'myform', id: 'songDetails' },
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              null,
              'Song Title'
            ),
            React.createElement('input', { name: 'title', type: 'title', id: 'title' })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              null,
              'Artist Name'
            ),
            React.createElement('input', { name: 'artist', type: 'artist', id: 'artist' })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'button',
              null,
              'Save A Recommendation For Future'
            )
          )
        ),
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
          { id: 'recommendedSong' },
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
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, { name: 'Krista' }), document.getElementById('app'));