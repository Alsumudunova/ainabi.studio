import "./Team.css";
import aibek from "../../assets/images/aibek.jpg";
import Mentor1 from "../../assets/images/mentor1.png";
import Mentor2 from "../../assets/images/mentor2.png";
import Mentor3 from "../../assets/images/mentor3.png";
import Mentor4 from "../../assets/images/mentor4.png";
import Mentor5 from "../../assets/images/mentor5.jpg";


const Team = () => {
  const members = [
    {
      name: "Набиев Айбек",
      role: "Негиздөөчү • Ainabi Studio",
      img: aibek,
    },
    {
      name: "Имангазы кызы Алсу",
      role: "Генеральный директор • Ainabi Studio",
      img: Mentor1,
    },
    {
      name: "Frontend Ментор",
      role: "Web Иштеп Чыгаруучу",
      img: Mentor2,
    },
    {
      name: "Backend Ментор",
      role: "Сервер, База данных",
      img: Mentor3,
    },
    {
      name: "Mobile Ментор",
      role: "Flutter / Android / iOS",
      img: Mentor4,
    },
     {
      name: "Mobile Ментор",
      role: "Flutter / Android / iOS",
      img: Mentor5,
    },
  ];

  return (
    <section id="team" className="team-section">
      <h2 className="team-title">Биздин команда</h2>
      <p className="team-subtitle">Ainabi Studio'ну түзгөн кесипкөй адистер</p>

      <div className="team-grid">
        {members.map((m, i) => (
          <div key={i} className="team-card">
            <img src={m.img} alt={m.name} className="team-photo" />
            <h3 className="team-name">{m.name}</h3>
            <p className="team-role">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

