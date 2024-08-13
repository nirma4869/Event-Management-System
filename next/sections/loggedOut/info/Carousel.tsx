import i18n from "@/locales/i18n";
import { Stack, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// ----------------------------------------------------------------------

type ItemProps = {
  title: string;
  subtitle: string;
};

// ----------------------------------------------------------------------

const EventInfoCarousel = () => {
  const theme = useTheme();

  const CAROUSEL_ITEMS: ItemProps[] = [
    {
      title: i18n.t("name"),
      subtitle: i18n.t("loggedOut.carousel.slogan.subtitle"),
    },
    {
      title: i18n.t("loggedOut.carousel.create.title"),
      subtitle: i18n.t("loggedOut.carousel.create.subtitle"),
    },
    {
      title: i18n.t("loggedOut.carousel.login.title"),
      subtitle: i18n.t("loggedOut.carousel.login.subtitle"),
    },
    {
      title: i18n.t("loggedOut.carousel.overview.title"),
      subtitle: i18n.t("loggedOut.carousel.overview.subtitle"),
    },
  ];

  const carouselSettinsg = {
    speed: 500,
    arrows: false,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    rtl: true,
  };

  return (
    <Slider {...carouselSettinsg}>
      {CAROUSEL_ITEMS.map((item) => (
        <Stack key={item.title} spacing={2}>
          <Typography
            variant="h1"
            color="primary"
            sx={{ display: "grid", placeItems: "center" }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="h5"
            color={theme.palette.grey[600]}
            sx={{ display: "grid", placeItems: "center" }}
          >
            {item.subtitle}
          </Typography>
        </Stack>
      ))}
    </Slider>
  );
};

export default EventInfoCarousel;
