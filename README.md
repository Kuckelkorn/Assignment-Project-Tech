# Ez Date
Dating made as easy as squeezing a lemon

## Summary
Welcome to Ez Date, this is a dating site that makes finding a match as easy as squeezing a lemon ( easy peasy lemon squeezy)
Current functionalities include making an account and viewing other members.

### Screenshots of the app
#### Home
![Homescreen](https://github.com/Kuckelkorn/Assignment-Project-Tech/wiki/assets/home.png)

#### Members
![Members screen](https://github.com/Kuckelkorn/Assignment-Project-Tech/wiki/assets/members.png)

#### Registering
![Registering screen](https://github.com/Kuckelkorn/Assignment-Project-Tech/wiki/assets/register.png)

## Running the app

### Installation
#### 1. Clone the repository
The repository can be cloned by running `git clone` in the command line.
```
git clone https://github.com/Kuckelkorn/Assignment-Project-Tech
```

#### 2. Install the packages
Install the dependencies with npm.
```
npm install
```
#### 3. Setup your database connection
In order to setup your database connection first you need to make a `.env` file
in that file you paste the following code if you're using mongodb atlas paste
your info instead of the standard `<username>` , `<password>`, `<dbname>`

```
MONGO_DB= mongodb+srv://<username>:<password>@cluster0-ea6cu.azure.mongodb.net/<dbname>?retryWrites=true
```
If you're using a different service look at their documentation about setting up the connection to your database and paste it behind `MONGO_DB=`

#### 4. Setup express sessions
In order to make sessions work you have to put in the .env file a string consisting of random characters to make it really hard for hackers to guess your secret and accesing your cookies and retrieve potentially sensitive information about your users

```
SESSION_SECRET= 'your string'
```

### Running and viewing the application
Start the server with `npm run nmStart`, you can view it by going to `localhost:5000`.
```
1. npm run nmStart
2. open your browser of choice and go to localhost:5000
```

### Resources used
Making this assignment, I watched the playlist [Node.js & Express From Scratch](https://www.youtube.com/playlist?list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp) from traversy media. It mostly helped with setting up the database, using mongoose and the basics with the pug templating engine.

Besides using that playlist I also made use of the examples in the [project tech back-end github](https://github.com/cmda-bt/be-course-18-19/tree/master/examples). This was a great way to have another look at the codes from the course within my own tempo.

After finishing the teamwork assignment I also looked at the code written by my other team members especially the part about model view controller setup to clean up your code. [GamerDate](https://github.com/isirThijs/Gamerdate)

I also used the documentation of the different packages, but it didn't always help because some packages have a lot of different middleware and it is very easy to lose track of what to use, at least that is how I experienced it.
