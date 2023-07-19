# Next.js Tasker App

To run locally, you'll need the data base

```
docker-compose up -d
```

- -d, meaning **detached**

* Local MongoDB URL:

```
mongodb://localhost:27017/entriesdb
```

## Configure the env variables

Use the **.env.template** file as an example to generate your **.env** file

## Fill the data base with mock information

Call:

```
http://localhost:3000/api/seed
```
