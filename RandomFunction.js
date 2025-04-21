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

// --- 1. Aztec Participation Pitch ---
function RandomAnswer() {
  const styles = ['technical', 'marketing', 'personal'];
  const aztecConcepts = ['Noir', 'zk.money', 'Aztec Connect', 'hybrid rollup', 'encrypted state', 'shielded transactions', 'zkVM', 'zero-knowledge identity', 'modular privacy', 'composable privacy'];
  const verbs = {
    technical: ['enable', 'scale', 'optimize', 'secure', 'empower'],
    marketing: ['revolutionize', 'unlock', 'accelerate', 'disrupt', 'supercharge'],
    personal: ['love building with', 'am passionate about', 'am excited by', 'believe in']
  };
  const objects = ['private DeFi', 'encrypted governance', 'privacy-preserving dApps', 'zk-powered smart contracts', 'modular execution layers', 'fully private DAOs', 'confidential NFTs', 'anonymous identity'];
  const motivations = ['to build scalable and private apps', 'to empower users with true on-chain privacy', 'to bring privacy back to Ethereum', 'to enable compliant yet private finance', 'to explore the future of ZK compute', 'because privacy is a fundamental right', 'because I believe privacy should be the default'];

  const selectedStyle = randomChoice(styles);
  const introMap = {
    technical: "I'm excited about participating in the Aztec network because",
    marketing: "Aztec is exciting to me because",
    personal: "What excites me about Aztec is"
  };
  const intro = introMap[selectedStyle];

  function genSentence(style) {
    const concept = randomChoice(aztecConcepts);
    const verb = randomChoice(verbs[style]);
    const object = randomChoice(objects);
    const motivation = randomChoice(motivations);
    switch (style) {
      case 'technical':
        return `Aztec’s use of ${concept} helps ${verb} ${object}, making it possible ${motivation}.`;
      case 'marketing':
        return `${concept} will ${verb} the way we interact with ${object}. Aztec is unlocking the next frontier of Web3.`;
      default:
        return `I ${verb} Aztec because it allows me ${motivation}, especially with innovations like ${concept}.`;
    }
  }

  const sentences = Array.from({length: 2 + Math.floor(Math.random() * 2)}, () => genSentence(selectedStyle));
  return `${intro} ${sentences.join(' ')}`;
}

// --- 2. Region-based Company Name Generator ---
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

// --- 3. Governance Proposal Comment Generator ---
function buildGovernanceDynamics() {
  const verbs=['actively participated in','provided feedback on','engaged with','commented on','reviewed','contributed to','led discussions about','advocated for','critically assessed','collaborated on'];
  const subjects=['scalable consensus mechanisms','privacy-preserving features','decentralized identity management','on-chain governance models','layer 2 scalability solutions','sustainable tokenomics','interoperability standards','user governance incentives','privacy improvements','DAO governance structures','reward frameworks','optimizing consensus algorithms'];
  const contexts=['in Web3 networks','across multiple DAOs','on Ethereum','during testnet phases','in community forums','through Snapshot','via GitHub issues','in governance calls','on Tally','in Agora'];
  const starters=[];
  verbs.forEach(v=>subjects.forEach(s=>contexts.forEach(c=>starters.push(`I have ${v} governance proposals focused on ${s} ${c}.`))));
  const bases=['privacy-enhancing','cross-chain','staking','validator','tokenomics','zero-knowledge','governance token','liquidity','incentive','on-chain'];
  const areas=['protocol upgrades','models','improvements','frameworks','mechanisms','systems','solutions','structures','features','approaches'];
  const topics=[]; bases.forEach(b=>areas.forEach(a=>topics.push(`${b} ${a}`)));
  const cStarts=['This work is critical for','I believe it will','It helps to','It paves the way for','It strengthens','It accelerates','It supports','It enhances','It ensures','It drives'];
  const cEnds=['a more secure and decentralized ecosystem.','future protocol resilience.','community-driven innovation.','scalable network growth.','better governance practices.','efficient developer onboarding.','seamless cross-chain interoperability.','robust security guarantees.','adaptive tokenomics models.','transparent decision-making processes.'];
  const conclusions=[]; cStarts.forEach(s=>cEnds.forEach(e=>conclusions.push(`${s} ${e}`)));
  return {starters,topics,conclusions};
}
const {starters: govStarters, topics: govTopics, conclusions: govConclusions} = buildGovernanceDynamics();
function RandomGovernanceComment() {
  const s = randomChoice(govStarters);
  const t = randomChoice(govTopics);
  const c = randomChoice(govConclusions);
  return `${s} I focused on ${t}. ${c}`;
}

// --- 4. Network Upgrade Generator ---
function buildNetworkDynamics() {
  const v=['contributed to','supported','helped implement','led','participated in','coordinated','benchmarked','validated','tested','optimized'];
  const a=['consensus improvements','scalability enhancements','privacy upgrades','performance patches','security audits','cross-chain bridges','Layer 2 rollups','gas fee optimizations','modular architecture','zero-knowledge integration','data sharding','staking mechanism updates'];
  const ctx=['on mainnet','in testnet environments','for developer previews','during community testnets','with validator sets','in production rollouts','in simulation phases','in staging tests','under high load','during integration sprints','in collaborative dev sessions','during code freeze'];
  const m=['using automated scripts','with manual verifications','via CI/CD pipelines','through RPC monitoring','using custom telemetry','with benchmarking tools','via stress testing','through fuzzing tools','with load generators','via canary releases','using A/B rollout','through blue-green deployments'];
  const r=['as a validator node operator','as a blockchain architect','as a protocol researcher','as a core contributor','as a Layer 2 engineer','as a cryptographic specialist','as a project manager','as a researcher','as a lead engineer','as a security auditor'];
  const mod=['ensuring reliability','ensuring performance','ensuring decentralization','ensuring compatibility','ensuring security','ensuring efficiency','ensuring scalability','ensuring resilience','ensuring maintainability','ensuring interoperability'];
  const concl=['for future network stability.','for seamless user experience.','for robust security posture.','for scalable growth.','for developer friendliness.','for community adoption.','for protocol resilience.','for seamless upgrades.','for ecosystem expansion.','for long-term sustainability.'];
  return {v,a,ctx,m,r,mod,concl};
}
const {v: netVerbs, a: netAspects, ctx: netContexts, m: netMethods, r: netRoles, mod: netModifiers, concl: netConclusions} = buildNetworkDynamics();
function RandomNetworkUpgrade() {
  return `I ${randomChoice(netVerbs)} ${randomChoice(netAspects)} ${randomChoice(netContexts)} ${randomChoice(netMethods)} ${randomChoice(netRoles)}, ${randomChoice(netModifiers)} ${randomChoice(netConclusions)}`;
}

