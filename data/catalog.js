/*
 * Guess the Movie: every guessable title.
 *
 * id:    unique slug, referenced by scenes.js
 * type:  "Movie" | "Series" | "Special"
 * group: "MCU Phase 1".."MCU Phase 6" | "Marvel Television" | "Sony Spider-Man" | "Fox X-Men" | "Other Marvel"
 *
 * TODO: add Avengers: Doomsday once it releases (Dec 18, 2026):
 *   { id: "avengers-doomsday", title: "Avengers: Doomsday", year: 2026, type: "Movie", group: "MCU Phase 6" },
 */
window.CATALOG = [
  // MCU Phase 1
  { id: "iron-man", title: "Iron Man", year: 2008, type: "Movie", group: "MCU Phase 1" },
  { id: "the-incredible-hulk", title: "The Incredible Hulk", year: 2008, type: "Movie", group: "MCU Phase 1" },
  { id: "iron-man-2", title: "Iron Man 2", year: 2010, type: "Movie", group: "MCU Phase 1" },
  { id: "thor", title: "Thor", year: 2011, type: "Movie", group: "MCU Phase 1" },
  { id: "captain-america-the-first-avenger", title: "Captain America: The First Avenger", year: 2011, type: "Movie", group: "MCU Phase 1" },
  { id: "the-avengers", title: "The Avengers", year: 2012, type: "Movie", group: "MCU Phase 1" },

  // MCU Phase 2
  { id: "iron-man-3", title: "Iron Man 3", year: 2013, type: "Movie", group: "MCU Phase 2" },
  { id: "thor-the-dark-world", title: "Thor: The Dark World", year: 2013, type: "Movie", group: "MCU Phase 2" },
  { id: "captain-america-the-winter-soldier", title: "Captain America: The Winter Soldier", year: 2014, type: "Movie", group: "MCU Phase 2" },
  { id: "guardians-of-the-galaxy", title: "Guardians of the Galaxy", year: 2014, type: "Movie", group: "MCU Phase 2" },
  { id: "avengers-age-of-ultron", title: "Avengers: Age of Ultron", year: 2015, type: "Movie", group: "MCU Phase 2" },
  { id: "ant-man", title: "Ant-Man", year: 2015, type: "Movie", group: "MCU Phase 2" },

  // MCU Phase 3
  { id: "captain-america-civil-war", title: "Captain America: Civil War", year: 2016, type: "Movie", group: "MCU Phase 3" },
  { id: "doctor-strange", title: "Doctor Strange", year: 2016, type: "Movie", group: "MCU Phase 3" },
  { id: "guardians-of-the-galaxy-vol-2", title: "Guardians of the Galaxy Vol. 2", year: 2017, type: "Movie", group: "MCU Phase 3" },
  { id: "spider-man-homecoming", title: "Spider-Man: Homecoming", year: 2017, type: "Movie", group: "MCU Phase 3" },
  { id: "thor-ragnarok", title: "Thor: Ragnarok", year: 2017, type: "Movie", group: "MCU Phase 3" },
  { id: "black-panther", title: "Black Panther", year: 2018, type: "Movie", group: "MCU Phase 3" },
  { id: "avengers-infinity-war", title: "Avengers: Infinity War", year: 2018, type: "Movie", group: "MCU Phase 3" },
  { id: "ant-man-and-the-wasp", title: "Ant-Man and the Wasp", year: 2018, type: "Movie", group: "MCU Phase 3" },
  { id: "captain-marvel", title: "Captain Marvel", year: 2019, type: "Movie", group: "MCU Phase 3" },
  { id: "avengers-endgame", title: "Avengers: Endgame", year: 2019, type: "Movie", group: "MCU Phase 3" },
  { id: "spider-man-far-from-home", title: "Spider-Man: Far From Home", year: 2019, type: "Movie", group: "MCU Phase 3" },

  // MCU Phase 4
  { id: "black-widow", title: "Black Widow", year: 2021, type: "Movie", group: "MCU Phase 4" },
  { id: "shang-chi", title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, type: "Movie", group: "MCU Phase 4" },
  { id: "eternals", title: "Eternals", year: 2021, type: "Movie", group: "MCU Phase 4" },
  { id: "spider-man-no-way-home", title: "Spider-Man: No Way Home", year: 2021, type: "Movie", group: "MCU Phase 4" },
  { id: "doctor-strange-multiverse-of-madness", title: "Doctor Strange in the Multiverse of Madness", year: 2022, type: "Movie", group: "MCU Phase 4" },
  { id: "thor-love-and-thunder", title: "Thor: Love and Thunder", year: 2022, type: "Movie", group: "MCU Phase 4" },
  { id: "black-panther-wakanda-forever", title: "Black Panther: Wakanda Forever", year: 2022, type: "Movie", group: "MCU Phase 4" },
  { id: "wandavision", title: "WandaVision", year: 2021, type: "Series", group: "MCU Phase 4" },
  { id: "falcon-and-the-winter-soldier", title: "The Falcon and the Winter Soldier", year: 2021, type: "Series", group: "MCU Phase 4" },
  { id: "loki", title: "Loki", year: 2021, type: "Series", group: "MCU Phase 4" },
  { id: "what-if", title: "What If...?", year: 2021, type: "Series", group: "MCU Phase 4" },
  { id: "hawkeye", title: "Hawkeye", year: 2021, type: "Series", group: "MCU Phase 4" },
  { id: "moon-knight", title: "Moon Knight", year: 2022, type: "Series", group: "MCU Phase 4" },
  { id: "ms-marvel", title: "Ms. Marvel", year: 2022, type: "Series", group: "MCU Phase 4" },
  { id: "she-hulk", title: "She-Hulk: Attorney at Law", year: 2022, type: "Series", group: "MCU Phase 4" },
  { id: "werewolf-by-night", title: "Werewolf by Night", year: 2022, type: "Special", group: "MCU Phase 4" },
  { id: "gotg-holiday-special", title: "The Guardians of the Galaxy Holiday Special", year: 2022, type: "Special", group: "MCU Phase 4" },

  // MCU Phase 5
  { id: "ant-man-quantumania", title: "Ant-Man and the Wasp: Quantumania", year: 2023, type: "Movie", group: "MCU Phase 5" },
  { id: "guardians-of-the-galaxy-vol-3", title: "Guardians of the Galaxy Vol. 3", year: 2023, type: "Movie", group: "MCU Phase 5" },
  { id: "the-marvels", title: "The Marvels", year: 2023, type: "Movie", group: "MCU Phase 5" },
  { id: "deadpool-and-wolverine", title: "Deadpool & Wolverine", year: 2024, type: "Movie", group: "MCU Phase 5" },
  { id: "captain-america-brave-new-world", title: "Captain America: Brave New World", year: 2025, type: "Movie", group: "MCU Phase 5" },
  { id: "thunderbolts", title: "Thunderbolts*", year: 2025, type: "Movie", group: "MCU Phase 5" },
  { id: "secret-invasion", title: "Secret Invasion", year: 2023, type: "Series", group: "MCU Phase 5" },
  { id: "echo", title: "Echo", year: 2024, type: "Series", group: "MCU Phase 5" },
  { id: "agatha-all-along", title: "Agatha All Along", year: 2024, type: "Series", group: "MCU Phase 5" },
  { id: "x-men-97", title: "X-Men '97", year: 2024, type: "Series", group: "MCU Phase 5" },
  { id: "your-friendly-neighborhood-spider-man", title: "Your Friendly Neighborhood Spider-Man", year: 2025, type: "Series", group: "MCU Phase 5" },
  { id: "daredevil-born-again", title: "Daredevil: Born Again", year: 2025, type: "Series", group: "MCU Phase 5" },
  { id: "ironheart", title: "Ironheart", year: 2025, type: "Series", group: "MCU Phase 5" },
  { id: "eyes-of-wakanda", title: "Eyes of Wakanda", year: 2025, type: "Series", group: "MCU Phase 5" },

  // MCU Phase 6
  { id: "fantastic-four-first-steps", title: "The Fantastic Four: First Steps", year: 2025, type: "Movie", group: "MCU Phase 6" },
  { id: "spider-man-brand-new-day", title: "Spider-Man: Brand New Day", year: 2026, type: "Movie", group: "MCU Phase 6" },
  { id: "marvel-zombies", title: "Marvel Zombies", year: 2025, type: "Series", group: "MCU Phase 6" },
  { id: "wonder-man", title: "Wonder Man", year: 2026, type: "Series", group: "MCU Phase 6" },
  { id: "visionquest", title: "VisionQuest", year: 2026, type: "Series", group: "MCU Phase 6" },

  // Marvel Television
  { id: "agents-of-shield", title: "Agents of S.H.I.E.L.D.", year: 2013, type: "Series", group: "Marvel Television" },
  { id: "agent-carter", title: "Agent Carter", year: 2015, type: "Series", group: "Marvel Television" },
  { id: "daredevil", title: "Daredevil", year: 2015, type: "Series", group: "Marvel Television" },
  { id: "jessica-jones", title: "Jessica Jones", year: 2015, type: "Series", group: "Marvel Television" },
  { id: "luke-cage", title: "Luke Cage", year: 2016, type: "Series", group: "Marvel Television" },
  { id: "iron-fist", title: "Iron Fist", year: 2017, type: "Series", group: "Marvel Television" },
  { id: "the-defenders", title: "The Defenders", year: 2017, type: "Series", group: "Marvel Television" },
  { id: "the-punisher", title: "The Punisher", year: 2017, type: "Series", group: "Marvel Television" },
  { id: "runaways", title: "Runaways", year: 2017, type: "Series", group: "Marvel Television" },

  // Sony Spider-Man
  { id: "spider-man-2002", title: "Spider-Man", year: 2002, type: "Movie", group: "Sony Spider-Man" },
  { id: "spider-man-2", title: "Spider-Man 2", year: 2004, type: "Movie", group: "Sony Spider-Man" },
  { id: "spider-man-3", title: "Spider-Man 3", year: 2007, type: "Movie", group: "Sony Spider-Man" },
  { id: "the-amazing-spider-man", title: "The Amazing Spider-Man", year: 2012, type: "Movie", group: "Sony Spider-Man" },
  { id: "the-amazing-spider-man-2", title: "The Amazing Spider-Man 2", year: 2014, type: "Movie", group: "Sony Spider-Man" },
  { id: "venom", title: "Venom", year: 2018, type: "Movie", group: "Sony Spider-Man" },
  { id: "into-the-spider-verse", title: "Spider-Man: Into the Spider-Verse", year: 2018, type: "Movie", group: "Sony Spider-Man" },
  { id: "across-the-spider-verse", title: "Spider-Man: Across the Spider-Verse", year: 2023, type: "Movie", group: "Sony Spider-Man" },

  // Fox X-Men
  { id: "x-men", title: "X-Men", year: 2000, type: "Movie", group: "Fox X-Men" },
  { id: "x2", title: "X2", year: 2003, type: "Movie", group: "Fox X-Men" },
  { id: "x-men-the-last-stand", title: "X-Men: The Last Stand", year: 2006, type: "Movie", group: "Fox X-Men" },
  { id: "x-men-first-class", title: "X-Men: First Class", year: 2011, type: "Movie", group: "Fox X-Men" },
  { id: "the-wolverine", title: "The Wolverine", year: 2013, type: "Movie", group: "Fox X-Men" },
  { id: "x-men-days-of-future-past", title: "X-Men: Days of Future Past", year: 2014, type: "Movie", group: "Fox X-Men" },
  { id: "deadpool", title: "Deadpool", year: 2016, type: "Movie", group: "Fox X-Men" },
  { id: "logan", title: "Logan", year: 2017, type: "Movie", group: "Fox X-Men" },
  { id: "deadpool-2", title: "Deadpool 2", year: 2018, type: "Movie", group: "Fox X-Men" },

  // Other
  { id: "blade", title: "Blade", year: 1998, type: "Movie", group: "Other Marvel" },
];
