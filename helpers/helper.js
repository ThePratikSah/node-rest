// this method will help for writing data
exports.create = async (req, Model) => {
  const data = new Model(req.body);
  return await data.save();
};

// this method will help for general query
exports.read = async (req, Model) => {
  let { limit = 10, skip = 0, term, fields = "" } = req.query;

  if (fields) fields = fields.replace(",", " ");
  let query = {};
  if (term) {
    query = {
      name: { $regex: ".*" + term + ".*", $options: "i" },
    };
  }
  return await Model.find(query, fields)
    .limit(limit)
    .skip(skip * limit);
};

// this method will help in getting single record
exports.readOne = async (req, Model) => {
  let { id } = req.params;
  let { fields = "" } = req.query;
  if (fields) fields = fields.replace(",", " ");
  return await Model.findById(id, fields);
};

// this method will help up in updating a document
exports.update = async (req, Model) => {
  return await Model.findByIdAndUpdate(req.params.id, req.body);
};

// this method will delete a record
exports.deleteOne = async (req, Model) => {
  return await Model.deleteOne({ _id: req.params.id });
};
