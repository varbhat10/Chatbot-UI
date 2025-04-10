# OSU Engineering Chatbot UI

A clean and modern chatbot interface for Oregon State University's engineering website domains. This interface allows users to ask questions about OSU's engineering programs and get AI-powered responses.

## Features

- Clean, responsive UI with OSU branding
- Real-time chat interface
- Message history display
- Loading indicators
- Auto-scrolling to the latest message

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd osu-engineering-chatbot
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Integrating with Backend API

The current implementation uses mock responses for demonstration. To connect with a real AI backend:

1. Modify the `handleSubmit` function in `src/components/Chatbot.tsx`
2. Replace the setTimeout mock with a fetch call to your API endpoint

Example:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!input.trim()) return;

  // Add user message
  const userMessage = { content: input, isUser: true };
  setMessages(prev => [...prev, userMessage]);
  setInput("");
  setIsLoading(true);

  // Call your backend API
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });
    
    const data = await response.json();
    const botMessage = { content: data.response, isUser: false };
    setMessages(prev => [...prev, botMessage]);
  } catch (error) {
    console.error('Error fetching response:', error);
    const errorMessage = { 
      content: "Sorry, I encountered an error. Please try again later.", 
      isUser: false 
    };
    setMessages(prev => [...prev, errorMessage]);
  } finally {
    setIsLoading(false);
  }
};
```

## Customization

- Colors: Edit the `tailwind.config.js` file to modify the OSU brand colors
- Messages: Modify the `Message.tsx` component to change the appearance of chat messages
- Layout: The main layout can be adjusted in `app/layout.tsx` and `app/page.tsx` 