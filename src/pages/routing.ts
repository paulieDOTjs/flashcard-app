import HomePage from "./homePage/HomePage";
import LoginPage from "./loginPage/LoginPage";

interface pageObj {
  readonly title: string;
  readonly url: string;
  readonly page: () => JSX.Element;
}

export const pages: pageObj[] = [
  {
    title: "Home",
    url: "/home",
    page: HomePage,
  },
  {
    title: "Login",
    url: "/login",
    page: LoginPage,
  },
];
