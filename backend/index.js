const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());

const port = 5000;

// Преобразуем данные в JSON формат
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Подключение к базе данных MongoDB
mongoose
  .connect(
    "mongodb+srv://eren_jaeger:ZnarutoZ@archvis.h7tr5.mongodb.net/my-site?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("Error connecting to DB:", err));

// Определение схемы и модели
const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Уникальность имени пользователя
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", LoginSchema);

// Функция для генерации JWT токена
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, "your_jwt_secret", { expiresIn: "1h" }); // Укажите свой секретный ключ
};

// Маршрут для входа
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("User name not found");
    }

    // Сравнение пароля
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordMatch) {
      const token = generateToken(user._id); // Генерация токена
      res.status(200).json({ message: "Login successful", token }); // Возвращаем токен
    } else {
      res.status(401).send("Incorrect password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal server error");
  }
});

// Маршрут для регистрации
app.post("/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res
        .status(400)
        .send("User already exists. Please choose a different name.");
    }

    // Хешируем пароль
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Создаем нового пользователя и сохраняем его в базе данных
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("Internal server error");
  }
});

// Защищенный маршрут, который требует авторизации
app.get("/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Извлекаем токен из заголовка
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  jwt.verify(token, "your_jwt_secret", (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token.");
    }
    res.status(200).send(`Protected data. User ID: ${decoded.id}`);
  });
});

// Маршруты для страниц входа и регистрации
app.get("/login", (req, res) => {
  res.send("Login Page");
});

app.get("/signup", (req, res) => {
  res.send("Signup Page");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
