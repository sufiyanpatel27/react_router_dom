import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const One = () => {
    return (
      <div>
          <Link to="/">Home</Link>
          <Link to="/One">One</Link>
          <Link to="/Two">Two</Link>
      </div>
    )
  }
  
  export default One;