<img width="1898" height="906" alt="Screenshot 2026-06-12 003239" src="https://github.com/user-attachments/assets/9f983a79-2238-48a5-90d0-afa5d5a8ec9e" />🎒 Lost & Found Campus Hub

A smart web application designed to simplify the process of reporting, searching, and claiming lost and found items within a college campus.
Built for the **Agent League Hackathon** under the **Creative Apps Track** using **GitHub Copilot** as an AI-assisted development tool.

📖 Problem Statement

Students and staff frequently lose personal belongings such as ID cards, wallets, keys, laptops, books, and electronic devices on campus.
Traditional recovery methods rely on notice boards, social media posts, or word of mouth, making the process slow, unorganized, and inefficient.

💡 Our Solution

Lost & Found Campus Hub provides a centralized digital platform where users can:
- Report lost items
- Report found items
- Browse available items
- Search for belongings
- Submit ownership claims
- Track claim status

The platform improves communication between the finder and the owner while making the recovery process faster and more organized.

🚀 Features
📊 Dashboard
- Overview of lost items
- Found items count
- Total reports
- Campus statistics
- Recent activity

🔍 Lost Items
- View all reported lost items
- Search items
- Category information
- Location details
- Date reported

📦 Found Items
- View all found items
- Search functionality
- Item description
- Location where found
- Date reported

📝 Report Item

Users can report either:
- Lost Item
- Found Item

Report includes:
- Item Name
- Category
- Location
- Date
- Description
- Contact Email

📋 My Claims

Users can:
- View submitted claims
- Track claim status
- Check approval status

🎯 Key Objectives
- Digitize campus lost & found management
- Reduce recovery time
- Improve communication
- Eliminate manual notice boards
- Provide a user-friendly experience

🖥️ Tech Stack

Frontend 
- React.js
- React Router
- Tailwind CSS
- Axios
- React Icons
- React Hot Toast

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

Development Tools
- Git
- GitHub
- GitHub Copilot
- VS Code

🤖 AI Assistance

This project was developed with *GitHub Copilot* as an AI-powered coding assistant.
GitHub Copilot helped us by:

- Generating React components
- Creating Express API boilerplate
- Suggesting backend logic
- Improving UI structure
- Speeding up development
- Assisting with debugging
- Providing intelligent code completion

AI assistance allowed the team to focus more on solving the real-world problem while accelerating software development.

📁 Project Structure

Lost-and-found-CampusHub
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── assets
│   │   └── data
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md

📷 Screenshots

# Dashboard

<img width="1898" height="906" alt="Screenshot 2026-06-12 003239" src="https://github.com/user-attachments/assets/df5cb4ca-462f-4d96-9f4a-196d854574d1" />

# Lost Items

<img width="1898" height="900" alt="Screenshot 2026-06-11 233922" src="https://github.com/user-attachments/assets/0e7a914a-130c-4b79-bf23-c60c45363ca8" />

# Found Items

<img width="1898" height="900" alt="Screenshot 2026-06-11 233922" src="https://github.com/user-attachments/assets/638e5ec1-85c1-421c-aa32-1ae0abc4a09f" />

# Report Item

<img width="1894" height="901" alt="Screenshot 2026-06-11 233958" src="https://github.com/user-attachments/assets/4d345437-23a2-4d7e-a9b6-af3a22719ba8" />

# My Claims

<img width="1897" height="900" alt="Screenshot 2026-06-11 234014" src="https://github.com/user-attachments/assets/a5c524ee-9ef7-47d2-b411-8d664adf6bd7" />

# 🔄 Workflow

1. User logs into the platform.
2. Reports a lost or found item.
3. Item is stored in the database.
4. Other users browse available items.
5. Users submit ownership claims.
6. Claims are reviewed.
7. Item is successfully reunited with the owner.
8. 
# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /dashboard | Dashboard statistics |
| GET | /items/lost | Retrieve lost items |
| GET | /items/found | Retrieve found items |
| POST | /items | Report new item |
| PUT | /claim/:id | Claim an item |
| DELETE | /items/:id | Delete item |

---

# ⚙️ Installation
## Clone Repository
```bash
git clone https://github.com/Raghavi-S1023/Lost-and-found-CampusHub.git
```
## Install Frontend
```bash
cd client
npm install
npm run dev
```
## Install Backend

```bash
cd server
npm install
npm run dev
```
# 🌍 Future Enhancements

- AI-powered item matching
- Natural language search
- AI-generated item descriptions
- Email notifications
- QR Code verification
- Image recognition
- Mobile application
- Admin dashboard
- Multi-campus support
- 
# 🎯 Hackathon Highlights

✔ Built for Agent League Hackathon
✔ Creative Apps Track
✔ AI-assisted development using GitHub Copilot
✔ Real-world campus problem
✔ Modern responsive UI
✔ Full-stack web application

---
# Member

- Raghavi S

# 📜 License

This project was developed for educational and hackathon purposes.

🙏 Acknowledgements

Special thanks to:

- GitHub Copilot
- Agent League Hackathon
- Open Source Community
- React.js Community
- MongoDB
- Express.js

---

# ⭐ Thank You

Thank you for exploring my project.

If you found this project interesting, don't forget to ⭐ the repository.
