import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  const today = new Date();
  let day = today.getDay();

  if (day === 0 || day === 6) {
    res.render("index.ejs", {
      dayType: "weekend",
      advice: "the perfect time to relax",
    });
    return;
  } else {
    res.render("index.ejs", {
      dayType: "weekday",
      advice: "it's time to work hard",
    });
    return;
  }
  // res.render("index.ejs", {
  //   dayType: "day" + day,
  //   advice: "it's time to work hard",
  // });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});