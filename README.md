# reeb

web app that pulls beer info from third party api, after users are able to 
add beers to their favorites list which is hosted on the local database


# stack
- react
- express
- psql database

# db structure
The database will consist of a table of beer that the user will consider their favorites. When the user clicks on a listed beer style then they will see some details about that beer. For instance, when a user clicks on IPA style beer then it will show all of the IPA beers. The user will then be able to add a beer to their favorites, which is the database. Which they can also delete(from the DB). We are only adding favorite beers into the database everthing else is pulled from the API.


# dependecies

```ssh
"dependencies": {
    "body-parser": "^1.18.2",
    "cookie-parser": "^1.4.3",
    "express": "^4.16.2",
    "morgan": "^1.9.0",
    "pg-promise": "^7.3.2"
  }
  ```
![screen shot 2017-12-28 at 8 53 49 pm](https://user-images.githubusercontent.com/31411569/34427541-4c9bc5ac-ec11-11e7-91b3-9da584b4247f.png)

# contributors!!!
first create a database named beer_dev then clone
after cloning repo cd into project and run:
```ssh
yarn install
yarn dev
```
then cd into client which is the react app and run:
```ssh
yarn start
```
