import { useMediaQuery } from "react-responsive";

export const useResponsiveVideo = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTab = useMediaQuery({ query: "(max-width: 768px)" });

  return { isDesktop, isTab};
};
