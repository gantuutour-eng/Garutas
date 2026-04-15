import { useState } from 'react';
import {
  Bell,
  FileText,
  Radio,
  Home,
  Ticket,
  User,
  Smartphone,
  Wifi,
  Phone,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-coverflow';
// @ts-ignore
import 'swiper/css/pagination';
import './index.css';

const simPlans = [
  { id: 1, title: 'Story Light 10GB+', data: '10GB+', calls: 'Хязгааргүй', discount: '49% хямдрал', price: '19,000₩' },
  { id: 2, title: 'Story 7GB 100min', data: '7GB', calls: '100 мин', discount: '99% хямдрал', price: '100₩' },
  { id: 3, title: 'WON Youth 71GB+', data: '71GB+', calls: 'Хязгааргүй', discount: '42% хямдрал', price: '36,300₩' },
  { id: 4, title: 'WON Basic 15GB+', data: '15GB+', calls: 'Хязгааргүй', discount: '33% хямдрал', price: '25,000₩' },
  { id: 5, title: 'K-Smart 11GB+', data: '11GB+', calls: 'Хязгааргүй', discount: '40% хямдрал', price: '33,000₩' },
  { id: 6, title: 'Data Mania 100GB', data: '100GB', calls: '300 мин', discount: '20% хямдрал', price: '45,000₩' },
  { id: 7, title: 'Ultra Max 5G', data: 'Хязгааргүй', calls: 'Хязгааргүй', discount: '15% хямдрал', price: '65,000₩' },
  { id: 8, title: 'Budget 3GB', data: '3GB', calls: '50 мин', discount: '10% хямдрал', price: '4,500₩' },
  { id: 9, title: 'Student 50GB', data: '50GB', calls: 'Хязгааргүй', discount: '60% хямдрал', price: '28,000₩' },
  { id: 10, title: 'Travel 7-Day', data: '14GB', calls: 'Хязгааргүй', discount: 'Онцгой', price: '15,000₩' },
];

const phoneList = [
  { id: 'p1', title: 'Galaxy S24 Ultra', price: '4,500,000₮', oldPrice: '5,000,000₮', img: '/banners/phone1.png', badge: 'sale-badge', badgeText: '-20%', specs: { storage: '256GB / 512GB', camera: '200MP + 50MP', battery: '5000 mAh', screen: '6.8" AMOLED' } },
  { id: 'p2', title: 'iPhone 15 Pro', price: '3,800,000₮', img: '/banners/phone2.png', badge: 'new-badge', badgeText: 'ШИНЭ', specs: { storage: '256GB / 512GB', camera: '48MP + 12MP', battery: '3274 mAh', screen: '6.1" OLED' } },
  { id: 'p3', title: 'Galaxy Z Flip 5', price: '2,450,000₮', img: '/banners/phone4.png', specs: { storage: '256GB', camera: '12MP + 12MP', battery: '3700 mAh', screen: '6.7" OLED Flex' } },
  { id: 'p4', title: 'Galaxy A54', price: '1,100,000₮', img: '/banners/phone5.png', badge: 'hot-badge', badgeText: 'ТОП', specs: { storage: '128GB', camera: '50MP + 12MP', battery: '5000 mAh', screen: '6.4" AMOLED' } },
];

function App() {
  const [activeTab, setActiveTab] = useState<'sim' | 'phone'>('sim');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className="mobile-container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="brand-logo">
            <Smartphone size={20} color="white" />
          </div>
          <span className="service-title">Мобайл Захиалга</span>
        </div>
        <div className="header-right">
          <Bell size={24} />
        </div>
      </header>

      {/* Greeting Banner */}
      <section className="greeting-marquee-section">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-text">Аялалаар ирсэн хүмүүс гадаад пасспортаараа л 36.300воны дугаар шууд захиалаад ашиглах боломжтой</span>
            <span className="marquee-text">Аялалаар ирсэн хүмүүс гадаад пасспортаараа л 36.300воны дугаар шууд захиалаад ашиглах боломжтой</span>
          </div>
        </div>
      </section>

      {/* Promotion Banner (3D Coverflow) */}
      <section className="promo-coverflow-wrapper">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide className="banner-slide">
            <img src="/banners/phone1.png" alt="Flagship Phone" className="banner-image" />
            <div className="banner-overlay">
              <span className="banner-badge">ШИНЭ</span>
              <h3>Шинэ үеийн ухаалаг утас</h3>
              <p>Хамгийн сүүлийн загвар</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner-slide">
            <img src="/banners/phone2.png" alt="Premium Phone" className="banner-image" />
            <div className="banner-overlay">
              <span className="banner-badge">УРАМШУУЛАЛ</span>
              <h3>Давхар купонтой багц</h3>
              <p>Таны худалдан авалтад 2x оноо</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner-slide">
            <img src="/banners/phone3.png" alt="Foldable Phone" className="banner-image" />
            <div className="banner-overlay">
              <span className="banner-badge">ОНЦЛОХ</span>
              <h3>Нугалдаг дэлгэцтэй утас</h3>
              <p>Ирээдүйн технологи одоо</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner-slide">
            <img src="/banners/phone4.png" alt="Camera Phone" className="banner-image" />
            <div className="banner-overlay">
              <span className="banner-badge">ХЯМДРАЛ</span>
              <h3>Гурвалсан камертай утас</h3>
              <p>Мэргэжлийн зураг авалт</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner-slide">
            <img src="/banners/phone5.png" alt="Galaxy Phone" className="banner-image" />
            <div className="banner-overlay">
              <span className="banner-badge">ТОП</span>
              <h3>Хамгийн эрэлттэй загвар</h3>
              <p>SIM карттай хамт авбал хямд</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Quick Action Tabs */}
      <section className="action-tabs-wrapper">
        <div className="action-tabs">
          <button 
            className={`action-tab ${activeTab === 'sim' ? 'active' : ''}`} 
            id="tab-sim"
            onClick={() => setActiveTab('sim')}
          >
            <Radio size={18} />
            <span>Сим захиалах</span>
          </button>
          <button 
            className={`action-tab ${activeTab === 'phone' ? 'active' : ''}`} 
            id="tab-phone"
            onClick={() => setActiveTab('phone')}
          >
            <FileText size={18} />
            <span>Гар утас захиалах</span>
          </button>
        </div>
      </section>

      {/* Tab Content */}
      <section className="tab-content-wrapper fade-in">
        {activeTab === 'sim' && (
          <div className="sim-plans-layout fade-in">
            <h2 className="section-title">Сим багцууд</h2>
            <div className="sim-plans-grid">
              {simPlans.map(plan => (
                <div key={plan.id} className="sim-plan-card" onClick={() => setSelectedItem({ type: 'sim', ...plan })}>
                  <div className="sim-plan-top">
                    <h3 className="sim-plan-title">{plan.title}</h3>
                    <div className="sim-plan-pill">
                      <span className="pill-item"><Wifi size={12}/> {plan.data}</span>
                      <span className="pill-item"><Phone size={12}/> {plan.calls}</span>
                    </div>
                  </div>
                  <div className="sim-plan-bottom">
                    <span className="sim-plan-discount">{plan.discount}</span>
                    <span className="sim-plan-price">{plan.price} <ChevronRight size={18}/></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'phone' && (
          <div className="phones-layout fade-in">
             <h2 className="section-title">Гар утаснууд</h2>
             <div className="phones-grid">
               {phoneList.map(phone => (
                 <div key={phone.id} className="phone-card" onClick={() => setSelectedItem({ type: 'phone', ...phone })}>
                   <div className="phone-image-wrapper">
                     {phone.badge && <span className={`badge ${phone.badge}`}>{phone.badgeText}</span>}
                     <img src={phone.img} alt={phone.title} className="phone-img" />
                   </div>
                   <div className="phone-details">
                     <h3 className="phone-name">{phone.title}</h3>
                     <div className="phone-price-row">
                       <span className="phone-price">{phone.price}</span>
                       {phone.oldPrice && <span className="phone-price-old">{phone.oldPrice}</span>}
                     </div>
                     <button className="btn-order-phone">Захиалах</button>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        )}
      </section>      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <a href="#" className="nav-item active">
          <div className="nav-icon">
            <Home size={24} strokeWidth={2.5} />
          </div>
          <span className="nav-label">Нүүр</span>
        </a>
        <a href="#" className="nav-item">
          <div className="nav-icon">
            <Ticket size={24} />
          </div>
          <span className="nav-label">Багц</span>
        </a>
        <a href="#" className="nav-item">
          <div className="nav-icon">
            <User size={24} />
          </div>
          <span className="nav-label">Профайл</span>
        </a>
      </nav>
      {/* Detail Overlay */}
      {selectedItem && (
        <div className="detail-overlay">
          <div className="detail-header">
            <button className="btn-back" onClick={() => setSelectedItem(null)}>
              <ChevronLeft size={24} /> Буцах
            </button>
          </div>
          <div className="detail-content">
            {selectedItem.type === 'phone' ? (
              <>
                <div className="detail-image-box">
                  <img src={selectedItem.img} alt={selectedItem.title} />
                </div>
                <h2 className="detail-title">{selectedItem.title}</h2>
                <div className="detail-price-box">
                  {selectedItem.oldPrice && <div className="detail-old-price">{selectedItem.oldPrice}</div>}
                  <div className="detail-price">{selectedItem.price}</div>
                </div>
                <div className="detail-specs">
                  <div className="spec-item">
                    <span className="spec-label">Багтаамж</span>
                    <span className="spec-value">{selectedItem.specs.storage}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Камер</span>
                    <span className="spec-value">{selectedItem.specs.camera}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Батерей</span>
                    <span className="spec-value">{selectedItem.specs.battery}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Дэлгэц</span>
                    <span className="spec-value">{selectedItem.specs.screen}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="detail-image-box" style={{ background: '#e0e7ff' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 60, marginBottom: 10 }}>📱</div>
                    <div style={{ fontWeight: 800, fontSize: 24, color: 'var(--primary-blue)' }}>{selectedItem.data}</div>
                    <div style={{ fontWeight: 600, color: '#64748b' }}>Дата хязгааргүй</div>
                  </div>
                </div>
                <h2 className="detail-title">{selectedItem.title}</h2>
                <div className="detail-price-box">
                  <div className="detail-price">{selectedItem.price} <span style={{fontSize: 14, color: '#64748b', fontWeight: 600}}>({selectedItem.discount})</span></div>
                </div>
                <div className="detail-specs">
                  <div className="spec-item">
                    <span className="spec-label">Интернет дата</span>
                    <span className="spec-value">{selectedItem.data} / сар</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Ярианы минут</span>
                    <span className="spec-value">{selectedItem.calls}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Мессеж</span>
                    <span className="spec-value">Хязгааргүй</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Сүлжээ</span>
                    <span className="spec-value">5G / 4G LTE</span>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="detail-footer">
            <button className="btn-buy-now">Шууд захиалах</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
