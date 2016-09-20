
//The song's list service, it holds/downloads/uploads all songs in the aplication.
app.factory('SongList', ['$http', function($http)
{
	//The service object that is being fabricated
	var SongListService = {};

	//the list of songs
	SongListService.songList = [];

	//getter function
	SongListService.GetSongList = function()
	{
		return 	SongListService.songList;
	}
	
	//fech the list of songs from a server
	SongListService.DownloadSongs = function($http){
		$http({method:'GET', url:'server.php'}).
		then(function(fileNames){		
			for	(var i = 0; i < fileNames.data.length; i++) 
				SongListService.songList.push({	
					name: fileNames.data[i].substring(0, fileNames.data[i].length - 4),
					file: new buzz.sound("music/"+ fileNames.data[i], {formats:[]})
				});	
		}, 
		function errorCallback(response){
		});
	}
	
	//the active song being played by this controller
	SongListService.activeSong = null;
	
	//getter function
	SongListService.GetActiveSong = function()
	{
		return 	SongListService.activeSong;
	}
	
	//upload list of songs from server
	SongListService.UploadSongs = function($http){
		
	}
	
	//ensures that the index is within the song list's range
	var LoopIndex = function(index){
		if(index < 0)
			index =  SongListService.songList.length - 1;
		
		if (index >= SongListService.songList.length)
			index = 0;
		return index;
	}
	
	//get next song
	SongListService.GetNextSong = function(){
		return SongListService.songList[LoopIndex(SongListService.songList.indexOf(SongListService.activeSong ) + 1)];
	}
	
	//get prev song
	SongListService.GetPrevSong = function(){
		return SongListService.songList[LoopIndex(SongListService.songList.indexOf(SongListService.activeSong ) - 1)];	
	}
	
	//get a song at an given index
	SongListService.GetSongAt = function(index){
		return SongListService.songList[LoopIndex(index)];
	}
	
	//run the fetch routine
	SongListService.DownloadSongs($http);
	
	//return the service object
	return SongListService;
}]);