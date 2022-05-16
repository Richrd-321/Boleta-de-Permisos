import React, { Fragment } from 'react';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** Layout */
import Header from './componentes/layout/Header';
import Navegacion from './componentes/layout/Navegacion';
import LogoSeda from './componentes/layout/Logo';

/*** Componentes */
import Permisos from './componentes/permisos/Permisos';
import ListaPermisos from './componentes/listaPermisos/ListaPermisos';


function App() {
    return (
        <Router>
            <Fragment>
                <Header />

                <div className="container">
                    <LogoSeda />
                    <Navegacion />

                    <main className="caja-contenido col-9">
                        <Switch>
                            <Route exact path="/" component={Permisos} />

                            <Route exact path="/listaPermisos" component={ListaPermisos} />

                        </Switch>
                    </main>
                </div>
            </Fragment>
        </Router>
    );

}

export default App;
