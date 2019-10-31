import React, { Component } from 'react';
import Pirate from './components/Pirate';
import Header from './components/Header';
import PirateForm from './components/PirateForm';
import { base } from './base';
import piratesFile from './data/sample-pirates-array';


class App extends Component {
  state = {
    pirates: [],
  };

  componentDidMount() {
    this.ref = base.syncState(`pirates`, {
      context: this,
      state: 'pirates',
      asArray: true,
    });
  }
  
  loadSamples = () => {
    this.setState({ pirates: piratesFile });
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const pirateCalls = [
      'Aaarg, belay that!',
      'Avast me hearties!',
      'Shiver me timbers!',
    ];

    const addPirate = pirate => {
      console.log(pirate);
      const newPirates = [pirate, ...this.state.pirates];
      console.log(newPirates);
      // newPirates.unshift(pirate); we're able to use this cause the of the spred addition in the const above. 
      this.setState({ pirates: newPirates });
    };

    const removePirate = index => {
      console.log(index);
      const pirates = [...this.state.pirates];
      pirates.splice(index, 1);
      console.log(pirates);
      this.setState({ pirates: pirates });
    };

    const randomize = () =>
      pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

    return (
      <>
        <Header title={randomize()} />
        <PirateForm addPirate={addPirate} />
        {this.state.pirates.map((pirate, index) => (
          <Pirate 
          key={index} 
          index={index}
          tagline={randomize()} 
          pirate={pirate} 
          removePirate={removePirate}/>
        ))}
      </>
    );
  }
}

export default App;
