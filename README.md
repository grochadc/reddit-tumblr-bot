# reddit-tumblr-bot

A bot that scrapes subreddits and posts on tumblr.

This bot does two simple things:

1. Calls the [Reddit](https://www.reddit.com/dev/api/) JSON API to retrieve top posts from a specific subreddit.

2. Posts all the images (including captions and permalinks) to a specified [Tumblr](https://www.tumblr.com/docs/en/api/v2) blog.

All you have to do is clone this repo:

```shell
$ clone https://github.com/grochadc/reddit-tumblr-bot.git
```

configure

```javascript
// On bot-config.js Export an object with the configuration
module.exports = {
  tumblr: {
    blog: "natureisfuckinglitbot",
    credentials: {
      consumer_key: process.env.CLIENT_ID,
      consumer_secret: process.env.CLIENT_SECRET,
      token: process.env.TOKEN,
      token_secret: process.env.SECRET
    }
  },
  subreddit: "natureisfuckinglit",
  db: "https://www.jsonstore.io/7400e86e797b508a5c9269d5662cf79b0442acd032f8f40cf4bd44faf1521ef8/posted/"
};

```

and run it:

```shell
$ node index.js
```

NOTE: This repo comes with a config file example inside `config-example/` but you'll have to move it to the root to make the script work.

### Configuration API

| Attribute                           | Type   | Description                                                                         |
| ----------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| tumblr:                             | Object | An object including all tumblr related config                                       |
| tumblr.blog:                        | String | The name of the tumblr as preceded by .tumblr.com (eg. myblog.tumblr.com => myblog) |
| tumblr.credentials:                 | Object | Your tumblr api credentials                                                         |
| tumblr.credentials.consumer_key:    | String | Your tumblr API consumer key                                                        |
| tumblr.credentials.consumer_secret: | String | Your tumblr API consumer secret                                                     |
| tumblr.credentials.token:           | String | Your tumblr API token                                                               |
| tumblr.credentials.token_secret:    | String | Your tumblr API token secret                                                        |
| subreddit:                          | String | The name of the subreddit you want to scrape                                        |
| db:                                 | String | URL of a server that can store a simple array ([jsonstore.io]() recommended         |



## Deploying

You can optionally choose to deploy your bot. The way I have been doing it is via [Heroku](heroku.com).

You can [deploy via git](https://devcenter.heroku.com/articles/git):

```shell
$ git push heroku master
```

And just use the [scheduler](https://devcenter.heroku.com/articles/scheduler) add-on to run it once a day.
