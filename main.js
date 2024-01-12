const fs = require("fs");

function main() {
  const saveData = readJson();
  console.log("saveData: ", saveData);
}

function readJson() {
  try {
    const jsonData = fs.readFileSync("./data/saveData.json", "utf-8");
    const data = JSON.parse(jsonData);

    return data;
  } catch (error) {
    console.log("File doesnt exists, creating a new one.");

    const initialSave = {};

    saveJson(initialSave);
    return initialSave;
    //todo SAVE HERE
  }
}

function saveJson(data) {
  try {
    const jsonData = JSON.stringify(data, null, 4);
    fs.writeFileSync("./data/saveData.json", jsonData);

    console.log("Data Saved.");
  } catch (error) {
    console.log("Error on saving data. ", error);
  }
}

main();
