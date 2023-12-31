import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

import './layout.css';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="fade-in">
      <Header />
        {children}
        <WhatsAppButton />
      <Footer />
    </div>
  );
}