import MessagesCard from "@/components/client/contact/MessagesCard";
import { Message } from "primereact/message";
export default function ContactPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900">
      <MessagesCard></MessagesCard>
    </div>
  );
}
