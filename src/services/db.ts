import sql from 'mssql';

export const config: sql.config = {
  server: 'DESKTOP-HL8DA13\\SQLEXPRESS',
  database: 'LoginCRUDDB',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (err) {
    console.error('Database connection error:', err);
  }
};
