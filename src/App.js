import React from 'react'
import AddPost from './components/integratedComponents/addPostLayout/AddPost';
import PostDetailComponent from './components/integratedComponents/postDetailLayout/PostDetailComponent';
import PostComponent from './components/integratedComponents/postLayout/PostComponent';
import DisplayDetails from './components/unitComponents/displayDetails/DisplayDetails';
// import Router from './Router';


function App() {

  return (
    <div className="App">
      <PostComponent />
      {/* <div>----------------------------------------------------------------</div> */}
      {/* <PostDetailComponent /> */}
      {/* <div>----------------------------------------------------------------</div> */}
      {/* <AddPost /> */}
      {/* <DisplayDetails label={'Name'} data={'Awsaf Ambar'} /> */}
    </div>
  );
}

export default App;
