import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { authenticate, setAuthUser } from "./authState";
import "./LMS.css";

const labels = {
  login: {
    title: "Кирүү",
    subtitle: "AINABI LMS кабинетине кирип, курстарыңды улант.",
    button: "Кирүү",
  },
  register: {
    title: "Катталуу",
    subtitle: "Студент жана ментор аккаунттарын админ гана түзөт.",
    button: "Админге кайрылуу",
  },
  forgot: {
    title: "Сыр сөздү калыбына келтирүү",
    subtitle: "Email жазсаң, калыбына келтирүү шилтемеси жөнөтүлөт.",
    button: "Шилтеме жөнөтүү",
  },
  verify: {
    title: "Email текшерүү",
    subtitle: "Аккаунтту активдештирүү үчүн email текшерүү кадамы.",
    button: "Email текшерилди",
  },
};

const AuthPage = () => {
  const navigate = useNavigate();
  const { mode = "login" } = useParams();
  const safeMode = mode in labels ? (mode as keyof typeof labels) : "login";
  const copy = labels[safeMode];
  const [error, setError] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (safeMode === "forgot" || safeMode === "register") {
      navigate("/auth/verify");
      return;
    }

    const form = new FormData(event.currentTarget);
    const identifier = String(form.get("identifier") ?? "");
    const password = String(form.get("password") ?? "");
    const user = authenticate(identifier, password);

    if (!user) {
      setError("Логин/email же сыр сөз туура эмес.");
      return;
    }

    setAuthUser(user);
    navigate(user.role === "admin" ? "/admin" : user.role === "mentor" ? "/mentor" : "/dashboard");
  };

  return (
    <div className="lms-auth-wrap">
      <div className="lms-auth-card">
        <h1 className="lms-title">{copy.title}</h1>
        <p className="lms-subtitle">{copy.subtitle}</p>

        <form className="lms-form" onSubmit={submit}>
          <label>
            Логин же email
            <input required name="identifier" placeholder="admin же admin@ainabi.studio" />
          </label>

          {safeMode !== "forgot" && safeMode !== "verify" && (
            <label>
              Сыр сөз
              <input required name="password" type="password" placeholder="Сыр сөз" />
            </label>
          )}

          {error && <span className="lms-error">{error}</span>}
          {safeMode === "login" && (
            <p className="lms-muted">
              Баштапкы админ: login <strong>admin</strong>, сыр сөз <strong>admin123</strong>.
              Студент жана ментор логиндерин админ панелден кошосуз.
            </p>
          )}

          <button className="lms-action" type="submit">
            {copy.button}
          </button>
        </form>

        <div className="lms-auth-links">
          <Link to="/auth/register">Катталуу</Link>
          <Link to="/auth/login">Кирүү</Link>
          <Link to="/auth/forgot">Сыр сөздү унуттуңузбу?</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
