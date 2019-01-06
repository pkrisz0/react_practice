import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Button(props) {
  return <button type="button" onClick={props.handle}>{props.name}</button>;
}

Button.propTypes = {
  handle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

function Display(props) {
  return <div><p>{props.children}</p></div>
}

Display.propTypes = {
  children: PropTypes.number.isRequired
};

class SimpleGoldenAcornApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 38) {
        this.handleUp();
      } else if (e.keyCode === 40) {
        this.handleDown();
      }
    });
  }

// this should be one function
  handleUp = () => {
    if ((this.state.counter + 1) > -1) {
      this.setState(({ counter }) => ({
        counter: counter + 1
      }));
    }
  };

  handleDown = () => {
    if ((this.state.counter - 1) > -1) {
      this.setState(({counter}) => ({
        counter: counter - 1
      }));
    }
  };

  render(){
    return(
      <div>
        <Button
          name='Buy one'
          handle={this.handleUp}/>
        <Display>
          {this.state.counter}
        </Display>
        <Button
          name='Eat one'
          handle={this.handleDown}/>
      </div>
    )
  };
}

ReactDOM.render(
  <SimpleGoldenAcornApp />,
  document.getElementById('root'),
);