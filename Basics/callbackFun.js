function fetchData(callback) {
  const data1 = "dsafas";
  console.log(callback(data1));
  // fetching data from server
  setTimeout(() => {
    const data = "This is some data from server";
    // Call t;he callback function and pass the data to it
    callback(data)
  }, 3000);
}

function processData(data) {
  console.log("Data received:", data);
}

fetchData(processData);
