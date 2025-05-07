const JobApplication = require('../models/jobApplication');
const path = require('path');
const fs = require('fs');

const careerController = {
  submitApplication: async (req, res) => {
    try {
      const { name, email, phone, position, coverLetter } = req.body;
      let resumePath = null;
      
      // Validate input
      if (!name || !email || !position) {
        return res.status(400).json({ success: false, message: 'Please provide name, email, and position' });
      }
      
      // Handle file upload if present
      if (req.file) {
        resumePath = `/uploads/${req.file.filename}`;
      }
      
      const newApplication = await JobApplication.create(name, email, phone, position, resumePath, coverLetter);
      
      res.status(201).json({ 
        success: true, 
        message: 'Application submitted successfully',
        data: newApplication
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
};

module.exports = careerController;