// bring in react and useContext so can consume context
import React, { useContext } from 'react'
// bring in context folder
import ItemContext from '../../utils/ItemContext'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

// component function
const Form = () => {
  
  // receive data from context
  // const data = useContext(ItemContext)
  // console.log(data)

  // ItemContext (data above) will return an object, destructor it and pull off what need
  const {
    item, 
    handleInputChange,
    handleAddItem
  } = useContext(ItemContext)
  
  // return of JSX
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
        <Button 
          variant="contained"
          color="primary"
          onClick={handleAddItem}>Add Item
        </Button>
      </p>
    </form>
  )
}

export default Form