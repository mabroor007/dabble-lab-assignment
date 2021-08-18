# Dabble-lab-assignment

This is an assignment project given to me by Dabble Lab.
My task is to use the given data set found in src/dataset.js
and build a graphql api that does queries and mutations on the data.
I also have to connect to MongoDb atlas or Firebase realtime
database and perform queries and mutations using it.

## My Implementation

- Apollo Server (main graphql server)
- Mongoose (for connecting to mongodb)
- MongoDb Atlas (as the database)

## Get Started

### clone the repo

### yarn install

### yarn dev

## Possible queries and mutations

### Get all populations

```
query {
  populations {
    area
    country
    totalPopulation
    year
  }
}
```

### Get one population

```
query {
  getOnePopulation(country: "United Kingdom", year: "2019") {
    __typename
    ... on Error {
      reason
    }
    ... on Population {
      country
      year
      area
      totalPopulation
    }
  }
}
```

### Delete population

```
mutation {
  deletePopulation(country: "United Kingdom", year: "2019") {
    __typename
    ... on Success {
      message
    }
    ... on Error {
      reason
    }
  }
}
```

### Add new population

```
mutation {
  addNewPopulation(
    country: "United Kingdom"
    year: "2019"
    area: 242495
    totalPopulation: 66650000
  ) {
    country
    year
    area
    totalPopulation
  }
}
```
