import React, { useContext } from 'react'
import ItemContext from '../../utils/ItemContext'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const Form = () => {
  
  // Item Context will return an object, destrutor it and pull off what need
  const {
    item, 
    handleInputChange,
    handleAddItem
  } = useContext(ItemContext)
  
  return(
    <form>
      <p>
        <label htmlFor="item">item</label>
        <TextField
          type="text"
          name="item"
          id="item"
          value={item}
          onChange={handleInputChange}
          />
      </p>
      <p>
        <Button variant="contained" color="primary" onClick={handleAddItem}>Add Item</Button>
      </p>
    </form>
  )
}

export default Form