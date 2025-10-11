import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}

// phone formatting function for Indian numbers - ai generated 🎉
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  // Remove all non-digit characters
  const phoneNumber = value.replace(/[^\d]/g, "");

  // If the number starts with country code (91), remove it for formatting
  let formattedNumber = phoneNumber.startsWith("91")
    ? phoneNumber.slice(2)
    : phoneNumber;

  // Limit to 10 digits max
  formattedNumber = formattedNumber.slice(0, 10);

  const length = formattedNumber.length;

  if (length < 6) {
    // Example: 98765 → 98765
    return formattedNumber;
  } else if (length < 10) {
    // Example: 98765432 → (98765) 432
    return `(${formattedNumber.slice(0, 5)}) ${formattedNumber.slice(5)}`;
  } else {
    // Example: 9876543210 → +91 (98765) 43210
    return `+91 (${formattedNumber.slice(0, 5)}) ${formattedNumber.slice(5)}`;
  }
};


//  ai generated 🎉
export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};

export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];
};

export const APPOINTMENT_TYPES = [
  { id: "checkup", name: "Regular Checkup", duration: "60 min", price: "$120" },
  { id: "cleaning", name: "Teeth Cleaning", duration: "45 min", price: "$90" },
  { id: "consultation", name: "Consultation", duration: "30 min", price: "$75" },
  { id: "emergency", name: "Emergency Visit", duration: "30 min", price: "$150" },
];