class App extends React.Component {
  render (props) {
    return (
    <div>
      <h1>Go Away {this.props.name}!</h1>
    </div>
    );
  }

  //How to render Search component without bundler???

  //if i want to render recently meowed songs
  componentDidMount() {
    //get request for last 5 recently meowed songs
  }

}



ReactDOM.render(<App name="Krista"/>, document.getElementById('app'))