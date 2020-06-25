// bring in react
import React from 'react'
// bring in elements from Material UI
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneIcon from '@material-ui/icons/Done'

const useStyles = makeStyles(theme => ({
  done: {
    backgroundColor: 'green'
  },
  notDone: {
    backgroundColor: 'gray'
  }
}))

// item component
// accepts props from FullList.js
const Item = props => {
  
  const classes = useStyles()
  
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={props.item.isDone ? classes.done : classes.notDone}>
          <DoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.item.text} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Item