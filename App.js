import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import NavigatorStack from "./routes";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigatorStack />
      </NavigationContainer>
    </Provider>
  );
}
