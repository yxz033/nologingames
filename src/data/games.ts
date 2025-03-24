export interface Game {
  id: string;
  title: string;
  description: string;
  developer: string;
  category: string;
  type: string;
  imageUrl: string;
  gameUrl: string;
}

export const games: Game[] = [
  {
    id: "bandit-rip",
    title: "Bandit RIP: Smackdown [BETA]",
    description: "A free-to-play online fighting game in the browser. It is like Street Fighter or Smash Bros! Select your favorite character and join the battle!",
    developer: "Zetoman77",
    category: "Fighting",
    type: "Action/Combat",
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Bandit+RIP',
    gameUrl: "https://bandit.rip"
  },
  {
    id: "narrow-one",
    title: "Narrow One",
    description: "A casual shooting game with simple controls and addictive gameplay. Fight through waves of enemies in this action-packed adventure.",
    developer: "Pelican Party",
    category: "Shooting",
    type: "Casual",
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Narrow+One',
    gameUrl: "https://pelicanparty.itch.io/narrow-one"
  },
  {
    id: "commando",
    title: "Commando",
    description: "A classic top-down shooter game where you fight through waves of enemies. Use strategy and skill to complete your mission.",
    developer: "MM",
    category: "Action",
    type: "Shooter",
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Commando',
    gameUrl: "https://mm.itch.io/commando"
  },
  {
    id: "omori-multiplayer",
    title: "OMORI Multiplayer RP",
    description: "A multiplayer role-playing game based on the OMORI universe. Join other players in this unique RPG experience.",
    developer: "Totally Fungal",
    category: "RPG",
    type: "Multiplayer",
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=OMORI+Multiplayer',
    gameUrl: "https://totallyfungal.itch.io/omori-multiplayer-rp"
  }
]; 