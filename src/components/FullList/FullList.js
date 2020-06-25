// bring in react and context
import React, { useContext } from 'react'
// import in context folder
import ItemContext from '../../utils/ItemContext'
import Item from '../Item'
import List from '@material-ui/core/List'

// list component
const FullList = () => {
  
  // destructor item, so can pull off what need from context hook
  // need items array from useContext hook
  const { items } = useContext(ItemContext)

  return (
    // render items want to see
    <List>
      {
        // take items and map over them, each new item creates an item component
        // have to give it a text prop b/c item is not being maintained in state or context
        items.map(item => <Item text={item.text} />)
      }
    </List>
  )
}

export default FullList