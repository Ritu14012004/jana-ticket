  import express from 'express';
  import v1Router from "./routes/v1"

  const app =express();
  app.use(express.json());

  app.use("/api/v1",v1Router);
  const port=process.env.PORT || 8080

  app.listen(port);