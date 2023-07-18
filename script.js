// Define an array of quotes
const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    // Add more quotes here
  ];
  
  // Get DOM elements
  const quoteTextElement = document.getElementById('quoteText');
  const quoteAuthorElement = document.getElementById('quoteAuthor');
  const newQuoteBtn = document.getElementById('newQuoteBtn');
  
  // Function to generate a random quote
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { text, author } = quotes[randomIndex];
    quoteTextElement.textContent = text;
    quoteAuthorElement.textContent = author;
  }
  
  // Event listener for the "New Quote" button
  newQuoteBtn.addEventListener('click', generateRandomQuote);
  
  // Generate the initial quote
  generateRandomQuote();
  