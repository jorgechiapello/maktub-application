export interface AppFeature {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const appFeatures: AppFeature[] = [
  {
    title: "Profile Browsing",
    description: "Easily browse profiles of other Maktub members. Filter by interests, age, and location to find your perfect match. Start connecting before you even arrive at the bar.",
    imageUrl: "/wp-content/uploads/sites/128/2025/03/tenweb_media_srj6v4ctm.webp",
    imageAlt: "A screenshot of the Maktub app's profile browsing feature, showing potential matches in Barcelona."
  },
  {
    title: "Smart Matchmaking",
    description: "Our intelligent algorithm suggests compatible matches based on your preferences and interests. Increase your chances of finding someone special with our advanced matchmaking technology.",
    imageUrl: "/wp-content/uploads/sites/128/2025/03/tenweb_media_STGCGMSGW.webp",
    imageAlt: "An image showcasing the Maktub app's matchmaking algorithm, highlighting compatibility scores."
  },
  {
    title: "Themed Room Check-in",
    description: "Check into themed rooms via the app to let others know where you are. See who else is in the room and start conversations. Enhance your in-person experience with digital interaction.",
    imageUrl: "/wp-content/uploads/sites/128/2025/03/tenweb_media_SPZZWEN9R.webp",
    imageAlt: "A visual representation of the Maktub app's integration with the bar's themed rooms, showing users checking in."
  }
];
