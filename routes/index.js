const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const inquiryController = require('../controllers/inquiryController');
const careerController = require('../controllers/careerController');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|doc|docx/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
});

// Page routes
router.get('/', pageController.home);
router.get('/services', pageController.services);
router.get('/clients', pageController.clients);
router.get('/careers', pageController.careers);
router.get('/contact', pageController.contact);

// API routes
router.post('/api/inquiries', inquiryController.submitInquiry);
router.post('/api/applications', upload.single('resume'), careerController.submitApplication);

module.exports = router;