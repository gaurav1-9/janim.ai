const {jsonrepair} = require("jsonrepair")

async function quizGenerator(noOfQuestions, questionTopics) {
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPEN_ROUTE_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // model: "deepseek/deepseek-r1-0528:free",
                // model: "google/gemma-3-4b-it:free",
                model: "google/gemma-3-27b-it:free",
                messages: [
                    {
                        role: "user",
                        content: `Generate ${noOfQuestions} multiple-choice questions (MCQs) on the topics: ${questionTopics.join(', ')}.
                                    Each question should include:
                                    - A "question" field
                                    - An "options" object with 4 options labeled "A", "B", "C", and "D"
                                    - An "answer" field with the correct option letter
                                    - A short "explanation" of the correct answer
                                    - A "topic" field that exactly matches one of the input topics provided
                                    Return the output in **strict JSON format** as shown below (an array of question objects):
                                    [
                                    {
                                        "question": "Your question here",
                                        "options": {
                                        "A": "Option A",
                                        "B": "Option B",
                                        "C": "Option C",
                                        "D": "Option D"
                                        },
                                        "answer": "B",
                                        "explanation": "Brief explanation of the correct answer.",
                                        "topic": "One of the input topics, written exactly as provided by the user even if there is single topic then show that topic without rephrasing"
                                    }
                                    ]
                                    Important:
                                    - Only return the JSON array, nothing else (no text before or after).
                                    - For each question, ensure the "topic" field is directly taken from the input list (e.g., if input includes 'topic-2', write 'topic-2' exactly — no rephrasing even if there is single topic then show that topic without rephrasing).
                                    - Escape all inner double quotes inside strings properly (e.g., use \\\").
                                    - Do not output any unescaped double quotes within values.`
                    }
                ]
            })
        });

        const data = await response.json();

        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            return -2;
        }

        const rawContent = data.choices[0].message.content;

        const match = rawContent.match(/\[\s*[\s\S]*\]/);

        if (match) {
            try {
                const repairedJson = jsonrepair(match[0]);
                const jsonData = JSON.parse(repairedJson);

                if (Array.isArray(jsonData)) {
                    return jsonData;
                } else {
                    console.error("Parsed JSON is not an array");
                    return -1; // custom code for "not an array"
                }
            } catch (err) {
                console.error("Failed to parse extracted JSON:", err);
                console.log("Extracted string:", match[0]);
                return -1
            }
        } else {
            return -1
        }
    } catch (error) {
        return -1
    }
}

// quizGenerator(3, ['Iran-nuclear-deal', 'Bathouism']);
module.exports = quizGenerator