# Architecture overview

Web app that's using Client-Server architecture: request must be initiated from the client then the server will response

# Technologies / components

## Frontend

- HTML
- CSS
- JavaScript

=> no web framework

## Backend

### Server

- Programming language: also JavaScript -> consitent use of language makes it easy to develop
- Web framework: ExpressJS -> simplify the development process

### Database

- DBMS: SQLite 3 
  - simple but robust. Have been battle-tested and trusted by many big companies like Apple, Android, Boeing,...
  - File-based database (vs client-server database like MySQL) => easy setup, no need to have DB server
  - File-locking / concurrent users: ~ 100 users at the same time. MySQL: >= millions on concurrent users
  

