Assignment 4: 2048 Game Center
by Adrian Lo

http://radiant-eyrie-3691.herokuapp.com/

1. The following aspects of the work have been implemented:
	-2048 JS code has be modified to post the username, score and grid to the app
	-POST /submit.json API submits the json to the mongoDB collection
	-scores.json API returns JSON array for specified users
	-Index displays all scores, usernames and timestamps arranged by score
	-App has been pushed to Heroku

2. I have not collaborated with anyone for this assignment.

3. This assignment took approximately 15 hours to complete.

5. These values are stored in local storage, with the best score being the value of the bestScore key and the state of the game being the value of the gameState key. They are also stored temporarily in game_manager.js, in the this.score and this.grid.serialize() objects.

6. I modified the actuate function in game_manager.js so that when the function detects that this.over is true, it takes the final score, the stringified grid object, along with an arbitrary user name and sends them to the application with jQuery. This way, whenever a game over occurs, it sends the final score and the final state of the grid to the app. To accomplish this I also modified index.html to include jQuery.