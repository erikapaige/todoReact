import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { List, IconButton, DeleteButton } from '@material-ui/core'
import DoneIcon from '@material-ui/core/Done'
import ClearIcon from '@material-ui/core/Icon'

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

        </ListItemText>
    </ListItem>
  )
}

export default Item