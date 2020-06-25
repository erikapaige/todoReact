// bring in react and useContext so can consume context
import React, { useContext } from 'react'
// bring in context folder
import ItemContext from '../../utils/ItemContext'
// bring in material-ui elements
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  form: {
    minHeight: '200px',
    paddingTop: '20px'
  },
  input: {
    marginLeft: theme.spacing(1),
  }
}))

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
  
  const classes = useStyles()
  
  // return of JSX
  return (
    <Paper className={classes.form}>
      <form onSubmit={handleAddItem}>
        <TextField
          className={classes.input}
          label="Item"
          type="text"
          name="item"
          id="item"
          value={item}
          onChange={handleInputChange} />
        <Button variant="contained" color="primary" onClick={handleAddItem}>Add Item</Button>
      </form>
    </Paper>
  )
}

export default Form