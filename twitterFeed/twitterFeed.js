var twitterFeed = BaseComponent.extend({
	update : function() {
		var myself=this;
		
		
		var twitterUser    = 'ambientbi';
		var twitterLimit = 5;
		
		
		
		var twitterHTML = "";
		
		var twitterAPIURL = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name='+twitterUser+'&count='+twitterLimit+'&callback=?';
		
		var pm_url = 'http://twitter.com/statuses';
		pm_url += '/user_timeline/'+twitterUser+'.json';
		pm_url += '?count=10&callback=renderFeed';
		var photos = function (data) {
			alert(data);
		};
		
		$.ajax({
			url: pm_url,
			dataType: 'jsonp',
			jsonpCallback: 'renderFeed',
			jsonp: false,
		});
		
		function renderFeed(f){
			
			console.log(f);
			
		}

		
		/*
		
		$.getJSON(twitterAPIURL,function(data) {
			$.each(data.results, function(i, tweet) {
				
				//console.log(tweet);
				
				// Before we continue we check that we got data
				if(tweet.text !== undefined) {
				// Calculate how many hours ago was the tweet posted
					var date_tweet = new Date(tweet.created_at);
					var date_now   = new Date();
					var date_diff  = date_now - date_tweet;
					var hours      = Math.round(date_diff/(1000*60*60));

					// Build the html string for the current tweet
					twitterHTML = '<div class="tweet_text">';
					twitterHTML += '<a href="http://www.twitter.com/';
					twitterHTML += twitter_user + '/status/' + tweet.id + '">';
					twitterHTML += tweet.text + '<\/a><\/div>';
					twitterHTML += '<div class="tweet_hours">' + hours;
					twitterHTML += ' hours ago<\/div>';
				}
				
			});
			
			console.log(twitterHTML);
			
			$("#"+this.htmlObject).html(twitterHTML);
		});

*/
		
		
		
		
		
	}
});