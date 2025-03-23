import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5547999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
    >
      <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;