import { Typography, styled } from "@mui/material"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const StyledHeading = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary
}))

export const Heading3 = ({children}: Props) => {
    return <StyledHeading variant="h3">{children}</StyledHeading> 
}

export const Heading4 = ({children}: Props) => {
    return <StyledHeading variant="h4">{children}</StyledHeading> 
}

export const TextColor = ({children}: Props) => {
    return <StyledHeading>{children}</StyledHeading> 
}

