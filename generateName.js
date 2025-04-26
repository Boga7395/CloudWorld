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
function generateName() {
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

// 北美男性名字音节（美国、加拿大）
const northAmericaMaleFirstSyllables = [
  "John", "Michael", "David", "James", "Robert", "William", "Joseph", "Thomas", "Charles",
  "Daniel", "Paul", "Mark", "George", "Andrew", "Steven", "Joshua", "Kevin", "Brian", "Richard",
  "Samuel", "Henry", "Jason", "Ethan", "Benjamin", "Aaron", "Timothy", "Gregory", "Nathaniel",
  "Lucas", "Elijah", "Isaac", "Isaiah", "Matthew", "Jack", "Christopher", "Franklin", "Kenneth",
  "Walter", "Jordan", "Zachary", "Cameron", "Cole", "Maxwell", "Hudson", "Graham", "Dylan", "Austin",
  "Evan", "Tyler", "Caleb", "Mason", "Oliver", "Leo", "Brandon", "Calvin", "Wyatt", "Owen"
];

const northAmericaMaleMiddleSyllables = [
  "son", "man", "ton", "ham", "den", "ford", "rick", "bell", "bert", "well", "field", "wood",
  "ton", "son", "sworth", "ford", "lton", "wick", "vich", "cle", "burn", "well", "mark", "field",
  "dell", "sworth", "side", "hill", "well", "tson", "dean", "baker", "singer", "more", "ton", "tley"
];

const northAmericaMaleEndSyllables = [
  "er", "son", "man", "ton", "well", "rick", "ford", "land", "field", "worth", "wood", "ham",
  "ton", "den", "ly", "ton", "der", "le", "field", "ler", "wood", "ner", "well", "ter", "terson",
  "ton", "son", "berg", "gley", "er", "zel"
];

// 北美女性名字音节（美国、加拿大）
const northAmericaFemaleFirstSyllables = [
  "Emily", "Jessica", "Sarah", "Ashley", "Amanda", "Hannah", "Samantha", "Elizabeth", "Lauren",
  "Olivia", "Chloe", "Grace", "Sophia", "Isabella", "Emma", "Ava", "Madison", "Charlotte",
  "Abigail", "Evelyn", "Lily", "Mia", "Ella", "Aria", "Zoe", "Lily", "Ella", "Hailey", "Savannah",
  "Addison", "Sofia", "Nora", "Audrey", "Brooklyn", "Catherine", "Avery", "Isabelle", "Bella",
  "Sadie", "Lillian", "Amelia", "Gabriella", "Autumn", "Ellie", "Maya", "Ella", "Riley", "Leah",
  "Sophie", "Paisley", "Mackenzie", "Madeline"
];

const northAmericaFemaleMiddleSyllables = [
  "la", "son", "na", "ly", "beth", "a", "sa", "ria", "li", "ane", "ine", "iana", "el", "ara",
  "no", "dell", "ma", "beth", "lyn", "tiana", "hanna", "lee", "reese", "grace", "nette", "marie",
  "lyn", "sa", "noa", "issa", "ine", "glen", "ley", "ga", "lea"
];

const northAmericaFemaleEndSyllables = [
  "son", "ella", "beth", "a", "leigh", "ton", "sley", "ine", "ly", "ette", "ian", "na", "belle",
  "more", "ton", "lyn", "na", "ta", "ka", "tia", "ne", "ma", "den", "eva", "sue", "li", "line", "rose"
];

// 南美男性名字音节（巴西、墨西哥、巴拿马）
const southAmericaMaleFirstSyllables = [
  "Juan", "Carlos", "Luis", "Pedro", "Javier", "José", "Antonio", "Francisco", "Alejandro",
  "Ricardo", "Miguel", "Santiago", "Eduardo", "Victor", "Hernan", "Andres", "Manuel", "Raul",
  "Oscar", "Rafael", "Felipe", "Alberto", "Gabriel", "Fernando", "Enrique", "Felix", "Alfredo",
  "Arturo", "Gerardo", "Bernardo", "Adrián", "Guillermo", "César", "Héctor", "Jaime", "Lucas",
  "Ramón", "Diego", "Iván", "Carlos", "Emilio", "Luis", "Esteban", "Nicolás", "Esteban"
];

const southAmericaMaleMiddleSyllables = [
  "do", "rez", "ez", "sa", "gu", "la", "mer", "ri", "ta", "iz", "el", "al", "is", "tor", "mar",
  "san", "cia", "pa", "las", "vega", "zor", "gar", "tor", "esta", "za", "del", "juarez", "val",
  "mont", "go", "rio", "dez", "lza", "io", "ia", "sa", "ta", "no"
];

const southAmericaMaleEndSyllables = [
  "es", "ez", "on", "al", "edo", "der", "man", "edo", "o", "al", "ez", "ar", "on", "an", "ez",
  "guero", "za", "nal", "az", "ol", "res", "tor", "in", "zaro", "ro", "vio", "za", "re", "ro", "nzo"
];

// 南美女性名字音节（巴西、墨西哥、巴拿马）
const southAmericaFemaleFirstSyllables = [
  "Maria", "Ana", "Isabel", "Sofia", "Gabriela", "Juliana", "Carla", "Fernanda", "Patricia",
  "Lucia", "Diana", "Rosa", "Ariana", "Andrea", "Vera", "Monica", "Beatriz", "Carmen", "Marta",
  "Paula", "Elena", "Raquel", "Vanessa", "Claudia", "Lorena", "Veronica", "Margarita", "Marcela",
  "Monica", "Luisa", "Martina", "Patricia", "Sofia", "Amanda", "Carolina", "Giovanna"
];

const southAmericaFemaleMiddleSyllables = [
  "sa", "na", "li", "la", "ta", "be", "na", "el", "ia", "ra", "ri", "on", "via", "a", "ra", "la",
  "tia", "ia", "ne", "ra", "ma", "sio", "lina", "a", "zora", "ga", "da", "ri", "des", "nette", "ela"
];

const southAmericaFemaleEndSyllables = [
  "na", "es", "a", "ita", "el", "ia", "ena", "ia", "na", "ia", "zo", "ti", "ta", "lia", "le"
];

// 欧洲男性名字音节（西班牙、法国、意大利、德国、英国）
const europeMaleFirstSyllables = [
  "John", "Michael", "James", "David", "William", "Daniel", "Edward", "George", "Charles",
  "Thomas", "Henry", "Robert", "Lucas", "Oscar", "Alex", "Samuel", "Leo", "Max", "Vincent",
  "Luca", "Sebastian", "Julian", "Enzo", "Oscar", "Antonio", "Carlos", "Mateo", "Alejandro",
  "Santiago", "Emilio", "Felipe", "Arturo", "Gerardo", "Adrián", "Guillermo", "César", "Héctor",
  "Jaime", "Lucas", "Ramón", "Diego", "Iván", "Carlos", "Emilio", "Luis", "Alejandro"
];

const europeMaleMiddleSyllables = [
  "son", "ton", "field", "ton", "land", "ford", "ber", "lert", "rich", "ward", "ton", "se",
  "king", "baum", "chur", "ford", "man", "hill", "loth", "zo", "co", "wig", "la", "rich", "thor"
];

const europeMaleEndSyllables = [
  "son", "ton", "man", "bert", "field", "ford", "ber", "ner", "ta", "ler", "lo", "le", "ger",
  "lie", "low", "worth", "wick", "heim", "r", "alt", "ro", "er", "s", "hor", "le", "land"
];

// 欧洲女性名字音节（西班牙、法国、意大利、德国、英国）
const europeFemaleFirstSyllables = [
  "Alice", "Emma", "Sophia", "Mia", "Charlotte", "Amelia", "Isabella", "Eva", "Clara", "Lily",
  "Sophie", "Emily", "Ella", "Hannah", "Olivia", "Chloe", "Grace", "Samantha", "Victoria", "Aurora"
];

const europeFemaleMiddleSyllables = [
  "a", "belle", "lu", "mar", "sandra", "nette", "dena", "ella", "ara", "rina", "ger", "lina", "ine"
];

const europeFemaleEndSyllables = [
  "ce", "ine", "ita", "ette", "iana", "ella", "ina", "etta", "ra", "la", "ie", "na", "lo"
];
