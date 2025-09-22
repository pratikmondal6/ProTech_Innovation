// pages/contact.js

import Footer from '../components/layout/Footer';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center">
  <h1 className="text-4xl font-bold text-gray-900 text-center">Contact Us</h1>
        <p className="text-gray-600 mt-4">Reach out for any inquiries.</p>
      </main>
      <Footer />
    </div>
  );
}
