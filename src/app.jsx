class App extends React.Component {
  render () {
    return <h1>Go Away {this.props.name}!</h1>
  }
}


ReactDOM.render(<App/>, document.getElementById('app'))