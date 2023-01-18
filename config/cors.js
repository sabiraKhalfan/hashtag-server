const corsOptions = {
  origin: [process.env.FRONT_END_URL, "http://localhost:3000"],
  credentials: true,
};

export { corsOptions };
