const db = require('../config/db');

const Inquiry = {
  create: async (name, email, phone, message) => {
    const query = 'INSERT INTO inquiries (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [name, email, phone, message];
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
  
  getAll: async () => {
    try {
      const result = await db.query('SELECT * FROM inquiries ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Inquiry;