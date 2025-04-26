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
