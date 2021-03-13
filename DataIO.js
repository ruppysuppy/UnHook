const path = require("path");
const fs = require("fs");

const defaultData = {
  hh: 0,
  mm: 0,
  ss: 0,
};

const saveData = (time = defaultData) => {
  const data = JSON.stringify(time);
  fs.writeFileSync(path.join(__dirname, "unhookData", "data.json"), data);
};

const readData = () => {
  try {
    const data = fs.readFileSync(
      path.join(__dirname, "unhookData", "data.json")
    );
    return JSON.parse(data);
  } catch (error) {
    if (!fs.existsSync(path.join(__dirname, "unhookData"))) {
      fs.mkdirSync(path.join(__dirname, "unhookData"));
    }
    this.saveData();
    return defaultData;
  }
};

exports.saveData = saveData;
exports.readData = readData;
