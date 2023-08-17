import React from 'react';
import '../styles.css'; 

function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, please feel free to reach out to us:</p>
      <ul className="contact-list">
        <li>Email: da20190243@student.fon.bg.ac.rs</li>
        <li>Phone: 0649245237</li>
      </ul>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.3315628771134!2d20.4118919767344!3d44.77404537922107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6e2ccfbbfeab%3A0x149d432a88bbf72!2sRoda%20Cineplex!5e0!3m2!1sen!2srs!4v1692276207230!5m2!1sen!2srs" width="600" height="450"  referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default Contact;