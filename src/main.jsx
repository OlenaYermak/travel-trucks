import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
// import store from "./redux/store.js";
import App from "../src/components/App/App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>Camper Truck</title>
          <meta
            name="description"
            content="Find the best camper trucks for your adventure."
          />
        </Helmet>
        <App />
      </BrowserRouter>
    </HelmetProvider>
    {/* </Provider> */}
  </StrictMode>
);
