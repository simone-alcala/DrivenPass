# Getting started with DrivenPass

## `.env SETUP`

### DATABASE_URL
### PORT=port number
### CRYPTR=key
### JWT_KEY=key
### BCRYPT=number
----
### ENDPOINTS:
---
 - POST /signup {email, password} 201
 - POST /signin {email, password} 200 + token
---
 - POST /credentials {title, url, login, password}
 - GET /credentials
 - GET /credentials/:id
 - DELETE /credentials/:id
----
 - POST /notes {title, note}
 - GET /notes
 - GET /notes/:id
 - DELETE /notes/:id
----
 - POST /cards {title, number, name, cvv, expiration, password, isVirtual, type}
 - GET /cards
 - GET /cards/:id 
 - DELETE /cards/:id
----
 - POST /wifi {title, name, password}
 - GET /wifi
 - GET /wifi/:id
 - DELETE /wifi/:id 
 ----