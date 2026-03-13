import { useState, useEffect, useRef } from "react";

const TIMETABLE = {
  1: {
    Monday: [
      { start: "09:05", end: "10:05", subject: "Computer Science", room: "LR3", teacher: "Mr Singer" },
      { start: "10:05", end: "11:05", subject: "Study Period", room: "Library", teacher: "Mrs Butterworth" },
      { start: "11:05", end: "11:25", subject: "BREAK", room: "", teacher: "" },
      { start: "11:25", end: "12:25", subject: "Geography", room: "G3", teacher: "Mrs Beardsell" },
      { start: "12:25", end: "13:25", subject: "Economics", room: "SF3", teacher: "Mr Coppock" },
      { start: "13:25", end: "14:05", subject: "LUNCH", room: "", teacher: "" },
      { start: "14:05", end: "15:05", subject: "Economics", room: "SF4", teacher: "Mr Bowyer" },
    ],
    Tuesday: [
      { start: "09:05", end: "10:05", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
      { start: "10:05", end: "11:05", subject: "Economics", room: "SF3", teacher: "Mr Coppock" },
      { start: "11:05", end: "11:25", subject: "BREAK", room: "", teacher: "" },
      { start: "11:25", end: "12:25", subject: "Computer Science", room: "LR2", teacher: "Mr Ward" },
      { start: "12:25", end: "13:25", subject: "Study Period", room: "Library", teacher: "Mrs Butterworth" },
      { start: "13:25", end: "14:05", subject: "LUNCH", room: "", teacher: "" },
      { start: "14:05", end: "15:05", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
    ],
    Wednesday: [
      { start: "09:05", end: "10:05", subject: "Geography", room: "G2", teacher: "Miss Harris" },
      { start: "10:05", end: "11:05", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
      { start: "11:05", end: "11:25", subject: "BREAK", room: "", teacher: "" },
      { start: "11:25", end: "12:25", subject: "Study Period", room: "Library", teacher: "Mrs Leverone" },
      { start: "12:25", end: "13:25", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
      { start: "13:25", end: "14:05", subject: "LUNCH", room: "", teacher: "" },
      { start: "14:05", end: "15:05", subject: "Computer Science", room: "LR3", teacher: "Mr Singer" },
    ],
    Thursday: [
      { start: "09:05", end: "10:05", subject: "Economics", room: "SF4", teacher: "Mr Bowyer" },
      { start: "10:05", end: "11:05", subject: "Study Period", room: "Library", teacher: "Mr Pilbury" },
      { start: "11:05", end: "11:25", subject: "BREAK", room: "", teacher: "" },
      { start: "11:25", end: "12:25", subject: "Study Period", room: "Library", teacher: "Ms Fellows" },
      { start: "12:25", end: "13:25", subject: "Geography", room: "G3", teacher: "Mrs Beardsell" },
      { start: "13:25", end: "14:05", subject: "LUNCH", room: "", teacher: "" },
      { start: "14:05", end: "15:05", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
      { start: "15:05", end: "16:05", subject: "EPQ", room: "G2", teacher: "Miss Harris" },
    ],
    Friday: [
      { start: "09:05", end: "10:05", subject: "Geography", room: "G3", teacher: "Mrs Beardsell" },
      { start: "10:05", end: "11:05", subject: "Free Period", room: "G3", teacher: "Mrs Beardsell" },
      { start: "11:05", end: "11:25", subject: "BREAK", room: "", teacher: "" },
      { start: "11:25", end: "12:25", subject: "Economics", room: "SF3", teacher: "Mr Coppock" },
      { start: "12:25", end: "13:25", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
      { start: "13:25", end: "14:05", subject: "LUNCH", room: "", teacher: "" },
      { start: "14:05", end: "15:05", subject: "Computer Science", room: "LR2", teacher: "Mr Ward" },
    ],
  },
  2: {
    Monday: [
      { start: "09:05", end: "10:05", subject: "Geography", room: "G2", teacher: "Miss Harris" },
      { start: "10:05", end: "11:05", subject: "Economics", room: "SF3", teacher: "Mr Coppock" },
      { start: "11:05", end: "11:25", subject: "BREAK", room: "", teacher: "" },
      { start: "11:25", end: "12:25", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
      { start: "12:25", end: "13:25", subject: "Computer Science", room: "LR2", teacher: "Mr Ward" },
      { start: "13:25", end: "14:05", subject: "LUNCH", room: "", teacher: "" },
      { start: "14:05", end: "15:05", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
    ],
    Tuesday: [
      { start: "09:05", end: "10:05", subject: "Study Period", room: "Library", teacher: "Mr Ackerley" },
      { start: "10:05", end: "11:05", subject: "Personal Development", room: "H2", teacher: "Ms Hannigan" },
      { start: "11:05", end: "11:25", subject: "BREAK", room: "", teacher: "" },
      { start: "11:25", end: "12:25", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
      { start: "12:25", end: "13:25", subject: "Study Period", room: "Library", teacher: "Mr Resende" },
      { start: "13:25", end: "14:05", subject: "LUNCH", room: "", teacher: "" },
      { start: "14:05", end: "15:05", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
    ],
    Wednesday: [
      { start: "09:05", end: "10:05", subject: "Computer Science", room: "LR3", teacher: "Mr Singer" },
      { start: "10:05", end: "11:05", subject: "Geography", room: "LR1", teacher: "Miss Harris" },
      { start: "11:05", end: "11:25", subject: "BREAK", room: "", teacher: "" },
      { start: "11:25", end: "12:25", subject: "Study Period", room: "Library", teacher: "Miss Roe" },
      { start: "12:25", end: "13:25", subject: "Geography", room: "G2", teacher: "Miss Harris" },
      { start: "13:25", end: "14:05", subject: "LUNCH", room: "", teacher: "" },
      { start: "14:05", end: "15:05", subject: "Computer Science", room: "LR3", teacher: "Mr Singer" },
    ],
    Thursday: [
      { start: "09:05", end: "10:05", subject: "Study Period", room: "Library", teacher: "Mrs Butterworth" },
      { start: "10:05", end: "11:05", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
      { start: "11:05", end: "11:25", subject: "BREAK", room: "", teacher: "" },
      { start: "11:25", end: "12:25", subject: "Economics", room: "SF4", teacher: "Mr Bowyer" },
      { start: "12:25", end: "13:25", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
      { start: "13:25", end: "14:05", subject: "LUNCH", room: "", teacher: "" },
      { start: "14:05", end: "15:05", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
    ],
    Friday: [
      { start: "09:05", end: "10:05", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
      { start: "10:05", end: "11:05", subject: "Economics", room: "SF3", teacher: "Mr Coppock" },
      { start: "11:05", end: "11:25", subject: "BREAK", room: "", teacher: "" },
      { start: "11:25", end: "12:25", subject: "Computer Science", room: "LR3", teacher: "Mr Singer" },
      { start: "12:25", end: "13:25", subject: "Geography", room: "G3", teacher: "Mrs Beardsell" },
      { start: "13:25", end: "14:05", subject: "LUNCH", room: "", teacher: "" },
      { start: "14:05", end: "15:05", subject: "Free Period", room: "Study room", teacher: "Mr Bowden" },
    ],
  },
};

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const SUBJECTS = ["Computer Science", "Geography", "Economics", "EPQ", "Personal Development", "Other"];
const SUBJECT_COLORS = {
  "Computer Science": "#3b82f6", "Geography": "#10b981", "Economics": "#f59e0b",
  "Study Period": "#8b5cf6", "Free Period": "#6b7280", "EPQ": "#ec4899",
  "Personal Development": "#06b6d4", "Other": "#94a3b8", "BREAK": "#374151", "LUNCH": "#374151",
};

function timeToMins(t) { const [h, m] = t.split(":").map(Number); return h * 60 + m; }
function getNowMins() { const now = new Date(); return now.getHours() * 60 + now.getMinutes(); }
function getAutoWeek() {
  const refMonday = new Date(2026, 2, 9);
  const now = new Date();
  const daysSinceRef = Math.floor((now - refMonday) / (1000 * 60 * 60 * 24));
  return Math.floor(daysSinceRef / 7) % 2 === 0 ? 2 : 1;
}
function getCurrentAndNext(week, day) {
  const lessons = TIMETABLE[week]?.[day];
  if (!lessons) return { current: null, next: null };
  const now = getNowMins();
  let current = null, next = null;
  for (let i = 0; i < lessons.length; i++) {
    const s = timeToMins(lessons[i].start), e = timeToMins(lessons[i].end);
    if (now >= s && now < e) current = lessons[i];
    if (now < s && !next) next = lessons[i];
  }
  return { current, next };
}
function fmtMins(mins) { const h = Math.floor(mins / 60), m = mins % 60; return h > 0 ? `${h}h ${m}m` : `${m}m`; }
function todayKey() { return new Date().toISOString().slice(0, 10); }
function monthKey() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`; }

// Work out which week a given date is (1 or 2)
function getWeekForDate(date) {
  const refMonday = new Date(2026, 2, 9);
  const daysSinceRef = Math.floor((date - refMonday) / (1000 * 60 * 60 * 24));
  return Math.floor(daysSinceRef / 7) % 2 === 0 ? 2 : 1;
}

function formatCountdown(ms) {
  if (ms <= 0) return "NOW";
  const totalSecs = Math.floor(ms / 1000);
  const days = Math.floor(totalSecs / 86400);
  const hours = Math.floor((totalSecs % 86400) / 3600);
  const mins = Math.floor((totalSecs % 3600) / 60);
  const secs = totalSecs % 60;
  if (days > 0) return `${days}d ${hours}h ${mins}m`;
  if (hours > 0) return `${hours}h ${mins}m ${secs}s`;
  return `${mins}m ${secs}s`;
}

function buildSystemPrompt(week, day, tasks, homework, deadlines) {
  const now = new Date();
  const taskList = tasks.length ? tasks.map((t, i) => `${i + 1}. [id:${t.id}] ${t.text}${t.done ? " [DONE]" : ""}`).join("\n") : "None";
  const hwList = homework.length ? homework.map((h, i) => `${i + 1}. [id:${h.id}] ${h.subject}: ${h.title} due ${h.due}${h.done ? " [DONE]" : ""}`).join("\n") : "None";
  const dlList = deadlines.length ? deadlines.map((d, i) => `${i + 1}. [id:${d.id}] ${d.title} — ${d.datetime}`).join("\n") : "None";

  // Build full week timetable for both weeks for any-day queries
  const fullTimetable = [1, 2].map(w => `WEEK ${w}:\n` + WEEKDAYS.map(d => {
    const lessons = TIMETABLE[w][d] || [];
    return `  ${d}: ${lessons.map(l => `${l.start} ${l.subject}${l.room ? ` (${l.room})` : ""}`).join(", ")}`;
  }).join("\n")).join("\n\n");

  return `You are a personal school assistant for a sixth form student. Be concise — 2-3 lines max.

CURRENT TIME: ${now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
TODAY: ${day} ${now.toLocaleDateString("en-GB")}
CURRENT WEEK: Week ${week}
BREAK TIMES: 11:05–11:25 Morning Break, 13:25–14:05 Lunch

TODAY'S TIMETABLE (Week ${week}, ${day}):
${(TIMETABLE[week]?.[day] || []).map(l => `${l.start}–${l.end}: ${l.subject}${l.room ? ` (${l.room}${l.teacher ? ", " + l.teacher : ""})` : ""}`).join("\n")}

FULL TIMETABLE FOR REFERENCE:
${fullTimetable}

TASKS: ${taskList}
HOMEWORK: ${hwList}
DEADLINES: ${dlList}

You can perform actions using these EXACT tags anywhere in your response:
- Create task: <ACTION:ADD_TASK:task text>
- Complete task: <ACTION:DONE_TASK:task id>
- Add homework: <ACTION:ADD_HW:subject|title|YYYY-MM-DD>
- Complete homework: <ACTION:DONE_HW:homework id>
- Add deadline: <ACTION:ADD_DEADLINE:title|YYYY-MM-DDTHH:MM>

RULES:
1. "What's next?" → check time, return next lesson with room and teacher
2. "What do I have today/tomorrow/Thursday?" → look up the correct day and week, list lessons
3. For tomorrow: work out if it's a weekday, check the correct week (week alternates each Monday)
4. "What are my tasks/homework/deadlines?" → list them
5. Natural homework mention → ADD_HW. Natural task mention → ADD_TASK
6. "Add deadline: Economics exam on March 20 at 9am" → ADD_DEADLINE with correct datetime
7. "Done with X" → DONE_TASK or DONE_HW
8. Keep answers short and direct`;
}

function parseActions(reply, setTasks, setHomework, setDeadlines) {
  const re = (pattern) => new RegExp(pattern, "g");
  let m;
  const addTask = re("<ACTION:ADD_TASK:([^>]+)>");
  const doneTask = re("<ACTION:DONE_TASK:([^>]+)>");
  const addHw = re("<ACTION:ADD_HW:([^>]+)>");
  const doneHw = re("<ACTION:DONE_HW:([^>]+)>");
  const addDl = re("<ACTION:ADD_DEADLINE:([^>]+)>");

  while ((m = addTask.exec(reply)) !== null) {
    const text = m[1].trim();
    setTasks(prev => [...prev, { text, done: false, id: Date.now() + Math.random() }]);
    if (Notification.permission === "granted") new Notification("Task added!", { body: text });
  }
  while ((m = doneTask.exec(reply)) !== null) {
    const id = m[1].trim();
    setTasks(prev => prev.map(t => String(t.id) === id ? { ...t, done: true } : t));
  }
  while ((m = addHw.exec(reply)) !== null) {
    const parts = m[1].split("|");
    if (parts.length >= 3) {
      const [subject, title, due] = parts;
      setHomework(prev => [...prev, { subject: subject.trim(), title: title.trim(), due: due.trim(), done: false, id: Date.now() + Math.random() }]);
      if (Notification.permission === "granted") new Notification("Homework added!", { body: `${subject.trim()}: ${title.trim()}` });
    }
  }
  while ((m = doneHw.exec(reply)) !== null) {
    const id = m[1].trim();
    setHomework(prev => prev.map(h => String(h.id) === id ? { ...h, done: true } : h));
  }
  while ((m = addDl.exec(reply)) !== null) {
    const parts = m[1].split("|");
    if (parts.length >= 2) {
      const [title, datetime] = parts;
      setDeadlines(prev => [...prev, { title: title.trim(), datetime: datetime.trim(), id: Date.now() + Math.random() }]);
      if (Notification.permission === "granted") new Notification("Deadline added!", { body: `${title.trim()} — ${datetime.trim()}` });
    }
  }
  return reply.replace(/<ACTION:[^>]+>/g, "").trim();
}

export default function App() {
  const [week, setWeek] = useState(getAutoWeek);
  const [time, setTime] = useState(new Date());
  const [tasks, setTasks] = useState(() => { try { return JSON.parse(localStorage.getItem("tasks") || "[]"); } catch { return []; } });
  const [homework, setHomework] = useState(() => { try { return JSON.parse(localStorage.getItem("homework") || "[]"); } catch { return []; } });
  const [studyLogs, setStudyLogs] = useState(() => { try { return JSON.parse(localStorage.getItem("studyLogs") || "[]"); } catch { return []; } });
  const [deadlines, setDeadlines] = useState(() => { try { return JSON.parse(localStorage.getItem("deadlines") || "[]"); } catch { return []; } });
  const [newTask, setNewTask] = useState("");
  const [messages, setMessages] = useState([{ role: "assistant", text: "Hey! Ask me what's next, what you have tomorrow, add deadlines, homework or tasks 📚" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  // Timetable day navigation
  const todayDayName = DAYS[new Date().getDay()];
  const todayWeekdayIdx = WEEKDAYS.indexOf(todayDayName);
  const [viewDayIdx, setViewDayIdx] = useState(todayWeekdayIdx >= 0 ? todayWeekdayIdx : 0);
  // Homework form
  const [hwSubject, setHwSubject] = useState("Economics");
  const [hwTitle, setHwTitle] = useState("");
  const [hwDue, setHwDue] = useState("");
  // Deadline form
  const [dlTitle, setDlTitle] = useState("");
  const [dlDatetime, setDlDatetime] = useState("");
  // Study tracker
  const [timerSubject, setTimerSubject] = useState("Economics");
  const [timerTopic, setTimerTopic] = useState("");
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [manualSubject, setManualSubject] = useState("Economics");
  const [manualTopic, setManualTopic] = useState("");
  const [manualMins, setManualMins] = useState("");
  const [chartView, setChartView] = useState("bar");
  const messagesEndRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { localStorage.setItem("tasks", JSON.stringify(tasks)); }, [tasks]);
  useEffect(() => { localStorage.setItem("homework", JSON.stringify(homework)); }, [homework]);
  useEffect(() => { localStorage.setItem("studyLogs", JSON.stringify(studyLogs)); }, [studyLogs]);
  useEffect(() => { localStorage.setItem("deadlines", JSON.stringify(deadlines)); }, [deadlines]);
  useEffect(() => { if (Notification.permission === "default") Notification.requestPermission(); }, []);
  useEffect(() => {
    if (timerRunning) { timerRef.current = setInterval(() => setTimerSeconds(s => s + 1), 1000); }
    else clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [timerRunning]);

  const day = DAYS[time.getDay()];
  const { current, next } = getCurrentAndNext(week, day);
  const nowMins = getNowMins();
  const overdueHw = homework.filter(h => !h.done && h.due < todayKey());

  // For timetable navigation
  const viewDay = WEEKDAYS[viewDayIdx];
  // Work out which week viewDay falls on relative to today
  const todayDate = new Date();
  const todayIdx = WEEKDAYS.indexOf(DAYS[todayDate.getDay()]);
  const diffDays = viewDayIdx - (todayIdx >= 0 ? todayIdx : 0);
  const viewDate = new Date(todayDate);
  viewDate.setDate(viewDate.getDate() + diffDays);
  const viewWeek = getWeekForDate(viewDate);
  const viewLessons = TIMETABLE[viewWeek]?.[viewDay] || [];
  const isToday = viewDay === day;

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim(); setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ system: buildSystemPrompt(week, day, tasks, homework, deadlines), message: userMsg }) });
      const data = await response.json();
      const rawReply = data.reply || "Sorry, couldn't get a response.";
      const cleanReply = parseActions(rawReply, setTasks, setHomework, setDeadlines);
      setMessages(prev => [...prev, { role: "assistant", text: cleanReply }]);
    } catch { setMessages(prev => [...prev, { role: "assistant", text: "Something went wrong. Try again!" }]); }
    setLoading(false);
  }

  function stopTimer() {
    setTimerRunning(false);
    if (timerSeconds > 0 && timerTopic.trim()) {
      const mins = Math.round(timerSeconds / 60);
      if (mins > 0) { setStudyLogs(prev => [...prev, { subject: timerSubject, topic: timerTopic.trim(), mins, date: todayKey(), id: Date.now() }]); }
    }
    setTimerSeconds(0); setTimerTopic("");
  }

  function addManualLog() {
    const m = parseInt(manualMins);
    if (!manualTopic.trim() || isNaN(m) || m <= 0) return;
    setStudyLogs(prev => [...prev, { subject: manualSubject, topic: manualTopic.trim(), mins: m, date: todayKey(), id: Date.now() }]);
    setManualTopic(""); setManualMins("");
  }

  const currentMonth = monthKey();
  const monthLogs = studyLogs.filter(l => l.date.startsWith(currentMonth));
  const subjectTotals = {};
  SUBJECTS.forEach(s => subjectTotals[s] = 0);
  monthLogs.forEach(l => { subjectTotals[l.subject] = (subjectTotals[l.subject] || 0) + l.mins; });
  const maxSubjectMins = Math.max(...Object.values(subjectTotals), 1);
  const dailyTotals = {};
  monthLogs.forEach(l => { dailyTotals[l.date] = (dailyTotals[l.date] || 0) + l.mins; });
  const sortedDays = Object.keys(dailyTotals).sort();
  const maxDayMins = Math.max(...Object.values(dailyTotals), 1);
  const totalMonthMins = monthLogs.reduce((a, b) => a + b.mins, 0);
  const subjectColor = s => SUBJECT_COLORS[s] || "#6b7280";

  const upcomingDeadlines = deadlines.filter(d => new Date(d.datetime) > new Date()).sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  const pastDeadlines = deadlines.filter(d => new Date(d.datetime) <= new Date());

  const tabs = [
    ["chat", "💬"],
    ["today", "📅"],
    ["tasks", `✅${tasks.filter(t => !t.done).length ? ` ${tasks.filter(t => !t.done).length}` : ""}`],
    ["homework", `📚${overdueHw.length ? ` ${overdueHw.length}` : ""}`],
    ["deadlines", `⏰${upcomingDeadlines.length ? ` ${upcomingDeadlines.length}` : ""}`],
    ["study", "⏱️"],
  ];

  return (
    <div style={{ height: "100dvh", background: "#0a0a0f", color: "#e2e8f0", fontFamily: "'DM Mono','Courier New',monospace", display: "flex", flexDirection: "column", maxWidth: "480px", margin: "0 auto" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Bebas+Neue&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}body{background:#0a0a0f;}
        ::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-thumb{background:#333;border-radius:2px;}
        .tab-btn{background:none;border:none;cursor:pointer;padding:8px 4px;font-family:inherit;font-size:10px;transition:all 0.2s;flex:1;}
        .tab-btn.active{color:#e2e8f0;border-bottom:2px solid #e2e8f0;}
        .tab-btn:not(.active){color:#4b5563;border-bottom:2px solid transparent;}
        .week-btn{background:none;border:1px solid #2d2d3a;cursor:pointer;padding:4px 10px;font-family:inherit;font-size:10px;color:#6b7280;border-radius:4px;}
        .week-btn.active{background:#1e1e2e;color:#e2e8f0;border-color:#4b5563;}
        .send-btn{background:#e2e8f0;color:#0a0a0f;border:none;cursor:pointer;padding:10px 16px;font-family:inherit;font-size:12px;font-weight:500;border-radius:8px;white-space:nowrap;}
        .send-btn:disabled{background:#1f2937;color:#374151;}
        .msg-input{background:#111827;border:1px solid #1f2937;border-radius:8px;padding:10px 12px;color:#e2e8f0;font-family:inherit;font-size:13px;flex:1;outline:none;}
        .quick-btn{background:#111827;border:1px solid #1f2937;color:#9ca3af;cursor:pointer;padding:6px 12px;font-family:inherit;font-size:11px;border-radius:20px;white-space:nowrap;}
        .lesson-row{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #111827;}
        .lesson-row:last-child{border-bottom:none;}
        .item-row{display:flex;align-items:center;gap:10px;padding:10px 12px;background:#111827;border-radius:8px;margin-bottom:6px;}
        .check{width:18px;height:18px;border:1px solid #374151;border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .check.done{background:#10b981;border-color:#10b981;}
        .del-btn{background:none;border:none;color:#374151;cursor:pointer;font-size:16px;padding:0 4px;flex-shrink:0;}
        .field-input{background:#111827;border:1px solid #1f2937;border-radius:8px;padding:8px 12px;color:#e2e8f0;font-family:inherit;font-size:12px;outline:none;width:100%;}
        .field-select{background:#111827;border:1px solid #1f2937;border-radius:8px;padding:8px 12px;color:#e2e8f0;font-family:inherit;font-size:12px;outline:none;}
        .add-btn{background:#10b981;color:#fff;border:none;cursor:pointer;padding:8px 14px;font-family:inherit;font-size:12px;border-radius:8px;white-space:nowrap;}
        .nav-btn{background:#111827;border:1px solid #1f2937;color:#9ca3af;cursor:pointer;padding:8px 14px;font-family:inherit;font-size:14px;border-radius:8px;}
        .nav-btn:disabled{opacity:0.3;cursor:not-allowed;}
        .timer-btn{border:none;cursor:pointer;padding:10px 20px;font-family:inherit;font-size:13px;border-radius:8px;font-weight:500;}
        .chart-btn{background:none;border:1px solid #2d2d3a;cursor:pointer;padding:4px 12px;font-family:inherit;font-size:10px;color:#6b7280;border-radius:4px;}
        .chart-btn.active{background:#1e1e2e;color:#e2e8f0;border-color:#4b5563;}
        .section{background:#111827;border-radius:10px;padding:12px;margin-bottom:12px;}
        .section-label{font-size:10px;color:#4b5563;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px;}
        .countdown{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:0.05em;}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
        .dot{display:inline-block;animation:pulse 1.2s ease-in-out infinite;}
        .dot:nth-child(2){animation-delay:0.2s;}.dot:nth-child(3){animation-delay:0.4s;}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.5}}
        .timer-live{animation:blink 1s ease-in-out infinite;}
        @keyframes urgentPulse{0%,100%{color:#ef4444}50%{color:#7f1d1d}}
        .urgent{animation:urgentPulse 1s ease-in-out infinite;}
      `}</style>

      {/* Header */}
      <div style={{ padding: "14px 16px 0", borderBottom: "1px solid #111827", flexShrink: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
          <div>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "22px", letterSpacing: "0.05em" }}>SCHOOL ASSISTANT</div>
            <div style={{ fontSize: "10px", color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase" }}>{day === "Saturday" || day === "Sunday" ? "Weekend 🎉" : `${day} · Week ${week}`}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "28px", letterSpacing: "0.05em" }}>{time.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</div>
            <div style={{ display: "flex", gap: "4px", justifyContent: "flex-end", marginTop: "2px", alignItems: "center" }}>
              <span style={{ fontSize: "8px", color: "#10b981" }}>AUTO</span>
              <button className={`week-btn ${week === 1 ? "active" : ""}`} onClick={() => setWeek(1)}>W1</button>
              <button className={`week-btn ${week === 2 ? "active" : ""}`} onClick={() => setWeek(2)}>W2</button>
            </div>
          </div>
        </div>
        {day !== "Saturday" && day !== "Sunday" && (
          <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
            {current && <div style={{ flex: 1, background: "#111827", borderRadius: "8px", padding: "8px 12px", borderLeft: `3px solid ${subjectColor(current.subject)}` }}><div style={{ fontSize: "9px", color: "#4b5563", textTransform: "uppercase" }}>Now</div><div style={{ fontSize: "13px", fontWeight: "500" }}>{current.subject}</div>{current.room && <div style={{ fontSize: "10px", color: "#6b7280" }}>{current.room} · until {current.end}</div>}</div>}
            {next && <div style={{ flex: 1, background: "#0d0d14", borderRadius: "8px", padding: "8px 12px", borderLeft: `3px solid ${subjectColor(next.subject)}`, opacity: 0.75 }}><div style={{ fontSize: "9px", color: "#4b5563", textTransform: "uppercase" }}>Next</div><div style={{ fontSize: "13px", color: "#9ca3af" }}>{next.subject}</div>{next.room && <div style={{ fontSize: "10px", color: "#4b5563" }}>{next.room} · {next.start}</div>}</div>}
            {!current && !next && <div style={{ flex: 1, background: "#111827", borderRadius: "8px", padding: "8px 12px", borderLeft: "3px solid #374151" }}><div style={{ fontSize: "12px", color: "#6b7280" }}>School's done for today 🎒</div></div>}
          </div>
        )}
        <div style={{ display: "flex" }}>{tabs.map(([id, label]) => <button key={id} className={`tab-btn ${activeTab === id ? "active" : ""}`} onClick={() => setActiveTab(id)}>{label}</button>)}</div>
      </div>

      {/* CHAT */}
      {activeTab === "chat" && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{ maxWidth: "82%", padding: "9px 13px", borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px", background: m.role === "user" ? "#1e3a5f" : "#111827", color: m.role === "user" ? "#bfdbfe" : "#d1d5db", fontSize: "13px", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{m.text}</div>
              </div>
            ))}
            {loading && <div style={{ display: "flex" }}><div style={{ padding: "10px 16px", background: "#111827", borderRadius: "12px 12px 12px 2px", fontSize: "18px" }}><span className="dot">·</span><span className="dot">·</span><span className="dot">·</span></div></div>}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ padding: "0 16px 8px", display: "flex", gap: "6px", overflowX: "auto" }}>
            {["What's next?", "What do I have tomorrow?", "What are my tasks?", "What homework do I have?", "What deadlines do I have?"].map(q => <button key={q} className="quick-btn" onClick={() => setInput(q)}>{q}</button>)}
          </div>
          <div style={{ padding: "0 16px 20px", display: "flex", gap: "8px" }}>
            <input className="msg-input" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder='e.g. "What do I have on Thursday?" or "Add deadline: Econ exam March 20 9am"' />
            <button className="send-btn" onClick={sendMessage} disabled={loading || !input.trim()}>Send</button>
          </div>
        </div>
      )}

      {/* TIMETABLE (day navigation) */}
      {activeTab === "today" && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Day nav */}
          <div style={{ padding: "12px 16px 8px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #111827" }}>
            <button className="nav-btn" onClick={() => setViewDayIdx(i => Math.max(0, i - 1))} disabled={viewDayIdx === 0}>←</button>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "15px", fontFamily: "'Bebas Neue',sans-serif", letterSpacing: "0.05em", color: isToday ? "#10b981" : "#e2e8f0" }}>{viewDay}{isToday ? " · TODAY" : ""}</div>
              <div style={{ fontSize: "10px", color: "#4b5563" }}>Week {viewWeek} · {viewDate.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</div>
            </div>
            <button className="nav-btn" onClick={() => setViewDayIdx(i => Math.min(4, i + 1))} disabled={viewDayIdx === 4}>→</button>
          </div>
          {/* Day pills */}
          <div style={{ padding: "8px 16px", display: "flex", gap: "6px" }}>
            {WEEKDAYS.map((d, i) => (
              <button key={d} onClick={() => setViewDayIdx(i)} style={{ flex: 1, background: viewDayIdx === i ? "#1e1e2e" : "none", border: `1px solid ${viewDayIdx === i ? "#4b5563" : "#1f2937"}`, color: d === day ? "#10b981" : viewDayIdx === i ? "#e2e8f0" : "#4b5563", cursor: "pointer", padding: "4px 0", fontFamily: "inherit", fontSize: "10px", borderRadius: "6px" }}>{d.slice(0, 3)}</button>
            ))}
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "0 16px 16px" }}>
            {viewLessons.length === 0 ? <div style={{ textAlign: "center", color: "#4b5563", marginTop: "60px" }}>No lessons this day</div> : viewLessons.map((l, i) => {
              const isPast = isToday && timeToMins(l.end) <= nowMins;
              const isCurrent = isToday && timeToMins(l.start) <= nowMins && nowMins < timeToMins(l.end);
              const isBreak = l.subject === "BREAK" || l.subject === "LUNCH";
              const minsLeft = isCurrent ? timeToMins(l.end) - nowMins : null;
              return (
                <div key={i} className="lesson-row" style={{ opacity: isPast ? 0.3 : 1 }}>
                  <div style={{ width: "60px", flexShrink: 0 }}><div style={{ fontSize: "12px", color: isCurrent ? "#e2e8f0" : "#6b7280" }}>{l.start}</div><div style={{ fontSize: "10px", color: "#374151" }}>{l.end}</div></div>
                  <div style={{ width: "3px", height: "32px", background: isBreak ? "#1f2937" : subjectColor(l.subject), borderRadius: "2px", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", color: isCurrent ? "#f8fafc" : "#d1d5db", fontWeight: isCurrent ? "500" : "400" }}>{l.subject}{isCurrent && <span style={{ marginLeft: "6px", fontSize: "9px", background: "#1e3a5f", color: "#60a5fa", padding: "1px 5px", borderRadius: "8px" }}>NOW</span>}</div>
                    {l.room && <div style={{ fontSize: "11px", color: "#4b5563" }}>{l.room}{l.teacher ? ` · ${l.teacher}` : ""}</div>}
                    {minsLeft !== null && <div style={{ fontSize: "10px", color: "#f59e0b" }}>{minsLeft} mins left</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TASKS */}
      {activeTab === "tasks" && (
        <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <input className="msg-input" style={{ flex: 1 }} value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && newTask.trim()) { setTasks(p => [...p, { text: newTask.trim(), done: false, id: Date.now() }]); setNewTask(""); } }} placeholder="Add a task..." />
            <button className="add-btn" onClick={() => { if (newTask.trim()) { setTasks(p => [...p, { text: newTask.trim(), done: false, id: Date.now() }]); setNewTask(""); } }}>Add</button>
          </div>
          {tasks.length === 0 ? <div style={{ textAlign: "center", color: "#374151", marginTop: "60px", fontSize: "13px" }}>No tasks yet.<br />Add above or tell Groq in chat.</div>
            : tasks.map(t => (
              <div key={t.id} className="item-row">
                <div className={`check ${t.done ? "done" : ""}`} onClick={() => setTasks(prev => prev.map(x => x.id === t.id ? { ...x, done: !x.done } : x))}>{t.done && <span style={{ fontSize: "11px", color: "#fff" }}>✓</span>}</div>
                <div style={{ flex: 1, fontSize: "13px", color: t.done ? "#4b5563" : "#d1d5db", textDecoration: t.done ? "line-through" : "none" }}>{t.text}</div>
                <button className="del-btn" onClick={() => setTasks(prev => prev.filter(x => x.id !== t.id))}>×</button>
              </div>
            ))}
        </div>
      )}

      {/* HOMEWORK */}
      {activeTab === "homework" && (
        <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          <div className="section">
            <div className="section-label">Add Homework</div>
            <select className="field-select" style={{ width: "100%", marginBottom: "8px" }} value={hwSubject} onChange={e => setHwSubject(e.target.value)}>{SUBJECTS.map(s => <option key={s}>{s}</option>)}</select>
            <input className="field-input" style={{ marginBottom: "8px" }} value={hwTitle} onChange={e => setHwTitle(e.target.value)} placeholder="Homework description..." />
            <div style={{ display: "flex", gap: "8px" }}>
              <input className="field-input" type="date" value={hwDue} onChange={e => setHwDue(e.target.value)} />
              <button className="add-btn" onClick={() => { if (hwTitle.trim() && hwDue) { setHomework(p => [...p, { subject: hwSubject, title: hwTitle.trim(), due: hwDue, done: false, id: Date.now() }]); setHwTitle(""); setHwDue(""); } }}>Add</button>
            </div>
          </div>
          {overdueHw.length > 0 && <div style={{ background: "#1f1010", border: "1px solid #7f1d1d", borderRadius: "8px", padding: "10px 12px", marginBottom: "12px" }}><div style={{ fontSize: "11px", color: "#ef4444", marginBottom: "4px" }}>⚠️ {overdueHw.length} overdue</div>{overdueHw.map(h => <div key={h.id} style={{ fontSize: "12px", color: "#fca5a5" }}>{h.subject}: {h.title}</div>)}</div>}
          {homework.length === 0 ? <div style={{ textAlign: "center", color: "#374151", marginTop: "40px", fontSize: "13px" }}>No homework yet.<br />Add above or tell Groq in chat.</div>
            : homework.map(h => {
              const isOverdue = !h.done && h.due < todayKey();
              return (
                <div key={h.id} className="item-row" style={{ borderLeft: `3px solid ${subjectColor(h.subject)}` }}>
                  <div className={`check ${h.done ? "done" : ""}`} onClick={() => setHomework(prev => prev.map(x => x.id === h.id ? { ...x, done: !x.done } : x))}>{h.done && <span style={{ fontSize: "11px", color: "#fff" }}>✓</span>}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "12px", color: h.done ? "#4b5563" : "#d1d5db", textDecoration: h.done ? "line-through" : "none" }}>{h.title}</div>
                    <div style={{ fontSize: "10px", color: isOverdue ? "#ef4444" : "#6b7280" }}>{h.subject} · due {h.due}{isOverdue ? " · OVERDUE" : ""}</div>
                  </div>
                  <button className="del-btn" onClick={() => setHomework(prev => prev.filter(x => x.id !== h.id))}>×</button>
                </div>
              );
            })}
        </div>
      )}

      {/* DEADLINES */}
      {activeTab === "deadlines" && (
        <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          <div className="section">
            <div className="section-label">Add Deadline</div>
            <input className="field-input" style={{ marginBottom: "8px" }} value={dlTitle} onChange={e => setDlTitle(e.target.value)} placeholder="e.g. Economics Mock Exam" />
            <div style={{ display: "flex", gap: "8px" }}>
              <input className="field-input" type="datetime-local" value={dlDatetime} onChange={e => setDlDatetime(e.target.value)} />
              <button className="add-btn" onClick={() => { if (dlTitle.trim() && dlDatetime) { setDeadlines(p => [...p, { title: dlTitle.trim(), datetime: dlDatetime, id: Date.now() }]); setDlTitle(""); setDlDatetime(""); } }}>Add</button>
            </div>
            <div style={{ fontSize: "10px", color: "#4b5563", marginTop: "6px" }}>Or tell Groq: "Add deadline: Econ exam March 20 at 9am"</div>
          </div>

          {upcomingDeadlines.length === 0 && pastDeadlines.length === 0 && (
            <div style={{ textAlign: "center", color: "#374151", marginTop: "40px", fontSize: "13px" }}>No deadlines yet.<br />Add above or tell Groq in chat.</div>
          )}

          {upcomingDeadlines.map(d => {
            const msLeft = new Date(d.datetime) - time;
            const isUrgent = msLeft < 24 * 60 * 60 * 1000;
            const isVerySoon = msLeft < 60 * 60 * 1000;
            return (
              <div key={d.id} style={{ background: "#111827", borderRadius: "10px", padding: "14px", marginBottom: "10px", borderLeft: `3px solid ${isUrgent ? "#ef4444" : "#f59e0b"}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: "500", marginBottom: "4px" }}>{d.title}</div>
                    <div style={{ fontSize: "10px", color: "#6b7280" }}>{new Date(d.datetime).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" })} at {new Date(d.datetime).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</div>
                  </div>
                  <button className="del-btn" onClick={() => setDeadlines(prev => prev.filter(x => x.id !== d.id))}>×</button>
                </div>
                <div className={`countdown ${isVerySoon ? "urgent" : ""}`} style={{ marginTop: "8px", color: isUrgent ? "#ef4444" : "#f59e0b" }}>
                  {formatCountdown(msLeft)}
                </div>
                {isUrgent && <div style={{ fontSize: "10px", color: "#ef4444", marginTop: "2px" }}>⚠️ Due within 24 hours!</div>}
              </div>
            );
          })}

          {pastDeadlines.length > 0 && (
            <div style={{ marginTop: "16px" }}>
              <div style={{ fontSize: "10px", color: "#374151", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Past</div>
              {pastDeadlines.map(d => (
                <div key={d.id} className="item-row" style={{ opacity: 0.4 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "12px", color: "#6b7280", textDecoration: "line-through" }}>{d.title}</div>
                    <div style={{ fontSize: "10px", color: "#374151" }}>{new Date(d.datetime).toLocaleDateString("en-GB")}</div>
                  </div>
                  <button className="del-btn" onClick={() => setDeadlines(prev => prev.filter(x => x.id !== d.id))}>×</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* STUDY TRACKER */}
      {activeTab === "study" && (
        <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          <div className="section">
            <div className="section-label">Live Timer</div>
            <select className="field-select" style={{ width: "100%", marginBottom: "8px" }} value={timerSubject} onChange={e => setTimerSubject(e.target.value)} disabled={timerRunning}>{SUBJECTS.map(s => <option key={s}>{s}</option>)}</select>
            <input className="field-input" style={{ marginBottom: "10px" }} value={timerTopic} onChange={e => setTimerTopic(e.target.value)} placeholder="Topic e.g. Market failure..." disabled={timerRunning} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "32px", color: timerRunning ? "#10b981" : "#4b5563" }} className={timerRunning ? "timer-live" : ""}>
                {String(Math.floor(timerSeconds / 3600)).padStart(2, "0")}:{String(Math.floor((timerSeconds % 3600) / 60)).padStart(2, "0")}:{String(timerSeconds % 60).padStart(2, "0")}
              </div>
              {!timerRunning ? <button className="timer-btn" style={{ background: "#10b981", color: "#fff" }} onClick={() => { if (timerTopic.trim()) setTimerRunning(true); }}>▶ Start</button>
                : <button className="timer-btn" style={{ background: "#ef4444", color: "#fff" }} onClick={stopTimer}>⏹ Stop & Save</button>}
            </div>
          </div>
          <div className="section">
            <div className="section-label">Manual Log</div>
            <select className="field-select" style={{ width: "100%", marginBottom: "8px" }} value={manualSubject} onChange={e => setManualSubject(e.target.value)}>{SUBJECTS.map(s => <option key={s}>{s}</option>)}</select>
            <div style={{ display: "flex", gap: "8px" }}>
              <input className="field-input" value={manualTopic} onChange={e => setManualTopic(e.target.value)} placeholder="Topic..." />
              <input className="field-input" style={{ width: "80px" }} value={manualMins} onChange={e => setManualMins(e.target.value)} placeholder="mins" type="number" min="1" />
              <button className="add-btn" onClick={addManualLog}>Log</button>
            </div>
          </div>
          <div className="section">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div><div style={{ fontSize: "10px", color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.1em" }}>This Month</div><div style={{ fontSize: "18px", fontFamily: "'Bebas Neue',sans-serif", color: "#10b981" }}>{fmtMins(totalMonthMins)} total</div></div>
              <div style={{ display: "flex", gap: "4px" }}>
                <button className={`chart-btn ${chartView === "bar" ? "active" : ""}`} onClick={() => setChartView("bar")}>By Subject</button>
                <button className={`chart-btn ${chartView === "line" ? "active" : ""}`} onClick={() => setChartView("line")}>By Day</button>
              </div>
            </div>
            {chartView === "bar" && (
              <div>
                {SUBJECTS.filter(s => subjectTotals[s] > 0).map(s => (
                  <div key={s} style={{ marginBottom: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#9ca3af", marginBottom: "3px" }}><span>{s}</span><span>{fmtMins(subjectTotals[s])}</span></div>
                    <div style={{ height: "6px", background: "#1f2937", borderRadius: "3px" }}><div style={{ height: "100%", width: `${(subjectTotals[s] / maxSubjectMins) * 100}%`, background: subjectColor(s), borderRadius: "3px", transition: "width 0.4s ease" }} /></div>
                  </div>
                ))}
                {Object.values(subjectTotals).every(v => v === 0) && <div style={{ textAlign: "center", color: "#374151", fontSize: "12px", padding: "20px 0" }}>No study logged this month yet</div>}
              </div>
            )}
            {chartView === "line" && (
              sortedDays.length === 0 ? <div style={{ textAlign: "center", color: "#374151", fontSize: "12px", padding: "20px 0" }}>No study logged this month yet</div>
                : <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "80px" }}>
                  {sortedDays.map(d => (
                    <div key={d} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <div style={{ width: "100%", background: "#10b981", borderRadius: "3px 3px 0 0", height: `${(dailyTotals[d] / maxDayMins) * 70}px`, minHeight: "4px" }} />
                      <div style={{ fontSize: "8px", color: "#4b5563" }}>{d.slice(8)}</div>
                    </div>
                  ))}
                </div>
            )}
          </div>
          {studyLogs.length > 0 && (
            <div>
              <div style={{ fontSize: "10px", color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Recent Sessions</div>
              {[...studyLogs].reverse().slice(0, 10).map(l => (
                <div key={l.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #111827", fontSize: "12px" }}>
                  <div><span style={{ color: subjectColor(l.subject), marginRight: "6px" }}>●</span><span style={{ color: "#d1d5db" }}>{l.topic}</span><span style={{ color: "#4b5563", fontSize: "10px", marginLeft: "6px" }}>{l.subject}</span></div>
                  <div style={{ color: "#6b7280", display: "flex", gap: "8px", alignItems: "center" }}>{fmtMins(l.mins)}<button className="del-btn" onClick={() => setStudyLogs(prev => prev.filter(x => x.id !== l.id))}>×</button></div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
