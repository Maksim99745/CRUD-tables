import { SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import LoaderSpinner from './components/LoaderSpinner';
import { router } from './core/routing/router';

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <RouterProvider router={router} fallbackElement={<LoaderSpinner />} />
      </div>
    </SnackbarProvider>
  );
}
