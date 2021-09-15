import React from 'react';
import SmallCow from './SmallCow';
import SmallBull from './SmallBull';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            cows: [],
            input: "",
            bulls: [],
            
        };
    }

    addCow = () => {
        const cow = {color: this.state.input};
        const cows = this.state.cows.slice();
        cows.push(cow);

        this.setState({
            cows: cows
        })
        localStorage.setItem('allcows', JSON.stringify(cows));
    }

    addBull = () => {
       const bull = {color: this.state.input};
       const bulls = this.state.bulls.slice();
       bulls.push(bull);
   
       this.setState({
           bulls: bulls
       })
       localStorage.setItem('allbulls', JSON.stringify(bulls));
   }

    inputHandler = (e) => {
        this.setState ({
            input: e.target.value,
        });
    }

    componentDidMount() {
        const cows = JSON.parse(localStorage.getItem('allcows'));
        const bulls = JSON.parse(localStorage.getItem('allbulls'));
        if (null === cows) {
            return;
        } else if (null === bulls) {
            return;
        }
        this.setState({
            cows: cows,
            bulls: bulls,
        });
    }

render () {
    return (
        < >
            <div>
                <input className="inputColor" type="text" value={this.state.input} onChange={this.inputHandler} />
                <button className="input-button" onClick={this.addCow}>ADD COW</button>
                <button className="input-button" onClick={this.addBull}>ADD BULL</button>
            </div>
            {this.state.cows.map((b, i) => <SmallCow key={i} color={b.color} /> )}
            {this.state.bulls.map((b, i) => <SmallBull key={i} color={b.color} /> )}
        </>
      
        );
    }
}  
        export default App;