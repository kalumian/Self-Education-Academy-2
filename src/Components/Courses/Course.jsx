import { Button_Card_Href, Title_field } from "../Home/style";
const Field = ({ dec, title, alt, link, image, color, id }) => {
  return (
    <div key={id} className="card mb-5 text-center" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image} alt={alt} />
      <div className="card-body">
        <Title_field color={color} className="card-title">
          {title}
        </Title_field>
        <p className="card-text">{dec}</p>
        <Button_Card_Href href={link} className="btn" color={color}>
          الإنتقال الى الدورة
        </Button_Card_Href>
      </div>
    </div>
  );
};
export default Field;
