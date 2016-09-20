app.directive('c', function(){
	return{
		restrict:'E',
		template:'<div ng-click="controller.Play()" class="song-style-base song-button-base song-play"></div>'
	};
});

app.directive('actualSongSign', function(){
	return{
		restrict:'E',
		template:'<div ng-click="controller.Play()" class="song-style-base song-button-base song-play"></div>'
	};
});

app.directive('play', function(){
	return{
		restrict:'E',
		template:'<div ng-click="controller.Play()" class="song-style-base song-button-base song-play"></div>'
	};
});

app.directive('pause', function(){
	return{
		restrict:'E',
		template:'<div ng-click="controller.Pause()" class="song-style-base song-button-base song-stop"></div>'
	};
});

app.directive('next', function(){
	return{
		restrict:'E',
		template:'<div ng-click="controller.Next()" class="song-style-base song-button-base song-next"></div>'
	};
});

app.directive('prev', function(){
	return{
		restrict:'E',
		template:'<div ng-click="controller.Prev()" class="song-style-base  song-button-base song-prev"></div>'
	};
});


/*
<prev></prev>
<div ng-switch on="controller.isPlaying">	
<play  ng-switch-when="false"></play>
<pause ng-switch-when="true" ></pause>
</div>
<next></next>*/