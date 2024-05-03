import { createContext, useState } from 'react';

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        username: null,
        name: null,
        avatar_url:
          null
      })

    return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}> 
        {children}
    </CurrentUserContext.Provider>
    );
};