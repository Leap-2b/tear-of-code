import { ContactInformation } from "./ContactInformation";
import { ContactSendMessage } from "./ContactSendMessage";

export function Contact () {
    return (
        <div className="w-full py-16">
            <ContactInformation />
            <ContactSendMessage />
        </div>
    )
}