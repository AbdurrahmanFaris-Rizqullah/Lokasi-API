const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Ambil token dari header Authorization
    const token = req.header('Authorization')?.split(' ')[1]; // Ambil token setelah 'Bearer '
    
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verifikasi token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Masukkan user dari token ke req.user
        req.user = decoded.user;
        
        next(); // Lanjutkan ke middleware berikutnya atau route handler
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
