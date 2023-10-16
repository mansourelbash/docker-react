import { useState, Component } from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import FetchData from './components/FetchData'
import FetchData2 from './components/FetchData2'
import FetchData3 from './components/FetchData3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <ErrorBoundary>
        <MyComponent/>
        <FetchData />
        <FetchData2 />
        <FetchData3 />
      </ErrorBoundary>

      
    </>
  )
}

class MyComponent extends Component {
  render() {
    return <div>This is a component. Mansour bashabsheh </div>;
  }
}
export default App
