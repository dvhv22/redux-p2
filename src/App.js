import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom';
import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import NaBar from './app/nabar/NaBar';
import SinglePostpage from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostform';

function App() {
  return (

    <div className="App">
      <Router>
        <NaBar />
        <br /><br />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


          <Routes>
            <Route path="/postlist"
              element={<PostsList />} />


            <Route path="/addform"
              element={<AddPostForm />} />

            <Route exact path="/postlist/:postId" element={<SinglePostpage />} />
            <Route exact path="/editpost/:postId" element={<EditPostForm />} />



          </Routes>

        </header>
      </Router>

    </div >

  );
}

export default App;
