const HEADER = "Michael Dunga";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#about-us", label: "About Me" },
  { id: 4, url: "#testimonials", label: "Testimonials" },
  { id: 5, url: "#footer", label: "Contacts" }
];
const BANNER_DATA = {
  HEADING: "Hi, I'm Michael",
  DECRIPTION:
    "I'm a front-end engineer from Kerugoya, Kenya. I design, create and support websites and applications for clients and for fun. I love using modern technology to create exceptional user experiences, and always strive to create high quality products.",
  TUTORIAL_URL:
    "https://www.youtube.com/channel/UC7sqqNBDhIKDs3-d_e7GpCg",
  WATCH_TUTORIAL: "Watch Tutorials"
};
const SERVICE_DATA = {
  HEADING: "What I Do",
  ALL_SERVICES: "All Services",
  SERVICE_LIST: [
    {
      LABEL: "Search Engine Optimisation",
      DESCRIPTION:
        "To customise the content, technical functionality and scope of your website so that your pages show for a specific set of keyword at the top of a search engine list. In the end, the goal is to attract traffic to your website when they are searching for goods, services or business-related information.",
      URL: "images/service1.png"
    },
    {
      LABEL: "Content Marketing Strategy",
      DESCRIPTION:
        "It is tough but well worth the effort to create clever material that is not promotional in nature, but rather educates and inspires. It lets them see you as a reliable source of information by delivering content that is meaningful to your audience.",
      URL: "images/service2.png"
    },
    {
      LABEL: "Develop Social Media Strategy",
      DESCRIPTION:
        "Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",
      URL: "images/service3.png"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "What to expect",
  TITLE: "Efective online presence through...",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
    "Cost-Effective Digital Marketing than Others.",
    "High customer statisfaction and experience.",
    "Marketing efficiency and quick time to value.",
    "Clear & transparent fee structure.",
    "Marketing automation which is an integral platform that ties all of your digital marketing together.",
    "A strong desire to establish long lasting business partnerships.",
    "Digital marketing to mobile consumer.",
    "Reasonable prices"
  ]
};
const TESTIMONIAL_DATA = {
  HEADING: "What clients say?",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "Michael has made a huge difference to our business with his good work and knowledge of SEO and business to business marketing techniques. Our search engine rankings are better than ever and we are getting more people contacting us thanks to Michael’s knowledge and hard work.",
      IMAGE_URL: "images/sirawa.jpg",
      NAME: "Jared Sirawa",
      DESIGNATION: "Co-founder at Harpcon Security Services"
    },
    {
      DESCRIPTION:
        "Michael has provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. He is a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.",
      IMAGE_URL: "images/chege.jpg",
      NAME: "Steven Chege",
      DESIGNATION: "Co-founder at Kagumo Stores and Substation"
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Find me on social media",
  IMAGES_LIST: [
    {
    IMAGE:"images/linkedin-icon.png",
    LINK: "https://www.linkedin.com/in/odhiambo-web-dev-46838b103/",
    },
    {
    IMAGE:"images/twitter-icon.png",
    LINK: "https://twitter.com/dunga_michael",
    },
    {
    IMAGE:"images/facebook-icon.png",
    LINK: "https://web.facebook.com/profile.php?id=100009332626513",
    },
    {
    IMAGE:"images/instagram-icon.png",
    LINK: "https://www.instagram.com/odhiambo_dunga/",
    },
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "I'm typically focused on result-based maketing in the digital world. Also, I evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",
  CONTACT_DETAILS: {
    HEADING: "Contact Me",
    ADDRESS: "Kerugoya, Professional Plaza. P O Box 1079-10300, KERUGOYA",
    MOBILE: "+254717953381, +254756470039",
    EMAIL: "michaeldunga1@gmail.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;
