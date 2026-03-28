import { motion } from "framer-motion";
import { ArrowLeft, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-4 px-4">
        <div className="mx-auto max-w-3xl flex items-center gap-3">
          <Link to="/" className="text-primary-foreground hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="font-display text-xl font-bold text-primary-foreground">Contact Us</h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-3xl px-4 py-8"
      >
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-6">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <p className="font-display font-semibold text-foreground">Phone</p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                <a href="tel:+919227104646" className="hover:text-primary transition-colors">+91 9227104646</a>
                {" , "}
                <a href="tel:+919724870015" className="hover:text-primary transition-colors">+91 9724870015</a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <p className="font-display font-semibold text-foreground">Address</p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                3rd floor, Shalin Apartment, near Toprani lab, Mirch Masala Lane, 52, Old Padra Rd, Haribhakti Colony, Vadodara, Gujarat 390007
              </p>
              <a
                href="https://www.google.com/maps?daddr=3+rd+floor,+Shalin+Apartment,+near+Toprani+lab,+mirch+masala+lane,+52,+Old+Padra+Rd,+Haribhakti+Colony,+Vadodara,+Gujarat+390007"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
              >
                <MapPin className="h-3.5 w-3.5" /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
