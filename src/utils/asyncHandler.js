const asyncHandler = (requestHndler) => {
  (req, res, nest) => {
    Promise.resolve(requestHndler(req, res, next)).catch((err) => next.err);
  };
};

export { asyncHandler };
