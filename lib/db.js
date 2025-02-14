import mysql from "mysql2/promise";

// Function to create a database connection
export async function databaseConnection() {
  return await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
}

export async function executeQuery({ query, values }) {
  try {
    const connection = await databaseConnection(); // Create a new connection
    const [results] = await connection.execute(query, values); // Execute query
    await connection.end(); // Close connection
    return results;
  } catch (error) {
    return { error };
  }
}

async function setupDatabase() {
  try {
    const connection = await databaseConnection(); // Create a connection
    await connection.query(`
        CREATE TABLE IF NOT EXISTS userdata (
          userid INT AUTO_INCREMENT PRIMARY KEY,
          fullname VARCHAR(255) NOT NULL,
          username VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE
        );
      `);
    console.log("Table `userdata` is ready!");
    await connection.end(); // Close connection
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

// Call the function to create the table
setupDatabase();

// Function to create a new user
export async function CreateUser({ fullname, email, username }) {
  try {
    const result = await executeQuery({
      query:
        "INSERT INTO userdata (fullname, username, email) VALUES (?, ?, ?)",
      values: [fullname, username, email],
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function CheckIfUserExist(email) {
  try {
    const connection = await databaseConnection();
    const [results] = await connection.query(`
        SELECT * FROM userdata WHERE email="${email}";
      `);
    await connection.end();
    // Close connection
    return results;
  } catch (error) {
    return { error };
  }
}
