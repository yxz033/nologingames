export type GameCategory = 'Action' | 'RPG' | 'Casual' | 'Fighting' | 'Shooting' | 'Multiplayer' | 'Racing' | 'Sports' | 'Strategy';
export type GameType = 'Action/Combat' | 'Shooter' | 'Casual' | 'Multiplayer' | 'Racing' | 'Sports' | 'Strategy';
export type GamePlatform = 'Browser' | 'Mobile' | 'Desktop';
export type GameDevice = 'Keyboard/Mouse' | 'Touch' | 'Gamepad';

export interface Game {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  developer: string;
  category: GameCategory;
  type: GameType;
  imageUrl: string;
  thumbnailUrl?: string;
  gameUrl: string;
  iframeUrl: string;
  aspectRatio: number;
  platforms: GamePlatform[];
  devices: GameDevice[];
  releaseDate?: string;
  lastUpdated?: string;
  version?: string;
  playCount?: number;
  rating?: number;
  ratingCount?: number;
  tags?: string[];
  features?: string[];
  controls?: {
    movement?: string;
    action?: string;
    special?: string;
    other?: string;
  };
  requirements?: {
    os?: string[];
    browser?: string[];
    graphics?: string;
    processor?: string;
    memory?: string;
  };
  screenshots?: {
    url: string;
    caption?: string;
  }[];
  videos?: {
    url: string;
    type: 'trailer' | 'gameplay';
    thumbnail?: string;
  }[];
  relatedGames?: string[]; // game ids
}

export function validateGame(game: Game): boolean {
  return (
    typeof game.id === 'string' &&
    game.id.length > 0 &&
    typeof game.title === 'string' &&
    game.title.length > 0 &&
    typeof game.description === 'string' &&
    game.description.length > 0 &&
    typeof game.developer === 'string' &&
    game.developer.length > 0 &&
    typeof game.imageUrl === 'string' &&
    game.imageUrl.length > 0 &&
    typeof game.gameUrl === 'string' &&
    game.gameUrl.length > 0
  );
}

export const games: Game[] = [
  {
    id: "bandit-rip",
    title: "Bandit RIP: Smackdown [BETA]",
    description: "A free-to-play online fighting game in the browser. It is like Street Fighter or Smash Bros!",
    longDescription: "Select your favorite character and join the battle in this action-packed fighting game! Fight against players from around the world in intense 1v1 or team battles. Master unique moves and combos for each character, climb the ranks, and become the ultimate champion!",
    developer: "Zetoman77",
    category: "Fighting",
    type: "Action/Combat",
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Bandit+RIP',
    thumbnailUrl: 'https://placehold.co/300x200/e2e8f0/475569?text=Bandit+RIP',
    gameUrl: "https://bandit.rip",
    iframeUrl: "https://html-classic.itch.zone/html/5756921/banditripiframe/index.html",
    aspectRatio: 1050/540,
    platforms: ['Browser'],
    devices: ['Keyboard/Mouse'],
    releaseDate: "2024-01-15",
    lastUpdated: "2024-03-20",
    version: "0.9.5 BETA",
    playCount: 150000,
    rating: 4.5,
    ratingCount: 1200,
    tags: ['Fighting', 'PvP', 'Action', 'Multiplayer', 'Beta'],
    features: ['Online Multiplayer', 'Character Selection', 'Ranking System', 'Chat'],
    controls: {
      movement: "WASD: 移动",
      action: "鼠标左键/J/K/L: 攻击",
      special: "空格: 冲刺",
      other: "T: 聊天, SHIFT: 显示状态"
    },
    requirements: {
      browser: ['Chrome 90+', 'Firefox 88+', 'Safari 14+'],
      graphics: "WebGL 2.0",
      processor: "2 GHz dual core",
      memory: "4 GB RAM"
    },
    screenshots: [
      {url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=Screenshot+1'},
      {url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=Screenshot+2'},
      {url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=Screenshot+3'}
    ],
    relatedGames: ["narrow-one", "commando"]
  },
  {
    id: "narrow-one",
    title: "Narrow One",
    description: "A casual shooting game with simple controls and addictive gameplay.",
    longDescription: "Fight through waves of enemies in this action-packed adventure! Narrow One combines casual gameplay with intense shooting action. Explore various maps, collect weapons, and compete with players worldwide. Perfect for quick gaming sessions!",
    developer: "Pelican Party",
    category: "Shooting",
    type: "Casual",
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Narrow+One',
    thumbnailUrl: 'https://placehold.co/300x200/e2e8f0/475569?text=Narrow+One',
    gameUrl: "https://narrow.one",
    iframeUrl: "https://narrow.one",
    aspectRatio: 16/9,
    platforms: ['Browser', 'Mobile'],
    devices: ['Keyboard/Mouse', 'Touch'],
    releaseDate: "2023-12-01",
    lastUpdated: "2024-03-15",
    version: "1.2.0",
    playCount: 250000,
    rating: 4.7,
    ratingCount: 2800,
    tags: ['Shooter', 'Casual', 'Action', 'Multiplayer'],
    features: ['Cross-platform', 'Multiple Maps', 'Weapon Variety', 'Leaderboards'],
    controls: {
      movement: "WASD/方向键: 移动",
      action: "鼠标左键: 射击",
      special: "R: 重新加载, F: 互动",
      other: "TAB: 计分板"
    },
    requirements: {
      browser: ['Chrome 88+', 'Firefox 87+', 'Safari 14+'],
      graphics: "WebGL 2.0",
      processor: "1.6 GHz",
      memory: "2 GB RAM"
    },
    screenshots: [
      {url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=Screenshot+1'},
      {url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=Screenshot+2'}
    ],
    relatedGames: ["bandit-rip", "commando"]
  },
  {
    id: "commando",
    title: "Commando",
    description: "A classic top-down shooter game where you fight through waves of enemies. Use strategy and skill to complete your mission.",
    longDescription: "Experience intense top-down shooting action in Commando! Fight your way through multiple challenging levels filled with enemies, collect powerful weapons, and complete strategic missions. Test your skills in this classic arcade-style shooter that combines fast-paced action with tactical gameplay.",
    developer: "MM",
    category: "Action",
    type: "Shooter",
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=Commando',
    thumbnailUrl: 'https://placehold.co/300x200/e2e8f0/475569?text=Commando',
    gameUrl: "https://mm.itch.io/commando",
    iframeUrl: "https://v6p9d9t4.ssl.hwcdn.net/html/4725460/index.html",
    aspectRatio: 16/9,
    platforms: ['Browser'],
    devices: ['Keyboard/Mouse'],
    releaseDate: "2023-11-15",
    lastUpdated: "2024-02-28",
    version: "1.1.2",
    playCount: 180000,
    rating: 4.3,
    ratingCount: 1500,
    tags: ['Shooter', 'Action', 'Arcade', 'Single Player'],
    features: [
      'Multiple Levels',
      'Weapon Upgrades',
      'Boss Battles',
      'High Score System'
    ],
    controls: {
      movement: "WASD/方向键: 移动",
      action: "鼠标左键: 射击",
      special: "空格: 闪避",
      other: "R: 重新加载, Tab: 暂停"
    },
    requirements: {
      browser: ['Chrome 85+', 'Firefox 85+', 'Safari 14+'],
      graphics: "WebGL 1.0",
      processor: "1.6 GHz",
      memory: "2 GB RAM"
    },
    screenshots: [
      {
        url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=Commando+Screenshot+1',
        caption: '激烈的战斗场景'
      },
      {
        url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=Commando+Screenshot+2',
        caption: '武器升级系统'
      },
      {
        url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=Commando+Screenshot+3',
        caption: 'Boss战斗'
      }
    ],
    relatedGames: ["narrow-one", "bandit-rip"]
  },
  {
    id: "omori-multiplayer",
    title: "OMORI Multiplayer RP",
    description: "A multiplayer role-playing game based on the OMORI universe. Join other players in this unique RPG experience.",
    longDescription: "Dive into the mysterious world of OMORI with friends! This multiplayer adaptation brings the beloved RPG universe to life in a whole new way. Create your character, explore atmospheric environments, interact with other players, and uncover the secrets that lie within this unique collaborative experience.",
    developer: "Totally Fungal",
    category: "RPG",
    type: "Multiplayer",
    imageUrl: 'https://placehold.co/600x400/e2e8f0/475569?text=OMORI+Multiplayer',
    thumbnailUrl: 'https://placehold.co/300x200/e2e8f0/475569?text=OMORI+Multiplayer',
    gameUrl: "https://totallyfungal.itch.io/omori-multiplayer-rp",
    iframeUrl: "https://v6p9d9t4.ssl.hwcdn.net/html/6818806/index.html",
    aspectRatio: 4/3,
    platforms: ['Browser'],
    devices: ['Keyboard/Mouse'],
    releaseDate: "2024-01-05",
    lastUpdated: "2024-03-10",
    version: "0.8.5",
    playCount: 120000,
    rating: 4.6,
    ratingCount: 980,
    tags: ['RPG', 'Multiplayer', 'Adventure', 'Story Rich'],
    features: [
      'Character Customization',
      'Real-time Multiplayer',
      'Interactive World',
      'Quest System'
    ],
    controls: {
      movement: "WASD/方向键: 移动",
      action: "E: 互动",
      special: "1-4: 技能快捷键",
      other: "T: 聊天, M: 地图"
    },
    requirements: {
      browser: ['Chrome 88+', 'Firefox 87+', 'Safari 14+'],
      graphics: "WebGL 2.0",
      processor: "2 GHz",
      memory: "4 GB RAM"
    },
    screenshots: [
      {
        url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=OMORI+Screenshot+1',
        caption: '角色创建界面'
      },
      {
        url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=OMORI+Screenshot+2',
        caption: '多人探索场景'
      },
      {
        url: 'https://placehold.co/1920x1080/e2e8f0/475569?text=OMORI+Screenshot+3',
        caption: '任务系统界面'
      }
    ],
    relatedGames: ["narrow-one", "bandit-rip"]
  }
]; 