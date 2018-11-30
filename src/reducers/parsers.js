// import { UPDATE_PARSER_ALGORITHM } from '../actions';

const parsers = (state = {
  parsers: [
    {
      name: 'metadata',
      output: 'vector',
      func: `
        (textInput) => {
          const regex = /Answer.([0-9])=(.+)/g;
          const output = [];
          do {
            const data = regex.exec(textInput);
            if (data) {
              output.push({
                question: data[1], 
                value: data[2],
              });
            }
          } while (regex.lastIndex);
          return { data: output };
        }
      `,
    },
    {
      name: 'data',
      output: 'matrix',
      func: `
        (textInput, { metadata }) => {
          console.log(metadata);
          const regex = /[0-9]+, ([a-z])\\n[0-9]+, ([a-z])\\n[0-9]+, ([a-z])/g;
          let warning = null;
          const interactions = [];
          do {
            const data = regex.exec(textInput);
            if (data) {
              interactions.push({
                fish1: data[1], 
                action: data[2],
                fish2: data[3],
              });
            }
          } while (regex.lastIndex);

          const getFishKeys = () => {
            const fish = [];
            interactions.map(i => {
              // if fishX isn't in array, push name to array
              if(fish.indexOf(i.fish1) === -1) fish.push(i.fish1)
              if(fish.indexOf(i.fish2) === -1) fish.push(i.fish2)
            });
            // return alphanetically sorted array of fish
            return fish.sort();
          }

          const fish = getFishKeys();
          // check to see that fish count match matrix dimensions
          // if a fish doesn't interact with any other fish, the matrix may be too small
          if (metadata[4]) {
            if (parseInt(metadata[4].value) != fish.length) warning = "Warning! The parser did not find a number of fish equal to the number recorded in the metadata. Metadata reported " + metadata[4].value + " fish while the parser found " + fish.length + " fish."
          }

          const interactionMatrix = fish.map(thisFish => {
            return fish.map(otherFish => {
               let totalInteractionsInitiatedByThisFish = 0;
               interactions.map(i => {
                 if (i.fish1 === thisFish && i.fish2 === otherFish) {
                   totalInteractionsInitiatedByThisFish += 1;
                 }
               })
               return totalInteractionsInitiatedByThisFish;
            })
          })

          return({ data: interactionMatrix, warning });
        }
      `,
    },
  ],
}, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default parsers;
