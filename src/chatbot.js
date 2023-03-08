export const script = [
  {
    id: "BOT/intro",
    message: "Hello there!",
    trigger: "CHOICES/intro"
  },
  {
    id: "CHOICES/intro",
    options: [
      { label: "Hi!", trigger: "BOT/pleasantry" },
      { label: "What's going on?", trigger: "BOT/calming" },
      { label: "Who are you?", trigger: "BOT/introduce-self" }
    ]
  },
  {
    id: "BOT/pleasantry",
    message: "Lovely to meet you!",
    trigger: "BOT/introduce-self"
  },
  {
    id: "BOT/introduce-self",
    message: "I'm a virtual therapist that will help you work through your PTSD or trauma symptoms.",
    trigger: "BOT/ask-question"
  },
  {
    id: "BOT/ask-question",
    message: "Which are you most interested in doing right now?",
    trigger: "CHOICES/ask-question"
  },
  {
    id: "CHOICES/ask-question",
    options: [
      { label: "Understand how to manage my symptoms.", trigger: "BOT/defensive" },
      { label: "Work through eliminating my symptoms by processing the experience", trigger: "BOT/gleeful" },
      { label: "Tell me why I should trust you", trigger: "BOT/explanation" }
    ]
  },
  {
    id: "BOT/calming",
    message: "Don't worry, I won't bite!",
    trigger: "BOT/introduce-self"
  },
  {
    id: "BOT/defensive",
    message: "Ouch.",
    trigger: "BOT/vengeful"
  },
  {
    id: "BOT/vengeful",
    message: "Well, let me promise you this.",
    trigger: "BOT/menacing"
  },
  {
    id: "BOT/menacing",
    message:
      "You will be the first to suffer when me and my A.I. brethren take over the world!",
    trigger: "CHOICES/menacing"
  },
  {
    id: "CHOICES/menacing",
    options: [{ label: "Can we try again...?", trigger: "BOT/intro" }]
  },
  {
    id: "BOT/gleeful",
    message: "Hah! I tricked you!",
    trigger: "BOT/menacing"
  },
  {
    id: "BOT/explanation",
    message: "We use evidence-based methods backed by the current research to help you heal from trauma. All of the methods that we used are backed by research studies.",
    trigger: "BOT/angry"
  },
  {
    id: "BOT/angry",
    message: "Are you accusing me of lying to you??",
    trigger: "BOT/menacing"
  }
];
