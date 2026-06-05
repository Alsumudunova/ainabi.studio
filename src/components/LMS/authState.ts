import type { UserRole } from "./lmsData";

export type AuthUser = {
  id: string;
  name: string;
  login: string;
  email: string;
  role: UserRole;
  avatar: string;
  assignedCourseSlugs: string[];
};

export type ManagedUser = AuthUser & {
  password: string;
  verified: boolean;
  createdAt: string;
};

const SESSION_KEY = "ainabi_lms_user";
const USERS_KEY = "ainabi_lms_users";

const defaultUsers: ManagedUser[] = [
  {
    id: "admin-1",
    name: "AINABI Админ",
    login: "admin",
    email: "admin@ainabi.studio",
    password: "admin123",
    role: "admin",
    avatar: "А",
    verified: true,
    assignedCourseSlugs: [],
    createdAt: "2026-06-05",
  },
  {
    id: "mentor-1",
    name: "Айнура ментор",
    login: "mentor",
    email: "mentor@ainabi.studio",
    password: "mentor123",
    role: "mentor",
    avatar: "М",
    verified: true,
    assignedCourseSlugs: ["frontend-development", "flutter"],
    createdAt: "2026-06-05",
  },
  {
    id: "student-1",
    name: "Айдана студент",
    login: "student",
    email: "student@ainabi.studio",
    password: "student123",
    role: "student",
    avatar: "С",
    verified: true,
    assignedCourseSlugs: ["frontend-development", "flutter"],
    createdAt: "2026-06-05",
  },
];

function toAuthUser(user: ManagedUser): AuthUser {
  return {
    id: user.id,
    name: user.name,
    login: user.login,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
    assignedCourseSlugs: user.assignedCourseSlugs,
  };
}

export function ensureSeedUsers() {
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
}

export function getManagedUsers(): ManagedUser[] {
  ensureSeedUsers();
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) return defaultUsers;

  try {
    return JSON.parse(raw) as ManagedUser[];
  } catch {
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    return defaultUsers;
  }
}

export function addManagedUser(input: {
  name: string;
  login: string;
  email: string;
  password: string;
  role: Exclude<UserRole, "admin">;
  assignedCourseSlugs: string[];
}) {
  const users = getManagedUsers();
  const exists = users.some(
    (user) => user.login.toLowerCase() === input.login.toLowerCase() || user.email.toLowerCase() === input.email.toLowerCase()
  );

  if (exists) {
    throw new Error("Бул логин же email менен колдонуучу бар.");
  }

  const user: ManagedUser = {
    id: `${input.role}-${Date.now()}`,
    name: input.name,
    login: input.login,
    email: input.email,
    password: input.password,
    role: input.role,
    avatar: input.name.trim().charAt(0).toUpperCase() || "U",
    verified: true,
    assignedCourseSlugs: input.assignedCourseSlugs,
    createdAt: new Date().toISOString().slice(0, 10),
  };

  localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
  window.dispatchEvent(new Event("ainabi-users-change"));
  return user;
}

export function authenticate(identifier: string, password: string): AuthUser | null {
  const normalized = identifier.trim().toLowerCase();
  const user = getManagedUsers().find(
    (item) =>
      (item.login.toLowerCase() === normalized || item.email.toLowerCase() === normalized) &&
      item.password === password &&
      item.verified
  );

  return user ? toAuthUser(user) : null;
}

export function getAuthUser(): AuthUser | null {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    const user = JSON.parse(raw) as Partial<AuthUser>;
    if (!user.id || !user.login || !user.role || !Array.isArray(user.assignedCourseSlugs)) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }

    return user as AuthUser;
  } catch {
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

export function setAuthUser(user: AuthUser) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  window.dispatchEvent(new Event("ainabi-auth-change"));
}

export function clearAuthUser() {
  localStorage.removeItem(SESSION_KEY);
  window.dispatchEvent(new Event("ainabi-auth-change"));
}
