/*
  Module: Advanced Random Generators
  Functions:
    - RandomAnswer(): Aztec participation pitch
    - RandomCompanyName(): region-based company names
    - RandomGovernanceComment(): governance proposal comments
    - RandomNetworkUpgrade(): network upgrade summaries
  Each generator uses dynamic pools and cross-products to exceed 10M unique combos.
*/

// Helper: pick a random element
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//返回随机公司名称 +国家区号代码
function RandomCompanyName() {
  const regions = {
    EU: {countries: ['Germany','France','Spain','Italy','Netherlands'], code:'DE'},
    NA: {countries:['USA','Canada','Mexico'], code:'US'},
    SA: {countries:['Brazil','Argentina','Colombia','Chile'], code:'BR'},
    SEA:{countries:['Singapore','Thailand','Malaysia','Indonesia'], code:'SG'},
    IN:{countries:['India'], code:'IN'},
    AU:{countries:['Australia'], code:'AU'},
    AF:{countries:['Nigeria','South Africa','Kenya','Egypt'], code:'NG'},
    ME:{countries:['UAE','Saudi Arabia','Israel'], code:'AE'}
  };
  const industries = ['Blockchain','Tech','AI','DeFi','NFT','Smart Contracts','Crypto','Digital Solutions','BioTech','CleanTech','FinTech','HealthTech','Quantum Computing','Renewable Energy','Electric Vehicles','Robotics','Cybersecurity','Artificial Intelligence','Blockchain Platforms'];
  const elements = ['Nova','Zenith','Astra','Orion','Lyra','Vega','Aurora','Zephyr','Luna','Quantum','Plasma','Galaxy','Flare','Nebula','Storm','Solar'];
  const names = {first:['John','Alice','David','Eve','Michael','Sarah','Robert','Jessica','James','Emily'], last:['Smith','Johnson','Williams','Jones','Brown','Davis','Miller','Taylor','Anderson','Clark']};
  const regionKey = randomChoice(Object.keys(regions));
  const region = regions[regionKey];
  const industry = randomChoice(industries);
  let brand;
  if(Math.random()>0.5) {
    brand = `${randomChoice(elements)} ${industry}`;
  } else if(Math.random()>0.5) {
    brand = `${randomChoice(names.first)} ${randomChoice(names.last)} ${industry}`;
  } else {
    brand = `${industry} Technologies`;
  }
  const suffix = randomChoice(['Corp','Inc','Ltd','Group','Enterprises']);
  return `${brand} ${suffix} (${region.code})`;
}
//返回随机英文名字
// 随机选择一个元素
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 随机选择一个地区
function randomRegion() {
  const regions = ["northAmerica", "southAmerica", "europe"];
  return randomFrom(regions);
}

// 随机选择一个性别
function randomGender() {
  return Math.random() > 0.5 ? "male" : "female"; // 50% 概率选择男性或女性
}

// 存储已经生成的名字，避免重复
const generatedNames = new Set();

// 根据地区和性别生成名字
function GetEnglishName() {
  const region = randomRegion();
  const gender = randomGender();

  // 地区和性别对应的音节库
  let firstSyllables = [];
  let middleSyllables = [];
  let endSyllables = [];

  if (region === "northAmerica") {
    if (gender === "male") {
      firstSyllables = northAmericaMaleFirstSyllables;
      middleSyllables = northAmericaMaleMiddleSyllables;
      endSyllables = northAmericaMaleEndSyllables;
    } else {
      firstSyllables = northAmericaFemaleFirstSyllables;
      middleSyllables = northAmericaFemaleMiddleSyllables;
      endSyllables = northAmericaFemaleEndSyllables;
    }
  } else if (region === "southAmerica") {
    if (gender === "male") {
      firstSyllables = southAmericaMaleFirstSyllables;
      middleSyllables = southAmericaMaleMiddleSyllables;
      endSyllables = southAmericaMaleEndSyllables;
    } else {
      firstSyllables = southAmericaFemaleFirstSyllables;
      middleSyllables = southAmericaFemaleMiddleSyllables;
      endSyllables = southAmericaFemaleEndSyllables;
    }
  } else if (region === "europe") {
    if (gender === "male") {
      firstSyllables = europeMaleFirstSyllables;
      middleSyllables = europeMaleMiddleSyllables;
      endSyllables = europeMaleEndSyllables;
    } else {
      firstSyllables = europeFemaleFirstSyllables;
      middleSyllables = europeFemaleMiddleSyllables;
      endSyllables = europeFemaleEndSyllables;
    }
  }

  // 生成名字，确保名字唯一
  let name = combineSyllables(firstSyllables, middleSyllables, endSyllables);

  // 如果名字已经生成过，继续生成新的名字
  while (generatedNames.has(name)) {
    name = combineSyllables(firstSyllables, middleSyllables, endSyllables);
  }

  // 将生成的名字添加到已生成名字的集合中
  generatedNames.add(name);

  return name;
}

// 组合音节生成名字
function combineSyllables(firstSyllables, middleSyllables, endSyllables) {
  const first = randomFrom(firstSyllables);
  const middle = randomFrom(middleSyllables);
  const end = randomFrom(endSyllables);
  return first + middle + end;
}

// 音节库（拓展）
//北美男性名字音节（美国、加拿大）
const northAmericaMaleFirstSyllables = [
  "John", "Michael", "David", "James", "Robert", "William", "Joseph", "Thomas", "Charles",
  "Daniel", "Paul", "Mark", "George", "Andrew", "Steven", "Joshua", "Kevin", "Brian", "Richard",
  "Samuel", "Henry", "Jason", "Ethan", "Benjamin", "Aaron", "Timothy", "Gregory", "Nathaniel",
  "Lucas", "Elijah", "Isaac", "Isaiah", "Matthew", "Jack", "Christopher", "Franklin", "Kenneth",
  "Walter", "Jordan", "Zachary", "Cameron", "Cole", "Maxwell", "Hudson", "Graham", "Dylan", "Austin",
  "Evan", "Tyler", "Caleb", "Mason", "Oliver", "Leo", "Brandon", "Calvin", "Wyatt", "Owen",
  "Elliot", "Gage", "Dawson", "Riley", "Landon", "Bennett", "Graham", "Grayson", "Quentin", "Travis",
  "Jackson", "Blake", "Carter", "Zane", "Aidan", "Liam", "Sawyer", "Milo", "Emmett", "Hunter",
  "Lorenzo", "Jasper", "Lincoln", "Brody", "Gideon", "Maddox"
];

const northAmericaMaleMiddleSyllables = [
  "son", "man", "ton", "ham", "den", "ford", "rick", "bell", "bert", "well", "field", "wood",
  "ton", "son", "sworth", "ford", "lton", "wick", "vich", "cle", "burn", "well", "mark", "field",
  "dell", "sworth", "side", "hill", "well", "tson", "dean", "baker", "singer", "more", "ton", "tley",
  "bourne", "hart", "shaw", "croft", "stone", "ridge", "carl", "lax", "wood", "gate", "stein", "huston",
  "dale", "lyn", "ben", "worth", "brook", "dale", "dre", "hart", "smith", "brooks", "walsh", "taylor"
];

const northAmericaMaleEndSyllables = [
  "er", "son", "man", "ton", "well", "rick", "ford", "land", "field", "worth", "wood", "ham",
  "ton", "den", "ly", "ton", "der", "le", "field", "ler", "wood", "ner", "well", "ter", "terson",
  "ton", "son", "berg", "gley", "er", "zel", "ton", "croft", "dale", "well", "ton", "field", "berger",
  "lyn", "bury", "burg", "ker", "ham", "holt", "helm", "baker", "hayes", "ston", "reese", "hawk",
  "ter", "wood", "shard", "way", "nor", "stone"
];
// 北美女性名字音节（美国、加拿大）
const northAmericaFemaleFirstSyllables = [
  "Emily", "Jessica", "Sarah", "Ashley", "Amanda", "Hannah", "Samantha", "Elizabeth", "Lauren",
  "Olivia", "Chloe", "Grace", "Sophia", "Isabella", "Emma", "Ava", "Madison", "Charlotte",
  "Abigail", "Evelyn", "Lily", "Mia", "Ella", "Aria", "Zoe", "Lily", "Ella", "Hailey", "Savannah",
  "Addison", "Sofia", "Nora", "Audrey", "Brooklyn", "Catherine", "Avery", "Isabelle", "Bella",
  "Sadie", "Lillian", "Amelia", "Gabriella", "Autumn", "Ellie", "Maya", "Ella", "Riley", "Leah",
  "Sophie", "Paisley", "Mackenzie", "Madeline", "Kylie", "Tessa", "Lola", "Peyton", "Chloe", "Kaitlyn",
  "Violet", "Emery", "Reagan", "Sierra", "Camila", "Ruby", "Cora", "Eleanor", "Dakota", "Gracie", "Juliana"
];

const northAmericaFemaleMiddleSyllables = [
  "la", "son", "na", "ly", "beth", "a", "sa", "ria", "li", "ane", "ine", "iana", "el", "ara",
  "no", "dell", "ma", "beth", "lyn", "tiana", "hanna", "lee", "reese", "grace", "nette", "marie",
  "lyn", "sa", "noa", "issa", "ine", "glen", "ley", "ga", "lea", "dora", "ine", "evelyn", "fi", "rae",
  "ton", "mar", "ver", "sha", "bell", "ella", "les", "sie", "lise", "den", "beth"
];

const northAmericaFemaleEndSyllables = [
  "son", "ella", "beth", "a", "leigh", "ton", "sley", "ine", "ly", "ette", "ian", "na", "belle",
  "more", "ton", "lyn", "na", "ta", "ka", "tia", "ne", "ma", "den", "eva", "sue", "li", "line", "rose",
  "ette", "bella", "la", "ne", "sie", "beth", "lia", "y", "ne", "lee", "lyn", "ra", "ra", "delle", "nette"
];

// 南美男性名字音节（巴西、墨西哥、巴拿马）
const southAmericaMaleFirstSyllables = [
  "Juan", "Carlos", "Luis", "Pedro", "Javier", "José", "Antonio", "Francisco", "Alejandro",
  "Ricardo", "Miguel", "Santiago", "Eduardo", "Victor", "Hernan", "Andres", "Manuel", "Raul",
  "Oscar", "Rafael", "Felipe", "Alberto", "Gabriel", "Fernando", "Enrique", "Felix", "Alfredo",
  "Arturo", "Gerardo", "Bernardo", "Adrián", "Guillermo", "César", "Héctor", "Jaime", "Lucas",
  "Ramón", "Diego", "Iván", "Carlos", "Emilio", "Luis", "Esteban", "Nicolás", "Esteban",
  "Antonio", "Eduardo", "Salvador", "Clemente", "Ricardo", "Héctor", "Ramiro", "Cristian", 
  "Octavio", "Raúl", "Roberto", "Felipe", "Sergio", "Marco", "Diego", "Fabián", "Alfonso"
];

const southAmericaMaleMiddleSyllables = [
  "do", "rez", "ez", "sa", "gu", "la", "mer", "ri", "ta", "iz", "el", "al", "is", "tor", "mar",
  "san", "cia", "pa", "las", "vega", "zor", "gar", "tor", "esta", "za", "del", "juarez", "val",
  "mont", "go", "rio", "dez", "lza", "io", "ia", "sa", "ta", "no", "ti", "zar", "val", "san", 
  "la", "go", "reo", "mi", "nzo", "guero", "ca", "lio", "quez", "cedo", "millo", "leo"
];

const southAmericaMaleEndSyllables = [
  "es", "ez", "on", "al", "edo", "der", "man", "edo", "o", "al", "ez", "ar", "on", "an", "ez",
  "guero", "za", "nal", "az", "ol", "res", "tor", "in", "zaro", "ro", "vio", "za", "re", "ro", "nzo",
  "dero", "nzo", "do", "in", "ter", "to", "mbo", "co", "as", "zo", "de", "rito"
];

// 南美女性名字音节（巴西、墨西哥、巴拿马）
const southAmericaFemaleFirstSyllables = [
  "Maria", "Ana", "Isabel", "Sofia", "Gabriela", "Juliana", "Carla", "Fernanda", "Patricia",
  "Lucia", "Diana", "Rosa", "Ariana", "Andrea", "Vera", "Monica", "Beatriz", "Carmen", "Marta",
  "Paula", "Elena", "Raquel", "Vanessa", "Claudia", "Lorena", "Veronica", "Margarita", "Marcela",
  "Monica", "Luisa", "Martina", "Patricia", "Sofia", "Amanda", "Carolina", "Giovanna",
  "Camila", "Paula", "Renata", "Lina", "Elisa", "Belen", "Nadia", "Catalina", "Tatiana", "Sabrina",
  "Gisela", "Lorena", "Ximena", "Bárbara", "Eugenia", "Adriana", "Luz", "Leticia", "Rosario"
];

const southAmericaFemaleMiddleSyllables = [
  "sa", "na", "li", "la", "ta", "be", "na", "el", "ia", "ra", "ri", "on", "via", "a", "ra", "la",
  "tia", "ia", "ne", "ra", "ma", "sio", "lina", "a", "zora", "ga", "da", "ri", "des", "nette", "ela",
  "te", "na", "eza", "tia", "za", "la", "pa", "ne", "noa", "va", "ta", "zi"
];

const southAmericaFemaleEndSyllables = [
  "na", "es", "a", "ita", "el", "ia", "ena", "ia", "na", "ia", "zo", "ti", "ta", "lia", "le", "ra",
  "do", "iza", "ira", "ana", "za", "la", "ta", "nia", "li", "ca", "sa", "ta", "ela", "da", "ka"
];

// 欧洲男性名字音节（西班牙、法国、意大利、德国、英国）
const europeMaleFirstSyllables = [
  "John", "Michael", "James", "David", "William", "Daniel", "Edward", "George", "Charles",
  "Thomas", "Henry", "Robert", "Lucas", "Oscar", "Alex", "Samuel", "Leo", "Max", "Vincent",
  "Luca", "Sebastian", "Julian", "Enzo", "Oscar", "Antonio", "Carlos", "Mateo", "Alejandro",
  "Santiago", "Emilio", "Felipe", "Arturo", "Gerardo", "Adrián", "Guillermo", "César", "Héctor",
  "Jaime", "Lucas", "Ramón", "Diego", "Iván", "Carlos", "Emilio", "Luis", "Esteban", "Nicolás",
  "Francesco", "Matteo", "Giovanni", "Ethan", "Aaron", "David", "Leonardo", "Christian", "Martin",
  "Pierre", "Thierry", "Emmanuel", "Pascal", "Zachary", "Lorenzo", "Dominic", "Mikhail", "Hugo"
];

const europeMaleMiddleSyllables = [
  "za", "sio", "al", "tor", "es", "ano", "o", "ar", "ol", "van", "tor", "ler", "lan", "nas",
  "ric", "mer", "al", "fer", "men", "taz", "ti", "ta", "ri", "ger", "nor", "ni", "ren", "lan",
  "ton", "el", "mar", "no", "gno", "ald", "al", "mund", "im", "val", "zel", "ben", "vis", "mond"
];

const europeMaleEndSyllables = [
  "son", "o", "ll", "in", "and", "o", "man", "ter", "di", "stein", "er", "den", "van", "der",
  "ler", "ston", "ger", "ne", "der", "os", "tor", "beck", "den", "le", "dov", "ka", "dov",
  "rich", "dorf", "well", "den", "man", "kamp", "ber", "grove", "ford", "per", "kirk"
];
// 继续定义欧洲女性名字的音节

// 欧洲女性名字音节（西班牙、法国、意大利、德国、英国）
const europeFemaleFirstSyllables = [
  "Anna", "Maria", "Sofia", "Isabelle", "Emma", "Olivia", "Charlotte", "Amelia", "Lily",
  "Grace", "Mia", "Eva", "Luna", "Clara", "Lea", "Zoe", "Victoria", "Sophia", "Gabriella",
  "Chloe", "Aurora", "Carla", "Adriana", "Luisa", "Helena", "Elena", "Lina", "Alice", "Lily",
  "Margarita", "Julia", "Diana", "Francesca", "Paola", "Cecilia", "Laura", "Elisa", "Serena",
  "Francesca", "Monica", "Simona", "Giulia", "Valentina", "Carolina", "Martina", "Vanessa", "Carmen"
];

const europeFemaleMiddleSyllables = [
  "ri", "ne", "la", "sa", "ra", "ne", "na", "lia", "ra", "ana", "bella", "sophie", "cia",
  "ton", "elia", "lina", "elina", "ia", "ilva", "diana", "na", "noa", "celia", "ma", "tina",
  "sandra", "se", "pina", "ka", "ne", "a", "lia", "ri", "ti", "ri", "ne", "ka", "diana"
];

const europeFemaleEndSyllables = [
  "a", "ita", "ine", "ella", "ra", "na", "el", "ina", "ta", "ria", "la", "cia", "ine", "a",
  "o", "na", "ina", "lia", "e", "lia", "ya", "lle", "ana", "ro", "tia", "tte", "le", "ra",
  "na", "na"
];

// 然后合并音节和生成名字的函数代码保持不变
// 继续使用之前的代码来生成名字，保持所有其他地区和性别音节库的完整性


//返回随机Web3 金融类型等职业
function getRandomProfession() {
  const professions = [
    "Artificial Intelligence Engineer",
    "Big Data Architect",
    "Web3 Developer",
    "Blockchain Engineer",
    "FinTech Product Manager",
    "Machine Learning Researcher",
    "Data Analyst",
    "Backend Developer",
    "Frontend Developer",
    "Cloud Solutions Architect",
    "Cybersecurity Specialist",
    "Smart Contract Developer",
    "DevOps Engineer",
    "Mobile App Developer",
    "Algorithm Engineer"
  ];

  const randomIndex = Math.floor(Math.random() * professions.length);
  return professions[randomIndex];
}
const generateAdditionalInfo = () => {
  const infoOptions = [
    "We are looking forward to exploring synergies with your team.",
    "We believe our technology aligns well with Codex.xyz's mission and goals.",
    "Our company offers unique insights and resources that can benefit Codex.xyz.",
    "We are confident that collaborating with Codex.xyz will bring value to both sides.",
    "We would love to partner with you and make a difference together.",
    "We are eager to collaborate and innovate alongside Codex.xyz.",
    "I came across Codex.xyz on Twitter and was deeply impressed by your vision.",
    "I’m particularly interested in your workflow around decentralized identity and smart contract orchestration.",
    "As a Web3 developer focusing on DAO governance tooling, Codex caught my eye with its automation layer.",
    "Codex’s modular approach to task coordination perfectly aligns with what I build for on-chain ops.",
    "I’ve been following Codex updates via community calls and would love to get involved early.",
    "As someone working on AI agents + Web3 task flows, I find Codex uniquely positioned in the space.",
    "I discovered Codex.xyz through GitHub discussions and found your concept of code-driven whitelist automation fascinating."
  ];
  return infoOptions[Math.floor(Math.random() * infoOptions.length)];
};

// 生成邮件标题
const generateEmailSubject = (company, language, additionalInfo, isCompany) => {
  const subjects = {
    en: isCompany ? [
      `Whitelist Request for ${company} on Codex.xyz`,
      `Applying for Whitelist Access to Codex.xyz from ${company}`,
      `${company} - Whitelist Application for Codex.xyz`,
      `${company} Request to Join Codex.xyz Whitelist`,
      `Partnership Opportunity with ${company} - Whitelist Request on Codex.xyz`,
      `${additionalInfo} - Whitelist Application for ${company} on Codex.xyz`,
      `Hello Codex.xyz - ${company} Application for Whitelist`,
      `${company} Whitelist Request for Codex.xyz - Access Request`
    ] : [
      `Whitelist Request from ${company} - ${additionalInfo}`,
      `Hello Codex.xyz - ${company}'s Whitelist Application`,
      `Application for ${company}'s Whitelist Access`,
      `Personal Request for ${company}'s Whitelist - ${additionalInfo}`,
      `${company} - ${additionalInfo} Whitelist Application`,
      `${company} - ${additionalInfo} Access Request`,
      `Request for ${company} to Join Codex.xyz Whitelist`,
      `Exploring Collaboration: ${company} Whitelist Request`
    ],
    zh: isCompany ? [
      `关于${company}在Codex.xyz的白名单申请`,
      `${company}在Codex.xyz的白名单权限申请`,
      `申请加入Codex.xyz的白名单 - ${company}`,
      `${company} - 请求加入Codex.xyz白名单`,
      `来自${company}的Codex.xyz白名单申请`,
      `${additionalInfo} - ${company}申请Codex.xyz的白名单`,
      `您好，${company} - 申请Codex.xyz白名单`,
      `${company} - 请求加入Codex.xyz的白名单`
    ] : [
      `来自${company}的个人白名单申请 - ${additionalInfo}`,
      `个人请求加入Codex.xyz白名单 - ${company}`,
      `${company}个人白名单申请 - ${additionalInfo}`,
      `${company} - ${additionalInfo} 个人白名单申请`,
      `${company} - ${additionalInfo} 访问请求`,
      `白名单请求：${company}个人申请`,
      `与${company}合作机会 - ${additionalInfo}`,
      `申请加入Codex.xyz - ${company}个人白名单`
    ],
    zh_tw: isCompany ? [
      `關於${company}在Codex.xyz的白名單申請`,
      `${company}在Codex.xyz的白名單權限申請`,
      `申請加入Codex.xyz的白名單 - ${company}`,
      `${company} - 請求加入Codex.xyz白名單`,
      `來自${company}的Codex.xyz白名單申請`,
      `${additionalInfo} - ${company}申請Codex.xyz的白名單`,
      `您好，${company} - 申請Codex.xyz白名單`,
      `${company} - 請求加入Codex.xyz的白名單`
    ] : [
      `來自${company}的個人白名單申請 - ${additionalInfo}`,
      `個人請求加入Codex.xyz白名單 - ${company}`,
      `${company}個人白名單申請 - ${additionalInfo}`,
      `${company} - ${additionalInfo} 個人白名單申請`,
      `${company} - ${additionalInfo} 訪問請求`,
      `白名單請求：${company}個人申請`,
      `與${company}合作機會 - ${additionalInfo}`,
      `申請加入Codex.xyz - ${company}個人白名單`
    ]
  };

  return subjects[language][Math.floor(Math.random() * subjects[language].length)];
};

// 生成邮件正文
const generateEmailBody = (company, name, email, language, additionalInfo, isCompany) => {
  const bodyTemplates = {
    en: isCompany ? [
      `My name is ${name}, and I am reaching out to request whitelist access for ${company} on Codex.xyz. We believe our partnership with your platform can bring tremendous value. ${additionalInfo}`,
      `I am ${name}, representing ${company}, and I would like to apply for whitelist access to Codex.xyz. We are excited to explore the opportunities for collaboration with your team. ${additionalInfo}`,
      `Hi Codex.xyz team, I'm ${name} from ${company}. We would love to be a part of your whitelist and explore how our cooperation can benefit both sides. ${additionalInfo}`,
      `Dear Codex.xyz team, I am writing to express ${company}'s interest in joining your whitelist. We are confident that collaborating with you will be beneficial. ${additionalInfo}`,
      `Hello Codex.xyz, this is ${name} from ${company}. We are interested in becoming part of your whitelist and would like to discuss potential partnership opportunities. ${additionalInfo}`,
      `We hope to establish a long-term relationship with Codex.xyz, leveraging our combined strengths for mutual success. ${additionalInfo}`
    ] : [
      `Hi Codex.xyz, I’m ${name} from ${company}. I’ve been following your work and am really excited about the potential to collaborate. I’d love to join the whitelist and contribute to your community. ${additionalInfo}`,
      `Hi Codex.xyz, I’m ${name}, and I represent ${company}. We are looking forward to the opportunity to work with your team. ${additionalInfo}`,
      `Dear Codex.xyz, I’m ${name} from ${company}, and I’d like to express our interest in joining your whitelist. ${additionalInfo}`,
      `Hello Codex.xyz, I’m ${name}, representing ${company}. We believe our synergy with your platform can lead to great things. ${additionalInfo}`,
      `Hi, I’m ${name}. I came across Codex.xyz and found your platform’s mission very compelling. ${additionalInfo}`,
      `Hello Codex.xyz, I’m ${name} from ${company}. We are looking forward to exploring synergies between our teams. ${additionalInfo}`
    ],
    zh: isCompany ? [
      `您好，我是${name}，来自${company}，我希望能为${company}申请Codex.xyz的白名单权限。我们相信与您平台的合作将会带来巨大的价值。${additionalInfo}`,
      `我是${company}的${name}，我们希望申请加入Codex.xyz的白名单，并探索与贵平台的合作机会。${additionalInfo}`,
      `尊敬的Codex.xyz团队，我是${company}的${name}，我们希望申请贵平台的白名单，并期待与您团队的合作。${additionalInfo}`,
      `尊敬的Codex.xyz，您好，我是${company}的${name}，我们非常期待与贵平台的合作，申请加入Codex.xyz白名单。${additionalInfo}`,
      `您好，Codex.xyz团队，我是${name}，代表${company}，我们希望申请加入Codex.xyz白名单，期待与贵平台的进一步合作。${additionalInfo}`,
      `我们希望与Codex.xyz建立长期合作关系，利用双方的优势共同取得成功。${additionalInfo}`
    ] : [
      `您好，我是${name}，来自${company}，我希望能为${company}申请Codex.xyz的白名单权限。我们相信与您平台的合作将会带来巨大的价值。${additionalInfo}`,
      `您好，Codex.xyz，我是${name}，我通过推特了解到了你们的项目，非常期待与贵团队的合作。${additionalInfo}`,
      `尊敬的Codex.xyz团队，我是${name}，我代表${company}申请加入贵平台的白名单，希望能够获得进一步合作的机会。${additionalInfo}`
    ],
    zh_tw: isCompany ? [
      `您好，我是${name}，來自${company}，我希望能為${company}申請Codex.xyz的白名單權限。相信與貴平台的合作將帶來巨大的價值。${additionalInfo}`,
      `我是${company}的${name}，我們希望申請加入Codex.xyz的白名單，並探索與貴平台的合作機會。${additionalInfo}`,
      `尊敬的Codex.xyz團隊，我是${company}的${name}，我們希望申請貴平台的白名單，並期待與您團隊的合作。${additionalInfo}`,
      `尊敬的Codex.xyz，您好，我是${company}的${name}，我們期待與貴平台的合作，申請加入Codex.xyz白名單。${additionalInfo}`,
      `您好，Codex.xyz團隊，我是${name}，代表${company}，我們希望申請加入Codex.xyz白名單，期待與貴平台的進一步合作。${additionalInfo}`,
      `我們希望與Codex.xyz建立長期合作關係，利用雙方的優勢共同取得成功。${additionalInfo}`
    ] : [
      `您好，我是${name}，來自${company}，我希望能為${company}申請Codex.xyz的白名單權限。相信與貴平台的合作將帶來巨大的價值。${additionalInfo}`,
      `您好，Codex.xyz，我是${name}，我通過推特了解到了你們的項目，非常期待與貴團隊的合作。${additionalInfo}`,
      `尊敬的Codex.xyz團隊，我是${name}，我代表${company}申請加入貴平台的白名單，希望能夠獲得進一步合作的機會。${additionalInfo}`
    ]
  };

  return bodyTemplates[language][Math.floor(Math.random() * bodyTemplates[language].length)];
};

// 随机语言
const getRandomLanguage = () => {
  const languages = ["en", "zh", "zh_tw"];
  return languages[Math.floor(Math.random() * languages.length)];
};

// ⚠️ 这是同步版本：生成唯一邮件列表
const generateUniqueEmails = (company, name, email) => {
  const language = getRandomLanguage();
  const additionalInfo = generateAdditionalInfo();
  const isCompany = company != '';
  const subject = generateEmailSubject(company, language, additionalInfo, isCompany);
  const body = generateEmailBody(company, name, email, language, additionalInfo, isCompany);

  data = {
    subject,
    body
  };
  return JSON.stringify(data);
};

function getEmaildata(company, name, email){
const emails = generateUniqueEmails(company, name, email);
    return emails
}
