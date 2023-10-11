import { LocationCity } from '@mui/icons-material'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

type Props = {
    image: string
    merk: string
    price: number
    location: string
}

export default function RecommendationCard({image, merk, price, location}: Props) {
  return (
    <Card sx={{margin: '18px 10px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={merk}
        />
        <CardContent>
          <Typography variant="h6" component={"p"} color={'bgNav'}>
            {merk}
          </Typography>
          <Typography variant='h6' component={'p'} color={'primary'}>Rp {price}</Typography>
          <Typography variant='subtitle2' component={'div'} sx={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <LocationCity />
            {location}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}