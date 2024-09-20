import {
  InventoryDataType,
  QuickActionDataType,
  TeamDataType,
} from "@/types/home.type";
import checkBadgeLottie from "@/assets/lottie/check-badge.json";
import medalGoldLottie from "@/assets/lottie/medal-gold.json";

export const InventoryData: InventoryDataType[] = [
  {
    name: "Jersey Sponsorship",
    items: [
      {
        name: "India vs Australia ODI",
        keyword1: "in 2 days",
        keyword2: "10 brands",
      },
      {
        name: "India vs Australia T20",
        keyword1: "in 10 days",
        keyword2: "10 brands",
      },
    ],
    bgColor: "#d9ead5",
  },
  {
    name: "On-Ground",
    items: [
      {
        name: "IPL 2024",
        keyword1: "in 2 days",
        keyword2: "10 brands",
      },
      {
        name: "India vs Australia ODI",
        keyword1: "in 10 days",
        keyword2: "10 brands",
      },
    ],
    bgColor: "#d8dfe9",
  },
];

export const AssignedData: InventoryDataType[] = [
  {
    name: "On-Ground",
    items: [
      {
        name: "IPL 2024",
        keyword1: "in 2 days",
        keyword2: "10 brands",
      },
      {
        name: "India vs Australia ODI",
        keyword1: "in 10 days",
        keyword2: "10 brands",
      },
    ],
    bgColor: "#d8dfe9",
  },
  {
    name: "OTT",
    items: [
      {
        name: "World cup T20 2024",
        keyword1: "in 2 days",
        keyword2: "10 brands",
      },
      {
        name: "India vs Australia T20",
        keyword1: "in 10 days",
        keyword2: "10 brands",
      },
    ],
    bgColor: "#d9ead5",
  },
];

export const QuickActionsData: QuickActionDataType[] = [
  {
    id: "1",
    text: "Requests",
    imgSrc: "@/assets/images/png/quickAction/request-icon.png",
  },
  {
    id: "2",
    text: "Assign Brands",
    imgSrc: "@/assets/images/png/quickAction/assigned-icon.png",
  },
  {
    id: "3",
    text: "Events",
    imgSrc: "@/assets/images/png/quickAction/events-icon.png",
  },
  {
    id: "4",
    text: "Assigned for you",
    imgSrc: "@/assets/images/png/quickAction/assigned-icon.png",
  },
];

export const TeamData: TeamDataType[] = [
  {
    id: "1",
    name: "Anbarasan(You)(TO)",
    details: "86 Brands",
    img: "@/assets/images/png/members/member1.png",
  },
  {
    id: "2",
    name: "Anbarasan",
    details: "86 Brands",
    img: "@/assets/images/png/members/member2.png",
  },
  {
    id: "3",
    name: "Anbarasan",
    details: "86 Brands",
    img: "@/assets/images/png/members/member3.png",
  },
];

export const BrandData: TeamDataType[] = [
  {
    id: "1",
    name: "LeagueX Gaming",
    details: "Newly Added",
    img: "@/assets/images/png/brands/leaguex-logo.png",
  },
  {
    id: "2",
    name: "BMW",
    details: "5 Events",
    img: "@/assets/images/png/brands/bmw-logo.png",
  },
  {
    id: "3",
    name: "Google",
    details: "8 Events",
    img: "@/assets/images/png/brands/google-logo.png",
  },
];

export const FeedItems = [
  {
    topic: "📃Sep'24 Events List",
    description: "Hey team, here is the new events list for September...",
    isActionBtn: true,
    isBorder: true,
    lottieSrc: checkBadgeLottie,
  },
  {
    topic: "Top Performers",
    description:
      "Congratulations to Maya, our outstanding top performer this month! Your dedication is truly remarkable.",
    isBtnText: true,
    lottieSrc: medalGoldLottie,
  },
  {
    topic: "Top Performers",
    description:
      "Congratulations to Maya, our outstanding top performer this month! Your dedication is truly remarkable.",
    isBtnText: true,
    lottieSrc: medalGoldLottie,
  },
];
