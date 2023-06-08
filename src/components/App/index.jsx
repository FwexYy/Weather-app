import { useState } from "react";
import {
  Card,
  Search,
  SearchInput,
  SearchButton,
  SearchButtonImage,
  Icon,
  Temperature,
  ColImage,
  HumidityWind,
  City,
  Details,
  Col,
} from "./styles";
import search from "../../assets/images/search.png";
import rain from "../../assets/images/rain.png";
import humidity from "../../assets/images/humidity.png";
import wind from "../../assets/images/wind.png";

function App() {
  return (
    <Card>
      <Search>
        <SearchInput type="text" placeholder="Найти город" spellcheck="false" />
        <SearchButton>
          <SearchButtonImage src={search} alt="1" />
        </SearchButton>
      </Search>

      <div class="weather">
        <Icon src={rain} alt="2" />
        <City>22°c</City>
        <Temperature>NP</Temperature>
        <Details>
          <Col>
            <ColImage src={humidity} alt="3" />
            <div>
              <HumidityWind>30%</HumidityWind>
              <p>Humidity</p>
            </div>
          </Col>
          <Col>
            <ColImage src={wind} alt="4" />
            <div>
              <HumidityWind>10 km/h</HumidityWind>
              <p>Wind speed</p>
            </div>
          </Col>
        </Details>
      </div>
    </Card>
  );
}

export default App;
