import Item_benefits from "./Item_benefits";
const List_of_benefits = () => {
  return (
    <div className="benefits">
      <div className="container">
        <h3 className="title">فوائد التعليم الذاتي</h3>
        <div className="list-benefits">
          <Item_benefits
            color="yallow"
            dec="عند وضع جدولك التعليمي الذاتي الغير أكاديمي والبدء بالتعلم دون اشراف أحد, هذا ما سينمي الاحساس بالمسؤولية لديك وقدرتك على تحمل الاعباء المستقبلية بقوة التعليم وتنمية المهارات الشخصية"
            title="تنمية المسؤولية"
            icon="fas fa-tasks"
          />
          <Item_benefits
            color="green"
            dec="ما تتعلمه في المدرسة وفي الجامعة ليست كافية غالباً لتحقيق اهدافك, فالتعليم الذاتي هي الرحلة المناسبة للوصول الى اهدافك حتى وإن لم تتمكن من الدراسة بشكل أكاديمي"
            title="تحقيق الاهداف"
            icon="fas fa-bullseye"
          />
          <Item_benefits
            color="blue"
            dec="الثقة بالذات , تقدير الذات , هذا بعض ما ستحصل عليه عند الاستمرار بالتعليم الذاتي حتى وإن لم تخصص تعليمك الذاتي في تطوير الذات, فالضغط الناتج من تعليمك الذاتي المستمر مثلاً يمنحك الثقة والرضى عن اسلوب حياتك"
            title="تطوير الذات"
            icon="fas fa-users-cog"
          />
        </div>
      </div>
    </div>
  );
};
export default List_of_benefits;
