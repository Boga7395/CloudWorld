  const regions = ["USA", "UK", "France", "Hong Kong", "Macau", "Chicago", "Cayman Islands"];
    const businessWords = ["Fintech", "Capital", "Technologies", "Digital", "Blockchain", "Innovations", "Finance", "Cyber", "Smart", "Quantum", "AI", "Web3"];
    const companyTypes = ["Ltd.", "Inc.", "LLC", "Corp.", "SAS", "Group"];
    const namePrefixes = ["Alpha", "Neo", "Green", "Global", "Quantum", "Next", "Future", "Horizon", "Atlantic", "Silicon", "Londinium", "WindRiver", "Metro", "Sky"];

    const companyData = [];

    // 生成 30,000 条公司名称
    for (let i = 0; i < 30000; i++) {
      const name = `${namePrefixes[Math.floor(Math.random() * namePrefixes.length)]} ` +
                   `${businessWords[Math.floor(Math.random() * businessWords.length)]} ` +
                   `${companyTypes[Math.floor(Math.random() * companyTypes.length)]} ` +
                   `(${regions[Math.floor(Math.random() * regions.length)]})`;
      companyData.push(name);
    }

    function getRandomCompany() {
      const index = Math.floor(Math.random() * companyData.length);
      return companyData[index];
    }
