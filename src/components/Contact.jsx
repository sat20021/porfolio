import { useState } from 'react';
import Skills from './Skills';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="down-box" id="contact">
      <div className="contactSkills">
        <div className="contact-info">
          <div className="main-text">
            <h2 className="heading">Contact Me</h2>
            <span>Let's build something amazing together</span>
          </div>
          
          {/* Contact Information */}
          <div className="contact-details">
            <div className="contact-item">
              <h4>📍 Location</h4>
              <p>Gaya, Bihar, India</p>
            </div>
            <div className="contact-item">
              <h4>📱 Phone</h4>
              <p>+91-6202606830</p>
            </div>
            <div className="contact-item">
              <h4>📧 Email</h4>
              <p>satyamraj24988@gmail.com</p>
            </div>
            <div className="contact-item">
              <h4>💼 Current Role</h4>
              <p>AI Engineer at Mobiloitte</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input 
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea 
              name="message"
              cols="30" 
              rows="10"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="formBtn">
              <button type="submit" className="btn">Send Message</button>
            </div>
          </form>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default Contact;