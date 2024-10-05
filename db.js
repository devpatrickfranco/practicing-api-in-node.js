import 'dotenv/config'
import { createServer } from 'http';
import { neon } from '@neondatabase/serverless';



const sql = neon(process.env.DATABASE_URL);

const requestHandler = async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
};

export default sql