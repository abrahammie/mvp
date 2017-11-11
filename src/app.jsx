class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {}
    }
  }

  getSong() {
    console.log('getSong called');
    $.ajax({
      url: '/',
      type: 'POST',
      dataType: 'json',
      success: function(data) {
        console.log('song data was received from server', data);
        this.setState({song: data});
      },
    });
  }

  render(props) {
    return (
    <div>
      <h1>Go Away {this.props.name}!</h1>
        <button onClick={this.getSong}>
          Click Me For Song
        </button>

    </div>
    );
  }

  //How to render Song component without bundler???

  //if i want to render recently meowed songs
  componentDidMount() {
    //get request for last 5 recently meowed songs
  }

}



ReactDOM.render(<App name="Krista"/>, document.getElementById('app'))