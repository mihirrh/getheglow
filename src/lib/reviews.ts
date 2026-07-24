export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

export const MOCK_REVIEWS: Review[] = [
  {
    id: "1",
    author: "Sarah M.",
    rating: 5,
    date: "2024-12-01",
    text: "Absolutely love this salon! Namm is so talented and welcoming. My lash lift and brow lamination look incredible. Will definitely be coming back every time.",
  },
  {
    id: "2",
    author: "Priya K.",
    rating: 5,
    date: "2024-11-20",
    text: "Best threading in Leicester by far. My eyebrows have never looked so perfectly shaped. The atmosphere is so calm and luxurious for such affordable prices.",
  },
  {
    id: "3",
    author: "Emma L.",
    rating: 5,
    date: "2024-11-15",
    text: "I had the Get The Glow Facial and my skin has never looked better! So relaxing and the results were visible immediately. Highly recommend to everyone.",
  },
  {
    id: "4",
    author: "Zara A.",
    rating: 5,
    date: "2024-11-05",
    text: "My builder gel nails are stunning. The nail art is exactly what I wanted — she truly listens. Clean, professional and such a lovely vibe. 10/10.",
  },
  {
    id: "5",
    author: "Jessica T.",
    rating: 5,
    date: "2024-10-28",
    text: "Had my bridal hair done here and I was absolutely blown away. The whole team made me feel so special. Wouldn't go anywhere else for hair in Leicester.",
  },
  {
    id: "6",
    author: "Aisha B.",
    rating: 5,
    date: "2024-10-15",
    text: "Hot stone massage was the most relaxing hour of my life. The salon is so elegant and peaceful. Prices are very reasonable for the quality. Highly recommend.",
  },
];

export const REVIEW_SUMMARY = {
  averageRating: 5.0,
  totalReviews: 47,
  googlePlaceId: "ChIJ_REPLACE_WITH_REAL_PLACE_ID",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ_REPLACE_WITH_REAL_PLACE_ID",
};
