const Item_benefits = ({ title, dec, icon, color }) => {
  return (
    <div className="list-item-benefits">
      <i className={`${icon} ${color}`}></i>
      <h4 className={color}>{title}</h4>
      <p>{dec}</p>
    </div>
  );
};
export default Item_benefits;
