import image1 from "@/public/assets/images/Frame 57.svg";
import image2 from "@/public/assets/images/Feature Icon with circle.svg";
import image3 from "@/public/assets/images/Feature Icon with circle (1).svg";
import image4 from "@/public/assets/images/Feature Icon with circle (2).svg";
import image5 from "@/public/assets/images/Feature Icon with circle (4).svg";
import image6 from "@/public/assets/images/facebook.svg";
import image7 from "@/public/assets/images/Twitter.svg";
import image8 from "@/public/assets/images/LinkedIn.svg";
import image9 from "@/public/assets/images/Instagram.svg";
import image10 from "@/public/assets/images/email-icon.svg";
import image11 from "@/public/assets/images/Mobile.svg";
import { IoMdMail } from "react-icons/io";
import { FaSms, FaWpforms } from "react-icons/fa";

export const NAV_LINKS = [
  {
    href: "",
    key: "features",
    label: "Features",
    dropDown: [
      {
        href: "/features/email-marketing",
        key: "email-marketing",
        label: "Email Marketing",
      },
      {
        href: "/features/sms-marketing",
        key: "sms-marketing",
        label: "SmS Marketing",
      },
      {
        href: "/forms",
        key: "forms",
        label: "Form Builder",
      },
    ],
  },
  { href: "/about", key: "about", label: "About" },
  { href: "/resources", key: "resources", label: "Resources" },
  { href: "/blog", key: "blog", label: "Blog" },
  { href: "/contact-us", key: "contact_us", label: "Contact Us" },
];

export const campaignDetailsList = [
  {
    id: 1,
    photo: image1,
    alt: "Feature Icon",
    heading: "Plug-n-plPlug-n-play configuration",
    content:
      "Secure your organization without changing all the settings. The text will be populated with the right information later on.",
  },
  {
    id: 2,
    photo: image1,
    alt: "Feature Icon",
    heading: "Easy Integration",
    content:
      "Smooth Integrated with Microsoft Office 365.The text will be populated with the right information later on.",
  },
];

export const campaignFeaturesDetails = [
  {
    id: 1,
    photo: image2,
    alt: "Feature Icon with circle",
    heading: "Web Security",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: 2,
    photo: image3,
    alt: "Feature Icon with circle",
    heading: "Email Security",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: 3,
    photo: image4,
    alt: "Feature Icon with circle",
    heading: "Endpoint Security",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat",
  },
  {
    id: 4,
    photo: image5,
    alt: "Feature Icon with circle",
    heading: "Firewall & ADR",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: <IoMdMail size={50} />,
    title: "Email",
    contents:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio natus officiis nesciunt eum repellendus commodi aliquam aperiam odit, iure illo ab esse molestias recusandae beatae ipsam, laudantium cum at.",
    href: "#",
    linkText: "Learn more",
  },
  {
    id: 2,
    icon: <FaSms size={50} />,
    title: "SMS",
    contents:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio natus officiis nesciunt eum repellendus commodi aliquam aperiam odit, iure illo ab esse molestias recusandae beatae ipsam, laudantium cum at.",
    href: "/sms",
    linkText: "Learn more",
  },
  {
    id: 3,
    icon: <FaWpforms size={50} />,
    title: "Form",
    contents:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio natus officiis nesciunt eum repellendus commodi aliquam aperiam odit, iure illo ab esse molestias recusandae beatae ipsam, laudantium cum at.",
    href: "#",
    linkText: "Learn more",
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    href: "#",
    photo: image6,
    alt: "facebook-icon",
  },
  {
    id: 2,
    href: "#",
    photo: image7,
    alt: "twitter-icon",
  },
  {
    id: 3,
    href: "#",
    photo: image8,
    alt: "linkedin-icon",
  },
  {
    id: 4,
    href: "#",
    photo: image9,
    alt: "instagram-icon",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Resources",
    links: [
      { id: 1, link: "Blog", href: "#" },
      { id: 2, link: "Marketing Guides", href: "#" },
      { id: 1, link: "Get a demo", href: "#" },
      { id: 2, link: "Contact us", href: "#" },
    ],
  },
  {
    id: 2,
    title: "Products",
    links: [
      { id: 1, link: "Newsletter", href: "#" },
      { id: 2, link: "Email Marketing", href: "/features/email-marketing" },
      { id: 3, link: "SMS Marketing", href: "/sms/email-marketing" },
      { id: 4, link: "Email", href: "#" },
      { id: 5, link: "Form", href: "#" },
    ],
  },
];

export const contacts = [
  {
    id: 1,
    photo: image10,
    alt: "Email-icon",
    title: "Support:",
    details: "hello@landify.co",
  },
  {
    id: 2,
    photo: image11,
    alt: "Mobile-icon",
    title: "Phone:",
    details: "+91 98765 43210",
  },
];

// Hero section of email marketing page
export const stats = [
  {
    id: 1,
    title: "3 billion+",
    details: "Calling numbers connected",
  },
  {
    id: 2,
    title: "100 billion+",
    details: "Text messages sent",
  },
  {
    id: 3,
    title: "121 million+",
    details: "phone numbers given out",
  },
];

// Product section of email page
export const products = [
  {
    id: 1,
    position: "relative",
    variations: [
      {
        bg: "#ffe6e6",
        top: "0",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atquecupiditate delectus est distinctio veritatis.",
      },
      {
        bg: "#e6f0ff",
        top: "2.5rem",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atquecupiditate est distinctio veritatis.",
      },
      {
        bg: "#e1f6f4",
        top: "5rem",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus est distinctio veritatis.",
      },
    ],
  },
  {
    id: 2,
    variations: [
      {
        bg: "#ffe6ff",
        top: "0",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+ ",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. delectus est distinctio veritatis.",
      },
      {
        bg: "#e6ffee",
        top: "2.5rem",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+",
        details: "Calling numbers connected",
      },
      {
        bg: "#f0f0f5",
        top: "5rem",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+",
        details: "Calling numbers connected",
      },
    ],
  },
];

// Community section of Hero page
export const items = [
  {
    id: 1,
    image: "/assets/icons/support.svg",
    title: "Community Support",
    description:
      "Community Support is also available for all open source users.",
  },
  {
    id: 2,
    image: "/assets/icons/github.icon.svg",
    title: "MailBlink on GitHub",
    description: "Track the MailBlink development changes on GitHub.",
  },
];

// Regex for email validation
export const emailRegex = {
  pattern:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

// Regex for password validation
export const passwordRegex = {
  pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
};

// input details for change-password page
export const changePasswordInput = [
  {
    id: "email",
    label: "Email",
    placeholder: "enter email",
    type: "text",
  },
  {
    id: "newPassword",
    label: "New password",
    placeholder: "enter new password",
    type: "password",
  },
  {
    id: "confirmPassword",
    label: "Confirm password",
    placeholder: "re-enter password",
    type: "password",
  },
];

// testimonial section
export const testimonials = [
  {
    id: 1,
    variations: [
      {
        feedback:
          "I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow1",
      },
      {
        feedback: "Landify saved our time in designing my company page.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow1",
      },
      {
        feedback:
          "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow1",
      },
    ],
  },
  {
    id: 2,
    variations: [
      {
        feedback:
          "I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow2",
      },
      {
        feedback: "Landify saved our time in designing my company page.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow2",
      },
      {
        feedback:
          "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow2",
      },
    ],
  },
  {
    id: 3,
    variations: [
      {
        feedback:
          "I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow3",
      },
      {
        feedback: "Landify saved our time in designing my company page.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow3",
      },
      {
        feedback:
          "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow3",
      },
    ],
  },
  {
    id: 4,
    variations: [
      {
        feedback:
          "I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow4",
      },
      {
        feedback: "Landify saved our time in designing my company page.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow4",
      },
      {
        feedback:
          "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow4",
      },
    ],
  },
  {
    id: 5,
    variations: [
      {
        feedback:
          "I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow5",
      },
      {
        feedback: "Landify saved our time in designing my company page.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow5",
      },
      {
        feedback:
          "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow5",
      },
    ],
  },
];

// constants for notification page
export const webNotifications = [
  {
    id: "new-subscriber",
    label: "New subscriber",
  },
  {
    id: "post-like",
    label: "Post like",
  },
  {
    id: "you-followed",
    label: "Someone you followed posted",
  },
  {
    id: "campaign-sent",
    label: "Campaigns sent out",
  },
  {
    id: "campaign-delivered",
    label: " Campaign delivery",
  },
];

export const mailNotifications = [
  {
    title: "Weekly newsletter",
    label: "A small text about what the newsletters might contain",
  },
  {
    title: "Account summary",
    label: "A small text about what the newsletters might contain",
  },
];

// accounts page
export const passwordInputs = [
  {
    id: "newPassword",
    label: "New password",
  },
  {
    id: "confirmPassword",
    label: "Confirm password",
  },
];
