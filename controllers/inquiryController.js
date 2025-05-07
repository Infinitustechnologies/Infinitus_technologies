const Inquiry = require('../models/inquiry');

const inquiryController = {
  submitInquiry: async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
      }
      
      const newInquiry = await Inquiry.create(name, email, phone, message);
      
      res.status(201).json({ 
        success: true, 
        message: 'Inquiry submitted successfully',
        data: newInquiry
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
};

module.exports = inquiryController;