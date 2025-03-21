import './Banner.scss';
import BannerComponent from '../../components/Banner/Banner';
import mathew from '../../assets/mathew.jpg';

export const Banner = () => {
  return (
    <>
      
      <BannerComponent
      
      
      title="Welcome"
      subtitle="Hey! I'm [MATHEW.A],a frontend developer who loves building websites and making them look great. I work with React, Angular, and JavaScript to create smooth and interactive user experiences.
I’ve worked on projects like e-commerce sites, dashboards, and student management systems, handling everything from UI design to functionality."
      backgroundImage={mathew}
      buttonLabel="Contact Us"
      onButtonClick={() => alert("Button Clicked!")}
    />
    

    </>
  )
};