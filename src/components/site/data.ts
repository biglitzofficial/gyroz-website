import adFilmImg from "@/assets/svc-adfilm.jpg";
import podcastImg from "@/assets/svc-podcast.jpg";
import brandingImg from "@/assets/svc-branding.jpg";
import socialImg from "@/assets/svc-social.jpg";
import marketingImg from "@/assets/svc-marketing.jpg";
import productPhotoImg from "@/assets/svc-product-photo.jpg";
import productVideoImg from "@/assets/svc-product-video.jpg";
import aboutStudioImg from "@/assets/about-studio.jpg";
import aboutProductionImg from "@/assets/about-production.jpg";
import aboutTeamImg from "@/assets/about-team.jpg";
import studioMain1Img from "@/assets/studio-main-1.webp";
import studioMain2Img from "@/assets/studio-main-2.webp";
import studioDetail1Img from "@/assets/studio-detail-1.jpg";
import studioDetail2Img from "@/assets/studio-detail-2.jpg";
import approachListenImg from "@/assets/approach-listen.jpg";
import approachTeamImg from "@/assets/approach-team.jpg";
import approachRootedImg from "@/assets/approach-rooted.jpg";
import contactBgImg from "@/assets/contact-bg.jpg";
import heroImg from "@/assets/hero-studio.jpg";
import portReelsImg from "@/assets/port-reels.jpg";
import portModelImg from "@/assets/port-model.jpg";

export const HERO_IMAGE = heroImg;
export const CONTACT_BG_IMAGE = contactBgImg;

export const SERVICES = [
  {
    num: "01",
    title: "Ad Film Production",
    description:
      "Commercial films and brand advertisements crafted to capture attention, communicate your message, and make your brand memorable.",
    image: adFilmImg,
  },
  {
    num: "02",
    title: "Podcast Production",
    description:
      "Professional podcast recording and production with a fully equipped studio, quality audio, and expert production support.",
    image: podcastImg,
  },
  {
    num: "03",
    title: "Reels & Video Production",
    description:
      "Engaging short-form videos and creative visual content designed for today's digital audience.",
    image: portReelsImg,
  },
  {
    num: "04",
    title: "Personal Branding",
    description:
      "Build a distinctive personal identity through strategic content, professional visuals, and authentic storytelling.",
    image: brandingImg,
  },
  {
    num: "05",
    title: "Social Media Management",
    description:
      "Consistent, purposeful social media management that helps your brand stay relevant and build meaningful connections.",
    image: socialImg,
  },
  {
    num: "06",
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that strengthen your online presence, reach the right audience, and support business growth.",
    image: marketingImg,
  },
  {
    num: "07",
    title: "Model & Product Photoshoots",
    description:
      "Professional model, product, and commercial photography that presents your products and people at their best.",
    image: productPhotoImg,
  },
  {
    num: "08",
    title: "Model & Product Video Shoots",
    description:
      "High-quality promotional and commercial videos that showcase your products and bring your brand to life.",
    image: productVideoImg,
  },
] as const;

export const ABOUT_IMAGES = {
  studio: aboutStudioImg,
  production: aboutProductionImg,
  team: aboutTeamImg,
} as const;

export const STUDIO_HIGHLIGHTS = [
  "Fully equipped studio space",
  "Professional camera setup",
  "Expert cameraman support",
  "Podcast recording",
  "Video production",
  "Flexible rental packages",
] as const;

export const STUDIO_GALLERY = {
  main1: studioMain1Img,
  main2: studioMain2Img,
  detail1: studioDetail1Img,
  detail2: studioDetail2Img,
} as const;

export const STUDIO_ADDRESS_LINES = [
  "Kottai Mariamman Kovil, 270",
  "opp. Dharapuram Road, Aranmanai Pudur",
  "Tiruppur, Tamil Nadu 641604",
] as const;

export const STUDIO_ADDRESS = STUDIO_ADDRESS_LINES.join(", ");
export const STUDIO_PHONE_DISPLAY = "074182 26045";
export const STUDIO_PHONE_TEL = "+917418226045";
export const STUDIO_WHATSAPP_URL = "https://wa.me/917418226045";
export const STUDIO_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STUDIO_ADDRESS)}`;

export const APPROACH = [
  {
    num: "01",
    title: "We Get to Know Your Business",
    paragraphs: [
      "Good creative work starts with understanding. We listen to your ideas, learn about your customers, and explore what makes your business different. That understanding shapes everything we create—from a single social media post to a complete brand presence.",
    ],
    image: approachListenImg,
  },
  {
    num: "02",
    title: "A Team Behind Your Brand",
    paragraphs: [
      "We work closely with you throughout the creative process. We value honest conversations, attention to detail, and a shared commitment to getting the work right.",
      "Every project brings its own challenges and possibilities. Our role is to bring fresh ideas, practical thinking, and the care your business deserves.",
    ],
    image: approachTeamImg,
  },
  {
    num: "03",
    title: "Rooted in Tiruppur. Ready to Create.",
    paragraphs: [
      "Working with businesses across different industries gives us a close view of the ambition behind every brand. We turn that ambition into content, design, and digital experiences that help businesses move forward.",
    ],
    image: approachRootedImg,
  },
] as const;

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  video: boolean;
};

/** Placeholder gallery — real project media replaces these tiles when supplied. */
export const PORTFOLIO: PortfolioItem[] = [
  { title: "Cinematic Brand Film", category: "Advertisement Films", image: adFilmImg, video: true },
  { title: "Studio Podcast Session", category: "Podcast Productions", image: podcastImg, video: true },
  { title: "Vertical Story Reel", category: "Reels & Video Production", image: portReelsImg, video: true },
  { title: "Founder Portrait Series", category: "Personal Branding", image: brandingImg, video: false },
  { title: "Product Hero Shoot", category: "Product Photography", image: productPhotoImg, video: false },
  { title: "Editorial Model Shoot", category: "Model Photoshoots", image: portModelImg, video: false },
  { title: "Growth Campaign", category: "Digital Campaigns", image: marketingImg, video: true },
];

export const PORTFOLIO_CATEGORIES = [
  "Advertisement Films",
  "Podcast Productions",
  "Reels & Video Production",
  "Personal Branding",
  "Product Photography",
  "Model Photoshoots",
  "Digital Campaigns",
] as const;
