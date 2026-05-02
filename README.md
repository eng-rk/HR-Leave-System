# HR Leave Management System

A full-stack HR Leave Management System built with **React + Node.js + Express + MongoDB**. The system supports employee leave requests and HR approval workflows with JWT-based authentication and role-based access control.

---

##  Team Members

| Name |
|------|
| Semon Benyamin |
| Rowan Mohamed |
| Doaa Gamal |
| Hazem Elsayed |

---

##  Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| React 19 | UI Framework |
| Vite | Build Tool |
| React Router DOM | Client-side Routing |
| Lucide React | Icons |

### Backend
| Tech | Purpose |
|------|---------|
| Node.js + Express | REST API Server |
| MongoDB + Mongoose | Database & ODM |
| JSON Web Token (JWT) | Authentication |
| Bcrypt | Password Hashing |
| Joi | Input Validation |
| Dotenv | Environment Config |
| Nodemon | Dev Auto-restart |

---

##  Project Structure

```
HR-Leave-System/
├── backend/
│   ├── app.js                    # Server entry point
│   ├── .env                      # Environment variables
│   ├── package.json              # Backend dependencies
│   ├── controllers/
│   │   ├── authController.js     # Register, Login, Forgot/Reset Password
│   │   ├── leaveRequestController.js  # Leave CRUD + HR Approval
│   │   └── validation/
│   │       └── authValidation.js # Joi validation schemas
│   ├── middleware/
│   │   └── verifyToken_role.js   # JWT + Role middleware
│   ├── models/
│   │   ├── User.js               # User schema
│   │   └── LeaveRequest.js       # Leave Request schema
│   └── routes/
│       ├── authRouters.js        # Auth routes
│       └── leaveRequestRoutes.js # Leave routes
│
├── src/                          # React Frontend
│   ├── App.jsx                   # Route definitions
│   ├── main.jsx                  # App entry point
│   ├── pages/
│   │   └── auth/
│   │       ├── LoginPage.jsx
│   │       └── RegisterPage.jsx
│   └── components/
│
├── public/
├── index.html
├── package.json                  # Frontend dependencies
└── vite.config.js
```

---

##  Setup & Installation

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/eng-rk/HR-Leave-System.git
cd HR-Leave-System
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:
```env
PORT=8000
JWT_SECRET=your_super_secret_key_here
MONGO_URL=mongodb://localhost:27017/leave_management
```

Start the backend server:
```bash
npm run server     # with nodemon (development)
# or
node app.js        # production
```

### 3. Setup Frontend
```bash
# From the root directory
npm install
npm run dev
```

The frontend will be available at: **http://localhost:5173**  
The backend API will run on: **http://localhost:8000**

---

##  Authentication

All protected routes require a Bearer token in the `Authorization` header:
```
Authorization: Bearer <your_jwt_token>
```

### Register Validation Rules
| Field | Rules |
|-------|-------|
| `name` | At least 2 words (first + last name) |
| `email` | Valid email format |
| `password` | Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char |
| `role` | `employee` or `hr` |

---

##  API Endpoints

### Auth Routes — `/api/auth`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/register` | Public | Register a new user |
| POST | `/login` | Public | Login and receive JWT token |
| POST | `/forgetpassword` | Public | Request a password reset link |
| POST | `/resetpassword/:token` | Public | Reset password using token |

#### Register Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Secret@123",
  "role": "employee"
}
```

#### Login Request Body
```json
{
  "email": "john@example.com",
  "password": "Secret@123"
}
```

#### Login Response
```json
{
  "msg": "login successfully",
  "token": "<JWT_TOKEN>"
}
```

---

### Leave Request Routes — `/api/leave-requests`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/` | Employee | Submit a new leave request |
| GET | `/my` | Employee | View your own leave history |
| GET | `/` | HR only | View all leave requests (filterable) |
| PUT | `/:id/status` | HR only | Approve or Reject a request |

#### Submit Leave Request Body
```json
{
  "type": "Annual",
  "startDate": "2026-05-10",
  "endDate": "2026-05-14"
}
```
>  `userId` is automatically extracted from the JWT token. **Never send it in the request body.**

#### HR: Approve / Reject
```json
{
  "status": "Approved"
}
```
```json
{
  "status": "Rejected"
}
```

#### Filter All Leaves by Status (HR)
```
GET /api/leave-requests?status=Pending
GET /api/leave-requests?status=Approved
```

---

##  Leave Request Workflow

```
Employee submits request
        ↓
  status = "Pending"
  leaveBalance NOT deducted
        ↓
   HR reviews request
        ↓
  ┌─────────────────┐
  │    Approved      │ → leaveBalance deducted, usedLeave incremented
  │    Rejected      │ → No balance change
  └─────────────────┘
```

### Business Rules
-  `startDate` must be today or in the future
-  `startDate` must be before or equal to `endDate`
-  Requested duration must not exceed available `leaveBalance`
-  Balance is deducted **only on HR Approval**, never on creation
-  Each leave request can only be processed **once** (Pending → Approved/Rejected, no re-processing)
-  Atomic database operations prevent race conditions with concurrent HR approvals

---

##  User Model

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | String | required | Full name |
| `email` | String | required, unique | Email address |
| `password` | String | required | Hashed password |
| `role` | String | `employee` | `employee` or `HR` |
| `leaveBalance` | Number | `20` | Remaining leave days |
| `usedLeave` | Number | `0` | Total approved leave days used |

---

##  LeaveRequest Model

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `type` | String | required | Leave type (Annual, Sick, etc.) |
| `startDate` | Date | required | Start of leave |
| `endDate` | Date | required | End of leave |
| `duration` | Number | required | Auto-calculated days |
| `status` | String | `Pending` | `Pending` / `Approved` / `Rejected` |
| `userId` | ObjectId | required | Reference to User |
| `approvedBy` | ObjectId | null | HR user who processed the request |
| `processedAt` | Date | null | Timestamp of HR action |

---

##  Security Features

-  Passwords hashed with **Bcrypt** (10 salt rounds)
-  **JWT tokens** expire in 6 hours
-  `userId` is always taken from the JWT token — never trusted from client
-  Role-based middleware blocks unauthorized access
-  Input validation with **Joi** on all auth endpoints

---

##  Environment Variables

```env
PORT=8000
JWT_SECRET=your_secret_key_here
MONGO_URL=mongodb://localhost:27017/leave_management
```

---

##  Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request
