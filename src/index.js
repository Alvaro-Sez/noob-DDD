import dotenv from 'dotenv';
import express from 'express';

const app = express();

app.listen(3000, ()=>console.log("app running port 3000"))