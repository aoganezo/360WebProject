# 360WebProject
Instructions for a working site (2 options):
1. Simply go to https://saveaz-5010f.firebaseapp.com/
2. Clone and serve the site.
 * Clone/Pull the repository.
 * Run `npm install`
 * Run `npm update`
 * Run `ng serve`

Testing:
 * Run `ng test`

Note 1: No extensions are needed because an easier workaround was found. Prepending "https://cors.now.sh/" to our API call solved our CORS issue (usually). 

Note 2: Occasionally, after a lot of testing we get an error (in the console) from the Walmart API. Usually a 403. We aren't sure what the root cause is, but if you run into it, then just refresh the page and you should be good to go.

Note 3: One of our major functions, favorting/saving items can only be done if you're logged in. It's untestable if you don't login. Please login. :+1:
