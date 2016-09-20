var app = angular.module('MediaPlayer',[]);

//The player controller, this controller controls play/pause/stop/next/prev functionalities.
app.controller('PlayerController',['SongList', '$http', function(SongList, $http) 
{
	var self = this;
	
	this.GetActiveSong = SongList.GetActiveSong;
	this.GetSongList = SongList.GetSongList;
	
	//if a song is being played right now
	this.isPlaying = false;

	this.IsActiveSong = function(song){
		return (song == SongList.activeSong)? 'songtag on' : 'songtag off';
	}
	
	
	//ensure that the active song is never null
	this.DenullifyActiveSong = function(){
		if(SongList.activeSong == null) 
			this.SetActiveSong(SongList.GetSongAt(0));
	}
	
	this.GetPercent = function() {
		if(SongList.activeSong != null)
			return SongList.activeSong.file.getPercent();
		return 0;
	}
	
	//set the active song and bind it
	this.SetActiveSong = function(newSong) {	
		if(SongList.activeSong != null)
			SongList.activeSong.file.unbind('ended');
		SongList.activeSong = newSong;
		if(SongList.activeSong != null)
			SongList.activeSong.file.bind('ended',function(){ self.Next();});
	}

	//play the active song
	this.Play = function(){
		this.DenullifyActiveSong();
		SongList.activeSong.file.play();
		this.isPlaying = true;
	}
	
	//move to the next song
	this.Next = function(){	
		this.DenullifyActiveSong();
		SongList.activeSong.file.stop();
		this.SetActiveSong(SongList.GetNextSong());
		if(this.isPlaying)
			this.Play();
	}
	
	//pause the active song
	this.Pause = function(){
		this.DenullifyActiveSong();
		SongList.activeSong.file.pause();
		this.isPlaying = false;
	}
	
	//stop the active song
	this.Stop = function(){
		SongList.activeSong.file.stop();
		this.isPlaying = false;
	}
	
	//move to the previous song
	this.Prev = function(){
		this.DenullifyActiveSong();
		SongList.activeSong.file.stop();
		this.SetActiveSong(SongList.GetPrevSong());
		if(this.isPlaying)
			this.Play();
	}
}]);