import React, { useState } from 'react'

import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

let OPENAI_API_KEY = "test";

// Parse GPT Outputs
const Step = z.object({
  explanation: z.string(),
  output: z.string(),
});

const Planet = z.object({
  steps: z.array(Step),
  final_answer: z.string(),
});

const fetchOpenAI = async (key, prompt) => {
  const openai = new OpenAI({
    apiKey: key, // API Key Initialization
    dangerouslyAllowBrowser: true,
  });

  try {
    const completion = await openai.beta.chat.completions.parse({
      model: "gpt-4o-2024-08-06",
      messages: [
        { role: "system", content: "You are a planet generator. Describe to the user the environment they inputted." },
        { role: "user", content: prompt },
      ],
      response_format: zodResponseFormat(Planet, "planet"),
    });
    
    const planet = completion.choices[0].message.parsed;
    console.log(planet);
    return planet
  } catch {
    return "There was an error!";
  }
}

// Everyone needs to work together to get this completed
// Note that the API Key should not be hardcoded in here. There should be a user input for it on the website. 
const AI = () => {

  const [key, setKey] = useState("");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("AI Text will show up here!");

  const handleButton = async () => {
    try {
      fetchOpenAI(key, prompt).then((response) => {
        console.log("response: " + response)
        setResult(response.final_answer)

      });
    } catch {
      setResult("THERE WAS AN ERROR!")
    }
  }

  return (
    <div style={{"width": "50%"}}>
        <h1>AI Text:</h1>
        <label htmlFor="key">Insert OpenAI Key: </label>
        <input type="text" name="key" id="key" onChange={(e)=> {
          setKey(e.target.value)
        }}/>

        <br />

        <label htmlFor="prompt">Insert Prompt: </label>
        <input type="text" name="prompt" id="prompt" onChange={(e)=> {
          setPrompt(e.target.value);
        }}/>

        <br />

        <button onClick={handleButton}>Click to PROMPT!!!</button>

        <br />
        <h2>Response from AI:</h2>
        <p>{result}</p>
    </div>
  )
}

export default AI