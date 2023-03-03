import React, { useContext } from 'react'
import Box from '@mui/material/Box'

import { AppContext } from './context'
import { ListItem } from './ListItem'
import { Loader } from './Loader'

export const List = () => {
  const { users } = useContext(AppContext)

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {users ? users.map((user) => <ListItem key={user?.id} user={user} />) : <Loader />}
    </Box>
  )
}
