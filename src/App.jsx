import React from 'react'
import AppRouter from './router/AppRouter'
import JobProvider, { JobContext } from './Context'

const App = () => {
  return (
    <div>
      <JobProvider>
        <AppRouter />
      </JobProvider>
    </div>
  )
}

export default App