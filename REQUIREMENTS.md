
### Technologies / Libraries to leverage:

 - NestJS

 - Swagger

 - TypeORM

 - Git

### Functional Requirements:

Advertiser

_Fields_

- Advertiser Name

- Advertiser Contact Name

- Advertiser Credit Limit

Manage in MySQL DB (MySQL DB runs as a separate Docker container)

### Restful API for an Advertiser (base path = /api/advertiser)

- `POST` new advertiser

- `PUT` update advertiser

- `DELETE` advertiser

- `GET` advertiser

- `GET` endpoint to validate if the advertiser has enough credit to perform a transaction

- `POST` endpoint to deduct credit from the advertiser’s account

Properly handle errors and don't expose a stack trace through the API

Make sure the advertiser API endpoints are accessible via a swagger UI embedded in the application at `http://localhost:8080/swagger-ui.html`

- Add a README.md with some description on how to develop, run

 - Wrap resulting project into a Docker

- Use docker-compose to link Docker application to MySQL Docker

 - Must be a git repository with several commits

 - Share via GitHub or GitLab
