import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

const docString = `
## Instructions
This is a data parser which processes raw data from experimental trials and outputs pre-formatted R code
that can be used to calculate David's scores.
Paste in the contents of a .dat file in the text box in the top, and the parser should output the necessary 
R code to perform the calculations in the output section of the parser. 
### Usage
There are two parsers that will run as soon as you paste in data. The first parser will process the
metadata of the trial and output an array with the questions. These are the questions the experimenter
inputs before running a trial. The values should be the following:
1. Date in YYYYMMDD format,
2. Time of the experiment in 2400 format,
3. Tank number,
4. Number of brooding fish,
5. Number of fish,
6. Notes from the experimenter.

Sample output:
\`\`\` R
metadata <- c("1430","20181111","5-1-50","2","10","Fish were not fed this weekend yet U and g brooding");
\`\`\`
The second parser outputs the interactions between the fish and outputs a ready-to-analyze matrix of
the number of times each fish initiated an interaction with another fish. The parser will output a warning if
the number of fish in the data does not equal the number of fish in the interactions. This is possible
if there are fish that did not interact with any other fish.

Sample output:
\`\`\`R
data <- matrix(c(0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,1,1,0,0,0), ncol=7)
\`\`\`
To perform the analysis, copy and paste the matrix from the parser and run the \`ds()\` function from the \`compete\` library on it.

Sample code:
\`\`\`R
library(compete)
# paste your matrix on this line
data <- matrix(c(0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,1,1,0,0,0), ncol=7)
# will output david's scores to console when run 
ds(data)
\`\`\`
`;

const Docs = () => (
  <div>
    <ReactMarkdown
      source={docString}
      renderers={{
        CodeBlock,
        Code: CodeBlock,
        code: CodeBlock,
      }}
    />
  </div>
);

export default Docs;
