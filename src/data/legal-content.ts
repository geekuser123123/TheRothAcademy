import { siteConfig } from "@/data/site-config";

const { name, url, email, phone, addressLine1, addressCity, addressState, addressZip, stateFull } = siteConfig;
const fullAddress = `${addressLine1}, ${addressCity}, ${addressState} ${addressZip}`;

export const legalEffectiveDate = "September 28, 2026";

type LegalArticle = {
  groupLabel?: string;
  heading: string;
  body: string[];
};

export const termsHero = {
  eyebrow: name,
  title: ["The Role.", "The Responsibilities."],
  goldLine: 1,
  description: `Important information about SMS messaging, education, coordination, and separately engaged professional work. Effective ${legalEffectiveDate}.`,
};

export const termsSections: LegalArticle[] = [
  {
    groupLabel: "SMS Messaging Terms & Compliance",
    heading: "Program description",
    body: [
      `This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with ${name} through our website at ${url}, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.`,
    ],
  },
  {
    heading: "Cancellation instructions",
    body: [
      `You can cancel the SMS service at any time. Simply text "STOP" to the same number that sent you messages. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.`,
    ],
  },
  {
    heading: "Support information",
    body: [
      `If you experience issues with the messaging program, reply with the keyword "HELP" for more assistance, or reach out directly to ${email} or call ${phone} during business hours.`,
    ],
  },
  {
    heading: "Carrier liability",
    body: ["Carriers are not liable for delayed or undelivered messages."],
  },
  {
    heading: "Message & data rates",
    body: [
      "Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.",
    ],
  },
  {
    heading: "Supported carriers",
    body: [
      "Our SMS program works with all major U.S. wireless carriers, including AT&T, T-Mobile, Verizon, Sprint, and most regional carriers.",
    ],
  },
  {
    heading: "Age restriction",
    body: ["You must be 18 years or older to participate in our SMS program."],
  },
  {
    heading: "SMS privacy",
    body: [
      `For privacy-related inquiries, please refer to our Privacy Policy at ${url}/privacy.`,
      "We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.",
    ],
  },
  {
    groupLabel: "General Terms",
    heading: "Acceptance of terms",
    body: [
      `This website (the "Site") is owned and operated by ${name} ("Company," "we," or "us"). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from ${name}.`,
      "Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service. We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.",
    ],
  },
  {
    heading: "Intellectual property rights",
    body: [
      `Our limited license to you: This Site and all the materials available on the Site are the property of ${name} and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use. You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us. Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.`,
      "Your license to us: By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.",
    ],
  },
  {
    heading: "Disclaimers",
    body: [
      "Throughout the Site, we may provide links and pointers to internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.",
      `The information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.`,
      `You agree at all times to indemnify and hold harmless ${name}, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.`,
    ],
  },
  {
    heading: "Online commerce",
    body: [
      "Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.",
      `Your participation in any dealings with third-party vendors is solely between you and the third party. ${name} shall not be responsible for any loss or damage incurred as a result of such dealings.`,
    ],
  },
  {
    heading: "Registration & passwords",
    body: [
      "To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.",
      `If you suspect unauthorized use of your account, notify us immediately at ${email}. We are not liable for any loss or damage arising from your failure to comply with this obligation.`,
    ],
  },
  {
    heading: "Termination",
    body: [
      "We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      `These Terms of Service shall be governed by and construed in accordance with the laws of the State of ${stateFull}. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.`,
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.",
    ],
  },
];

export const privacyHero = {
  eyebrow: name,
  title: ["Your Information.", "Clear Expectations."],
  goldLine: 1,
  description: `How ${name} collects, uses, and protects your information across our website, scheduling forms, and SMS program. Effective ${legalEffectiveDate}.`,
};

export const privacySections: LegalArticle[] = [
  {
    heading: "Information we collect",
    body: [
      "When you submit a contact form, book a session, or opt in to SMS or email updates, we collect the information you provide — typically your name, email address, phone number, and any details about what you'd like to discuss. If you make a payment for a service, our payment processor collects the billing information required to complete that transaction.",
      "We also automatically receive basic technical information, such as the page you submitted a form from, so we can route your inquiry to the right team.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use the information you provide to respond to your inquiry, schedule and confirm appointments, deliver the services or content you requested, and send related updates. We do not use your information for any purpose unrelated to serving your request without your consent.",
    ],
  },
  {
    heading: "SMS / text messaging",
    body: [
      "If you opt in to SMS notifications, we use your phone number solely to send appointment confirmations, reminders, rescheduling updates, and related customer support messages. Consent to receive SMS messages is never shared with or sold to third parties for marketing purposes.",
      `Text "STOP" at any time to opt out, or "HELP" for support. Message and data rates may apply. See our Terms of Service at ${url}/terms for the full SMS program terms.`,
    ],
  },
  {
    heading: "Sharing with service providers",
    body: [
      "We share information with trusted third-party service providers only as needed to operate our business — for example, our scheduling and payment processor to complete a booking, and our customer relationship platform to track and follow up on your inquiry. These providers are contractually limited to using your information to provide their service to us.",
      "We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.",
    ],
  },
  {
    heading: "Cookies & analytics",
    body: [
      "Our website may use basic cookies or similar technologies to keep the site functioning properly and to understand overall traffic patterns. You can control cookies through your browser settings; disabling them may limit some site functionality.",
    ],
  },
  {
    heading: "Data security",
    body: [
      "We take reasonable administrative and technical measures to protect the information you share with us. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We retain your information for as long as needed to respond to your inquiry, fulfill the service you requested, and comply with our legal and recordkeeping obligations.",
    ],
  },
  {
    heading: "Your rights & choices",
    body: [
      `You may request access to, correction of, or deletion of the personal information we hold about you, or ask us to stop contacting you, at any time by emailing ${email} or calling ${phone}. We will respond within a reasonable timeframe.`,
    ],
  },
  {
    heading: "Children's privacy",
    body: [
      "Our services, including our SMS program, are intended for individuals 18 years of age or older. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "External links",
    body: [
      "Our website may link to third-party sites. We are not responsible for the privacy practices or content of external sites, and we encourage you to review their privacy policies separately.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The latest version will always be available on our website with the effective date above.",
    ],
  },
];

export const legalContactBlock = {
  name,
  phone,
  email,
  url,
  address: fullAddress,
};
