
const lessons = {
  intro: {
    level: "BASIC",
    title: "Normal Excel — Introduction",
    text: "Excel ek spreadsheet program hai. Is mein hum attendance, salary, student records aur office reports banate hain.",
    example: "Cell A1 mein Name aur B1 mein Marks likhein.",
    steps: ["Microsoft Excel open karein.", "Blank Workbook par click karein.", "Cell A1 select karke Name likhein.", "Ctrl + S se file save karein."],
    tip: "Workbook Excel ki file hoti hai. Worksheet us file ke andar ek sheet hoti hai.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
  },
  cells: {
    level: "BASIC",
    title: "Rows, Columns and Cells",
    text: "Rows horizontal hoti hain aur numbers se identify hoti hain. Columns vertical hotay hain aur A, B, C jaise letters se identify hotay hain.",
    example: "A1 ka matlab Column A aur Row 1. B3 ka matlab Column B aur Row 3.",
    steps: ["Excel worksheet open karein.", "A1 par click karein.", "Formula bar ke paas Name Box dekhein.", "B3 par click karke cell address samjhein."],
    tip: "Row aur column jahan milte hain, us jagah ko cell kehte hain.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
  },
  format: {
    level: "BASIC",
    title: "Data Entry and Formatting",
    text: "Data entry ka matlab information likhna hai. Formatting se data ko clear aur professional banaya jata hai.",
    example: "A1 mein Student Name likhein. B1 mein Marks. Headings ko bold karein aur borders lagayein.",
    steps: ["Cells mein data likhein.", "Headings select karein.", "Ctrl + B se bold karein.", "Home tab se Fill Color aur Borders use karein."],
    tip: "Formatting data ko change nahi karti; sirf uski appearance change karti hai.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
  },
  basicformulas: {
    level: "BASIC",
    title: "Basic Excel Formulas",
    text: "Excel formula aam tor par equals sign (=) se start hota hai. Formula calculation automatically karta hai.",
    example: "A1=10, A2=20. Kisi khaali cell mein =SUM(A1:A2) likhein. Result 30 hoga.",
    steps: ["A1 mein 10 likhein.", "A2 mein 20 likhein.", "A3 mein =SUM(A1:A2) likhein.", "Enter press karein."],
    tip: "SUM total, AVERAGE average, MIN smallest aur MAX largest value deta hai.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
  },
  logical: {
    level: "ADVANCED",
    title: "Advanced — IF Formula",
    text: "IF formula kisi condition ko check karta hai aur condition true ya false hone ke mutabiq result deta hai.",
    example: '=IF(B2>=50,"Pass","Fail") — agar B2 mein 70 marks hain to result Pass hoga.',
    steps: ["Column B mein marks likhein.", "C2 cell select karein.", 'Formula likhein: =IF(B2>=50,"Pass","Fail")', "Enter press karein aur formula neeche copy karein."],
    tip: "IF ke andar condition, true result aur false result define kiya jata hai.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
  },
  lookup: {
    level: "ADVANCED",
    title: "Advanced — Lookup Formulas",
    text: "Lookup formulas table se matching information dhoondte hain. XLOOKUP naye Excel versions mein available hai.",
    example: "=XLOOKUP(E2,A2:A10,C2:C10) — E2 ki value ko A2:A10 mein dhoond kar matching row se C column ka result deta hai.",
    steps: ["A column mein IDs rakhein.", "C column mein student marks rakhein.", "E2 mein required ID likhein.", "Formula enter karke result check karein."],
    tip: "Purane Excel versions mein XLOOKUP available na ho to VLOOKUP ya INDEX/MATCH use kiya ja sakta hai.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
  },
  pivot: {
    level: "ADVANCED",
    title: "Pivot Tables and Charts",
    text: "Pivot Table large data ko summarize karne mein madad karti hai, jaise department-wise employees ya month-wise sales.",
    example: "Sales data mein Department ko Rows aur Amount ko Values area mein drag karein.",
    steps: ["Apna data select karein.", "Insert tab open karein.", "PivotTable choose karein.", "Fields ko Rows, Columns, Values ya Filters mein drag karein."],
    tip: "Data ke columns mein clear headings honi chahiye. PivotTable features Excel version ke mutabiq differ kar sakte hain.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1000&q=80"
  },
  dashboard: {
    level: "ADVANCED",
    title: "Dashboards and Power Query",
    text: "Dashboard important numbers aur charts ko ek jagah dikhata hai. Power Query data import aur clean karne mein help karta hai.",
    example: "Monthly attendance ke totals aur charts se ek report dashboard banayein.",
    steps: ["Data ko clean aur organize karein.", "Tables aur PivotTables banayein.", "Insert tab se charts add karein.", "Titles aur useful summary numbers add karein."],
    tip: "Power Query aur kuch advanced features ki availability Excel version aur platform par depend karti hai.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
  }
};

function showLesson(id) {
  const lesson = lessons[id];
  if (!lesson) return;

  document.getElementById("lessonTitle").textContent = lesson.title;
  document.getElementById("lessonHeading").textContent = lesson.title;
  document.getElementById("lessonText").textContent = lesson.text;
  document.getElementById("lessonExample").textContent = lesson.example;
  document.getElementById("lessonTip").textContent = "💡 " + lesson.tip;
  document.getElementById("lessonImage").src = lesson.image;

  const level = document.getElementById("lessonLevel");
  level.textContent = lesson.level;
  level.className = "level " + (lesson.level === "BASIC" ? "basic" : "advanced");

  document.getElementById("lessonSteps").innerHTML =
    lesson.steps.map(step => `<li>${step}</li>`).join("");

  document.getElementById("lessonArea").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
  });
});

const formulas = [
  {level:"basic",name:"SUM",formula:"=SUM(A1:A5)",use:"Numbers ka total.",example:"10, 20, 30 ka total.",result:"30"},
  {level:"basic",name:"AVERAGE",formula:"=AVERAGE(A1:A5)",use:"Numbers ka average.",example:"10, 20, 30 ka average.",result:"20"},
  {level:"basic",name:"MIN",formula:"=MIN(A1:A5)",use:"Sab se chhoti number value.",example:"10, 5, 30 mein smallest.",result:"5"},
  {level:"basic",name:"MAX",formula:"=MAX(A1:A5)",use:"Sab se bari number value.",example:"10, 5, 30 mein largest.",result:"30"},
  {level:"basic",name:"COUNT",formula:"=COUNT(A1:A10)",use:"Numbers wale cells count karta hai.",example:"Agar 5 cells mein numbers hon.",result:"5"},
  {level:"basic",name:"COUNTA",formula:"=COUNTA(A1:A10)",use:"Non-empty cells count karta hai.",example:"Text aur numbers dono count hote hain.",result:"Data par depend"},
  {level:"basic",name:"COUNTBLANK",formula:"=COUNTBLANK(A1:A10)",use:"Empty cells count karta hai.",example:"Range mein 3 khaali cells hon.",result:"3"},
  {level:"basic",name:"ROUND",formula:"=ROUND(A1,2)",use:"Decimal places round karta hai.",example:"A1 mein 12.567.",result:"12.57"},
  {level:"basic",name:"TODAY",formula:"=TODAY()",use:"Current date deta hai.",example:"Aaj ki date.",result:"Current date"},
  {level:"basic",name:"LEFT",formula:"=LEFT(A1,3)",use:"Text ke left se characters nikalta hai.",example:"A1 mein Excel.",result:"Exc"},
  {level:"basic",name:"RIGHT",formula:"=RIGHT(A1,3)",use:"Text ke right se characters nikalta hai.",example:"A1 mein Excel.",result:"cel"},
  {level:"basic",name:"LEN",formula:"=LEN(A1)",use:"Text ke characters count karta hai.",example:"A1 mein Excel.",result:"5"},
  {level:"basic",name:"CONCAT",formula:"=CONCAT(A1,B1)",use:"Text join karta hai.",example:"Hooria aur Ansari.",result:"HooriaAnsari"},
  {level:"advanced",name:"IF",formula:'=IF(A1>=50,"Pass","Fail")',use:"Condition check karta hai.",example:"A1 mein 70 marks hon.",result:"Pass"},
  {level:"advanced",name:"AND",formula:"=AND(A1>=50,B1>=50)",use:"Check karta hai ke sab conditions true hain.",example:"Dono subjects mein 50 ya zyada marks.",result:"TRUE if both match"},
  {level:"advanced",name:"OR",formula:"=OR(A1>=50,B1>=50)",use:"Check karta hai ke kam az kam ek condition true hai.",example:"Ek subject mein 50 ya zyada marks.",result:"TRUE if either matches"},
  {level:"advanced",name:"IFERROR",formula:'=IFERROR(A1/B1,"Check Data")',use:"Error aane par alternate result.",example:"B1 zero ho to message dikhayein.",result:"Check Data"},
  {level:"advanced",name:"SUMIF",formula:'=SUMIF(A1:A5,"Apple",B1:B5)',use:"Ek condition ke mutabiq sum.",example:"Apple ki sales add karein.",result:"Data par depend"},
  {level:"advanced",name:"SUMIFS",formula:"=SUMIFS(C:C,A:A,E1,B:B,F1)",use:"Multiple conditions ke mutabiq sum.",example:"Department aur month ki sales.",result:"Data par depend"},
  {level:"advanced",name:"COUNTIF",formula:'=COUNTIF(A1:A10,"Present")',use:"Ek condition match karne wale cells count.",example:"Present students count karein.",result:"Data par depend"},
  {level:"advanced",name:"COUNTIFS",formula:'=COUNTIFS(A:A,"Present",B:B,"Monday")',use:"Multiple conditions par count.",example:"Monday ke present students.",result:"Data par depend"},
  {level:"advanced",name:"VLOOKUP",formula:"=VLOOKUP(E2,A2:C10,3,FALSE)",use:"Table ke first column se matching value dhoondta hai.",example:"Student ID se marks dhoondein.",result:"Matching value"},
  {level:"advanced",name:"XLOOKUP",formula:"=XLOOKUP(E2,A2:A10,C2:C10)",use:"Lookup value se matching result deta hai.",example:"Student ID se marks nikaalein.",result:"Matching value"},
  {level:"advanced",name:"INDEX",formula:"=INDEX(A1:C5,2,3)",use:"Range ki specified row aur column ki value.",example:"Second row, third column.",result:"Cell ki value"},
  {level:"advanced",name:"MATCH",formula:"=MATCH(E1,A1:A10,0)",use:"Value ki position dhoondta hai.",example:"List mein exact match ki position.",result:"Position number"},
  {level:"advanced",name:"TRIM",formula:"=TRIM(A1)",use:"Text ke extra spaces remove karta hai.",example:"Names ki extra spacing clean karein.",result:"Clean text"},
  {level:"advanced",name:"TEXTJOIN",formula:'=TEXTJOIN(" ",TRUE,A1:B1)',use:"Delimiter ke saath text join karta hai.",example:"First aur last name ke darmiyan space.",result:"Hooria Ansari"},
  {level:"advanced",name:"DATE",formula:"=DATE(2026,10,13)",use:"Year, month aur day se date banata hai.",example:"2026, 10, 13.",result:"13-Oct-2026 (format ke mutabiq)"}
];

function renderFormulas(items) {
  const list = document.getElementById("formulaList");

  if (!items.length) {
    list.innerHTML = "<p>No formula found. Doosra naam search karein.</p>";
    return;
  }

  list.innerHTML = items.map(item => `
    <article class="formula-card">
      <span class="level ${item.level}">${item.level === "basic" ? "NORMAL / BASIC" : "ADVANCED"}</span>
      <h3>${item.name}</h3>
      <code>${item.formula}</code>
      <p>${item.use}</p>
      <p><strong>Example:</strong> ${item.example}</p>
      <p class="result"><strong>Result:</strong> ${item.result}</p>
    </article>
  `).join("");
}

function filterFormulas() {
  const query = document.getElementById("formulaSearch").value.toLowerCase().trim();
  const level = document.getElementById("formulaLevel").value;

  const filtered = formulas.filter(item => {
    const matchesLevel = level === "all" || item.level === level;
    const matchesQuery =
      item.name.toLowerCase().includes(query) ||
      item.formula.toLowerCase().includes(query) ||
      item.use.toLowerCase().includes(query);

    return matchesLevel && matchesQuery;
  });

  renderFormulas(filtered);
}

document.getElementById("formulaSearch").addEventListener("input", filterFormulas);
document.getElementById("formulaLevel").addEventListener("change", filterFormulas);

function showPractice(type) {
  const result = document.getElementById("practiceResult");

  if (type === "total") {
    result.innerHTML = `
      <h4>Normal / Basic Formula: SUM</h4>
      <p>Ali ka total: =SUM(B2:C2) → 150</p>
      <p>Sara ka total: =SUM(B3:C3) → 175</p>
      <p>Ahmed ka total: =SUM(B4:C4) → 135</p>
    `;
  } else {
    result.innerHTML = `
      <h4>Normal / Basic Formula: AVERAGE</h4>
      <p>Ali ka average: =AVERAGE(B2:C2) → 75</p>
      <p>Sara ka average: =AVERAGE(B3:C3) → 87.5</p>
      <p>Ahmed ka average: =AVERAGE(B4:C4) → 67.5</p>
    `;
  }
}

function checkQuiz() {
  const answer = document.querySelector('input[name="quiz"]:checked');
  const result = document.getElementById("quizResult");

  if (!answer) {
    result.textContent = "Pehle ek answer select karein.";
    return;
  }

  if (answer.value === "b") {
    result.textContent = "Correct! =SUM() numbers ka total nikalta hai. 🎉";
  } else {
    result.textContent = "Try again! Numbers ka total nikalne ke liye SUM formula use hota hai.";
  }
}

renderFormulas(formulas);
