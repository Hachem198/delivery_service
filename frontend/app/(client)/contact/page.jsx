import MessagesCard from "@/components/client/contact/MessagesCard";
import { Message } from "primereact/message";
export default function ContactPage() {
  return (
    <div className="bg-[url('/images/vanPhoto.jpg')] bg-cover bg-center h-screen ">
      <div className=" pt-36 ">
        <MessagesCard></MessagesCard>
      </div>
    </div>
  );
}
