const express = require('express')
const app = express()
import { getResponse } from './openAiClient';


const PORT = process.env.PORT || 3000;



app.post('/generate-text', async(req,res) => {
    console.log("Recieved Message:", req.body)
    const message = getResponse();
    res.json({sender: 'Coach', message: message}) //To Be Implemented, send the message back as generated text.
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
});