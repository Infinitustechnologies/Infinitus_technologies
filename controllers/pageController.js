// Controller for rendering static pages
const pageController = {
  home: (req, res) => {
    res.render('index', { 
      title: 'Symfosys Technologies - Home',
      active: 'home'
    });
  },
  
  services: (req, res) => {
    res.render('services', { 
      title: 'Our Services - Symfosys Technologies',
      active: 'services'
    });
  },
  
  clients: (req, res) => {
    res.render('clients', { 
      title: 'Our Clients - Symfosys Technologies',
      active: 'clients'
    });
  },
  
  careers: (req, res) => {
    res.render('careers', { 
      title: 'Careers - Symfosys Technologies',
      active: 'careers'
    });
  },
  
  contact: (req, res) => {
    res.render('contact', { 
      title: 'Contact Us - Symfosys Technologies',
      active: 'contact'
    });
  }
};

module.exports = pageController;