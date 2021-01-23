export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    res.end(
      JSON.stringify({
        status: "success",
        code: 200,
      })
    );
  } else {
    res.end(
      JSON.stringify({
        status: "failed",
        code: 404,
      })
    );
  }
};
