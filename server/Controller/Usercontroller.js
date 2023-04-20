const User = require("../Models/User");
// const userInfo = require("../Models/userInfo");
const bcrypt = require("bcrypt");
class Usercontroller {

  static userInfo = async (req, res) => {
    console.log(req.body);
    const { email, name, startDate, EndDate } = req.body;
    if (!email || !name || !startDate || !EndDate) {
      return res.status(422).json({ error: "invalid data" });
    } 
    try {
      const alreadyUser = await User.findOne({ email: email });
      if (alreadyUser) {
        const result = await User.updateOne(
          { email: email },
          { $set: { name: name, subStart: startDate, subEnd: EndDate } }
        );
        console.log(result);
        return res.status(201).json({ todata: result });
      } else {
        return res.status(422).json("user not there");
      }
    } catch (error) {
      console.log(error);
    }
  };

  static register = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "invalid data" });
    }
    try {
      const userExit = await User.findOne({ email: email });
      if (userExit) {
        return res.status(422).json({ error: "already registered user" });
      }
      const spassword = await bcrypt.hash(password, 10);

      const data = new User({
        email: email,
        password: spassword,
      });

      const savedata = await data.save();

      console.log(savedata);
      if (savedata) {
        res.status(201).json({ message: "successfully registered User" });
      } else {
        res.status(500).json({ error: "registration failed" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(522).json({ error: "invalid data" });
    }
    try {
      const data = await User.findOne({ email: email });
      console.log(data);
      if (data != null) {
        const hashcompare = await bcrypt.compare(password, data.password);

        if (hashcompare) {
          return res.status(201).json({ data: data });
        } else {
          return res.status(422).json({ error: "invalid data" });
        }
      } else {
        return res.status(422).json({ error: "plz complete data" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  static Home = async (req, res) => {
    res.send("");
  };
}

module.exports = { Usercontroller };
