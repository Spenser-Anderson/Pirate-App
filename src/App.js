import React from 'react';
import Pirate from './components/Pirate';
import Header from './components/Header';
import PirateForm from './components/PirateForm';

import piratesFile from './data/sample-pirates-array';

class App extends React.Component {
  state = {
    pirates: piratesFile,
  };

  render() {
    const pirateCalls = [
      'Aaarg, belay that!',
      'Avast me hearties!',
      'Shiver me timbers!',
    ];

    const addPirate = pirate => {
      console.log(pirate);
      //take a copy of the current state and put it into newPirates var
      const newPirates = [...this.state.pirates];
      console.log(newPirates);
      newPirates.unshift(pirate);
      console.log(newPirates);
      //set state pirates with var pirates
      this.setState({ pirates: newPirates });
    };

    const randomize = () =>
      pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

    return (
      <>
        <Header title={randomize()} />
        <PirateForm addPirate={addPirate} />
        {this.state.pirates.map(pirate => (
          <Pirate key={pirate.id} tagline={randomize()} pirate={pirate} />
        ))}
      </>
    );
  }
}

export default App;
