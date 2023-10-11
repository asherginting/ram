import { styled } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const StyledBox = styled("div")({
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export default function ChoiceCard({ children }: Props) {
  return <StyledBox>{children}</StyledBox>;
}
