import React, { Suspense } from 'react';
import Copyright from './components/Copyright';
import AppRouter from './urls';

const App = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <AppRouter />
	  <Copyright />
  </Suspense>
)

export default App;