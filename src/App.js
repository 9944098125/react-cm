import BaseRoutes from "./Routing/routes";
import { Provider } from "react-redux";

import store from "./Redux/Store/Store";

function App() {
  // Providing the store of redux to integrate with Application
  return (
    <Provider store={store}>
      <BaseRoutes />
    </Provider>
  );
}

export default App;
