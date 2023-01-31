import React from "react";
import "./About.css";
import { BiHome, BiMap } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { MdOutlineDoneOutline } from "react-icons/md";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="welcome">
          <h1>مرحبا بك في عقاراتك.</h1>
          <p>مستشارك العقاري واكبر مطور عقاري في القاهرة</p>
          <p>
            شركة مصرية تأسست عام 2016 في فيصل بالقاهرة لتكون مساهماً فعالاً
            للتطوير العقاري التجاري والسكني وخدمات البيع والتأجير والتشطيبات
            بالقاهرة بإعتمادها على خبرات عالية وتكنولوجيا حديثة في جميـع مـراحل
            التطوير والتنفيذ لتصل إلى أفضل التصاميم المعمارية والإنشائية التي
            ترضي بها عملائها الكرام وتزيد الثقة
          </p>
        </div>
        <div className="statistics py-5">
          <div className="fact">
            <h2>إجمالي الوحدات</h2>
            <BiMap className="icon" />
            <h2>+500</h2>
          </div>
          <div className="hr"></div>
          <div className="fact">
            <h2>وحدة سكنية</h2>
            <BsBuilding className="icon" />
            <h2>275</h2>
          </div>
          <div className="hr"></div>
          <div className="fact">
            <h2>محل تجاري</h2>
            <BiHome className="icon" />
            <h2>100</h2>
          </div>
          <div className="hr"></div>
          <div className="fact">
            <h2>وحدات تم تسليمها</h2>
            <MdOutlineDoneOutline className="icon" />
            <h2>375</h2>
          </div>
        </div>
        <div className="our-goals">
          <h2>أهدافنا ورؤيتنا</h2>
          <div className="goals-wrapper">
            <div>
              <h4>رسالتنا</h4>
              <p>إبتكار عقارات عصرية بجودة عالية متقنة لتحقيق رضا العملاء</p>
            </div>
            <div>
              <h4>رؤيتنا</h4>
              <p>
                التميز والإبداع والريادة في مجال التطوير العقاري بالقاهرة عن
                طريق تقديم العديد من المشاريع التجارية والسكنية وتقديم خدمات
                التأجير والتشطيبات ابحث عن منزل احلامك وحدات تم تسليمها
              </p>
            </div>
            <div>
              <h4>أهدافنا</h4>
              <p>
                لا يتعلق الأمر فقط بشراء وحدة سكنية، محل تجاري أو بيع أو تأجير؛
                بل نتطلع إلي التميز والمضي قدماً في مجال العقارات عن طريق توظيف
                التكنولوجيا الحديثة في كافة مشاريعنا وتحسين جودة المباني لنصبح
                المطور العقاري الأول في القاهرة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
