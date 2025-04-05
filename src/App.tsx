import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
