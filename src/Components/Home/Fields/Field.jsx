import { Button_Card, Title_field, Border_Card } from "../style";
const Field = ({ dec, title, alt, link, image, color, id }) => {
  return (
    <Border_Card color={color} className="card mb-5 rtl" style={{ width: "18rem" }} key={id}>
      <img className="card-img-top" src={image} alt={alt} />
      <div className="card-body">
        <Title_field color={color} className="card-title">
          {title}
        </Title_field>
        <p className="card-text paraph">{dec}</p>
        <Button_Card to={link} className="btn" color={color}>
          الإنتقال الى المجال
        </Button_Card>
      </div>
    </Border_Card>
  );
};
export default Field