
import './App.css';
import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            dni: null,
            guess: null
        };
        this.handleGuessChange = this.handleGuessChange.bind(this);
        this.handleDNIChange = this.handleDNIChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDNIChange(e) {
        this.setState({
            dni: e.target.value
        });
    }
    handleGuessChange(e) {
        this.setState({
            guess: e.target.value
        });
    }
    genRandomNumber() {
        const min = 1;
        const max = 5;
        return min + Math.random() * (max - min);
    }

    handleSubmit() {
        let {num1,num2,guess} = this.state;
        guess = parseInt(guess);
        if((num1+num2) === guess) {

        } else {
            console.log("SUMA MAL");
        }
    }
    componentDidMount() {
        this.setState({
            isLoaded: true,
            num1: Math.round(this.genRandomNumber()),
            num2: Math.round(this.genRandomNumber())
        });
    }

    render() {
      return (
          <div className="account-pages my-5 pt-5">
              <div className={"container"}>
                  <div className={"row"}>
                      <div className={"col-lg-12"}>
                          <div className={"text-center mb-5"}>
                              <img src="https://elecciones.consulperubarcelona.com/assets/images/logo-light.png" height="70" alt="logo"/>
                          </div>
                      </div>
                  </div>
                  <div className={"row justify-content-center"}>
                      <div className={"col-lg-5"}>
                          <div className={"card"}>
                              <div className={"card-body p-4"}>
                                  <div className={"p-2"}>
                                      <h5 className="mb-5 text-center">Inserte su DNI para consultar su mesa de votación.</h5>
                                      <form className="form-horizontal" method="POST" id="form" action="">

                                          <div className="row">
                                              <div className="col-md-12">
                                                  <div className="form-group mb-4">
                                                      <label htmlFor="dni">DNI</label>
                                                      <input type="text" name="dni" className="form-control" id="dni"
                                                             placeholder="0 0 0 0 0 0 0 0" onChange={this.handleDNIChange}/>
                                                  </div>
                                                  <div className="form-group mb-4">
                                                      <label htmlFor="dni">¿Cuánto es {this.state.num1} + {this.state.num2}?</label>
                                                      <input type="text" name="dni" className="form-control" id="dni"
                                                             placeholder="" onChange={this.handleGuessChange}/>
                                                  </div>
                                                  <div className="mt-4">
                                                      <button className="btn btn-primary btn-block waves-effect waves-light"
                                                              type="button" onClick={this.handleSubmit}>Consultar mesa
                                                      </button>
                                                  </div>

                                                  <div className="mt-4 text-center">
                                                      <hr/>
                                                  </div>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
