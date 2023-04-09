import { OpenAI } from 'langchain';
import { initializeAgentExecutor } from 'langchain/agents';

//const apiKey = "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";
const apiKey = "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";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const input = req.body.input;

    const model = new OpenAI({ apiKey: apiKey, temperature: 0.5 });

    const executor = await initializeAgentExecutor(
      [],
      model,
      'zero-shot-react-description',
      true
    );

    const result = await executor.call({ input });

    res.status(200).json({ output: result.output });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}