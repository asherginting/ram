import { ShieldMoon } from '@mui/icons-material'
import { Box, Typography, styled } from '@mui/material'
import React from 'react'

type Props = {
    title: string
    description: string
}

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
})

export default function WhyCard({title, description}: Props) {
  return (
    <StyledBox>
        <ShieldMoon />
        <Box>
            <Typography variant='h6' component={'h4'} color={'bgNav'}>{title}</Typography>
            <Typography variant='body2' component={'p'} color={'#fff'}>{description}</Typography>
        </Box>
    </StyledBox>
  )
}