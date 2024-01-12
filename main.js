const fs = require("fs");

function main() {
  const saveData = readJson();

  if (saveData) {
    const dataTest = { name: "shero" };
    updateJson(saveData.data, dataTest);

    saveJson(saveData);
  }
}

function readJson() {
  try {
    const jsonData = fs.readFileSync("./data/saveData.json", "utf-8");
    const data = JSON.parse(jsonData);

    return data;
  } catch (error) {
    console.log("File doesnt exists, creating a new one.");

    const initialSave = {
      data: [],
    };

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

function updateJson(container, element) {
  // returns index pag waala -1
  const itemIndex = container.findIndex((item) => item.name === element.name);

  if (itemIndex !== -1) {
    container[itemIndex] = element;
  } else {
    container.push(element);
  }
}

main();
