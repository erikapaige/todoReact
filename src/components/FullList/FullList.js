// bring in react and context
import React, { useContext } from 'react'
// import in context folder
import ItemContext from '../../utils/ItemContext'
import Item from '../Item'
// import elements from material-ui
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'

// list component
const FullList = () => {
  
  // destructor item, so can pull off what need from context hook
  // need items array from useContext hook
  const { items } = useContext(ItemContext)

  return (
    // render items want to see
    <Paper>
      <List>
        {
          // take items and map over them, each new item creates an item component
          // have to give it a text prop b/c item is not being maintained in state or context
          items.map(item => <Item item={item} />)
        }
      </List>
    </Paper>
  )
}

export default FullList