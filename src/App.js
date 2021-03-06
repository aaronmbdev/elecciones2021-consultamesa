
import './App.css';
import {Component} from "react";
import {Modal, ModalBody, ModalFooter} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ModalHeader from "react-bootstrap/ModalHeader";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            dni: null,
            show: false,
            showError: false,
            userData: {
                DNI: "",
                MESA: "",
                NOMBRE: "",
                MM: false
            },
            class: ''
        };
        this.handleDNIChange = this.handleDNIChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.showError = this.showError.bind(this);
        this.hideError = this.hideError.bind(this);
    }
    showError() {
        this.setState({
            showError: true
        });
    }
    hideError() {
        this.setState({
            showError: false
        });
    }
    showModal() {
        this.setState({
            show: true
        });
    }
    hideModal() {
        this.setState({
            show: false
        });
    }
    handleDNIChange(e) {
        this.setState({
            dni: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let dni = this.state.dni;
        let params = new URLSearchParams();
        params.append("dni",dni);

        this.setState({
            show: true,
            userData: {
                DNI: "123456789",
                MESA: "125",
                NOMBRE: "Usuario de prueba",
                MM: false
            },
            class: "AZUL"
        });

        /*axios.post("https://elecciones.consulperubarcelona.com/api/getUserData",params).then((e) => {
            if(e.status === 200) {
                let info = e.data;
                if(info !== false) {
                    this.setState({
                        show: true,
                        userData: info,
                        class: info.COLOR
                    });
                } else {
                    this.setState({
                        showError: true
                    });
                }
            } else {
                toast.error("No se ha podido conectar con el servidor");
            }
        }).catch(() => {
            toast.error("No se ha podido conectar con el servidor");
        });*/

    }

    render() {
        const renderMM = (render) => {
            if(render) {
                return(<div className="col-md-12 margin">
                    <div className="alert alert-warning" role="alert">
                        <p><strong>??Has sido designado como miembro de mesa!</strong> La ONPE ha establecido que
                            aquellos
                            que fueron designados como miembros de mesa en la 1era vuelta, tambi??n lo ser??n
                            en la 2da vuelta. Por lo que estas llamado a cumplir nuevamente para asumir el
                            cargo de miembro de mesa.</p>
                        <p>Recuerda que: </p>
                        <ul>
                            <li><strong>El d??a de la elecci??n debes traer tu DNI peruano (puede estar vencido).</strong>
                            </li>
                            <li>Te proveeremos de alimentaci??n (desayuno, almuerzo, merienda y caf??).</li>
                            <li>Recibir??s un estipendio de 120 soles (25 euros aprox.) por tu participaci??n.</li>
                            <li>Nos olvides que es tu deber asistir para ejercer esta funci??n. De no hacerlo,
                                deber??s pagar una multa de 220 soles.
                            </li>
                            <li>Al votar por solo (02) dos candidatos, tanto el escrutinio como el rellenado de
                                las actas ser?? mucho m??s sencillo. Esperamos terminar antes de tiempo.
                            </li>
                            <li>Te proveeremos de material EPI y se tomar??n medidas de distanciamiento
                                social y control de aforo.
                            </li>
                        </ul>
                        <p>Te recordamos que la asistencia a las capacitaciones que organiza la ONPE es vital.
                            Podr??s encontrar toda la informaci??n necesaria en la p??gina web de la
                            ONPE (<a
                                href="https://www.onpe.gob.pe/modElecciones/elecciones/2021/SEP/miembro-de-mesa.html?utm_source=sendinblue&amp;utm_campaign=EG_-_2021_-_MIembros_de_Mesa_Barcelona_2da_Vuelta&amp;utm_medium=email"
                                target="_blank" rel={"noreferrer"}>ingresando aqu??</a>).</p>

                        <p>A fin de que podamos llevar un registro ordenado de l@s miembros de mesa que nos
                            acompa??ar??n, te pedimos ???por favor??? completes algunos datos de confirmaci??n (solo
                            te tomar?? un minuto). <a
                                href="https://forms.office.com/pages/responsepage.aspx?id=w66okETgUky0kJNiGrWua3Obt1FRXpNAkyrFDQ251p5UMUdQMDhRVVlPWkhURk5CMDk3SEo5VTE2OC4u&amp;utm_source=sendinblue&amp;%253butm_campaign=EG_-_2021_-_MIembros_de_Mesa_Barcelona_2da_Vuelta&amp;%253butm_medium=email"
                                target="_blank" rel={"noreferrer"}>Ingresa al formulario aqu??.</a></p>
                        <p>Desde ya te agradecemos por el compromiso y la dedicaci??n con este proceso
                            electoral.</p>
                    </div>

                </div>);
            }
        }
        const getFila = (fila) => {
            if(fila === 0 || fila === 1) {
                return 1;
            } else if(fila >= 2 && fila <= 13) {
                return 2;
            } else if (fila >= 14 && fila <= 25) {
                return 3;
            } else if (fila >= 26 && fila <= 37) {
                return 4;
            } else if (fila >= 38 && fila <= 49) {
                return 5;
            } else if (fila >= 50 && fila <= 61) {
                return 1;
            } else if (fila >= 62 && fila <= 73) {
                return 2;
            } else if(fila >= 74 && fila <=90) {
                return 3;
            } else if(fila >= 91 && fila <= 96) {
                return 1;
            } else if(fila >= 97 && fila <= 102) {
                return 2;
            } else if(fila >=103 && fila <=108) {
                return 3;
            } else if(fila >= 109 && fila <=114) {
                return 4;
            } else if(fila >= 115 && fila <= 120) {
                return 5;
            } else if(fila >= 121 && fila <= 126) {
                return 6;
            } else if(fila >= 127 && fila <= 132) {
                return 7;
            } else if(fila >= 133 && fila <= 140) {
                return 8;
            } else {
                return "-";
            }
        }
      return (
          <div className="account-pages my-5 pt-5">
              <ToastContainer />
              <div className={"container"}>
                  
                  <div className={"row justify-content-center"}>
                      <div className={"col-lg-5"}>
                          <div className={"card"}>
                              <div className={"card-body p-4"}>
                                  <div className={"p-2"}>
                                      <h5 className="mb-5 text-center">Inserte su DNI para consultar su mesa de votaci??n.</h5>
                                      <form className="form-horizontal" onSubmit={this.handleSubmit}>

                                          <div className="row">
                                              <div className="col-md-12">
                                                  <div className="form-group mb-4">
                                                      <label htmlFor="dni">DNI</label>
                                                      <input type="text" name="dni" className="form-control" id="dni"
                                                             placeholder="0 0 0 0 0 0 0 0" onChange={this.handleDNIChange}/>
                                                  </div>

                                                  <div className="mt-4">
                                                      <button className="btn btn-primary btn-block waves-effect waves-light"
                                                              type="submit" >Consultar mesa
                                                      </button>
                                                  </div>

                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <Modal show={this.state.show} onHide={this.hideModal}>
                      <ModalHeader className={this.state.class}>
                          <div className={"row"}>
                              <div className={"col-md-12 center"}>
                                 <h4 className={"center"}>Su mesa de votaci??n es</h4>
                                </div>
                          </div>
                          <div className={"row"}>
                              <div className={"col-md-12 center"}>
                                  <span className={"center circle "+this.state.class}>{this.state.userData.MESA}</span>
                              </div>
                          </div>

                          <div className={"row"}>
                              <div className={"col-md-6 center"}>
                                  <h5>??rea: {this.state.class}</h5>
                              </div>
                              <div className={"col-md-6 center"}>
                                  <h5>Fila: {getFila(this.state.userData.MESA)}</h5>
                              </div>
                          </div>

                          <div className={"row"}>
                              <div className={"col-md-12 margin"}>
                                  <h5>Nombre completo: </h5>
                                  <strong>{this.state.userData.NOMBRE}</strong>
                              </div>
                              <div className={"col-md-12 margin"}>
                                  <h5>DNI:</h5>
                                  <strong>{this.state.dni}</strong>
                              </div>
                          </div>

                      </ModalHeader>
                      <ModalBody>
                          <div className={"row"}>
                              {renderMM(this.state.userData.MM)}
                          </div>
                          <div className="row">
                              <div className="col-md-12 margin">
                                  <p>Local de votaci??n: Palacio 1 La Fira Barcelona - El ingreso ser?? por la Plaza del
                                      Universo, Avenida Reina Mar??a Cristina s/n (Al lado de Plaza Espa??a).</p>
                                  <p><strong>El horario de votaci??n es de 08h00 a 16h00.</strong></p>
                                  <p><strong>Recuerda que podr??s votar con tu DNI vencido</strong></p>
                                  <p>Este 6 de junio, no olvides portar una mascarilla y traer un bol??grafo. Tomaremos
                                      todas
                                      las medidas sanitarias. #VotoSeguro.</p>
                              </div>
                          </div>
                      </ModalBody>
                      <ModalFooter>
                          <a href={"http://google.com"} target={"_blank"} rel={"noreferrer"}><button className={"btn btn-primary btn-block waves-effect waves-light"}>Ver mapa</button></a>
                          <button className={"btn btn-secondary btn-block waves-effect waves-light"} onClick={this.hideModal}>Cerrar</button>
                      </ModalFooter>
                  </Modal>

                  <Modal show={this.state.showError} onHide={this.hideError}>
                      <ModalBody>
                          <div className="row">
                              <div className="col-md-12 margin">
                                  <div className="alert alert-danger" role="alert">
                                      <p>El DNI <strong>{this.state.dni} no se encuentra</strong> en el padr??n electoral de la
                                          ONPE correspondiente a Catalu??a. Esto se puede deber a:</p>
                                      <ul>
                                          <li>No haber realizado el cambio de comicilio en tu DNI peruano.</li>
                                          <li>Haber establecido una direcci??n (de Per??) la ??ltima vez que renovaste tu
                                              DNI (ya sea en Espa??a o Per??).
                                          </li>
                                          <li>Realizaste el cambio de domicilio en tu DNI en fecha posterior al cierre
                                              del padr??n electoral, al 11 de abril del 2020.
                                          </li>
                                      </ul>
                                      <p>Para m??s informaci??n, visita el portal web de la ONPE: <a
                                          href="https://www.consultamiembrodemesa.eleccionesgenerales2021.pe/#/"
                                          target="_blank" rel={"noreferrer"}>https://www.consultamiembrodemesa.eleccionesgenerales2021.pe/</a>
                                      </p>

                                  </div>
                              </div>
                          </div>
                      </ModalBody>
                      <ModalFooter>
                          <button className={"btn btn-primary btn-block waves-effect waves-light"} onClick={this.hideError}>Cerrar</button>
                      </ModalFooter>
                  </Modal>
              </div>
          </div>
      );
  }
}

export default App;
