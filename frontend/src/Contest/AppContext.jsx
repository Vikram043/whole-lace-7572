import { createContext,useState } from 'react';

export const AppContext = createContext({
  authState: { isAuth: false, username: null },
  loginUser: () => {},
  logoutUser: () => {},
});

const AppContextProvider = (props) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    username: null,
  });

  const loginUser = (username) => {
    setAuthState({
      isAuth: true,
      username: username,
    });
  };

  const logoutUser = () => {
    setAuthState({
      isAuth: false,
      username: null,
    });
  };

  let providerState = {
    authState,
    loginUser,
    logoutUser,
  };

  if (window.Cypress) {
    window.store = providerState;
  }

  return (
    <AppContext.Provider value={providerState}>
    {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;