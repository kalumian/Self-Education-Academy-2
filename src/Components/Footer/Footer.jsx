
import'./style.css'

const Footer = () =>{
    const year = new Date().getFullYear()
    return (
      <>
        <div className="footer">
          © {year} <span>KALUMIAN جميع الحقوق محفوظة لـ</span>
        </div>
      </>
    );
}

export default Footer