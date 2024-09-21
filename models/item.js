const Schema = mongoose.Schema;

const itemSchema = new Schema({
    category: String,
    title: String,
    condition: String,
    price: String,
    description: String,
    location: String,
    name: String,
    email: String,
    phone: String,
})

module.exports = mongoose.model("Item", itemSchema);
