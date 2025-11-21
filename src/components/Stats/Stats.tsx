import { useEffect, useState } from "react";
import "./Stats.css";

interface StatItem {
  label: string;
  value: number;
}

const stats: StatItem[] = [
  { label: "Студенттер", value: 10 },
  { label: "Курс багыттары", value: 4 },
  { label: "Инструкторлор", value: 3 },
  { label: "Практика", value: 100 },
];

const Stats = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [visible, setVisible] = useState(false);

  // Observer активдештирүү
  useEffect(() => {
    const section = document.getElementById("stats");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
  }, []);

  // Сан өсүү анимациясы
  useEffect(() => {
    if (!visible) return;

    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500; // 1.5 секунда
      const step = end / (duration / 20);

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(start);
          return newCounts;
        });
      }, 20);
    });
  }, [visible]);

  return (
    <section id="stats" className="stats-section">
      <div className="stats-container">

        {stats.map((item, i) => (
          <div className="stat-card" key={i}>
            <h2 className="stat-number">
              {counts[i]}
              {item.label === "Практика" ? "%" : "+"}
            </h2>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;
