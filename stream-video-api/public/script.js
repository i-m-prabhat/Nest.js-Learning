document.addEventListener("DOMContentLoaded", function ()
{
    const video = document.getElementById('videoPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    playButton.addEventListener('click', () =>
    {
        video.play();
    });

    pauseButton.addEventListener('click', () =>
    {
        video.pause();
    });
});
