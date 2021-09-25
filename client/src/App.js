import React from 'react';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
// Commnet

const App = () => {
  return (
    <div className="container">
      <h1>Crate Post Now </h1>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
};

export default App;
