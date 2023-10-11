import { Button, styled } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick?: () => void;
  disabled?: boolean;
  startIcon?: any;
  size?: "large" | "small" | "medium";
  sx?: any;
};

const StyledButtonPrimary = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: "30px",
  textTransform: "capitalize",
  //   width: '30%',
  padding: "auto .8rem",
}));

const StyledButtonSecondary = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: "30px",
  textTransform: "capitalize",
  //   width: '30%',
  padding: ".8rem",
}));

export function ButtonSecondary({ children, ...props }: Props) {
  return (
    <StyledButtonSecondary variant="contained" color="secondary" {...props}>
      {children}
    </StyledButtonSecondary>
  );
}

export function ButtonPrimary({ children, ...props }: Props) {
  return (
    <StyledButtonPrimary variant="contained" color="primary" {...props}>
      {children}
    </StyledButtonPrimary>
  );
}
