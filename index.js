class ColourShower extends React.Component {

  render() {
    var c = this.props.colour
    var myColour = 'rgb(' + c.red + ',' + c.green + ',' + c.blue + ')'
    return(
      <div style={{color: myColour,}}>{'Change me'}</div>
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
        <button value={-10} onClick={this.handleClick}>
          -
        </button>
        <span>{this.props.colour}</span>
        <button value={10} onClick={this.handleClick}>
          +
        </button>
      </div>
    )
  }
}

class ColourPicker extends React.Component {
  constructor() {
    super();
    this.state = { red: 200, green: 100, blue: 100 }
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
    // this.handleClick = this.handleClick.bind(this)
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
