import { Main } from "./components/main/main.index";
import { NavBar } from "./components/nav/nav.index";
import { Shorten } from "./components/Shorten/Shorten.index";
import { Statistics } from "./components/Statistics/Statistics.index";

export const App = () => {
  return (
    <>
      <div role="main">
        <NavBar />
        <Main />
      </div>
      <div role="application">
        <Shorten />
        <Statistics />
      </div>
    </>
  );
};
