import { Configuration, OpenAIApi } from "openai";
import { parseArgs } from "node:util";
import path from "path";
import fs from "fs";

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const {
  values: { documentPath, preamble },
} = parseArgs({
  options: {
    documentPath: {
      type: "string",
      short: "d",
    },
    preamble: {
      type: "string",
      short: "p",
    },
  },
});

console.log(`doc path: ${documentPath}`);
console.log(`preamble: ${preamble}`);

const docText = fs.readFileSync(path.join(__dirname, documentPath)).toString();


const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: `
    ${preamble}
    ${docText}
  `,
  temperature: 0.7,
  max_tokens: 500,
  top_p: 1,
  best_of: 2,
  frequency_penalty: 0,
  presence_penalty: 0,
});

console.log(JSON.stringify(response.data));
