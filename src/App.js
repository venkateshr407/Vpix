import React from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageList from "./Component/ImageList";
import DefaultPage from "./Component/DefaultPage";
import SearchBar from "./Component/SearchBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (team) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: team },
      headers: {
        Authorization: "Client-ID nq563ur4SWj9HTF0bhi9D8LU9Fe4eKM_aQVJ6ZsIbgE",
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={DefaultPage} />
        </div>
        <Route path="/search">
          <div>
            <SearchBar onSubmit={this.onSearchSubmit} />
            {/* {this.state.images.length}  */}
            <ImageList images={this.state.images} />
          </div>
        </Route>
      </Router>
    );
  }
}
export default App;
