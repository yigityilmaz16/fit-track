# FitTrack

[English](README.md) | [Türkçe](README.tr.md)

FitTrack, antrenmanlarını kaydetmeni ve gelişimini tek bir ekrandan takip etmeni sağlayan modern bir fitness takip uygulamasıdır. React ile geliştirilen uygulama; hızlı, responsive ve kullanımı kolay bir arayüz sunar.

## Canlı Demo

https://fittrack-yigit.vercel.app/

## Özellikler

- Antrenman ekleme, düzenleme ve silme
- Egzersiz adına göre arama
- Kas grubuna göre filtreleme
- Toplam antrenman, set ve hacim istatistikleri
- Son yapılan antrenmanı görüntüleme
- En çok çalıştırılan kas grubunu belirleme
- Haftalık antrenman sayısını takip etme
- Verileri tarayıcıda kalıcı olarak saklama
- Açık ve koyu tema desteği
- Mobil, tablet ve masaüstü uyumlu tasarım

## Kullanılan Teknolojiler

- React 19
- React Router
- Context API
- Local Storage
- Vite
- CSS

## Kurulum

Projeyi bilgisayarında çalıştırmak için Node.js'in kurulu olması gerekir.

```bash
git clone https://github.com/yigityilmaz16/fit-track.git
cd fit-track
npm install
npm run dev
```

Ardından terminalde gösterilen yerel adresi tarayıcıda açabilirsin.

## Kullanılabilir Komutlar

```bash
npm run dev
```

Geliştirme sunucusunu başlatır.

```bash
npm run build
```

Uygulamanın production sürümünü oluşturur.

```bash
npm run preview
```

Oluşturulan production sürümünü yerel olarak önizler.

```bash
npm run lint
```

Kod kalitesi kontrollerini çalıştırır.

## Proje Yapısı

```text
src/
├── components/     # Form, kart, liste ve header bileşenleri
├── context/        # Global antrenman state yönetimi
├── hooks/          # Yeniden kullanılabilir custom hook'lar
├── pages/          # Dashboard ve Workouts sayfaları
├── App.jsx         # Sayfa yönlendirmeleri ve tema yönetimi
├── index.css       # Global stiller ve tema renkleri
└── main.jsx        # Uygulamanın başlangıç noktası
```

## Verilerin Saklanması

Antrenman verileri tarayıcının Local Storage alanında saklanır. Bu sayede sayfa yenilendiğinde kayıtlar kaybolmaz. Veriler yalnızca kullanılan tarayıcı ve cihazda bulunur.

## 📸 Ekran Görüntüleri

### Dashboard (Açık Tema)

![FitTrack açık tema dashboard ekranı](screenshots/dashboard-light.png)

### Dashboard (Koyu Tema)

![FitTrack koyu tema dashboard ekranı](screenshots/dashboard-dark.png)

### Workouts Sayfası (Açık Tema)

![FitTrack açık tema antrenmanlar ekranı](screenshots/workouts-light.png)

### Workouts Sayfası (Koyu Tema)

![FitTrack koyu tema antrenmanlar ekranı](screenshots/workouts-dark.png)

## Gelecekte Eklenebilecek Özellikler

- Grafiklerle gelişim takibi
- Antrenman hedefleri
- Kullanıcı hesabı ve bulut senkronizasyonu
- Egzersiz geçmişi ve kişisel rekorlar
- Dışa aktarma ve yedekleme

## Lisans

Bu proje eğitim ve kişisel kullanım amacıyla geliştirilmiştir.

## Geliştirici

**Yiğit Yılmaz**

GitHub: [https://github.com/yigityilmaz16](https://github.com/yigityilmaz16)
