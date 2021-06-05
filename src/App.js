
import './App.css';
import {Component} from "react";
import {ReCAPTCHA} from "react-google-recaptcha";

class App extends Component{
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
                                                             placeholder="0 0 0 0 0 0 0 0"/>
                                                  </div>
                                                  <input type="hidden" name="randcheck" value="946965137"/>
                                                  <ReCAPTCHA
                                                      sitekey="6Ld55YsaAAAAAPbGCSbd1VHPb9D6aJ6MI1Zrl8qT"
                                                      onChange={() => {

                                                      }}
                                                  />
                                                  <div className="mt-4">
                                                      <button className="btn btn-primary btn-block waves-effect waves-light"
                                                              type="submit">Consultar mesa
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
