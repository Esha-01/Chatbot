// const ChatInput= document.querySelector("chat-input textarea");
// const sendChatBtn= document.querySelector("chat-input span");
// const chatbox= document.querySelector(".chatbox");
// const chatToggler= document.querySelector(".chat-toggler");
// const chatbotCloseBtn= document.querySelector(".close-btn");


// let userMessage=null;
// const API_KEY="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";
// const inputInitHeight = chatInput.scrollHeight;

// const createChatLi=(message,classname) => {
//     const chatLi =document.createElement("li");
//     chatLi.classList.add("chat",className);
//     let chatContent =className==="outgoing" ? <p></p> : '<span class="material-symbols-outlined">smart_toy</span><p></p>';
//     chatLi.innerHTML = chatcontent;
//     chatLi.querySelector("p").textContent=message;
//     return chatLi;
// }

//  const generateResponse=() =>{
//     const API_URL="https://api.openai.com/v1/chat/completions";
//     const messageElement=incomingChatLi.querySelector("p");

//     //Define the properties and message for the API request
//     const requestOptions={
//         method="POST",
//         Headers:{
//             "Content-Type":"application/json",
//             "Authorization": 'Bearer ${API_KEY}'
//         },
//         body: JSON.stringyfy({
//              model:"gpt-3.5-turbo",
//              messages:[{role:"user",content:"userMessage"}]
//         })
//     }
    
//     //send POST request to API ,get response 
//     fetch(API_URL,requestOptions).then(res => res.json()).then(data => {
//         messageElement.textContent = data.choices[0].message.content;
//     }).catch(error) => {
//         messageElement.classList.add("error");
//         messageElement.textContent = "Oops ! Something went wrong .Please try again.";
//     }).finally(() => chatbox.scrollTo(0,chatbox.scrollHeight));
//  }
// const handleChat=() => {
//     userMessage =ChatInput.value.trim();
//     if(!userMessage) return;
//     chatInput.value="";
//     chatInput.style.height = '&{inputInitHeight}px';

//     chatbox.appendChild(createChatLi(userMessage,"outgoing"));
//      chatbox.scrollTo(0,chatbox.scrollHeight);

//     setTimeout(() => {
//         chatbox.appendChild(createChatLi("Thinking...", "incoming"));
//         chatbox.appendChild(incomingChatLi);
//         generateResponse(incomingChatLi);

//     },600);
         
// }

// chatInput.addEventListener("input",() => {
//     chatInput.style.height='$(inputInitHeight)px';
//     chatInput.style.height='$(chatInput.scrollHeight)px';

// })

// chatInput.addEventListener("keydown",(e) => {
//     if(e.key==="Enter" && !e.shiftKey && window.innerWidth > 800)
//        e.preventDefault();
//        handleChat;
// });

// sendChatBtn.addEventListener("click",handleChat);
// chatbotCloseBtn.addEventListener("click",() => document.body.classList.remove("show-chatbot"));
// chatToggler.addEventListener("click",() => document.body.classList.toggle("show-chatbot"));


const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; 
const API_KEY = "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"; 
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat" , ${className});
    let chatContent = className === "outgoing" ? <p></p> : <span class="material-symbols-outlined">smart_toy</span><p></p>;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; 
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer ${API_KEY}
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); 
    if(!userMessage) return;

    
    chatInput.value = "";
    chatInput.style.height = ${inputInitHeight}px;

    
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    
    chatInput.style.height = ${inputInitHeight}px;
    chatInput.style.height = ${chatInput.scrollHeight}px;
});

chatInput.addEventListener("keydown", (e) => {

    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));