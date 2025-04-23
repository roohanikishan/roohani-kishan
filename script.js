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
