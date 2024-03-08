const express = require('express');
const apicache = require('apicache')
const v1workoutRouter = require('./v1/routes/workoutRoutes');
const v1memberRouter = require('./v1/routes/memberRoutes');
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

app.use(express.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1workoutRouter);
app.use("/api/v1/members", v1memberRouter);

app.listen(PORT, () =>{ 
    console.log(`🚀 server listening on port ${PORT}`); 
    V1SwaggerDocs(app, PORT);
});