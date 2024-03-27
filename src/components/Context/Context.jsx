



import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const MyContext = createContext();

const Context = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState("rating"); 
  



  return (
    <MyContext.Provider value={{ books, setBooks,  sortBy, setSortBy }}>
      {children}
    </MyContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.node.isRequired
};

export { Context, MyContext };