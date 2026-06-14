// generate_report.js
// Reads assessment answers, scores them against scoring-config.json,
// fills report-template.html, and outputs a PDF.

const fs = require('fs');
const path = require('path');

// 1. Load the scoring config (indicators + questions)
const scoringConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../assessment/scoring-config.json'), 'utf8')
);

// 2. Example input — replace with real form responses
const responses = {
  name: "Jane Doe",
  date: new Date().toLocaleDateString(),
  answers: {
    // questionId: score (1-5)
    Q1: 4, Q2: 3, Q3: 2, Q4: 3, Q5: 4,
    Q6: 3, Q7: 2, Q8: 3, Q9: 4, Q10: 3,
    Q11: 5, Q12: 4, Q13: 3, Q14: 4, Q15: 2,
    Q16: 2, Q17: 5, Q18: 4, Q19: 3, Q20: 3
  }
};

// 3. Calculate average score per indicator
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
    score: (totals[ind.id] / counts[ind.id]).toFixed(1)
  }));
}

// 4. Build the indicator rows for the report
function buildIndicatorRows(scores) {
  return scores.map(s => {
    const value = parseFloat(s.score);
    const scoreClass = value < 2.5 ? 'score-low' : value < 3.5 ? 'score-mid' : 'score-high';
    return `<div class="indicator"><span>${s.name}</span><span class="${scoreClass}">${s.score}/5</span></div>`;
  }).join('\n');
}

// 5. Load template and fill it in
const templatePath = path.join(__dirname, 'report-template.html');
let template = fs.readFileSync(templatePath, 'utf8');

const scores = scoreIndicators(scoringConfig, responses.answers);

template = template
  .replace('{{name}}', responses.name)
  .replace('{{date}}', responses.date)
  .replace(/<div class="indicator">[\s\S]*?<\/div>/, buildIndicatorRows(scores))
  .replace('{{failure_chain_text}}', 'Financial pressure → excess hours → less sleep → recovery failure → fatigue → cognitive decline → training performance drop → dropout risk')
  .replace('{{risk_map_summary}}', 'Highest-risk areas: [fill in based on lowest scores]')
  .replace('{{outlook_text}}', '[fill in 12-month outlook based on overall pattern]')
  .replace('{{recommendation_1}}', '[fill in]')
  .replace('{{recommendation_2}}', '[fill in]')
  .replace('{{recommendation_3}}', '[fill in]');

// 6. Save filled HTML (convert to PDF separately, e.g. with a PDF library)
const outputPath = path.join(__dirname, '../data/sample-report.html');
fs.writeFileSync(outputPath, template);

console.log('Report generated:', outputPath);