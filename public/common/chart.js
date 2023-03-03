new Chart(document.getElementById("chart"), {
  "type": "radar", 
  "data": { 
    "labels": ["経営戦略", "ビジネス・業務", "マネジメント", "インフラ構築", "アプリ開発", "デジタルトレンド", "クリエイティブ"], 
    "datasets": [{
      "label": "スキルレベル（0〜10）",
      "data": [3, 9, 7, 5, 8, 2, 9], 
      "fill": true, 
      "backgroundColor": "rgba(245, 109, 81, 0.2)", 
      "borderColor": "#ef4565", 
      "pointBackgroundColor": "#ef4565", 
      "pointHoverBorderColor": "#ef4565" 
    }]},
  "options": {
    "elements": { 
      "line": { 
        "tension": 0, 
        "borderWidth": 3 
      } 
    },
    "scale": {
      "ticks": {
        display: true,
        min: 0,
        max: 10,
        stepSize : 2,
        beginAtZero: true
      }
    }
  } 
});
new Chart(document.getElementById("chart2"), {
  "type": "radar", 
  "data": { 
    "labels": ["HTML", "React", "Vue/Nuxt", "TypeScript", "PHP", "Python", "Java", "C#", "CSS"], 
    "datasets": [{
      "label": "1:読める、2:直せる、3:書ける、4:教えられる",
      "data": [4, 2, 3, 3, 2, 3, 3, 3, 4], 
      "fill": true, 
      "backgroundColor": "rgba(245, 109, 81, 0.2)", 
      "borderColor": "#ef4565", 
      "pointBackgroundColor": "#ef4565", 
      "pointHoverBorderColor": "#ef4565" 
    }]},
  "options": {
    "elements": { 
      "line": { 
        "tension": 0, 
        "borderWidth": 3 
      } 
    },
    "scale": {
      "ticks": {
        display: true,
        min: 0,
        max: 4,
        stepSize : 1,
        beginAtZero: true
      }
    }
  }
});