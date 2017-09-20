/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function(){

  function createTweetElement(tweet){
    var $tweet = createTweetElement(tweetData);
    $('<article>').append(tweetData);
    return $tweet;
  }
});

createTweetElement(tweetData);

function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
      var tweetsContainer = $('tweeter-feed').html('');

      tweets.forEach(function(tweet){
      var tweetElement = createTweetElements(tweet);
      tweetsContainer.append(tweetElement);
    });
}

renderTweets(data);