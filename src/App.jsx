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
const SUBJECT_COLORS = {
  "Computer Science": "#3b82f6",
  "Geography": "#10b981",
  "Economics": "#f59e0b",
  "Study Period": "#8b5cf6",
  "Free Period": "#6b7280",
  "EPQ": "#ec4899",
  "Personal Development": "#06b6d4",
  "BREAK": "#374151",
  "LUNCH": "#374151",
};

function timeToMins(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function getNowMins() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function getAutoWeek() {
  const refMonday = new Date(2026, 2, 9);
  const now = new Date();
  const daysSinceRef = Math.floor((now - refMonday) / (1000 * 60 * 60 * 24));
  const weeksSinceRef = Math.floor(daysSinceRef / 7);
  return weeksSinceRef % 2 === 0 ? 2 : 1;
}

function getCurrentAndNext(week, day) {
  const lessons = TIMETABLE[week]?.[day];
  if (!lessons) return { current: null, next: null };
  const now = getNowMins();
  let current = null, next = null;
  for (let i = 0; i < lessons.length; i++) {
    const s = timeToMins(lessons[i].start);
    const e = timeToMins(lessons[i].end);
    if (now >= s && now < e) current = lessons[i];
    if (now < s && !next) next = lessons[i];
  }
  return { current, next };
}

function buildSystemPrompt(week, day, tasks) {
  const taskList = tasks.length ? tasks.map((t, i) => `${i + 1}. ${t.text}${t.done ? " [DONE]" : ""}`).join("\n") : "No tasks added yet.";
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  return `You are a personal school assistant for a sixth form student. Be concise — 2-3 lines max per answer.

CURRENT TIME: ${timeStr}
TODAY: ${day}
CURRENT WEEK: Week ${week}

BREAK TIMES (every day):
- 11:05–11:25 = Morning Break
- 13:25–14:05 = Lunch

WEEK ${week} TIMETABLE FOR ${day.toUpperCase()}:
${(TIMETABLE[week]?.[day] || []).map(l => `${l.start}–${l.end}: ${l.subject}${l.room ? ` (${l.room}${l.teacher ? ", " + l.teacher : ""})` : ""}`).join("\n")}

TASKS:
${taskList}

RULES:
1. "What's next?" / "next lesson?" → check current time and return the very next lesson with room and teacher.
2. "What do I have today?" → list remaining lessons from now with times.
3. "What are my tasks?" → list tasks from above.
4. If it's after 16:05 or a weekend, say school is done for the day.
5. Keep all answers short and direct.`;
}

export default function App() {
  const [week, setWeek] = useState(getAutoWeek);
  const [time, setTime] = useState(new Date());
  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tasks") || "[]"); } catch { return []; }
  });
  const [newTask, setNewTask] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hey! Ask me what's next, what you have today, or add a task 📚" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const day = DAYS[time.getDay()];
  const { current, next } = getCurrentAndNext(week, day);
  const todayLessons = TIMETABLE[week]?.[day] || [];
  const nowMins = getNowMins();
  const remainingLessons = todayLessons.filter(l => timeToMins(l.end) > nowMins);

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");

    const taskMatch = userMsg.match(/^add task[:\s]+(.+)/i);
    if (taskMatch) {
      const taskText = taskMatch[1].trim();
      setTasks(prev => [...prev, { text: taskText, done: false, id: Date.now() }]);
      setMessages(prev => [...prev, { role: "user", text: userMsg }, { role: "assistant", text: `✅ Task added: "${taskText}"` }]);
      return;
    }

    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const systemPrompt = buildSystemPrompt(week, day, tasks);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ system: systemPrompt, message: userMsg }),
      });
      const data = await response.json();
      const reply = data.reply || "Sorry, couldn't get a response.";
      setMessages(prev => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Something went wrong. Try again!" }]);
    }
    setLoading(false);
  }

  function toggleTask(id) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  const subjectColor = (s) => SUBJECT_COLORS[s] || "#6b7280";

  return (
    <div style={{
      height: "100dvh", background: "#0a0a0f", color: "#e2e8f0",
      fontFamily: "'DM Mono', 'Courier New', monospace", display: "flex", flexDirection: "column",
      maxWidth: "480px", margin: "0 auto"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0f; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        .tab-btn { background: none; border: none; cursor: pointer; padding: 10px 14px; font-family: inherit; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; transition: all 0.2s; }
        .tab-btn.active { color: #e2e8f0; border-bottom: 2px solid #e2e8f0; }
        .tab-btn:not(.active) { color: #4b5563; border-bottom: 2px solid transparent; }
        .week-btn { background: none; border: 1px solid #2d2d3a; cursor: pointer; padding: 4px 10px; font-family: inherit; font-size: 10px; letter-spacing: 0.05em; color: #6b7280; transition: all 0.2s; border-radius: 4px; }
        .week-btn.active { background: #1e1e2e; color: #e2e8f0; border-color: #4b5563; }
        .send-btn { background: #e2e8f0; color: #0a0a0f; border: none; cursor: pointer; padding: 10px 16px; font-family: inherit; font-size: 12px; font-weight: 500; border-radius: 8px; white-space: nowrap; }
        .send-btn:disabled { background: #1f2937; color: #374151; }
        .msg-input { background: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 10px 12px; color: #e2e8f0; font-family: inherit; font-size: 13px; flex: 1; outline: none; }
        .quick-btn { background: #111827; border: 1px solid #1f2937; color: #9ca3af; cursor: pointer; padding: 6px 12px; font-family: inherit; font-size: 11px; border-radius: 20px; white-space: nowrap; }
        .lesson-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid #111827; }
        .lesson-row:last-child { border-bottom: none; }
        .task-row { display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: #111827; border-radius: 8px; margin-bottom: 6px; }
        .task-check { width: 18px; height: 18px; border: 1px solid #374151; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .task-check.done { background: #10b981; border-color: #10b981; }
        .del-btn { background: none; border: none; color: #374151; cursor: pointer; font-size: 16px; padding: 0 4px; flex-shrink: 0; }
        .add-task-input { background: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 10px 12px; color: #e2e8f0; font-family: inherit; font-size: 13px; flex: 1; outline: none; }
        .add-btn { background: #10b981; color: #fff; border: none; cursor: pointer; padding: 10px 14px; font-family: inherit; font-size: 12px; border-radius: 8px; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .dot { display: inline-block; animation: pulse 1.2s ease-in-out infinite; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      <div style={{ padding: "16px 16px 0", borderBottom: "1px solid #111827", flexShrink: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "24px", letterSpacing: "0.05em" }}>SCHOOL ASSISTANT</div>
            <div style={{ fontSize: "10px", color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {day === "Saturday" || day === "Sunday" ? "Weekend 🎉" : `${day} · Week ${week}`}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "30px", letterSpacing: "0.05em" }}>
              {time.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </div>
            <div style={{ display: "flex", gap: "4px", justifyContent: "flex-end", marginTop: "2px", alignItems: "center" }}>
              <span style={{ fontSize: "8px", color: "#10b981", letterSpacing: "0.05em" }}>AUTO</span>
              <button className={`week-btn ${week === 1 ? "active" : ""}`} onClick={() => setWeek(1)}>W1</button>
              <button className={`week-btn ${week === 2 ? "active" : ""}`} onClick={() => setWeek(2)}>W2</button>
            </div>
          </div>
        </div>

        {day !== "Saturday" && day !== "Sunday" && (
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            {current && (
              <div style={{ flex: 1, background: "#111827", borderRadius: "8px", padding: "8px 12px", borderLeft: `3px solid ${subjectColor(current.subject)}` }}>
                <div style={{ fontSize: "9px", color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase" }}>Now</div>
                <div style={{ fontSize: "13px", fontWeight: "500" }}>{current.subject}</div>
                {current.room && <div style={{ fontSize: "10px", color: "#6b7280" }}>{current.room} · until {current.end}</div>}
              </div>
            )}
            {next && (
              <div style={{ flex: 1, background: "#0d0d14", borderRadius: "8px", padding: "8px 12px", borderLeft: `3px solid ${subjectColor(next.subject)}`, opacity: 0.75 }}>
                <div style={{ fontSize: "9px", color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase" }}>Next</div>
                <div style={{ fontSize: "13px", color: "#9ca3af" }}>{next.subject}</div>
                {next.room && <div style={{ fontSize: "10px", color: "#4b5563" }}>{next.room} · {next.start}</div>}
              </div>
            )}
            {!current && !next && (
              <div style={{ flex: 1, background: "#111827", borderRadius: "8px", padding: "8px 12px", borderLeft: "3px solid #374151" }}>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>School's done for today 🎒</div>
              </div>
            )}
          </div>
        )}

        <div style={{ display: "flex" }}>
          {[["chat", "💬 Chat"], ["today", "📅 Today"], ["tasks", `✅ Tasks${tasks.filter(t=>!t.done).length ? ` (${tasks.filter(t=>!t.done).length})` : ""}`]].map(([id, label]) => (
            <button key={id} className={`tab-btn ${activeTab === id ? "active" : ""}`} onClick={() => setActiveTab(id)}>{label}</button>
          ))}
        </div>
      </div>

      {activeTab === "chat" && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "82%", padding: "9px 13px",
                  borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                  background: m.role === "user" ? "#1e3a5f" : "#111827",
                  color: m.role === "user" ? "#bfdbfe" : "#d1d5db",
                  fontSize: "13px", lineHeight: "1.6", whiteSpace: "pre-wrap"
                }}>{m.text}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex" }}>
                <div style={{ padding: "10px 16px", background: "#111827", borderRadius: "12px 12px 12px 2px", fontSize: "18px" }}>
                  <span className="dot">·</span><span className="dot">·</span><span className="dot">·</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ padding: "0 16px 8px", display: "flex", gap: "6px", overflowX: "auto" }}>
            {["What's next?", "What do I have today?", "What are my tasks?"].map(q => (
              <button key={q} className="quick-btn" onClick={() => setInput(q)}>{q}</button>
            ))}
          </div>
          <div style={{ padding: "0 16px 20px", display: "flex", gap: "8px" }}>
            <input className="msg-input" value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder='Ask anything or "add task: ..."' />
            <button className="send-btn" onClick={sendMessage} disabled={loading || !input.trim()}>Send</button>
          </div>
        </div>
      )}

      {activeTab === "today" && (
        <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          {day === "Saturday" || day === "Sunday" ? (
            <div style={{ textAlign: "center", color: "#4b5563", marginTop: "60px" }}>It's the weekend! 🎉</div>
          ) : (
            <>
              <div style={{ fontSize: "10px", color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                {remainingLessons.length} lessons remaining
              </div>
              {todayLessons.map((l, i) => {
                const isPast = timeToMins(l.end) <= nowMins;
                const isCurrent = timeToMins(l.start) <= nowMins && nowMins < timeToMins(l.end);
                const isBreak = l.subject === "BREAK" || l.subject === "LUNCH";
                return (
                  <div key={i} className="lesson-row" style={{ opacity: isPast ? 0.3 : 1 }}>
                    <div style={{ width: "60px", flexShrink: 0 }}>
                      <div style={{ fontSize: "12px", color: isCurrent ? "#e2e8f0" : "#6b7280" }}>{l.start}</div>
                      <div style={{ fontSize: "10px", color: "#374151" }}>{l.end}</div>
                    </div>
                    <div style={{ width: "3px", height: "32px", background: isBreak ? "#1f2937" : subjectColor(l.subject), borderRadius: "2px", flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "13px", color: isCurrent ? "#f8fafc" : "#d1d5db", fontWeight: isCurrent ? "500" : "400" }}>
                        {l.subject}
                        {isCurrent && <span style={{ marginLeft: "6px", fontSize: "9px", background: "#1e3a5f", color: "#60a5fa", padding: "1px 5px", borderRadius: "8px" }}>NOW</span>}
                      </div>
                      {l.room && <div style={{ fontSize: "11px", color: "#4b5563" }}>{l.room}{l.teacher ? ` · ${l.teacher}` : ""}</div>}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}

      {activeTab === "tasks" && (
        <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <input className="add-task-input" value={newTask} onChange={e => setNewTask(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && newTask.trim()) { setTasks(p => [...p, { text: newTask.trim(), done: false, id: Date.now() }]); setNewTask(""); } }}
              placeholder="Add a new task..." />
            <button className="add-btn" onClick={() => { if (newTask.trim()) { setTasks(p => [...p, { text: newTask.trim(), done: false, id: Date.now() }]); setNewTask(""); } }}>Add</button>
          </div>
          {tasks.length === 0 ? (
            <div style={{ textAlign: "center", color: "#374151", marginTop: "60px", fontSize: "13px" }}>
              No tasks yet.<br />Add one above or say "add task: ..." in chat.
            </div>
          ) : tasks.map(t => (
            <div key={t.id} className="task-row">
              <div className={`task-check ${t.done ? "done" : ""}`} onClick={() => toggleTask(t.id)}>
                {t.done && <span style={{ fontSize: "11px", color: "#fff" }}>✓</span>}
              </div>
              <div style={{ flex: 1, fontSize: "13px", color: t.done ? "#4b5563" : "#d1d5db", textDecoration: t.done ? "line-through" : "none" }}>{t.text}</div>
              <button className="del-btn" onClick={() => deleteTask(t.id)}>×</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
