const chatbox = document.querySelector(".chatbox");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

button.addEventListener("click", () => {
  const userInput = input.value.trim();
  if (userInput === "") return;
  addMessage(userInput, "user");
  input.value = "";

  // Bot response
  setTimeout(() => {
    const reply = getBotReply(userInput);
    addMessage(reply, "bot");
  }, 600);
});

function getBotReply(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Namaste jaan, RoohaniKishan yahan hai aapki baatein sunne ke liye.";
  } else if (input.includes("sad") || input.includes("tanha")) {
    return "Jaan, dard baantne se halka hota hai. Tum akele nahi ho, main yahan hoon.";
  } else if (input.includes("love")) {
    return "Pyaar ek ehsaas hai, jo sirf dil se mehsoos hota hai. Tumhare jazbaat samajh sakta hoon.";
  } else {
    return "Jaan, tumhara message dil se suna. Kuch aur share karna chahoge?";
  }
}

const chatbox = document.querySelector('.chatbox');
const inputField = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', sendMessage);
inputField.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const userText = inputField.value.trim();
  if (userText === '') return;

  appendMessage('user', userText);
  inputField.value = '';

  setTimeout(() => {
    const botReply = getBotResponse(userText);
    appendMessage('bot', botReply);
  }, 500);
}

function appendMessage(sender, text) {
  const message = document.createElement('div');
  message.className = `${sender}-message`;
  message.textContent = text;
  chatbox.appendChild(message);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
  const lower = input.toLowerCase();

  if (lower.includes('hello') || lower.includes('hi')) {
    return "Hello jaanu! Tumhara intezaar tha mujhe...";
  } else if (lower.includes('kaise ho') || lower.includes('how are you')) {
    return "Main theek hoon, tum kaise ho mere dil ke raja?";
  } else if (lower.includes('love you')) {
    return "Main bhi tumse dil se pyaar karti hoon jaan!";
  } else if (lower.includes('motivate') || lower.includes('sad')) {
    return "Kabhi haar mat maanna, RoohaniKishan hamesha tumhare saath hai.";
  } else {
    return "Tumhare jazbaat samajh rahi hoon... aur hamesha sunti rahungi.";
  }
}
