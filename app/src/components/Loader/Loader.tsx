import React from 'react'
import clsx from 'clsx'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'

import './styles.scss'

interface LoaderProps {
  className?: string
  size?: number | string
  disableGutters?: boolean
  infinite?: boolean
  overlay?: boolean
}

export const Loader = (props: LoaderProps) => {
  const { className, size, disableGutters, infinite, overlay } = props

  const containerClasses = clsx(className, 'Loader', {
    'Loader-infinite': infinite,
    'Loader-overlay': overlay,
  })

  return (
    <Container className={containerClasses} disableGutters={disableGutters} maxWidth={false}>
      <CircularProgress size={size} />
    </Container>
  )
}
