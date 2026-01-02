import type { Leadership } from "@/types";
export const leadershipData: Leadership[] = [
   
  {
    id: "1",
    name: "Mushfiq Bin Musa",
    role: "President",
    department: "Robotics",
    bio: "Leading DCITC with a vision to create innovative solutions and foster a collaborative tech community.",
    image: "/leadership/president.png",
    tier: "executive",
    batch: "DC-26",
    social: {
      facebook: "https://facebook.com ",
      linkedin: "https://linkedin.com ",
      github: "https://github.com ",
      email: "mail@gmail.com",
      portfolio: "https://portfolio.com",
    },
  },
  {
    id: "2",
    name: "Tahasin Raj Khan",
    role: "Vice President",
    department: "Software Engineering",
    bio: "Passionate about building inclusive tech communities and mentoring aspiring developers.",
    image: "/leadership/vice-president.png",
    tier: "executive",
    batch: "DC-26",
    social: {
      linkedin: "https://linkedin.com/in",
      github: "https://github.com ",
      email: "mail@gmail.com",
    },
  },
  {
    id: "3",
    name: "Sakhwat Hossain Saikot",
    role: "General Secretary",
    department: "Web Development",
    bio: "Organizing events and managing operations to ensure smooth functioning of club activities.",
    image: "/leadership/gs.png",
    tier: "executive",
    batch: "DC-26",
    social: {
      facebook: "https://facebook.com ",
      email: "mail@gmail.com",
    },
  },
  {
    id: "4",
    name: "Jannato Adon Soaeb",
    role: "Chief Executive of Administration",
    department: "",
    bio: "Driving technical innovation and overseeing all technology-related initiatives.",
    image: "/leadership/CEA.png",
    tier: "chief",
    batch: "DC-26",
    social: {
      github: "https://github.com/ ",
      linkedin: "https://linkedin.com/ ",
      portfolio: "https://portfolio.com",
    },
  },
  {
    id: "5",
    name: "Arpon Saha",
    role: "Chief Executive of Content Writing & Publication",
    department: "Content Writting",
    bio: "Managing club finances and ensuring transparent budget allocation for all activities.",
    image: "/leadership/CECWP.png",
    tier: "chief",
    batch: "DC-26",
    social: {
      linkedin: "https://linkedin.com/ ",
      email: "mail@gmail.com",
    },
  },
  {
    id: "6",
    name: "MD An Nafi",
    role: "Chief Executive of Graphics & Designr",
    department: "Software Engineering",
    bio: "Creating engaging content and managing social media presence to grow our community.",
    image: "/leadership/CEGD.png",
    tier: "chief",
    batch: "DC-26",
    social: {
      facebook: "https://facebook.com/ ",
      instagram: "https://instagram.com/ ",
      linkedin: "https://linkedin.com/ ",
    },
  },
  {
    id: "7",
    name: "Rudro Biswas",
    role: "Chief Executive of Web Development & Cyber Security",
    department: "Computer Science & Engineering",
    image: "/leadership/CEWC.png",
    tier: "chief",
    batch: "DC-26",
    social: {
      email: "mail@gmial.com",
    },
  },
  {
    id: "8",
    name: "Srijon Kumar Shill",
    role: "Chief Executive of Programming & Robotics",
    department: "Software Engineering",
    image: "/leadership/CEPR.png",
    tier: "chief",
    batch: "DC-26",
    social: {
      instagram: "https://instagram.com",
      portfolio: "https://portfolio.com",
    },
  },
  {
    id: "9",
    name: "Nazmul Alom Shanto",
    role: "Joint Executive of Programming & Robotics",
    department: "Computer Science & Engineering",
    image: "/leadership/JEPR.png",
    tier: "joint",
    batch: "DC-26",
    social: {
      facebook: "https://facebook.com/ ",
    },
  },
 
  {
    id: "11",
    name: "Name",
    role: "President",
    department: "Programming",
    bio: "Former president who established the foundation for current club activities.",
    image: "/images/leaders/karim.jpg",
    tier: "executive",
    batch: "DC-25",
    social: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
    },
  },
  {
    id: "12",
    name: "Name",
    role: "Vice President",
    department: "Robotics",
    image: "/images/leaders/fariha.jpg",
    tier: "executive",
    batch: "DC-25",
    social: {
      email: "mail@.dcitc.com",
    },
  },
  
];
 
export const getUniqueBatches = (): string[] => {
  const batches = Array.from(new Set(leadershipData.map((member) => member.batch)));
  return batches.sort((a, b) => {
    const numA = parseInt(a.split("-")[1]);
    const numB = parseInt(b.split("-")[1]);
    return numB - numA;  
  });
};
 
export const getMembersByBatch = (batch: string): Leadership[] => {
  return leadershipData.filter((member) => member.batch === batch);
};