import { createContext, useState } from 'react';

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        username: null,
        avatar_url:
        "https://www.theyta.com/profiles/profile_placeholder.png"
      })

    return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}> 
        {children}
    </CurrentUserContext.Provider>
    );
};