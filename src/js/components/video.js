if (document.querySelector('.video')) {

    // load script for youtube iframe api
    function loadScript() {
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // find video
    function findVideo() {
        let video = document.querySelector('.video');
        setupVideo(video);
    }

    // adding div to place a video
    function addPlayerHtml(wrapper, elementID) {
        let div = document.createElement('div');
        div.id = elementID;
        div.classList.add('video__media')
        wrapper.append(div);
    }

    // find image, button and video link and remove him from block video.
    function setupVideo(video) {
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        let videoId = parseMediaURL(video.getAttribute('data-video'));

        // added event click for load video
        video.addEventListener('click', () => {
            addPlayerHtml(video, 'player');
            loadVideo('player', videoId);
            media.remove();
            button.remove();
        });

        // video.classList.add('video--enabled');
    }

    // find id from url
    function parseMediaURL(src) {
        let regexp = /watch\?v=([A-z0-9-_\+]*)/i;
        let match = src.match(regexp);
        return match[1];
    }

    // load video with autoplay for start video after click
    function loadVideo(elementId, videoId) {
        window.YT.ready(function () {
            new window.YT.Player(elementId, {
                videoId: videoId,
                playerVars: {'autoplay': 1},
                events: {
                    'onReady': onPlayerReady,
                }
            });
        });
    }

    // play video
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    loadScript();
    findVideo();
}