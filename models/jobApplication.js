const db = require('../config/db');

const JobApplication = {
  create: async (name, email, phone, position, resumePath, coverLetter) => {
    const query = 'INSERT INTO job_applications (name, email, phone, position, resume_path, cover_letter) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [name, email, phone, position, resumePath, coverLetter];
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },
  
  getAll: async () => {
    try {
      const result = await db.query('SELECT * FROM job_applications ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = JobApplication;