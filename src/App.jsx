import { Suspense } from 'react'
import './App.css'
import Issues from './components/Issues/Issues'

const issuesPromise = fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
  .then(res => res.json())


function App() {


  return (
    <>

      <Suspense>
        <Issues issuesPromise={issuesPromise}></Issues>
      </Suspense>
    </>
  )
}

export default App



// import { Suspense, useState } from 'react'
// import './App.css'
// import Issues from './components/Issues/Issues'

// const issuesPromise = fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
//   .then(res => res.json())

// function App() {
//   const [filter, setFilter] = useState('all'); // 'all', 'open', 'closed'

//   return (
//     <>
//       <div className='bg-green-500 p-4 text-white'>
//         <h1 className='text-2xl font-bold'>Issue Tracker</h1>

//         {/* Filter Buttons */}
//         <div className='flex gap-2 mt-4'>
//           <button
//             onClick={() => setFilter('all')}
//             className={`px-4 py-2 rounded-md transition-all ${filter === 'all'
//               ? 'bg-white text-green-600 font-bold'
//               : 'bg-green-600 text-white hover:bg-green-700'
//               }`}
//           >
//             All Issues
//           </button>

//           <button
//             onClick={() => setFilter('open')}
//             className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${filter === 'open'
//               ? 'bg-white text-green-600 font-bold'
//               : 'bg-green-600 text-white hover:bg-green-700'
//               }`}
//           >
//             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//             Open
//           </button>

//           <button
//             onClick={() => setFilter('closed')}
//             className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${filter === 'closed'
//               ? 'bg-white text-green-600 font-bold'
//               : 'bg-green-600 text-white hover:bg-green-700'
//               }`}
//           >
//             <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//             Closed
//           </button>
//         </div>
//       </div>

//       <Suspense fallback={<div className="text-center p-8"><span class="loading loading-ring loading-xl"></span></div>}>
//         <Issues issuesPromise={issuesPromise} filter={filter} />
//       </Suspense>
//     </>
//   )
// }

// export default App