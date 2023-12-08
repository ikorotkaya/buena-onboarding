import ONBOARDING_PAGES from "../../onboarding-pages.json";

export const pages = ONBOARDING_PAGES;

export const getCurrentPageIndex = (): number => {
  const pathname = window.location.pathname;
  
  if (!pathname.startsWith("/onboarding/")) return -1;

  const pageName = pathname.split("/")[2];

  const pageIndex = ONBOARDING_PAGES.indexOf(pageName);

  return pageIndex;
}