async function quizGenerator(noOfQuestions, questionTopics) {
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPEN_ROUTE_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "google/gemma-3-4b-it:free",
                messages: [
                    {
                        role: "user",
                        content: `Generate ${noOfQuestions} multiple-choice questions (MCQs) on the topic ${questionTopics.join(', ')}. Each question should have 4 options (A, B, C, D), one correct answer, and a short explanation. Return the output in strict JSON format as follows:
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
                                "topic":"Topic related to the input user gave. Write it exactly as written by the user"
                            }
                        ]
                        Only return the JSON array, nothing else.`
                    }
                ]
            })
        });

        const data = await response.json();

        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error("Unexpected API response format");
            return;
        }

        const rawContent = data.choices[0].message.content;

        const match = rawContent.match(/\[\s*[\s\S]+?\]/);

        if (match) {
            try {
                const jsonData = JSON.parse(match[0]);
                console.log("Parsed JSON:", jsonData);
                return jsonData;
            } catch (err) {
                console.error("Failed to parse extracted JSON:", err);
                console.log("Extracted string:", match[0]);
                return -1
            }
        } else {
            console.error("JSON array not found in response.");
            console.log("Full raw content:", rawContent);
            return -1
        }
    } catch (error) {
        console.error("API Error:", error);
        return -1
    }
}

// quizGenerator(3, ['Iran-nuclear-deal', 'Bathouism']);
module.exports = quizGenerator