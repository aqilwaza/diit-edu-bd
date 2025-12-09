import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Daffodil Institute of IT. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
          📧 admission@diit.edu.bd | 📞 +880 1713-493287 | 📍 Daffodil Plaza, 4/2 Sobhanbag (6th & 7th Floor) Mirpur Road, Dhanmondi, Dhaka-1207
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#ff6b6b' }}>
          ⚠️ This is an intentionally vulnerable application for security testing
        </p>
      </div>
    </footer>
  )
}

export default Footer
