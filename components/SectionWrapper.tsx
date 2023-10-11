import { ReactNode } from 'react'
import {Box} from '@mui/material'

type Props = {
    children: ReactNode,
    bgColor?: string
}

export default function SectionWrapper({children, bgColor}: Props) {
  return (
    <Box sx={{ py: '4rem', backgroundColor: bgColor }}>
        {children}
    </Box>
  )
}