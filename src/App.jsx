import Header from '../src/components/Header.jsx'
import List from '../src/components/List.jsx'

import { useState } from 'react'

function App () {
  const [lastName, setLastName] = useState('')
  const [ListOfNames, setListOfNames] = useState([])

  const handleSubmit = e => {
    e.preventDefault()

    setListOfNames([...ListOfNames, lastName])

    console.log(ListOfNames)
  }
  return (
    <>
      <Header name='SHOE_APP' />
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              className='border-2'
              onChange={e => setLastName(e.target.value)}
            />
            <button className='border-4' type='submit'>add</button>
            
            <h1>{lastName}</h1>
          </div>
        </form>
      </section>
    </>
  )
}

export default App
