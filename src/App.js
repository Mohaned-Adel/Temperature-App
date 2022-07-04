import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "e36ed364400282e43250b6c4c0274d44";

class App extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };

  //Display city and country in Weather component
  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`
    );

    const data = await res.json();

    console.log(data);

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please enter City and Country",
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
