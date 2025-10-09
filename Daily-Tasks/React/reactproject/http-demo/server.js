// server.js
import express from "express";
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(express.json());

// Serve a basic HTML form
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <h1>HTTP Demo</h1>
        <form action="/submit" method="POST">
          <input name="username" placeholder="Enter username" required>
          <button type="submit">Send</button>
        </form>
      </body>
    </html>
  `);
});

// Handle the POST request
app.post("/submit", (req, res) => {
  console.log("🔹 Received form data:", req.body);
  res.status(404).send(`<p>Received username: <b>${req.body.username}</b></p>`);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
