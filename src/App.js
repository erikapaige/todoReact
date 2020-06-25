import React, { useState } from 'react'
import ItemContext from './utils/ItemContext'
import FullList from './components/FullList'
import Form from './components/Form'
import Navbar from './components/Navbar'

const App = () => {

  const [itemState, setItemState] = useState({
    item: '',
    items: []
  })

  itemState.handleInputChange = event => {
    setItemState({ ...itemState, [event.target.name]: event.target.value })
  }

  itemState.handleAddItem = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(itemState.items))
    items.push({
      text: itemState.item,
      isDone: false
    })
    setItemState({ ...itemState, items, item: '' })
  }

  return (
    <ItemContext.Provider value={itemState}>
      <Navbar />
      <Form />
      <FullList />
    </ItemContext.Provider>
  )
}

export default App