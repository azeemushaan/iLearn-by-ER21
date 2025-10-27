
import { GoogleGenAI, Type } from "@google/genai";

// This is a mock function as we cannot make real API calls from the frontend without exposing the API key.
// In a real application, this logic would live on a secure backend server (e.g., a Cloud Run instance).

/**
 * Generates Multiple Choice Questions (MCQs) from a given transcript chunk.
 * @param transcriptChunk A string containing the segment of the video transcript.
 * @returns A promise that resolves to an array of generated questions.
 */
export const generateMcqsFromTranscript = async (transcriptChunk: string) => {
  // In a real backend, you would initialize the client like this:
  // const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const questionSchema = {
    type: Type.OBJECT,
    properties: {
      stem: {
        type: Type.STRING,
        description: "The main body of the question.",
      },
      options: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "An array of 4 possible answers. One must be correct.",
      },
      correctIndex: {
        type: Type.INTEGER,
        description: "The index (0-3) of the correct answer in the options array.",
      },
      rationale: {
        type: Type.STRING,
        description: "A brief explanation of why the correct answer is right.",
      },
      difficulty: {
        type: Type.STRING,
        description: "The difficulty of the question (e.g., Easy, Medium, Hard).",
      }
    },
    required: ["stem", "options", "correctIndex", "rationale", "difficulty"],
  };

  const prompt = `
    Based on the following transcript excerpt for students in grades 1-8, generate 2 distinct multiple-choice questions.
    Ensure the questions are clear, concise, and directly related to the content.
    The options should be plausible, with one clear correct answer.

    Transcript: "${transcriptChunk}"
  `;

  try {
    // REAL API CALL (to be used in backend)
    /*
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: questionSchema
        },
      },
    });

    const questions = JSON.parse(response.text);
    return questions;
    */

    // MOCKED RESPONSE for frontend demonstration
    console.log("Simulating Gemini API call with transcript chunk:", transcriptChunk);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    
    const mockedResponse = [
      {
        stem: "According to the video, what is the primary function of the mitochondria?",
        options: [
          "Storing genetic information",
          "Generating energy for the cell",
          "Controlling cell division",
          "Breaking down waste materials",
        ],
        correctIndex: 1,
        rationale: "The video script explicitly states that mitochondria are the 'powerhouses of the cell', responsible for generating ATP (energy).",
        difficulty: "Medium",
      },
      {
        stem: "Which of these is NOT a part of the plant cell mentioned in the video?",
        options: [
          "Cell wall",
          "Chloroplast",
          "Large central vacuole",
          "Cilia",
        ],
        correctIndex: 3,
        rationale: "Cilia are typically found in animal cells for movement, whereas the other three are key components of a plant cell discussed in the transcript.",
        difficulty: "Easy",
      }
    ];

    console.log("Returning mocked questions:", mockedResponse);
    return mockedResponse;

  } catch (error) {
    console.error("Error generating MCQs with Gemini:", error);
    // In a real app, you'd have more robust error handling
    return [];
  }
};
