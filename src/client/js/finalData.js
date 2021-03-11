/*-- API for fetching all key data values from server --*/

const getData = async (data = {}) => {
  return await fetch("/get-data", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export { getData };
