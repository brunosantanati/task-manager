## Make sure to use the right version

<code>nvm install 11.0.0</code>  
<code>nvm use 11.0.0</code>  

I started getting this error when trying to run the application using Node v11.0.0:  
<code>Segmentation fault (core dumped)</code>  
So, I found the closest LTS version and used it instead:  
<code>nvm ls-remote --lts</code>  
<code>nvm install v12.13.0</code>  
<code>nvm use v12.13.0</code>  

## Mongo installation and basic usage

```
1-Download the tar.gz file specific for Linux from the official website
2-Uncompress it
3-Create a new folder to hold the MongoDB data
4-Go to bin folder and start the server:
cd ~/any-path-here/MongoDB/mongodb-linux-x86_64-ubuntu1604-3.6.3/bin
./mongod --dbpath /path/to/mongodb-data-folder/
5-Open another terminal (in bin folder as well) and start the Mongo Shell:
cd ~/any-path-here/MongoDB/mongodb-linux-x86_64-ubuntu1604-3.6.3/bin
./mongo
```

## Used commands

<code>npm install</code>  

In the mongo/bin folder you can run these 2 commands below:  
<code>./mongod --dbpath=/path/to/mongodb-data-folder/</code>  
<code>./mongo</code>  

<code>node src/db/mongoose.js</code>  
<code>npm i nodemon@1.18.9 --save-dev</code>  
<code>npm i express@4.16.4</code>  
<code>npm i bcryptjs@2.4.3</code>  
<code>npm i jsonwebtoken@8.4.0</code>  
<code>npm i multer@1.4.1</code>  
<code>npm i sharp@0.21.1</code>  
<code>npm i @sendgrid/mail@6.3.1</code>  
<code>npm i env-cmd@8.0.2 --save-dev</code>  
<code>npm i supertest@3.4.1 --save-dev</code>  
<code>npm run dev</code>  
<code>npm test</code>  

<code>node playground/promise-chaining.js</code>  
<code>node playground/promise-chaining-2.js</code>  
<code>node src/emails/account.js</code>  

## Course links

[user avatar](http://localhost:3000/users/65a6baccff68b4d83dd7ec79/avatar)  
[images for upload](https://links.mead.io/files) ([the same as this](https://files.mead.io/5c64e8f75ffe))    

## Mongoose links

[Queries](https://mongoosejs.com/docs/queries.html)  
[Middleware](https://mongoosejs.com/docs/middleware.html)  

## Test links

[Mocha](https://mochajs.org/)  
[Jest](https://jestjs.io/)  
[Jest - expect](https://jestjs.io/docs/expect)  
[Jest CLI Options](https://jestjs.io/docs/cli)  
[Configuring Jest](https://jestjs.io/docs/configuration)  
[Configuring Jest - testEnvironment](https://jestjs.io/docs/configuration#testenvironment-string)  
[Jest - Setup and Teardown](https://jestjs.io/docs/setup-teardown)  

## Other links

[bcrypt.js](https://www.npmjs.com/package/bcryptjs)  
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)  
[multer (file upload)](https://www.npmjs.com/package/multer)  
[sharp (image processing)](https://www.npmjs.com/package/sharp)  
[env-cmd](https://www.npmjs.com/package/env-cmd)  
[supertest](https://www.npmjs.com/package/supertest)  