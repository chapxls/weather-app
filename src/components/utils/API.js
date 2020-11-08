// Exporting data in JSON from API,
// to switch data from another API, tweak array values in List.js and Card.js

export const getData = () =>
  fetch("http://wttr.in/Stockholm?format=j1").then((response) =>
    response.json()
  );
