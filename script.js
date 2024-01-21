const astrology_messages = [
  // Aries
  [
    "Aries, ignite your passion like the flame of your ruling planet, Mars. Today is your cosmic canvas – paint it with bold and fearless strokes!",
    "Channel the dynamic energy of your fire sign, Aries. The stars align for you to take charge and lead with confidence. Seize the day, trailblazer!",
    "As the ram of the zodiac, Aries, your impulsive spirit is a celestial gift. Embrace spontaneity and charge forward. The cosmos applauds your boldness.",
  ],
  // Gemini
  [
    "Gemini, let your curiosity be your guiding star today. Explore new ideas and engage in lively conversations. Your mind is a cosmic playground.",
    "As an air sign, Gemini, your intellect is your greatest asset. Let the winds of change carry you to new horizons. Embrace the diversity of thought.",
    "The cosmic twins smile upon you, Gemini. Adaptability is your superpower. Embrace the ebb and flow of life, and let your dual nature shine.",
  ],
  // Cancer
  [
    "Cancer, the moonchild, let your emotions be your compass. Dive into the cosmic tides and trust your intuitive connection with the universe.",
    "As the nurturer of the zodiac, Cancer, your compassion is a celestial blessing. Share your caring nature and create ripples of love in the cosmic sea.",
    "Embrace the protective shell of your zodiac crab, Cancer. In moments of vulnerability, find strength. The stars align to illuminate the path of emotional resilience.",
  ],
];

const randomMessage = (astro) => {
  const lowerCaseAstro = astro.toLowerCase();
  let num = 0;
  switch (lowerCaseAstro) {
    case "aries":
      num = 0;
      break;
    case "gemini":
      num = 1;
      break;
    case "cancer":
      num = 2;
      break;
    default:
      console.log("Invalid Astrology");
      break;
  }

  const message = Math.floor(Math.random() * astrology_messages[num].length);
  return astrology_messages[num][message];
};

console.log(randomMessage("AriEs"));
