const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const MongoURL = "mongodb://localhost:27017/test"

const port = process.env.PORT || 3000

// read an existing user's data by id
app.get('/api/users/:id', (req, res) => {

  try {
    const id = req.params.id

    MongoClient.connect(MongoURL, (err,db) => {
      if ( err ) {
        console.log(`Failed to connect to MongoDB '${MongoURL}'`)
        res.status(500).send("Failed to retrieve user")
      }
      else {
        console.log(`Connected to MongoDB '${MongoURL}'`)
        db.db("test").collection("users").findOne({_id: new mongodb.ObjectID(id)}, (err, result) => {
          if ( err ) {
            console.log(`ERROR: MongoDB findOne failed`)
            console.log(`${err}`)
            res.status(500).send({ status: "ERROR", message: "MongoDB error"})
          }
          else {
            if ( result ) {
                console.log(`User found`)
                res.send({ status: "SUCCESS", result })
              }
              else {
                console.log(`ERROR: User not found`)
                res.send({ status: "ERROR", message: "User not found"})
              }
          }
        })
      }
    })
  }
  catch( e ) {
    res.status(500).send({ status: "ERROR", message: `${e}`})
  }
})

// read an existing user's data by email
app.get('/api/users/findbyemail/:email', (req, res) => {

  try {
    const email = req.params.email

    MongoClient.connect(MongoURL, (err,db) => {
      if ( err ) {
        console.log(`Failed to connect to MongoDB '${MongoURL}'`)
        res.status(500).send("Failed to retrieve user")
      }
      else {
        console.log(`Connected to MongoDB '${MongoURL}'`)
        db.db("test").collection("users").findOne({email: `${email}`}, (err, result) => {
          if ( err ) {
            console.log(`ERROR: MongoDB findOne failed`)
            console.log(`${err}`)
            res.status(500).send({ status: "ERROR", message: "MongoDB error"})
          }
          else {
            if ( result ) {
                console.log(`User found`)
                res.send({ status: "SUCCESS", result })
              }
              else {
                console.log(`ERROR: User not found`)
                res.send({ status: "ERROR", message: "User not found"})
              }
          }
        })
      }
    })
  }
  catch( e ) {
    res.status(500).send({ status: "ERROR", message: `${e}`})
  }
})

function ValidateRequest(req, callback) {

  const Joi = require('joi')
  const any = Joi.any()

  const schema = Joi.object().keys({
    forename: Joi.string(),
    surname: Joi.string(),
    email: Joi.string()
  })

  const result = Joi.validate(schema, req.body, callback)
}

// create a new user
app.post('/api/users', (req, res) => {

  ValidateRequest(req, (err, value) => {
    if ( err ) {
      res.status(422).json({
        status: "ERROR",
        message: "Invalid request data",
        data: req.body
      })
    }
    else {
      MongoClient.connect(MongoURL, (err,db) => {
        if ( err ) {
          console.log(`Failed to connect to MongoDB '${MongoURL}'`)
          res.status(500).send("Failed to add new user")
        }
        else {
          console.log(`Connected to MongoDB '${MongoURL}'`)
          db.db("test").collection("users").insertOne(req.body, (err, result) => {
            if ( err ) {
              console.log(`Failed to insert user`)
              console.log(`${err}`)
              res.status(500).send("Failed to add new user")
            }
            else {
              console.log(`User inserted successfully: id=${result.insertedId}`)
              res.json({
                status: "success",
                id: result.insertedId
              })
            }
          })
        }
      });
    }
  })
})

// update an existing user
app.put('/api/users/:email', (req, res) => {

  ValidateRequest(req, (err, value) => {
    if ( err ) {
      res.status(422).json({
        status: "ERROR",
        message: "Invalid request data",
        data: req.body
      })
    }
    else {
      MongoClient.connect(MongoURL, (err,db) => {
        if ( err ) {
          console.log(`Failed to connect to MongoDB '${MongoURL}'`)
          res.status(500).send("Failed to add new user")
        }
        else {
          console.log(`Connected to MongoDB '${MongoURL}'`)
          db.db("test").collection("users").insertOne(req.body, (err, result) => {
            if ( err ) {
              console.log(`Failed to insert user`)
              console.log(`${err}`)
              res.status(500).send("Failed to add new user")
            }
            else {
              console.log(`User inserted successfully: id=${result.insertedId}`)
              res.json({
                status: "success",
                id: result.insertedId
              })
            }
          })
        }
      })
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
