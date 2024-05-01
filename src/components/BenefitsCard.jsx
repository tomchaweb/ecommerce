export default function BenefitsCard({ icon, title, subtitle }) {
  return (
    <div className="benefits-card">
      <div className="benefits-card-img-container">{icon}</div>
      <div className="benefits-card-text">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
}
