export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(406).json({ error: `Method ${req.method}not allowed` });
    }
    const { name, email, phone, committee, message } = req.body;
    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Committee:', committee);
    console.log('Message:', message);

    return res.status(200).json({
        success: true,
        message: 'Contact form submitted successfully'
    });
}