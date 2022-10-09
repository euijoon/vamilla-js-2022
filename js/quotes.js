const quotes = [
    {
        quote: "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라.",
        author: "빌립보서 4:6",
    },
    {
        quote: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다.",
        author: "시편 119:105",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;