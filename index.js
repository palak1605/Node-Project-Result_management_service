const path = require("path");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const index = express();
const sequelize = require("./orm/database");
const Student = require("./models/Student");
const { Console } = require("console");
const login = require("./Authentication/teacherLogin");

//middleware
index.use(express.json());
index.use(express.static("public"));
index.use(express.urlencoded({ extended: true }));

//creating table
sequelize
  .sync()
  .then((result) => {
    console.log("result", result);
  })
  .catch((err) => {
    console.log(err);
  });

index.get("/teacherLogin", (req, res) => {
  res.render("teacherLogin.ejs");
});
index.get("/", (req, res) => {
  res.render("login.ejs");
});
index.get("/list", (req, res) => {
  Student.findAll().then((data) => {
    res.render("list.ejs", { data: data });
  });
});
index.post("/datalist", (req, res) => {
  const loginResult = login(req);

  if (loginResult) {
    res.redirect("/list");
  } else {
    res.render("login.ejs", {
      error: "Invalid credentials. Please try again.",
    });
  }
});
index.get("/find", (req, res) => {
  res.render("find.ejs");
});
index.get("/add", (req, res) => {
  res.render("add.ejs");
});
index.get("/logout", (req, res) => {
  res.render("login.ejs");
});

index.post("/search", (req, res) => {
  const { Roll_No, Name } = req.body;

  Student.findOne({ where: { Roll_No, Name } })
    .then((data) => {
      if (data) {
        res.render("result.ejs", { data: data });
      } else {
        res.render("error.ejs", {
          message: "Result not found. Please check your input.",
        });
      }
    })
    .catch((err) => {
      console.error(err);

      res.render("error.ejs", {
        message: "An unexpected error occurred. Please try again.",
      });
    });
});

index.post("/save", (req, res) => {
  const { Roll_No, Name, Date_of_Birth, Score } = req.body;
  Student.create({
    Roll_No: Roll_No,
    Name: Name,
    Date_of_Birth: Date_of_Birth,
    Score: Score,
  })
    .then((data) => {
      res.render("add.ejs", { data: data });
    })
    .catch((error) => {
  // If there's a unique constraint violation (duplicate Roll_No)
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.render("rollnoerror.ejs", {
          message: "Roll number already exists. Please enter a different Roll number.",
        });
      } else {
// For other errors, log and handle accordingly
        console.error(error);
        res.render("rollnoerror.ejs", {
          message: "An unexpected error occurred. Please try again.",
        });
      }
    });
});


index.get("/delete/:Roll_No", (req, res) => {
  const Roll_No = req.params.Roll_No;

  Student.destroy({ where: { Roll_No: Roll_No } })
    .then((data) => {
      res.redirect("/list");
    })
    .catch((err) => {
      console.error(err);
    });
});
index.get("/edit/:Roll_No", (req, res) => {
  const Roll_No = req.params.Roll_No;

  Student.findOne({ where: { Roll_No: Roll_No } })
    .then((data) => {
      res.render("edit.ejs", { data: data });
    })
    .catch((err) => {
      console.error(err);
    });
});
index.post("/update/:Roll_No", (req, res) => {
  const Roll_No = req.params.Roll_No;

  const Score = req.body.Score;
  Student.update(
    { Score: Score },

    { where: { Roll_No: Roll_No } }
  ).then(() => {
    res.redirect("/list");
  });
});
index.listen(5000, () => {
  console.log("Server is running at port 5000");
});
