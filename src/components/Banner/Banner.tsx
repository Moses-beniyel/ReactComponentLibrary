import React from "react";
import "./Banner.scss";

interface BannerProps {
  content?: {
    title?: { text: string; color?: string; className?: string };
    subtitle?: { text: string; color?: string; className?: string };
    button?: { label: string; color?: string; className?: string };
  };
  styles?: {
    background?: { image: string; overlay?: boolean };
    layout?: { fullWidth?: boolean; height?: string };
    className?: string;
  };
  actions?: {
    onButtonClick?: () => void;
  };
}

const Banner: React.FC<BannerProps> = ({ 
  content = {}, 
  styles = {}, 
  actions = {} 
}) => {
  return (
    <div 
      className={`banner-container ${styles.className || ""} ${styles.layout?.fullWidth ? "full-width" : ""}`}
      style={{ height: styles.layout?.height || "auto" }}
    >
      {styles.background?.image && (
        <div 
          className="banner-image" 
          style={{ backgroundImage: `url(${styles.background.image})` }}
        >
          {styles.background.overlay && <div className="overlay"></div>}
        </div>
      )}
      <div className="banner-text">
        {content.title?.text && (
          <h1 
            className={content.title.className} 
            style={{ color: content.title.color }}
          >
            {content.title.text}
          </h1>
        )}
        {content.subtitle?.text && (
          <p 
            className={content.subtitle.className} 
            style={{ color: content.subtitle.color }}
          >
            {content.subtitle.text}
          </p>
        )}
        {content.button?.label && (
          <button 
            className={`banner-button ${content.button.className}`} 
            style={{ color: content.button.color }}
            onClick={actions.onButtonClick}
          >
            {content.button.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
