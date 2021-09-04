const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney",
  },
  {
    quote: "STOP WAISTING TIME!!! ",
    author: " -Nicolás Serrano Arévalo",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "-Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "-Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "-James Cameron",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "-John Lennon",
  },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
