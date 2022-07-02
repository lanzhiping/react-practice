import { useEffect, useState } from 'react';
import Counter from './Counter';

const LongBlog = () => {
  const [state, setState] = useState({ Component: null });

  useEffect(() => {
    import('./LongBlog').then((result) => {
      setState({Component: result.default})
    })
  }, [])

  return state.Component && <state.Component />
}

function App() {
  return (
    <div className="App">
       <div>
        <h2>Interactive components</h2>
        <Counter />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h2>Static components</h2>
        <LongBlog />
      </div>
    </div>
  );
}

export default App;
