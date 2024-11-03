const express = require('express')

const PORT = 5173

const app = express()

app.get('/', (req, res) => res.json({ msg: 'hey from my own server' }));


app.listen(PORT, () => console.log(`Serer Strted on port ${PORT}`))


















                                    
