# Assignment-Project-Tech
Make a dating website for project tech CMD Amsterdam

## Summary
For the tech project, the assignment is to make a dating website and instead of
just using front-end, we have to make the site actually work with back-end.
We're using node.js for that.

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
DB_URI= mongodb+srv://<username>:<password>@cluster0-ea6cu.azure.mongodb.net/<dbname>?retryWrites=true
```
If you're using a different service look at their documentation about setting up the connection to your database and paste it behind

```
 DB_URI= // url/uri here
```
### Running and viewing the application
Start the server with `npm run start`, you can view it by going to `localhost:3300`.
```
1. npm run start
2. open your browser of choice and go to localhost:3300
```

### Resources used
Making this assignment, I watched the playlist [Node.js & Express From Scratch](https://www.youtube.com/playlist?list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp) from traversy media. It mostly helped with setting up the database, using mongoose and the basics with the pug templating engine.

Besides using that playlist I also made use of the examples in the [project tech back-end gtihub](https://github.com/cmda-bt/be-course-18-19/tree/master/examples). This was a great way to have another look at the codes from the course within my own tempo.

I also used the documentation of the different packages, but it didn't always help because some packages have a lot of different middleware and it is very easy to lose track of what to use, at least that is how I experienced it.
