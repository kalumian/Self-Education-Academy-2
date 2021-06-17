import logo from "../../../Images/LogoWC.png"
const Landing = () => {
  return (
    <div className="landing">
      <div className="overlay">
        <div className="text">
          <div className="content">
            <h2>
              <img src={logo} alt="" className="logo-in-hero" />
              <br />
              المرجع التعليمي الإفتراضي والتفاعلي 
            </h2>
            <p>
             مرحباً بكم في أكاديمية التعليم الذاتي الافتراضية, هنا يمكنكم تصفح شتى المجالات والدورات والبدأ في تنمية ذاتك ومهاراتك الشخصية, بلا أي مبالغ مدفوعة, كما يمكنك المساهمة بإضافة الدورات           </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
