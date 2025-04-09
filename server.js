const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to MMC API' });
});

// Services Routes
const services = [
    {
        id: 1,
        name: 'Web Designing',
        price: 'Starts at Rs. 80,000',
        description: 'Professional website development services'
    },
    {
        id: 2,
        name: 'Facebook Account Management',
        description: 'Complete management of your Facebook business presence'
    },
    {
        id: 3,
        name: 'Instagram Account Management',
        description: 'Strategic Instagram content and growth management'
    },
    {
        id: 4,
        name: 'Youtube Account Management',
        description: 'YouTube channel optimization and content strategy'
    },
    {
        id: 5,
        name: 'Content Creation',
        description: 'Professional content creation for all platforms'
    },
    {
        id: 6,
        name: 'Ad Management',
        description: 'Strategic ad campaign management'
    }
];

app.get('/api/services', (req, res) => {
    res.json(services);
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Here you would typically save this to a database
    // For now, we'll just send a success response
    res.json({ 
        success: true, 
        message: 'Message received successfully' 
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 