import { Suspense } from 'react'
import './App.css'
import Issues from './components/Issues/Issues'

const issuesPromise = fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
  .then(res => res.json())


function App() {


  return (
    <>
      <h1 className='bg-green-500 '>amar sonar bangla</h1>
      <Suspense>
        <Issues issuesPromise={issuesPromise}></Issues>
      </Suspense>
    </>
  )
}

export default App
