const input = document.getElementById('inputGroupFileAddon01');

const parseMeta = async (text) => {
  const regex = /Answer.([0-9])=(.+)/g;
  const output = [];
  do {
    const data = regex.exec(text);
    if (data) {
      output.push({
        question: data[1], 
        value: data[2],
      });
    }
  } while (regex.lastIndex);
  return output;
};

const parseData = async (text) => {
  const regex = /[0-9]+, ([a-z])\n[0-9]+, ([a-z])\n[0-9]+, ([a-z])/g;
  const output = [];
  do {
    const data = regex.exec(text);
    if (data) {
      output.push({
        fish1: data[1], 
        action: data[2],
        fish2: data[3],
      });
    }
  } while (regex.lastIndex);
  return output;
}

const parse = async (text) => {
  const meta = await parseMeta(text);
  const data = await parseData(text);
  console.log(meta, data);
};

const handleFileSelect = (event) => {
  for (file of event) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const results = await parse(e.target.result);
    };
    reader.readAsText(file);
  };
}
