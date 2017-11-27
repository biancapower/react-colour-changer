class ColourShower extends React.Component {

  render() {
    var c = this.props.colour
    var myBackgroundColour = 'rgb(' + c.red + ',' + c.green + ',' + c.blue + ')'
    var myColour = 'rgb(' + (255 - c.red) + ',' + (255 - c.green) + ',' + (255 - c.blue) + ')'
    return(
      <div style={{'background-color': myBackgroundColour, color: myColour}} className="p-5">{'Change me'}</div>
    )
  }
}

class NumberChanger extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    console.log(this.props.target)
    const change = parseInt(event.target.value);
    let currentState = this.props.parent.state
    currentState[this.props.id] += change
    this.props.parent.setState(() => (currentState))
    console.log(currentState)
  }

  render() {
    return(
      <div>
        <button value={-10} onClick={this.handleClick} className="btn btn-dark p-2">
          -
        </button>
        <span className="p-5">{this.props.colour}</span>
        <button value={10} onClick={this.handleClick} className="btn btn-dark p-2">
          +
        </button>
      </div>
    )
  }
}

class ColourPicker extends React.Component {
  constructor() {
    super();
    this.state = { red: 50, green: 200, blue: 200 }
  }
  render() {
    return [
      <ColourShower colour={this.state}/>,

      <br></br>,

      <NumberChanger colour={'RED'} id={'red'} parent={this}/>,

      <br></br>,

      <NumberChanger colour={'GREEN'} id={'green'} parent={this}/>,

      <br></br>,

      <NumberChanger colour={'BLUE'} id={'blue'} parent={this}/>
    ]
  }
}

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

      <h2>

        <ColourPicker />

      </h2>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
