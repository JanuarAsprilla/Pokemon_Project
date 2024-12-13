import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RoutesApp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesApp;
