import React,{createContext} from 'react'
import {useState} from "react";
//the theme is light by default
const GlobalContext = createContext(false)

const GlobalProvider = ({children}) => {
	//global state -> theme
	const [theme, setTheme] = useState(false)

	return (
		<GlobalContext.Provider value={{
			theme,setTheme
		}}>
			{children}
		</GlobalContext.Provider>
	)
}

export {GlobalProvider, GlobalContext}

/*
	when the value of theme changes, we rerender the page.
*/

/*

the toggle btn will be present in the settings menu
when the user change the option to dark, the theme of private route changes to dark theme

*/

/*

the theme color will become global and will wait for its activation


*/