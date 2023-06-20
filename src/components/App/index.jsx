import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  Card,
  Search,
  SearchInput,
  SearchButton,
  SearchButtonImage,
  Icon,
  Temperature,
  ColImage,
  DetailsInfo,
  City,
  Details,
  Col,
  ContentWrapper,
} from "./styles";
import search from "../../assets/images/search.png";
import rain from "../../assets/images/rain.png";
import humidity from "../../assets/images/humidity.png";
import wind from "../../assets/images/wind.png";
import sunset from "../../assets/images/sunset.svg";
import arrow from "../../assets/images/arrow.svg";

import axios from "axios";
import { useGeolocation } from "../../hooks/useGeolocation";
import { COORDS_WEATHER_URL, LOCATION_WEATHER_URL } from "../../constants";
import { getTime } from "../../utils/getTime";

/* todo данные, фото, опред моей локи и подргузка при запуске. от 0 - 30 смена цвета от темп(от холод к тепл), стрелка с направлением вртеа   */

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const { lat, lon } = useGeolocation();

  useEffect(() => {
    if (lat) {
      getData(COORDS_WEATHER_URL(lat, lon));
    }
  }, [lat, lon]);

  const getData = (url) => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      getData(LOCATION_WEATHER_URL(location));
      setLocation("");
    }
  };

  const handleSearchButton = () => {
    getData(LOCATION_WEATHER_URL(location));
    setLocation("");
  };
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log();
  }, []);

  return (
    <Card>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            image: " linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
          },
          particles: {
            number: { value: 10, density: { enable: true, value_area: 600 } },
            color: { value: "#ffffff" },
            shape: {
              type: "square",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.25,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 29,
              random: true,
              anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 300,
              color: "#ffffff",
              opacity: 0,
              width: 0,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "top",
              straight: true,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false, mode: "repulse" },
              onclick: { enable: false, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 800, line_linked: { opacity: 1 } },
              bubble: {
                distance: 790,
                size: 79,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: { distance: 400, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
      <ContentWrapper>
        <Search>
          <SearchInput
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={searchLocation}
            type="text"
            placeholder="choose city"
          />
          <SearchButton onClick={handleSearchButton}>
            <SearchButtonImage src={search} alt="1" />
          </SearchButton>
        </Search>

        <div className="weather">
          <Icon src={rain} alt="2" />
          <City>
            {data.main ? Math.round(data.main.temp - 273.15) : null}°c
          </City>
          <Temperature>{data.name}</Temperature>
          <Details>
            <Col>
              <ColImage src={humidity} alt="3" />
              <div>
                <DetailsInfo>
                  {data.main ? data.main.humidity : null} %
                </DetailsInfo>
                <p>Humidity</p>
              </div>
            </Col>
            <Col>
              <ColImage src={wind} alt="4" />
              <div>
                <DetailsInfo>
                  {data.main ? data.wind.speed : null}m/s
                </DetailsInfo>
                <p>Wind speed</p>
              </div>
            </Col>

            <Col>
              <ColImage src={sunset} alt="sunset" />
              <div>
                <DetailsInfo isTime={true}>
                  {data.sys
                    ? `${getTime(data.sys.sunrise)} - ${getTime(
                        data.sys.sunset
                      )}`
                    : null}
                </DetailsInfo>
                <p>Daylight time</p>
              </div>
            </Col>
            <Col>
              <ColImage src={arrow} deg={data.wind ? data.wind.deg : null} />
              <div>
                <p>Wind direction</p>
              </div>
            </Col>
          </Details>
        </div>
      </ContentWrapper>
    </Card>
  );
}

export default App;
