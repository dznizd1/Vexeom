const fs = require('fs');
const path = require('path');

const scoringConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../assessment/scoring-config.json'), 'utf8')
);

const responses = {
  name: "Jane Doe",
  date: new Date().toLocaleDateString(),
  answers: {
    Q1: 4, Q2: 3
  }
};

function scoreIndicators(config, answers) {
  const totals = {};
  const counts = {};

  config.questions.forEach(q => {
    const score = answers[q.id] || 0;
    totals[q.indicator] = (totals[q.indicator] || 0) + score;
    counts[q.indicator] = (counts[q.indicator] || 0) + 1;
  });

  return config.indicators.map(ind => ({
    name: ind.name,
    score: counts[ind.id] ? (totals[ind.id] / counts[ind.id]).toFixed(1) : "N/A"
  }));
}

function buildIndicatorRows(scores) {
  return scores.map(s => {
    const value = parseFloat(s.score);
    const scoreClass = isNaN(value) ? '' : (value < 2.5 ? 'score-low' : value < 3.5 ? 'score-mid' : 'score-high');
    return `<div class="indicator"><span>${s.name}</span><span class="${scoreClass}">${s.score}/5</span></div>`;
  }).join('\n    ');
}

const templatePath = path.join(__dirname, 'report-template.html');
let template = fs.readFileSync(templatePath, 'utf8');

const scores = scoreIndicators(scoringConfig, responses.answers);

template = template
  .replace('{{name}}', responses.name)
  .replace('{{date}}', responses.date)
  .replace('<div class="indicator">PLACEHOLDER_ROW</div>', buildIndicatorRows(scores))
  .replace('{{failure_chain_text}}', 'Financial pressure -> excess hours -> less sleep -> recovery failure -> fatigue -> cognitive decline -> training performance drop -> dropout risk')
  .replace('{{risk_map_summary}}', 'Highest-risk areas: Financial Resilience, Cognitive Load, Lifestyle Compatibility')
  .replace('{{outlook_text}}', 'Based on current scores, financial pressure is the most likely entry point into a fatigue/dropout chain over the next 12 months.')
  .replace('{{recommendation_1}}', 'Build a 3-month financial buffer before increasing training intensity.')
  .replace('{{recommendation_2}}', 'Introduce a fixed wind-down routine to stabilise sleep timing.')
  .replace('{{recommendation_3}}', 'Schedule weekly review sessions to reinforce training consolidation.');

const outputPath = path.join(__dirname, '../data/sample-report.html');
fs.writeFileSync(outputPath, template);

console.log('Report generated:', outputPath);
console.log('Scores:', scores);
