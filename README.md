# 🏠 DekoArt - Ev Dekorasyonu Web Sitesi

Modern ve responsive ev dekorasyonu web sitesi. Türkçe dil desteği ile tam özellikli bir proje.

## 📋 İçerdikleri Özellikler

✅ **Tamamen Yapıldı:**
- ✓ Profesyonel responsive tasarım
- ✓ Modern navigasyon menüsü
- ✓ Hero (giriş) bölümü
- ✓ Kategorizeli galeri (filtreleme özelliği)
- ✓ Ürün kataloğu (4 ürün örneği)
- ✓ Fiyatlandırma tablosu (3 paket)
- ✓ Blog/İpuçları bölümü
- ✓ İletişim formu (validasyonlu)
- ✓ Social media linkleri
- ✓ Smooth scroll animasyonları
- ✓ Mobil uyumlu (responsive)
- ✓ Scroll to top butonu
- ✓ Form validasyonu
- ✓ Galeri filtreleme sistemi
- ✓ Hover efektleri ve animasyonlar

❌ **Yapılamadı/Sınırlamalar:**
- ✗ Backend veritabanı entegrasyonu (sunucu gerekli)
- ✗ Gerçek ödeme sistemi (Stripe, PayPal vs. kurulması gerekir)
- ✗ Email gönderme servisi (backend serveri gerekli)
- ✗ Gerçek ürün resimleri (placeholder kullanıldı)
- ✗ Admin paneli/dashboard (ayrı bir proje olarak yapılabilir)
- ✗ Çok dilli destek (sadece Türkçe)
- ✗ SEO optimizasyonu (temel meta etiketler eklenmiş)
- ✗ Analytics entegrasyonu (Google Analytics vb. eklenebilir)

## 📁 Dosya Yapısı

```
Hüseyin Abi WEB/
├── index.html       (Ana HTML dosyası)
├── style.css        (Stillendirme)
├── script.js        (JavaScript fonksiyonları)
└── README.md        (Bu dosya)
```

## 🚀 Kullanım

### Basit Başlatma
1. `index.html` dosyasını bir web tarayıcısında açın
2. Veya VS Code'da `Live Server` uzantısı kullanarak açın

```bash
# Örnek: VS Code Live Server ile
Sağ Tık > Open with Live Server
```

## 🎨 Tasarım Özelikleri

### Renkler
- **Primary**: #2c3e50 (Koyu mavi)
- **Secondary**: #e74c3c (Kırmızı)
- **Accent**: #3498db (Açık mavi)
- **Light BG**: #ecf0f1 (Açık gri)

### Font
- Font Ailesi: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

### İkonlar
- Font Awesome 6.0.0 kullanılmaktadır

## 🔧 Özelleştirme

### Renkleri Değiştirmek
`style.css` dosyasında `:root` bölümünü düzenleyin:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #e74c3c;
    --accent-color: #3498db;
    --light-bg: #ecf0f1;
}
```

### Ürünleri Eklemek
`index.html` içinde `product-grid` bölümüne yeni `product-card` ekleyin:

```html
<div class="product-card">
    <img src="image-url" alt="Ürün Adı">
    <h3>Ürün Adı</h3>
    <p>Ürün Açıklaması</p>
    <div class="product-rating">
        <i class="fas fa-star"></i>
        ...
    </div>
    <span class="product-price">₺Fiyat</span>
</div>
```

### Blog Yazısı Eklemek
`index.html` içinde `blog-grid` bölümüne yeni `blog-card` ekleyin:

```html
<article class="blog-card">
    <img src="image-url" alt="Blog Başlığı">
    <div class="blog-content">
        <span class="blog-date">Tarih</span>
        <h3>Blog Başlığı</h3>
        <p>Blog Özeti</p>
        <a href="#" class="read-more">Devamını Oku →</a>
    </div>
</article>
```

## 🔮 İleri Geliştirme Önerileri

### Yapılabilecek Eklemeler:
1. **Backend API** - Node.js/Express ile
   - Ürün yönetimi
   - Form verilerini database'e kaydetme
   - Email gönderme

2. **Veritabanı** - MongoDB/MySQL
   - Ürün listesi
   - Blog yazıları
   - İletişim mesajları

3. **Ödeme Sistemi**
   - Stripe entegrasyonu
   - PayPal entegrasyonu
   - Sepet sistemi

4. **İyileştirmeler**
   - Arama fonksiyonu
   - Kullanıcı hesapları
   - Favoriler/Wishlist
   - Yorum ve rating sistemi

5. **SEO**
   - Robots.txt
   - Sitemap.xml
   - Meta açıklamalar
   - Structured data (Schema.org)

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px+

## ⚙️ JavaScript Fonksiyonları

### `initializeGalleryFilters()`
Galeri öğelerini kategoriye göre filtreler.

### `initializeContactForm()`
İletişim formunu doğrular ve gönderir.

### `initializeSmoothScroll()`
Sayfa içi navigasyonu yumuşak kaydırır.

### `showNotification(message, type)`
Uyarı bildirimleri gösterir.

### `showProductModal(name, price)`
Ürün detaylarını modalda gösterir.

## 📞 İletişim Bilgileri

Site içinde şu iletişim bilgileri bulunmaktadır:
- **Adres**: Ankara, Türkiye
- **Telefon**: +90 (555) 123-4567
- **Email**: info@dekoart.com

## 📜 Lisans

Bu proje açık kaynak olarak sunulmaktadır.

## 🎯 Sonuç

✅ **Tamamlanan:** Tüm temel web sitesi özellikleri
❌ **Eksik:** Backend servisi ve veritabanı

Sitenin tam işlevselliği için bir backend sunucusu kurulması önerilmektedir!

---

**Hazırladığı:** DekoArt Web Sitesi Şablonu  
**Tarih:** 2026-05-07
