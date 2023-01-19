const corsOptions = {
  origin: [process.env.FRONT_END_URL,"https://anaqua.netlify.app", "http://localhost:3000"],
  credentials: true,
};

export { corsOptions };
