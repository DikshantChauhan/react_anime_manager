import { BrowserRouter, Route, Switch } from "react-router-dom";
import AnimeDetailsPage from "./Pages/AnimeDetails.Page";
import HomePage from "./Pages/Home.Page";

function App() {
  return (
    <div className={`max-w-7xl mx-auto py-4 xl:px-4`}>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/anime/detail/:id">
            <AnimeDetailsPage></AnimeDetailsPage>
          </Route>

          <Route>
            <p>Page does not exist</p>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
