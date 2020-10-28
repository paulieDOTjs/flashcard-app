import MainPage from "./mainPage/MainPage";

interface pageObj {
  readonly title: string;
  readonly url: string;
  readonly page: () => JSX.Element;
}

export const pages: pageObj[] = [
  {
    title: "Home",
    url: "/",
    page: MainPage,
  },
];
