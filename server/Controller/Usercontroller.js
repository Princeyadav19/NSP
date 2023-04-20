const User = require('../Models/User')
const userInfo = require('../Models/userInfo')
const bcrypt = require('bcrypt');
class Usercontroller {
  static userInfo = async (req, res) => {
    console.log(req.body)
    const { email, name, homeAdd, startDate, EndDate } = req.body

    try {
      const alreadyUser = await userInfo.findOne({ email: email })
      if (alreadyUser) {
        return res.status(201).json({ todata: alreadyUser });
      }
      const isUserPresent = await User.findOne({ email: email });
      if (!isUserPresent) {
        return res.status(422).json({ error: "not registered user" });
      }
      if (
        !email ||
        !name ||
        !startDate ||
        !EndDate
      ) {
        return res.status(422).json({ error: "invalid data" });
      }

      const userData = new userInfo({
        email: email,
        name: name,
        subStart: startDate,
        subEnd: EndDate
      })

      const saveUserData = await userData.save()
      console.log(saveUserData)
      if (saveUserData) {
        res.status(201).json({ message: "successfully saves UserInfo" });
      } else {
        res.status(500).json({ error: "registration failed" });
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  static register = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    if (
      !email ||
      !password
    ) {
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
      console.log(data)
      if (data != null) {
        const hashcompare = await bcrypt.compare(password, data.password);

        if (hashcompare) {
          return res.status(201).json({ data: data });
        } else {
          return res.status(422).json({ error: "invalid data" });
        }
      }
      else {
        return res.status(422).json({ error: "plz complete data" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static Home = async (req, res) => {
    res.send("")
  }
}


module.exports = { Usercontroller };