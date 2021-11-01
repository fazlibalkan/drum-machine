class App extends React.Component {

    state = ({
        name: ""
    });

    play(str) {
        var audio = document.getElementById(str);
        audio.play();
        this.setState({
            name: str
        });
    }

    handleKeyPress = (event) => {
        const keydown = event.key;
        if ("QWEASDZXC".includes(keydown.toUpperCase())){
            this.play(keydown.toUpperCase());
        }
    }
   
    render () {
        return (
            <div className="machine" id="drum-machine" onKeyDown={this.handleKeyPress}>
                <h3>DRUM MACHINE!</h3>
                <div className="row">
                    <div className="col-sm">
                        <button className="drum-pad btn btn-primary" id="0" onClick={() => this.play("Q")}>
                            Q
                            <audio className="clip" src="./audio/Snare-2.wav" id="Q"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id="1" onClick={() => this.play("W")}>
                            W
                            <audio className="clip" src="./audio/Snare-2.wav" id="W"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id="2" onClick={() => this.play("E")}>
                            E
                            <audio className="clip" src="./audio/Kick-1.wav" id="E"></audio>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="drum-pad btn btn-primary" id="3" onClick={() => this.play("A")}>
                            A
                            <audio className="clip" src="./audio/Kick-1.wav" id="A"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id="4" onClick={() => this.play("S")}>
                            S
                            <audio className="clip" src="./audio/Perc.wav" id="S"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id="5" onClick={() => this.play("D")}>
                            D
                            <audio className="clip" src="./audio/Ride.wav" id="D"></audio>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="drum-pad btn btn-primary" id="6" onClick={() => this.play("Z")}>
                            Z
                            <audio className="clip" src="./audio/Hi-Tom.wav" id="Z"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id="7" onClick={() => this.play("X")}>
                            X
                            <audio className="clip" src="./audio/FX-1.wav" id="X"></audio>
                        </button>
                        <button className="drum-pad btn btn-primary" id="8" onClick={() => this.play("C")}>
                            C
                            <audio className="clip" src="./audio/Crash.wav" id="C"></audio>
                        </button>
                    </div>
                </div>

                <div className="display" id="display">
                    <p>{this.state.name}</p>
                </div>
            </div>
        );
    }
        
}

ReactDOM.render(<App/>, document.getElementById("root"))