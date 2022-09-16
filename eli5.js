const { Configuration, OpenAIApi } = require("openai");
const { parseArgs } = require("node:util");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const {
  values: { documentPath, preamble },
} = parseArgs({
  options: {
    documetPath: {
      type: "string",
      short: "d",
    },
    preamble: {
      type: "preamble",
      short: "p",
    },
  },
});

const docText = fs.readFileSync(path.join(__dirname, documentPath)).toString();


const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: `
    ${prompt}
    ${docText}
  `  
  temperature: 0.7,
  max_tokens: 1875,
  top_p: 1,
  best_of: 2,
  frequency_penalty: 0,
  presence_penalty: 0,
});
