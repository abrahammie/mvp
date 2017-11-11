class App extends React.Component {
  render (props) {
    return <h1>Go Away {this.props.name}!</h1>
  }
}


ReactDOM.render(<App name="Krista"/>, document.getElementById('app'))