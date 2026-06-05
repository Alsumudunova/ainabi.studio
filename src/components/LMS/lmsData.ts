export type UserRole = "student" | "mentor" | "admin";

export type CourseAccessUser = {
  role: UserRole;
  assignedCourseSlugs: string[];
};

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  videoTitle: string;
  text: string;
  pdf: string;
  homework: string;
  completed: boolean;
};

export type CourseModule = {
  title: string;
  lessons: Lesson[];
};

export type LmsCourse = {
  slug: string;
  title: string;
  image: string;
  description: string;
  duration: string;
  level: string;
  mentor: string;
  lessonsCount: number;
  progress: number;
  modules: CourseModule[];
};

export type Assignment = {
  id: string;
  title: string;
  courseSlug: string;
  course: string;
  deadline: string;
  status: "Жөнөтүлө элек" | "Текшерүүдө" | "Кабыл алынды";
  grade?: string;
  feedback?: string;
};

export type TestQuestion = {
  id: string;
  type: "single" | "multiple";
  question: string;
  options: string[];
  answer: string[];
};

export const demoUser = {
  name: "Айдана",
  email: "student@ainabi.studio",
  role: "student" as UserRole,
  avatar: "А",
};

export const lmsCourses: LmsCourse[] = [
  {
    slug: "frontend-development",
    title: "Frontend Development",
    image: "UI",
    description: "HTML, CSS, JavaScript, React жана адаптивдүү интерфейстер боюнча практикалык курс.",
    duration: "3 ай",
    level: "Баштапкыдан Junior'га чейин",
    mentor: "Айнура С.",
    lessonsCount: 24,
    progress: 68,
    modules: [
      {
        title: "Модуль 1: Веб негиздери",
        lessons: [
          {
            id: "html-structure",
            title: "HTML структурасы жана семантика",
            duration: "38 мүнөт",
            videoTitle: "Сабак видеосу: HTML негиздери",
            text: "Бул сабакта барактын туура структурасын, семантикалык тегдерди жана SEO үчүн маанилүү негиздерди үйрөнөсүң.",
            pdf: "frontend-html-guide.pdf",
            homework: "Portfolio барагынын HTML структурасын даярда.",
            completed: true,
          },
          {
            id: "css-layout",
            title: "CSS Flex жана Grid",
            duration: "52 мүнөт",
            videoTitle: "Сабак видеосу: Layout системалары",
            text: "Flexbox жана Grid аркылуу responsive layout түзүү, spacing жана компоненттик дизайн принциптери.",
            pdf: "frontend-layout.pdf",
            homework: "Landing page hero жана card grid түз.",
            completed: true,
          },
        ],
      },
      {
        title: "Модуль 2: React практика",
        lessons: [
          {
            id: "react-components",
            title: "React компоненттери",
            duration: "46 мүнөт",
            videoTitle: "Сабак видеосу: Компоненттер",
            text: "Компоненттерди бөлүү, props, state жана reusable UI түзүү.",
            pdf: "react-components.pdf",
            homework: "Курс карточкасын reusable компонент кыл.",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    image: "API",
    description: "Node.js, REST API, база, authentication жана production backend архитектурасы.",
    duration: "3.5 ай",
    level: "Орто",
    mentor: "Бакыт Т.",
    lessonsCount: 28,
    progress: 34,
    modules: [
      {
        title: "Модуль 1: API негиздери",
        lessons: [
          {
            id: "rest-api",
            title: "REST API түзүү",
            duration: "44 мүнөт",
            videoTitle: "Сабак видеосу: Express API",
            text: "Endpoint, request, response, validation жана error handling.",
            pdf: "backend-rest.pdf",
            homework: "Courses API үчүн CRUD endpoint жаз.",
            completed: true,
          },
        ],
      },
    ],
  },
  {
    slug: "flutter",
    title: "Flutter",
    image: "APP",
    description: "Dart, Flutter UI, API, Firebase жана мобилдик тиркемени публикацияга даярдоо.",
    duration: "3 ай",
    level: "Баштапкы",
    mentor: "Аибек М.",
    lessonsCount: 26,
    progress: 82,
    modules: [
      {
        title: "Модуль 1: Dart жана Flutter",
        lessons: [
          {
            id: "flutter-widgets",
            title: "Виджеттер жана экран түзүү",
            duration: "50 мүнөт",
            videoTitle: "Сабак видеосу: Flutter Widgets",
            text: "Widget tree, StatelessWidget, StatefulWidget жана UI түзүү практикасы.",
            pdf: "flutter-widgets.pdf",
            homework: "Login жана profile экрандарын түз.",
            completed: true,
          },
        ],
      },
    ],
  },
  {
    slug: "target-ads",
    title: "Target Ads",
    image: "ADS",
    description: "Meta Ads, аудитория, креатив, тестирлөө жана лид генерация.",
    duration: "1.5 ай",
    level: "Баштапкы",
    mentor: "Мээрим К.",
    lessonsCount: 14,
    progress: 46,
    modules: [
      {
        title: "Модуль 1: Кампания стратегиясы",
        lessons: [
          {
            id: "audience",
            title: "Аудитория түзүү",
            duration: "35 мүнөт",
            videoTitle: "Сабак видеосу: Target аудитория",
            text: "Кардар портрети, кызыгуулар, lookalike жана retargeting негиздери.",
            pdf: "target-audience.pdf",
            homework: "Бир бизнес үчүн 3 аудитория сегментин даярда.",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    slug: "china-marketplaces",
    title: "Кытай маркетплейстери",
    image: "CN",
    description: "1688, Taobao, Pinduoduo аркылуу товар издөө, текшерүү жана заказ процесси.",
    duration: "1 ай",
    level: "Баштапкы",
    mentor: "Нурзат А.",
    lessonsCount: 10,
    progress: 100,
    modules: [
      {
        title: "Модуль 1: Товар жана сатуучу",
        lessons: [
          {
            id: "supplier-check",
            title: "Сатуучуну текшерүү",
            duration: "32 мүнөт",
            videoTitle: "Сабак видеосу: Supplier check",
            text: "Рейтинг, комментарий, сүрөт салыштыруу жана оптовый бааны талдоо.",
            pdf: "china-supplier.pdf",
            homework: "3 товарды салыштырып таблица түз.",
            completed: true,
          },
        ],
      },
    ],
  },
];

export const assignments: Assignment[] = [
  {
    id: "a1",
    title: "Portfolio landing page",
    courseSlug: "frontend-development",
    course: "Frontend Development",
    deadline: "12-июнь",
    status: "Текшерүүдө",
  },
  {
    id: "a2",
    title: "REST API CRUD",
    courseSlug: "backend-development",
    course: "Backend Development",
    deadline: "15-июнь",
    status: "Жөнөтүлө элек",
  },
  {
    id: "a3",
    title: "Login экраны",
    courseSlug: "flutter",
    course: "Flutter",
    deadline: "18-июнь",
    status: "Кабыл алынды",
    grade: "95/100",
    feedback: "UI таза, validation бөлүгүн дагы жакшырт.",
  },
];

export const testQuestions: TestQuestion[] = [
  {
    id: "q1",
    type: "single",
    question: "React компонентинде абалды сактоо үчүн кайсы hook колдонулат?",
    options: ["useState", "useMemo", "useRef", "useEffect"],
    answer: ["useState"],
  },
  {
    id: "q2",
    type: "multiple",
    question: "Responsive дизайн үчүн кайсы ыкмалар туура?",
    options: ["Media queries", "Flexible grid", "Fixed 1920px width", "Relative units"],
    answer: ["Media queries", "Flexible grid", "Relative units"],
  },
  {
    id: "q3",
    type: "single",
    question: "API endpoint жооп кайтарганда кайсы формат көп колдонулат?",
    options: ["JSON", "PSD", "MP4", "ZIP"],
    answer: ["JSON"],
  },
];

export const internshipOpenings = [
  "Frontend стажер",
  "Flutter стажер",
  "Backend стажер",
  "Target Ads ассистент",
];

export function getVisibleCourses(user: CourseAccessUser | null) {
  if (!user || user.role === "admin") return lmsCourses;
  return lmsCourses.filter((course) => user.assignedCourseSlugs.includes(course.slug));
}

export function getVisibleAssignments(user: CourseAccessUser | null) {
  if (!user || user.role === "admin") return assignments;
  return assignments.filter((assignment) => user.assignedCourseSlugs.includes(assignment.courseSlug));
}
