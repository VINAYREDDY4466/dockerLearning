import express from 'express';


const app =express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("hello from the server one")
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    return res.json({ message: `Login success from PORT` });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

app.listen(3000, ()=>{
    console.log("server is running on the port 3000")
})