/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


$(function(){

  function renderTweets(tweets){
    var tweetsContainer = $('section.tweeter-feed');
    tweets.forEach(function(tweet){
      var tweetElement = createTweetElement(tweet);
      tweetsContainer.append(tweetElement);
    })
  }

  function createTweetElement(tweetData){
    var $tweet = $('<article>').addClass('tweet');
    var $header =$('<header>').addClass('tweet-header');
    var $img = $('<img>').addClass('user-avatar').attr('src', tweetData.user.avatars.small);
    var $name = $('<a>').addClass('user-name').html(tweetData.user.name);
    var $handle = $('<a>').addClass('user-handle').html(tweetData.user.handle);
    $header.append($img, $name, $handle);

    var $body = $('<div>').addClass("tweet-content").html(tweetData.content.text);

    var $footer = $('<footer>').addClass('tweet-footer');
    var $tweetStamp = $('<div>').addClass('tweet-timestamp').html(tweetData.created_at)
    var $iconDiv = $('<div>').addClass('icon');
    var $thumbsUpLink = $('<a>').addClass('tweet-action').attr('href', '#');
    var $thumbsUp= $('<i>').addClass("fa fa-thumbs-up");
    var $flagLink = $('<a>').addClass('tweet-action').attr('href','#');
    var $flag = $('<i>').addClass("fa fa-flag");
    var $retweetLink = $('<a>').addClass('tweet-action').attr('href','#');
    var $retweet = $('<i>').addClass("fa fa-retweet");
    $flagLink.append($flag);
    $thumbsUpLink.append($thumbsUp);
    $retweetLink.append($retweet);
    $iconDiv.append($flagLink, $thumbsUpLink, $retweetLink);
    $footer.append($tweetStamp).append($iconDiv);

    $tweet.append($header, $body, $footer);
    return $tweet;
  }

   // <div class="icon">
   //            <a class=“tweet-action” href=“#”><i class="fa fa-thumbs-up"></i></a>
   //            <a class=“tweet-action” href=“#”><i class="fa fa-thumbs-up"></i></a>
   //            <a class=“tweet-action” href=“#”><i class="fa fa-retweet"></i></a>
   //          </div>



renderTweets(data);

});





// function renderTweets(tweets) {
//   // loops through tweets
//     // calls createTweetElement for each tweet
//     // takes return value and appends it to the tweets container
//       var tweetsContainer = $('tweeter-feed').html('');

//       tweets.forEach(function(tweet){
//       var tweetElement = createTweetElements(tweet);
//       tweetsContainer.append(tweetElement);
//     });
// }

// renderTweets(data);