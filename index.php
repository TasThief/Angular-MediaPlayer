<!doctype html>
<html ng-app='MediaPlayer'>
  <head>
	<link href="https://fonts.googleapis.com/css?family=Baloo+Bhaina" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/buzz/1.2.0/buzz.min.js"></script>
	<script src="js/controllers/list.js"></script> 
	<script src="js/controllers/controller.js"></script> 
	<script src="js/services/service.js"></script> 
	<script src="js/directives/directives.js"></script> 
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body ng-controller="PlayerController as controller">
	
	<!-- media player controller box -->
	<div class="controlBox">
	
		<!-- button box -->
		 <div class="buttonbox">
		
			<!-- prev button -->
			<div ng-click="controller.Prev()" 
				 class="prev button"></div>
			
			<!-- play/stop button -->
			<div ng-switch on="controller.isPlaying">
			
				<!-- play  button -->
				<div ng-switch-when="false"
			 		 ng-click="controller.Play()"			
			 		 class="play button"></div>
				
				<!-- stop  button -->
		 		<div ng-switch-when="true" 
			 		 ng-click="controller.Pause()"
		 			 class="stop button"></div>		
		 	</div>
			
			<!-- next button -->
		 	<div ng-click="controller.Next()" 
		 		 class="next button"></div>
			
		</div>
		
		<!-- name -->
    	<div class="namebox">
    		<a>{{controller.GetActiveSong().name | limitTo:20}}</a>
    	</div>
    	
		<!-- time bar -->
		<div class="timebar">
			<div ng-style="{width:controller.GetActiveSong().file.getPercent()}"
				 class="display"></div>
		</div>
	</div>	

	
	<div class="listbox" >
		<div ng-repeat="music in controller.GetSongList()" 
			 ng-switch on="music == controller.GetActiveSong()">
			<div ng-switch-when="false" 
				 class="songtag off">
				<a>{{music.name | limitTo:20}}</a>
			</div>
			<div ng-switch-when="true" 
				 class="songtag on">
				<a>{{music.name | limitTo:20}}</a>
			</div>
		</div>
	</div>
	
	
	
	
	
	

  </body>
</html>