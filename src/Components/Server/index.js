import { connection } from "./connect_db.js";
import express from "express";
import cors from "cors";
import session from "express-session";

const app = express();
const con = connection();

app.use(cors({
    origin: "http://localhost:5173", // your React frontend
    credentials: true                 // allow cookies
}));
app.use(express.json());
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000, sameSite: "lax", secure: false,httpOnly: true } // 1 day
}));

app.get("/", (req, res) => {
    res.json({user: req.session.user});
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.send('Error destroying session');
        } else {
            res.send('Session destroyed');
        }
    });
});

app.post("/users/signup", (req, res) => {
    const { fname, lname, username, phone, email, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password required" });
    }
    const sql = "INSERT INTO users (first_name, last_name, username, phone_number, email, password) VALUES (?, ?, ?, ?, ?, ?)";
    con.query(sql, [fname, lname, username, phone, email, password], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User added successfully", id: result.insertId });
    });
});

app.post("/users/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password required" });

    const sql = "SELECT username FROM users WHERE email = ? AND password = ?";
    con.query(sql, [email, password], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0){
            return res.status(401).json({ error: "Invalid email or password" });
        }
        req.session.user = results[0].username;
        res.json({ message: "Login successful", user: req.session.user });
    });
});

app.post("/admin/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password required" });

    const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
    con.query(sql, [email, password], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0){
            return res.status(401).json({ error: "Invalid email or password" });
        }
        req.session.username = results[0].username;
        res.json({ message: "Login successful", user: req.session.username });
    });
});

app.get("/products", (req, res) => {
    const sql = "SELECT * FROM products";
    con.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json( results);
    });
});

app.post("/update", (req, res) => {
    const { status ,id } = req.body;

    const sql = "UPDATE cart SET status = ? WHERE id = ?";
    con.query(sql, [status, id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json( {message: "Status Updated Successfully"});
    });
});

app.get("/carts", (req, res) => {
    const sql = "SELECT * FROM cart";
    con.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json( results);
    });
});

app.get("/products/category/:id",(req,res) => {
    const category = req.params.id;
    const sql = "SELECT * FROM products WHERE category = ?";
    con.query(sql, [category], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0){
            return res.status(401).json({ error: "No Products Found" });
        }
        console.log(category)
        res.json(results);
    });
})

app.post("/cart/add", (req, res) => {
    const { user, cart, cartCounts } = req.body;
    console.log(cart);
    if (!user || !cart || !cartCounts) {
        return res.status(400).json({ error: "User, cart, and cartCounts are required" });
    }
    const sql = "INSERT INTO cart (username, product_id, quantity, status, Address, payment_method, sender_number,transaction_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    cart.forEach((item, index) => {
        if(cartCounts[index]===0) return;
        con.query(sql, [user, item.id, cartCounts[index], "in cart", req.body.address, req.body.paymentMethod, req.body.senderNumber, req.body.transactionId], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
        });
    });
    res.json({ message: "User added successfully"});
});

app.listen(5000, () => {
    console.log('REST API server running on port 5000');
});
