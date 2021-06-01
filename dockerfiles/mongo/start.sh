#!/bin/bash

mongo test --eval '
  db.createUser({
      user:"root",
      pwd:"123",
      roles:[{
          role:"readWrite",
          db:"Titan"
      }]
  });
  db.auth("root", "123);
'