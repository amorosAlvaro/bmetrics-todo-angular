# Todo List form Bmetric
## By Álvaro Amorós Rodríguez
22/05/2022

### Project

#### Description:
This project consists on a basic todo-list developed with Angular8, NgRx, and angular material. No further dependencies have been added (besides prettier and eslint).

When loading the page, the user will encounter a dashboard with a set of mock tasks as well as a counter with the overall number of tasks. In order to edit, delete or add new tasks, the user will need to log in with the credential username: *admin* & password: *admin*
This will enable te user to use the route http://localhost:4200/admin where he can perform CRUD operations. If the user logs in with the credential *user* & *user*  he will be only able to see the dashboard.

Both Logged in status and user role will be saved and local storage and will persist after page refresh. Local storage will be cleared after user logs out.

Responsive design has been added as well.

#### Run the app:
- npm -i

- ng serve -o
