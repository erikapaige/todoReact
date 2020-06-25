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

// item component
// accepts props from FullList.js
const Item = props => {
  // takes props from List
  return (
    <ListItem>
        <ListItemAvatar>
          <Avatar>

          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} />
        <ListItemSecondaryAction>
            <IconButton>

            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Item