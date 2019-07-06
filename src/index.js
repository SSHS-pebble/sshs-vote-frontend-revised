require("babel-polyfill");

const React = require("react");
const ReactDOM = require("react-dom");
const { BrowserRouter: Router, Route } = require("react-router-dom");
const { ToastProvider } = require("react-toast-notifications");
const { Section } = require("react-bulma-components");

require("react-bulma-components/dist/react-bulma-components.min.css");
require("react-block-ui/style.css");

const { Hero, Main, Notification, Count } = require("./components");

const App = () => (
    <>
        <Router>
            <ToastProvider components={{ Toast: Notification }}>
                <Hero />
                <Section>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/count" component={Count} />
                </Section>
            </ToastProvider>
        </Router>
    </>
);

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
