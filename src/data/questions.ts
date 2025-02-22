interface Question {
  id: number;
  question: string;
  options: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What's your ideal first date?",
    options: [
      "Coffee and conversation",
      "Adventure activity",
      "Dinner and drinks",
      "Cultural event"
    ]
  },
  {
    id: 2,
    question: "How do you prefer to spend your weekends?",
    options: [
      "Outdoor activities",
      "Relaxing at home",
      "Socializing with friends",
      "Exploring new places"
    ]
  },
  {
    id: 3,
    question: "What are you looking for?",
    options: [
      "Long-term relationship",
      "Casual dating",
      "Friendship",
      "Not sure yet"
    ]
  },
];
