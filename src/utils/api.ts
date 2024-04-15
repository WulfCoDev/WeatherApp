const apiKey = "cae9801a2bmshd5b08ef49349e51p1df54cjsna5248a6cf889";

export async function fetchRealTimeWeather(location) {
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${encodeURIComponent(
    location
  )}&days=10`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    console.log("Getting weather for:", location);
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
