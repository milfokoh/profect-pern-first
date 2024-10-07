import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './site/UserStore';
import SectionStore from './site/SectionStore';

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Context.Provider
		value={{
			user: new UserStore(),
			section: new SectionStore(),
		}}
	>
		<App />
	</Context.Provider>
);
