
"use client";

import "@/styles/bottomNav.css";
import ExploreIcon from "@mui/icons-material/Explore";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "@/context/AuthContext";

export default function BottomNav() {
  const { signedIn } = useAuth();

  return (
    <nav className="bottom-nav">
      <button className="nav-item">
        <ExploreIcon />
        <span>Explore</span>
      </button>

      <button className="nav-item active">
        <LocalOfferIcon />
        <span>Offers</span>
      </button>

      <button className="nav-item">
        <BookmarksIcon />
        <span>Bookings</span>
      </button>

      <button className="nav-item">
        <FavoriteIcon />
        <span>Wishlist</span>
      </button>

      <button className="nav-item">
        <PersonIcon />
        <span>{signedIn ? "Profile" : "Sign In"}</span>
      </button>
    </nav>
  );
}
