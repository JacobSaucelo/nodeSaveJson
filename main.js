const fs = require("fs");

function main() {
  console.log("hwllo rold");
}

function readJson() {
  try {
    const jsonData = fs.readFileSync("/data/saveData.json", "utf-8");
    const data = JSON.parse(jsonData);

    return data;
  } catch (error) {
    console.log("File doesnt exists, creating a new one.");

    //todo SAVE HERE
  }
}

function saveJson(data) {
  try {
    const jsonData = JSON.stringify(data, null, 4);
    fs.writeFileSync("/data/saveData.json");

    console.log("Data Saved.");
  } catch (error) {
    console.log("Error on saving data. ", error);
  }
}

main();
