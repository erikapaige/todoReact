import React, { useContext } from 'react'
import List from '@material-ui/core/List'


const FullList = () => {
  
  // pull off what need from context hook
  const { items } = useContext(ItemContext)

  return (
    <List>
      {
        items.map(item=> <Item text={item.text} />)
      }
    </List>
  )
}

export default FullList