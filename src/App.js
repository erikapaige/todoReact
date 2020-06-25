// bring in useState hook to set setState
import React, { useState } from 'react'
// bring in context folder
import ItemContext from './utils/ItemContext'
// bring in needed components
import FullList from './components/FullList'
import Form from './components/Form'
import Navbar from './components/Navbar'
// bring in elements from material-ui
import Grid from '@material-ui/core/Grid'


const App = () => {

  // create an item and set item state function (via useeState hook) to call values
  const [itemState, setItemState] = useState({
    // items from user input
    item: '',
    // store items created
    items: []
  })

  // writing input change directly onto itemState
  itemState.handleInputChange = event => {
    // set state and update item
    setItemState({ ...itemState, [event.target.name]: event.target.value })
  }

  // handling button click
  itemState.handleAddItem = event => {
    event.preventDefault()
    // add an item to array, so need to make local copy of items array
    // create local version by parsing stringified array
    let items = JSON.parse(JSON.stringify(itemState.items))
    // push new items into the array
    items.push({
      text: itemState.item,
      isDone: false
    })
    // new item state (set state, pass in changes, then set to empty string so input clears)
    setItemState({ ...itemState, items, item: '' })
  }

  // responsible for deleting item
  itemState.handleRemoveItem = () => {

  }
  return (
    <ItemContext.Provider value={itemState}>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Form />
        </Grid>
        <Grid item xs={6}>
          <FullList />
        </Grid>
      </Grid>
    </ItemContext.Provider>
  )
}

export default App