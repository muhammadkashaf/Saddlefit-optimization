import React from "react";
import InstaIcon from "assets/icons/insta-icon.svg?react";
import YoutubeIcon from "assets/icons/youtube-Icon.svg?react";
import FbIcon from "assets/icons/fb-icon.svg?react";
import Tiktok from "assets/icons/tiktok-icon.svg?react";

const SocialIcons = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/saddlefit.io/",
      icon: <InstaIcon />,
      name: "Instagram",
    },
    {
      href: "https://www.youtube.com/channel/UCUj-9ml6dOitzXY-H515cmQ",
      icon: <YoutubeIcon />,
      name: "YouTube",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61555381395666",
      icon: <FbIcon />,
      name: "Facebook",
    },
    {
      href: "https://www.tiktok.com/@saddlefit.io",
      icon: <Tiktok />,
      name: "TikTok",
    },
  ];

  return (
    <div className="footer_social_icons">
      {socialLinks.map(({ href, icon, name }) => (
        <a
          key={name}
          target="_blank"
          href={href}
          rel="noopener noreferrer"
          aria-label={name}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
