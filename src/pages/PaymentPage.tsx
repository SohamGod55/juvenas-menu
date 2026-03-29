import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import qrCode from "@/assets/payment-qr.png";

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b-2 border-primary py-4 px-4">
        <div className="mx-auto max-w-3xl flex items-center gap-3">
          <Link to="/" className="text-primary hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="font-display text-xl font-bold text-primary">Payment</h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-3xl px-4 py-8"
      >
        <div className="rounded-xl border-2 border-primary bg-background p-6 shadow-sm space-y-6">
          <div>
            <h2 className="font-display text-lg font-semibold text-primary mb-3">Payment Instructions</h2>
            <ul className="list-disc pl-5 space-y-2 font-body text-sm text-muted-foreground">
              <li>Kindly share the screenshot after payment</li>
              <li>Do not pay before getting confirmation</li>
            </ul>
          </div>

          <div className="border-t-2 border-primary/30 pt-6">
            <h3 className="font-display text-base font-semibold text-foreground mb-2">Bank Details:</h3>
            <p className="font-body text-sm text-muted-foreground mb-4">
              You can scan this QR code from any Payment App:
            </p>
            <div className="flex flex-col items-center">
              <img
                src={qrCode}
                alt="Juvenas Desserts UPI QR Code"
                className="w-64 h-auto"
              />
              <div className="mt-4 text-center font-body text-sm text-foreground space-y-1">
                <p><strong>Ac Name:</strong> Juvenas Desserts</p>
                <p><strong>Ac No:</strong> 000305500954</p>
                <p><strong>Type of Account:</strong> Current</p>
                <p><strong>ICICI Bank</strong></p>
                <p><strong>IFSC:</strong> ICIC0000003</p>
                <p><strong>UPI Id:</strong> juvenadesserts@icici</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentPage;
