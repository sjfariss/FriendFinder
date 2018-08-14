//Dependencies 

var friends = require("../data/friends");


// Routing

module.exports = function(app) {
  // api get for handling code when user visits page and page link
  //api friends and res json friends

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //api post gets info from when a user submits form and pushes to the json array
  
  app.post("/api/friends", function(req, res) {
    // Start logic to respond, parse, compare, calculate difference for score. 
    // Then pushes to user DB
    // object will hold match and loop through all options
    //userChoice will be used in HTML
    var userChoice = {
      name: "",
      photo: "",
      friendDifference: Infinity //tried integer first had to look this up as we have never used it!
    };
    //vars for logic userData will be used in HTML
    var userData = req.body;
    var userScores = userData.scores;
    var tDifferences;
      //loop thru possibilites of friends
    for (var i = 0; i < friends.length; i++) {
      var listFriend = friends[i];
      tDifferences = 0;

      console.log(listFriend.name);

        //loop thru scores of friends
      for (var j = 0; j < listFriend.scores.length; j++) {
        var valueFriendScore = listFriend.scores[j];
        var valueUserScore = userScores[j];
        //Calculate the differences and determine closest match
        tDifferences += Math.abs(parseInt(valueUserScore) - parseInt(valueFriendScore));
      }
      if (tDifferences <= userChoice.friendDifference) {
        // Reset the userChoice to be the chosen closest match
        userChoice.name = listFriend.name;
        userChoice.photo = listFriend.photo;
        userChoice.friendDifference = tDifferences;
      }
    }

    //Execute now
    friends.push(userData);
    res.json(userChoice);
  });
};