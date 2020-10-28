import MainPage from "./mainPage/MainPage";
import LoginPage from "./loginPage/LoginPage";

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
  {
    title: "Login",
    url: "/login",
    page: LoginPage,
  },
];
