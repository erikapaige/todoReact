// bring in react and context
import React, { useContext } from 'react'
// import in context folder
import ItemContext from '../../utils/ItemContext'
import Item from '../Item'
import List from '@material-ui/core/List'

// list component
const FullList = () => {
  
  // destructor item, so can pull off what need from context hook
  const { items } = useContext(ItemContext)

  return (
    <List>
      {
        items.map(item => <Item text={item.text} />)
      }
    </List>
  )
}

export default FullList