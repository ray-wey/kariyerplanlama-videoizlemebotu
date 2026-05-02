// ==UserScript==
// @name         YTNK Auto Player - Background STABLE
// @namespace    http://tampermonkey.net/
// @version      16.0
// @match        https://ytnktv.uzaktanegitimkapisi.gov.tr/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';


    Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });
    Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });


    window.addEventListener('visibilitychange', (e) => e.stopImmediatePropagation(), true);
    window.addEventListener('blur', (e) => e.stopImmediatePropagation(), true);

    function log(msg) {
        console.log(`[YTNK-STABLE] ${msg}`);
    }

    async function checkVideoStatus() {
        const video = document.querySelector('#YtnkPlayer_html5_api');
        if (!video) return;

        //video.playbackRate = 30.0;
        //yukarıdaki eğik çizgileri kaldırırsanız 30x hızında izlenir. isterseniz 2.0 gibi gerçekçi hızlara düşürebilirsiniz.

        if (video.paused && !video.ended) {
            try {

                if (video.muted === false && video.paused) {
                    video.muted = true;
                }

                await video.play();
                log("▶ Video devam ettiriliyor.");
            } catch (err) {
                
            }
        }
    }

    // bura calisiyor hep
    setInterval(() => {
        const nextBtn = document.querySelector('.swal-button.swal-button--nextone');

        if (nextBtn && nextBtn.offsetParent !== null) {
            log("⏭ Sonraki videoya geçiliyor...");
            nextBtn.click();
        } else {
            checkVideoStatus();
        }
    }, 1500); 

})();