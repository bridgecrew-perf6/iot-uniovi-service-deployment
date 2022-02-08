db.createUser({
    user: "admin",
    pwd: "uniovi",
    roles: [
      {
        role: "dbOwner",
        db: "iotdb"
      }
    ]
  })

db.createCollection("Measure")  