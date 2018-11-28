const input = document.getElementById('file-input');
const inputLabel = document.getElementById('file-input-label');

const process = async ({meta, data}) => {
  // empty res file with metadata attached
  console.log(meta);
  const res = { meta };
  const nFish = meta[4].value;  
  const output = math.zeros(nFish, nFish);
  const agressorKeys = data.map(d => d.fish1 );
  const fleerKeys = data.map(d => d.fish2);
  const fishKeysUnsorted =  agressorKeys.concat(fleerKeys);
  const fishKeys = fishKeysUnsorted.sort();
  console.log(fishKeys); 
};

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
  const results = await process({ meta, data });
  console.log(results);
};

const handleFileSelect = (event) => {
  const fileNames = [];
  for (file of event) {
    fileNames.push(file.name);
    const reader = new FileReader();
    reader.onload = async (e) => {
      const results = await parse(e.target.result);
    };
    reader.readAsText(file);
  };
  inputLabel.innerHTML = JSON.stringify(fileNames);
}
