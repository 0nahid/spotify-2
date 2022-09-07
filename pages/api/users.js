import { initMongoose } from "../../lib/mongose";
import User from "../../models/User";

export default async function handle(req, res) {
    await initMongoose();
    const id = req.query.id;
    const user = await User.findById(id);
    res.json({ user });
}