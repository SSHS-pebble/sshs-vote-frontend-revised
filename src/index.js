require("babel-polyfill");

const React = require("react");
const ReactDOM = require("react-dom");
const { BrowserRouter: Router, Route } = require("react-router-dom");
const { ToastProvider } = require("react-toast-notifications");
const { Section } = require("react-bulma-components");

require("react-bulma-components/dist/react-bulma-components.min.css");

const { Hero, Main, Notification } = require("./components");

const App = () => (
    <>
        <Router>
            <ToastProvider components={{ Toast: Notification }}>
                <Hero />
                <Section>
                    <Route exact path="/" component={Main} />
                </Section>
            </ToastProvider>
        </Router>
    </>
);

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
