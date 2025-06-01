import React from 'react';

function About() {
    return (
        <div className="about-container">
            <h1>Hakkımızda</h1>
            <p>
                Merhaba! Ben <strong>Eren Çoban</strong>. Bu projeyi, hem yazılım becerilerimi geliştirmek hem de kullanıcı dostu, işlevsel bir restoran yönetim arayüzü oluşturmak için hayata geçirdim.
            </p>

            <p>
                Uygulamamız, restoran işletmelerinin menülerini yönetmelerine, siparişleri takip etmelerine ve müşteri taleplerini etkili bir şekilde karşılamalarına yardımcı olmak amacıyla React tabanlı olarak geliştirilmiştir. Ayrıca <strong>mock API</strong> desteği sayesinde, gerçek veri akışını simüle ederek gerçekçi bir deneyim sunar.
            </p>

            <h2>Proje Özellikleri</h2>
            <ul>
                <li>Kategorilere ayrılmış zengin menü</li>
                <li>Sepet sistemi</li>
                <li>Gerçek zamanlı sipariş listesi ve yönetimi</li>
                <li>Kullanıcı dostu rezervasyon arayüzü</li>
                <li>Mock API ile CRUD işlemleri (Ekleme, Listeleme, Silme, Güncelleme)</li>
            </ul>

            <h2>Vizyonum</h2>
            <p>
                Hedefim, yazılım dünyasında kendimi geliştirerek yenilikçi projeler ortaya koymak. Bu proje, öğrenme sürecimin önemli bir adımıdır ve zamanla daha gelişmiş versiyonlarını üretmeyi planlıyorum.
            </p>

            <p>Geri bildirim ve önerileriniz benim için çok değerli. İlginiz için teşekkür ederim!</p>
        </div>
    );
}


export default About;
