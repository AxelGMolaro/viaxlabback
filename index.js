const express = require("express");
const app = express();

app.get("/getActivities", (req, res) => {
    const activities = [
        
      {
        activityId : 1,
        title : "Subida al cerro catedral",
        type:"ACTIVITY",
        startDate : "2022-01-22 01:30:00",
        endDate : "2022-01-22 23:30:00",
        status : "IN_PROGRESS",
      },
      {
       activityId : 2,
        title : "Fiesta de espuma",
       type:"PARTY",
        startDate : "2022-01-22 01:30:00",
        endDate : "2022-01-22 23:30:00",
       status : "DONE",
      },
      {
        activityId : 3,
        title : "Desayuno",
        type:"FOOD",
          startDate : undefined,
          endDate : undefined,
          status : undefined,
      },




      {
        activityId : 4,
         title : "Fiesta de espuma",
        type:"PARTY",
         startDate : "2022-01-23 01:30:00",
         endDate : "2022-01-26 23:30:00",
        status : "DONE",
       },
    ]
  res.send(activities);
});

app.listen(8080, () => {
  console.log("Listening ...");
});

// exports.app = functions.https.onRequest(app);
