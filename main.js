const fs = require("fs");

function main() {
  console.log("hwllo rold");
}

function saveJson() {}

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

main();
