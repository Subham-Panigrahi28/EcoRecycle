// geminiAPI.js
const API_KEY = "AIzaSyAiJxeJnGLEsF2BKFJoJYvHslqHEKdnC6g"; // Replace with your actual API key

export const fetchGeminiResponse = async (userMessage) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }] }],
        }),
      }
    );

    const data = await response.json();

    if (data && data.candidates && data.candidates.length > 0) {
      return data.candidates[0].content.parts[0].text || "No response from Gemini AI";
    }

    return "No valid response from Gemini AI";
  } catch (error) {
    console.error("Error fetching Gemini API:", error);
    return "Error getting response";
  }
};
