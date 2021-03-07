/*-- API for fetching Weather Data --*/

const getWeather = async (data = {}) =>
  await fetch("/get-weather", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export { getWeather };
