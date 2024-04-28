const OpenAI = require('openai');
import { openaikey } from './key';



export async function getResponse(){

    const openAi = new OpenAI({
        apiKey: openaikey,
    })

    const response = await openAi.chat.completions.create({
     model: "gpt-3.5-turbo",
     messages: [{role: "user", content: "How do I do a push up?"}],
     temperature: 1,
     max_tokens: 256,
     top_p: 1,
     frequency_penalty: 0,
     presence_penalty: 0,
    })

    if (response && response.choices && response.choices.length > 0) {
        return response.choices[0].message.content;
    }
}

getResponse();


