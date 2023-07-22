import TasksPage from "../pages/TasksPage.vue"
import HomePage from "../pages/HomePage.vue"
import LoginPage from "../pages/LoginPage.vue"
import RegisterPage from "../pages/RegisterPage.vue"
import SummaryPage from "../pages/SummaryPage.vue"
import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage.vue";

const routes = [
    { path: "/", component: HomePage, name: "home" },
    { path: "/summary", component: SummaryPage, name: "summary" },
    { path: "/tasks", component: TasksPage, name: "tasks" },
    { path: "/login", component: LoginPage, name: "login" },
    { path: "/register", component: RegisterPage, name: "register" },
    { path: "/:notFound(.*)", component: NotFoundErrorPage, name: "not-found" },
]

export default routes
