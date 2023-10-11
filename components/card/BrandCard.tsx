import { Paper, Typography } from '@mui/material'


type Props = {
    brand: string
    amount: string
    isActive: string
    handleClick?: any
}


export default function BrandCard({brand, isActive, amount, handleClick }: Props) {
  return (
    <Paper elevation={0} component={'div'} onClick={handleClick} sx={{textAlign: 'center', margin: '10px'}}>
        <Paper elevation={2} sx={{width: {xs: '100%', md: '50%'}, height: 100, margin: '10px auto', border: isActive === brand ? '1px solid #F47B2B' : '1px solid transparent'}} />
        <Typography variant='h6'>{brand}</Typography>
        <Typography variant='subtitle2'>{amount} terjual</Typography>
    </Paper>
  )
}