import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      
      {/* Handle 404 */}
      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  </BrowserRouter>
);
