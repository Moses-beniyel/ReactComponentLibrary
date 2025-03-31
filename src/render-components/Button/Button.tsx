import './Button.scss';
import ButtonComponent from '../../components/Button/Button';

export const Button = () => {
  return (
    <div className="btn-grp">
      <div className="btn-container">
        <ButtonComponent className="btn-brown" type="button">Blue Button</ButtonComponent>
        <p className="btn-desc">A standard button.</p>
      </div>

      <div className="btn-container">
        <ButtonComponent className="btn-round btn-purple" type="button">Purple Button</ButtonComponent>
        <p className="btn-desc">A rounded button.</p>
      </div>

      <div className="btn-container">
        <ButtonComponent className="btn-green btn-invert">Green Button</ButtonComponent>
        <p className="btn-desc">A button with inverted colors.</p>
      </div>

      <div className="btn-container">
        <ButtonComponent className="btn-gradient">Gradient Button</ButtonComponent>
        <p className="btn-desc">A button with a gradient background.</p>
      </div>

      <div className="btn-container">
        <ButtonComponent className="btn-gold btn-shadow">Gold Button</ButtonComponent>
        <p className="btn-desc">A gold button with a shadow effect.</p>
      </div>

      <div className="btn-container">
        <ButtonComponent className="btn-red btn-neon">Red Button</ButtonComponent>
        <p className="btn-desc">A neon-style red button.</p>
      </div>

      <div className="btn-container">
        <ButtonComponent className="btn-border-gradient">Border Gradient</ButtonComponent>
        <p className="btn-desc">A button with a glowing gradient border.</p>
      </div>
    </div>
  );
};
