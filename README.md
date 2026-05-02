# kariyerplanlama-videoizlemebotu

https://ytnktv.uzaktanegitimkapisi.gov.tr/ sitesindeki videoları arkaplanda izleme-videoyu zorla devam ettirme-otomatik diğer videoya geçme-hızı ayarlama (opsiyonel)

-


* **Tampermonkey** (chrome, firefox hepsinde var)
bu eklentiyi kurun. sağ üstten tampermonkey eklentisini açın. "new script" tıklayın ve oradaki kodları silin. botcode.js içindeki kodları kopyalayın ve buraya yapıştırın. kaydetmek için (ctrl + s) yapın.

ardından https://ytnktv.uzaktanegitimkapisi.gov.tr/ a gidin
profilden okulu ve öğretmeni seçmeyi unutmayın
ilk videoyu başlatın.
diğer videolara otomatik geçmelidir eğer geçmezse bot çalışmıyor demektir.


Bu scriptin yaptıklarının hiç bir sonucunun sorumluluğu bana ait değildir. 

Eğer 1x hızında izlemek isterseniz ekstra bişey yapmanız gerekmiyor. Ancak 30x gibi bi hızda izlemek isterseniz koddaki 29.satırda bulunan 
//video.playbackRate = 30.0; 
başındaki eğik çizgileri kaldırın.
Ama bu riskli çünkü videolar bu hızla izleseniz bile tamamlandı olarak gözüküyor ancak hoca dikkat ederse videoyu ne kadar sürede bitirdiğinizi görür ve 5dk lik bir video bile 5 saniyede bittiği için hile yaptığınızı anlar.

"post isteği hatali iletiliyor eğer hız manipülasyonu yaparsanız"


Bu proje eğitim ve kişisel kullanım amaçlıdır.
Sorumluluk kullanıcıya aittir.


