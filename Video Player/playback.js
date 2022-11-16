$(function () {
	$(document).ready(function () {
		setInterval(() => {
			$('video-js video:not([player-meta-data-playback])').each(function() {
				this.setAttribute('player-meta-data-playback', 'true');
			}).one('play', function() {
				this.defaultPlaybackRate = 2.0;
				this.playbackRate = 6.0;
			});
		}, 1000);
	});
});