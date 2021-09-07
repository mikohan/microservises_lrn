import React from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';

const App = () => {
  return (
    <div className="container">
      <h1>Crate Post </h1>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
};

export default App;
