

const Form = (props) => {
    return (
      <form onSubmit={props.getWeather}>
        <input type="text" placeholder="City" name="city" />
        <input
          name="country"
          type="text"
          placeholder="Country"
        />
        <button onSubmit={props.getWeather}>Get Weather</button>
      </form>
    );
  }

export default Form;
