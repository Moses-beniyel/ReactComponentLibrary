import './Banner.scss';
import BannerComponent from '../../components/Banner/Banner';
import jesus from '../../assets/jesus.jpg';

export const Banner = () => {
  return (
    <>
      
      <BannerComponent
      
      
      content={{
        title: { text: "Don't Be Afraid Just Believe ", color: "#a70404", className: "title-class" },
        subtitle: { text: "in him was life and that was the life of men.", color: "#0c0000", className: "subtitle-class" },
        button: { label: "Contact Us", color: "#fff", className: "button-primary" }
      }}
      styles={{
        background: { image: jesus, overlay: true },
        layout: { fullWidth: true, height: "500px" },
        className: "custom-banner"
      }}
      actions={{
        onButtonClick: () => alert("Button Clicked!")
      }}
    />
  
  
  </>
  )
};