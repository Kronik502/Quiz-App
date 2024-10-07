// quiz.js
const readline = require('readline-sync');

const questions = [
  {
    question: "What component is considered the brain of the computer?",
    options: ["A. Hard Drive", "B. CPU", "C. RAM", "D. GPU"],
    answer: "B"
  },
  {
    question: "Which of the following is a type of volatile memory?",
    options: ["A. SSD", "B. HDD", "C. RAM", "D. ROM"],
    answer: "C"
  },
  {
    question: "What does BIOS stand for?",
    options: ["A. Basic Integrated Operating System", "B. Basic Input Output System", "C. Binary Input Output System", "D. Basic Input Operational System"],
    answer: "B"
  },
  {
    question: "Which network topology connects all devices to a central hub?",
    options: ["A. Star", "B. Ring", "C. Bus", "D. Mesh"],
    answer: "A"
  },
  {
    question: "What does DHCP stand for?",
    options: ["A. Dynamic Host Control Protocol", "B. Dynamic Host Configuration Protocol", "C. Dynamic Hardware Configuration Protocol", "D. Dynamic Host Communication Protocol"],
    answer: "B"
  },
  {
    question: "Which layer of the OSI model is responsible for data encryption?",
    options: ["A. Application Layer", "B. Transport Layer", "C. Network Layer", "D. Presentation Layer"],
    answer: "D"
  },
  {
    question: "What type of malware encrypts files and demands payment for decryption?",
    options: ["A. Virus", "B. Worm", "C. Ransomware", "D. Trojan"],
    answer: "C"
  },
  {
    question: "What does the acronym 'VPN' stand for?",
    options: ["A. Virtual Private Network", "B. Virtual Public Network", "C. Verified Private Network", "D. Verified Public Network"],
    answer: "A"
  },
  {
    question: "Which of the following is a common type of firewall?",
    options: ["A. Packet-filtering Firewall", "B. Network Address Translator", "C. VPN Gateway", "D. Proxy Server"],
    answer: "A"
  },
  {
    question: "What is the primary function of an operating system?",
    options: ["A. To manage hardware resources", "B. To browse the internet", "C. To create documents", "D. To develop software"],
    answer: "A"
  },
  {
    question: "What does 'phishing' refer to in cybersecurity?",
    options: ["A. Network monitoring", "B. Fraudulent attempts to obtain sensitive information", "C. Data encryption", "D. Antivirus scanning"],
    answer: "B"
  },
  {
    question: "Which device connects multiple computers in a network and uses MAC addresses to forward data?",
    options: ["A. Router", "B. Switch", "C. Hub", "D. Modem"],
    answer: "B"
  },
];

const startQuiz = () => {
  let score = 0;
  let questionIndex = 0;

  const askQuestion = () => {
    if (questionIndex < questions.length) {
      const { question, options, answer } = questions[questionIndex];
      console.log(`\nQuestion ${questionIndex + 1}: ${question}`);
      options.forEach(option => console.log(option));
      
      let timeLeft = 10;
      const timer = setInterval(() => {
        console.log(`Time remaining: ${timeLeft} seconds`);
        timeLeft--;

        if (timeLeft < 0) {
          clearInterval(timer);
          console.log("\nTime's up! Moving to the next question.");
          questionIndex++;
          askQuestion(); // Move to next question
        }
      }, 1000);

      const userAnswer = readline.keyIn('', { limit: '$<A-a>, $<B-b>, $<C-c>, $<D-d>' });
      
      clearInterval(timer); // Clear the timer if user answers
      if (userAnswer.toUpperCase() === answer) {
        score++;
        console.log("Correct!");
      } else {
        console.log("Wrong answer!");
      }

      questionIndex++;
      askQuestion(); // Move to next question
    } else {
      console.log(`\nQuiz finished! Your final score is: ${score}/${questions.length}`);
    }
  };

  askQuestion();
};

startQuiz();
