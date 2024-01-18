# CsScholarship เว็บแอปพลิเคชันสำหรับจัดการทุนการศึกษา สาขา วิทยาการคอมพิวเตอร์

เป็นแอปพลิเคชันที่พัฒนาด้วย React-Javascript

## โครงสร้างโฟลเดอร์

```bash
├── starter-express-api
│   ├── .github
│   ├── controller
│   │   ├── authen
│   │   ├── classYearType
│   │   ├── information
│   │   ├── login
│   │   ├── register
│   │   ├── scholarship
│   │   ├── scholarshipType
│   │   ├── sendEmail
│   │   ├── subscribe
│   │   └── user_profile
│   ├── database
│   │     └──create_db.sql
│   ├── enums
│   ├── utils
│   │   ├── check_grade
│   │   ├── check_phonenumber
│   │   └── check_uuid
│   └── pool_connections.js
├── .env.example
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## ขั้นตอนในการติดตั้ง

1. ติดตั้ง node version 18.16.1 ที่นี่ https://nodejs.org/en/blog/release/v18.16.1

2. ติดตั้ง git ผ่าน Command Prompt หรือ Powershell

```
winget install --id Git.Git -e --source winget
```

3. ใช้คำสั่ง git clone เพื่อทำการคัดลอกโปรเจกต์

```
git clone https://github.com/Weraphat-CSTU/starter-express-api.git
```

4. ติดตั้ง node module ผ่านคำสั่ง

```
npm install
```
