import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Carousel from "./carousel/Carousel";
import ResultCard from "./card/ResultCard";

type ResultProps = {
  activeButton: string | null;
};

const ResultContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5f6fa",
  padding: "2rem 1rem",
}));

const results = [
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
  {
    detail: "This is Car",
    amount: "4k",
  },
];

export default function Result({ activeButton }: ResultProps) {
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      },
    },
  ]

  switch (activeButton) {
    case "Mitsubishi":
      return (
        <ResultContainer>
          <Carousel dots={false} slidesToScroll={1} slidesToShow={5} responsive={responsive}>
            {results.map((res, index) => (
              <ResultCard
                key={index}
                title="Mitsubishi"
                amount={res.amount}
                detail={res.detail}
              />
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Abc":
      return (
        <ResultContainer>
          <Carousel dots={false} slidesToScroll={1} slidesToShow={5} responsive={responsive}>
            {results.map((res, index) => (
              <ResultCard
                key={index}
                title="Abc"
                amount={res.amount}
                detail={res.detail}
              />
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Def":
      return (
        <ResultContainer>
          <Carousel dots={false} slidesToScroll={1} slidesToShow={5} responsive={responsive}>
            {results.map((res, index) => (
              <ResultCard
                key={index}
                title="Def"
                amount={res.amount}
                detail={res.detail}
              />
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Drea":
      return (
        <ResultContainer>
          <Carousel dots={false} slidesToScroll={1} slidesToShow={5} responsive={responsive}>
            {results.map((res, index) => (
              <ResultCard
                key={index}
                title="Drea"
                amount={res.amount}
                detail={res.detail}
              />
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Kill":
      return (
        <ResultContainer>
          <Carousel dots={false} slidesToScroll={1} slidesToShow={5} responsive={responsive}>
            {results.map((res, index) => (
              <ResultCard
                key={index}
                title="Kill"
                amount={res.amount}
                detail={res.detail}
              />
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Reas":
      return (
        <ResultContainer>
          <Carousel dots={false} slidesToScroll={1} slidesToShow={5} responsive={responsive}>
            {results.map((res, index) => (
              <ResultCard
                key={index}
                title="Reas"
                amount={res.amount}
                detail={res.detail}
              />
            ))}
          </Carousel>
        </ResultContainer>
      );
    case "Mnb":
      return (
        <ResultContainer>
          <Carousel dots={false} slidesToScroll={1} slidesToShow={5} responsive={responsive}>
            {results.map((res, index) => (
              <ResultCard
                key={index}
                title="Mnb"
                amount={res.amount}
                detail={res.detail}
              />
            ))}
          </Carousel>
        </ResultContainer>
      );
    default:
      return null;
  }
}
