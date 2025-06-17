const messageHistoryStore = {};

module.exports = async (req, res) => {
  const { question, messages = '[]', model = 'chatgpt4', autoHistory = 'false', userId = 'default' } = req.query;

  if (!question) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chatgpt4 API</title>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            color: #1a1a1a;
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          .container {
            max-width: 900px;
            margin: 40px auto;
            background: #ffffff;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #1a1a1a;
            font-size: 2.5rem;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          h2 {
            color: #333;
            font-size: 1.8rem;
            margin: 30px 0 15px;
            font-weight: 600;
          }
          p {
            font-size: 1.1rem;
            color: #4a4a4a;
            margin-bottom: 15px;
          }
          code {
            background: #f4f4f4;
            padding: 4px 8px;
            border-radius: 4px;
            font-family: 'Fira Code', monospace;
            font-size: 0.95rem;
            color: #d63384;
          }
          ul {
            list-style: none;
            padding-left: 0;
            margin-bottom: 20px;
          }
          li {
            font-size: 1.1rem;
            color: #4a4a4a;
            margin-bottom: 10px;
            position: relative;
            padding-left: 25px;
          }
          li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #0070f3;
            font-size: 1.5rem;
            line-height: 1.2;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            font-size: 1.1rem;
            font-weight: 500;
            background: #0070f3;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.2s ease;
            text-decoration: none;
          }
          .button:hover {
            background: #0059c1;
            transform: translateY(-2px);
          }
          .owner {
            font-size: 1rem;
            color: #666;
            margin-top: 20px;
            text-align: center;
          }
          footer {
            text-align: center;
            padding: 20px 0;
            font-size: 0.9rem;
            color: #777;
            margin-top: auto;
          }
          @media (max-width: 600px) {
            .container {
              margin: 20px;
              padding: 20px;
            }
            h1 {
              font-size: 1.8rem;
            }
            h2 {
              font-size: 1.5rem;
            }
            p, li {
              font-size: 1rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🤖 Chatgpt4 API</h1>
          <p>Interact with a powerful chatbot to get instant answers to your questions.</p>

          <h2>ℹ️ About</h2>
          <p>
            This API connects to the Chatgpt4 service, allowing you to send prompts and receive responses in a conversational format. Ideal for developers building chat-based applications.
          </p>

          <h2>🚀 How to Use</h2>
          <p>
            Add a prompt with <code>?question=your_prompt</code>.
          </p>
          <p>
            Optionally, include a <code>&messages=[{"role":"user","content":"Previous message"}]</code> to maintain conversation context.
          </p>
          <p>
            Specify a model with <code>&model=chatgpt4</code> or <code>&model=gpt4</code>. Default is <code>chatgpt4</code>.
          </p>
          <p>
            Enable automatic history with <code>&autoHistory=true</code> and provide a <code>&userId=your_id</code> to save conversation history.
          </p>

          <h2>📋 Response Details</h2>
          <ul>
            <li><strong>api_owner</strong>: The owner of the API (Hridoy)</li>
            <li><strong>result</strong>: The chatbot's response to your prompt</li>
            <li><strong>error</strong>: Error message (if any issues occur)</li>
          </ul>

          <h2>🔍 Additional Parameters</h2>
          <p>
            The following parameters allow you to customize your request:
          </p>
          <ul>
            <li><strong>messages</strong>: An array of message objects, e.g., <code>[{"role": "user", "content": "Hello"}]</code>. Helps maintain conversation context. Default is an empty array.</li>
            <li><strong>model</strong>: The model to use (<code>chatgpt4</code> or <code>gpt4</code>). Default is <code>chatgpt4</code>.</li>
            <li><strong>autoHistory</strong>: Set to <code>true</code> to automatically save and use conversation history. Requires <code>userId</code>.</li>
            <li><strong>userId</strong>: A unique identifier for the user to track conversation history. Default is <code>default</code>.</li>
          </ul>

          <h2>🎬 Try It Out</h2>
          <p>Test the API with a sample question about Bangladesh:</p>
          <a href="?question=Tell%20me%20about%20Bangladesh&messages=[%7B%22role%22:%22user%22,%22content%22:%22Hi,%20I%20want%20to%20learn%20about%20countries%22%7D]&model=chatgpt4&autoHistory=true&userId=testUser" class="button">Ask a Question</a>
          <p class="owner">API created by <strong>School of Mind Light</strong></p>
        </div>

        <footer>
          <p>
            Official Channel: <a href="https://t.me/schoolofmindlight2018">School of Mind Light</a> | 
            Developer Contact: <a href="https://t.me/schoolofMindLightchatBot">Contact</a>
          </p>
          <p>© 2025 Hridoy – All Rights Reserved</p>
        </footer>
      </body>
      </html>
    `;
    return res.status(200).setHeader('Content-Type', 'text/html').send(html);
  }

  const apiConfigs = {
    chatgpt4: {
      url: "https://chataibot.ru/api/promo-chat/messages",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36",
        "Referer": "https://chataibot.ru/app/free-chat",
        "Accept": "application/json"
      }
    },
    gpt4: {
      url: "https://stablediffusion.fr/gpt4/predict2",
      headers: {
        "Content-Type": "application/json",
        "Origin": "https://stablediffusion.fr",
        "User-Agent": "Mozilla/5.0"
      }
    }
  };

  if (!apiConfigs[model]) {
    return res.status(400).json({
      api_owner: "Hridoy",
      error: "Invalid Model",
      details: `Model must be one of: chatgpt4, gpt4. Received: ${model}`
    });
  }

  const { url: apiUrl, headers } = apiConfigs[model];

  try {
    let parsedMessages = [];
    try {
      parsedMessages = JSON.parse(messages);
      if (!Array.isArray(parsedMessages)) {
        throw new Error("Messages must be an array");
      }
    } catch (e) {
      return res.status(400).json({
        api_owner: "Hridoy",
        error: "Invalid Messages Format",
        details: `Error: ${e.message}. Expected a valid JSON array, e.g., [{"role": "user", "content": "Hello"}]`
      });
    }

    let messagesToSend = parsedMessages;
    if (autoHistory === 'true') {
      if (!userId) {
        return res.status(400).json({
          api_owner: "Hridoy",
          error: "Missing User ID",
          details: "userId is required when autoHistory is true"
        });
      }
      messageHistoryStore[userId] = messageHistoryStore[userId] || [];
      messagesToSend = [...messageHistoryStore[userId]];
      messageHistoryStore[userId].push({ role: "user", content: question });
    }

    let requestBody;
    if (model === 'chatgpt4') {
      messagesToSend = messagesToSend.length ? [...messagesToSend, { role: "user", content: question }] : [{ role: "user", content: question }];
      requestBody = { messages: messagesToSend };
    } else {
      requestBody = { prompt: question };
    }

    let response;
    try {
      response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody)
      });
    } catch (e) {
      return res.status(500).json({
        api_owner: "Hridoy",
        error: "Network Error",
        details: `Failed to connect to ${model} API: ${e.message}`
      });
    }

    if (!response.ok) {
      let errorText;
      try {
        errorText = await response.text();
      } catch (e) {
        errorText = "Unable to read response text";
      }
      return res.status(500).json({
        api_owner: "Hridoy",
        error: `${model} API Error`,
        details: `Status: ${response.status} ${response.statusText}. Response: ${errorText.slice(0, 200)}...`
      });
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      let text;
      try {
        text = await response.text();
      } catch (e) {
        text = "Unable to read response text";
      }
      return res.status(500).json({
        api_owner: "Hridoy",
        error: "Invalid API Response",
        details: `Expected JSON, got ${contentType}: ${text.slice(0, 200)}...`
      });
    }

    let data;
    try {
      data = await response.json();
    } catch (e) {
      return res.status(500).json({
        api_owner: "Hridoy",
        error: "Response Parsing Error",
        details: `Failed to parse API response: ${e.message}`
      });
    }

    let result;
    if (model === 'chatgpt4') {
      if (!data.answer) {
        return res.status(200).json({
          api_owner: "Hridoy",
          result: "No response content received"
        });
      }
      result = data.answer;
    } else {
      if (!data.message) {
        return res.status(200).json({
          api_owner: "Hridoy",
          result: "No response content received"
        });
      }
      result = data.message;
    }

    if (autoHistory === 'true' && userId) {
      messageHistoryStore[userId].push({ role: "assistant", content: result });
    }

    return res.status(200).json({
      api_owner: "Hridoy",
      result
    });
  } catch (error) {
    return res.status(500).json({
      api_owner: "Hridoy",
      error: "Internal Server Error",
      details: `Unexpected error: ${error.message}. Stack: ${error.stack || 'No stack trace available'}`
    });
  }
};
