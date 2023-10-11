import {
  Tabs,
  Tab,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import TabPanel from "./TabPanel";
import BeliMobilContent from "./BeliMobilContent";
import JualMotor from "./JualMotor";
import RentalMobil from "./RentalMobil";
import Bengkel from "./Bengkel";
import OtherContent from "./OtherContent";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabData = [
  {
    label: "Beli Mobil",
    icon: "/images/beli-mobil.png",
    iconGray: "/images/beli-mobil-gray.png",
  },
  {
    label: "Jual Mobil",
    icon: "/images/jual-mobil.png",
    iconGray: "/images/jual-mobil-gray.png",
  },
  {
    label: "Beli Motor",
    icon: "/images/ram-motor.png",
    iconGray: "/images/ram-motor-gray.png",
  },
  {
    label: "Rental Mobil",
    icon: "/images/ram-rental.png",
    iconGray: "/images/ram-rental-gray.png",
  },
  {
    label: "Service Mobil",
    icon: "/images/ram-service.png",
    iconGray: "/images/ram-service-gray.png",
  },
];


const tabPanelData = [
  {
    component: <BeliMobilContent />,
  },
  {
    component: <OtherContent />,
  },
  {
    component: <JualMotor />,
  },
  {
    component: <RentalMobil />,
  },
  {
    component: <Bengkel />,
  },
];


const StyledTab = styled(Tab)(({theme}) => ({

}))

export default function TabsComponent() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SectionWrapper>
      <Container sx={{ marginBottom: '1rem' }}>
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: -5 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="tab"
              sx={{ display: "flex", alignItems: "center", marginTop: isMobile ? -2 : 0, }}
            >
              {tabData.map((data, index) => (
                <Tab
                  key={index}
                  label={data.label}
                  icon={
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: isMobile ? "row" : "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={value === index ? data.icon : data.iconGray}
                        alt={data.label}
                        width={isMobile ? "40" : "65"}
                      />
                    </Box>
                  }
                  iconPosition={isMobile ? "top" : "start"}
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: value === index ? "#F5F6FA" : "inherit",
                    color: "#BEC5D3",
                    fontWeight: "bold",
                    fontSize: "1rem", 
                    width: "calc(100% / 5)",
                    minWidth: "unset",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    flexGrow: 1,
                    margin: isMobile ? '0.2rem 0' : 0,
                  }}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>
        </Box>
      </Container>
      <Box sx={{ width: "100%" }}>
        {tabPanelData.map((data, index) => (
          <TabPanel key={index} value={value} index={index}>
            {data.component}
          </TabPanel>
        ))}
      </Box>
    </SectionWrapper>
  );
}
