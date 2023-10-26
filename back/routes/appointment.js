import express from "express"
import User from "../models/user.js"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Appsc from "../models/App.js";
import Doctor from "../models/doctor.js";


const router = express.Router()


router.post('/newapp' , async(req,res) => {
    const {data} = req.body
    try {
        if(!data){
            return res.status(400).json({message:"All fields are required"})
        }
        const newapp = await new Appsc({
            userid : data.patientId,
            docid : data.doctorId,
            data : data.selectedDate,
            time : data.selectedSlot,
            price : data.selectedSlotPrice,
        })
       await newapp.save()
        res.status(200).json({message:"Appointment booked successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
}
)

router.post("/login", async (req, res) => {
    const { usermain } = req.body;
    try {
        if (!usermain.uid) {
            return res.status(400).json({ message: "All fields are required" }); // Use 'return' to exit the function after sending a response
        }
        const existingUser = await User.findOne({ userid: usermain.uid });

        if (existingUser) {
            const token = jwt.sign({ id: existingUser._id }, 'yowaimo', { expiresIn: '10d' });
            return res.status(200).json({ token }); 
        } else {
            const newUser = new User({
                name: usermain.name,
                email: usermain.email,
                mobile: usermain.mobile,
                userid: usermain.uid,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, 'yowaimo', { expiresIn: '10d' });
            return res.status(200).json({ token }); 
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});


router.get("/myuserapps/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const myapps = await Appsc.find({ userid: id });
        res.status(200).json(myapps);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
})

router.get("/mydocapps/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const myapps = await Appsc.find({ docid: id });
        // myapps = myapps.filter((app) => {
        //     const today = new Date();
        //     const appDate = new Date(app.data);
        //     return appDate.getTime() >= today.getTime();
        // });
        res.status(200).json(myapps);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
})

// router.get("/doctors/:query", async (req, res) => {
//     const 
// });



router.post('/doctorsignup', async (req, res) => {
    const { data } = req.body;
    try {
      const newDoctor = new Doctor(data);
      await newDoctor.save();
      res.status(201).json({ message: 'Doctor registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  })


  router.post('/doctorlogin', async (req, res) => {
    try {
      const { data } = req.body;
  
      if (!data || !data.username || !data.password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
  
      const doc = await Doctor.findOne({ username: data.username }).select('+password');
  
      if (!doc) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Compare the provided password with the hashed password stored in the database
      const isPasswordCorrect = data.password === doc.password;
  
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // If the password is correct, generate a JWT token
      const token = await jwt.sign({ id: doc._id }, 'yowaimo', { expiresIn: '10d' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
  
  
  


router.get('/doctors', async (req, res) => {
    try {
      const doctors = await Doctor.find();
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
    );

router.get('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const doctor = await Doctor.findById(id);
      res.status(200).json(doctor);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
    );


    router.get('/doctors/:query', async (req, res) => {
        const { query } = req.params;
        try {
          const fuzzyQuery = new RegExp(escapeRegex(query), 'i');
      
          const doctors = await Doctor.find({ $or: [
            { name: { $regex: fuzzyQuery } },
            { speciality: { $regex: fuzzyQuery } },
          ] });
      
          res.status(200).json(doctors);
        } catch (error) {
          res.status(500).json({ message: 'Something went wrong' });
        }
      });
      
      function escapeRegex(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      }


      router.get('/patient/:id', async (req, res) => {
        try {
          const patients = await User.find({ userid: req.params.id});
          res.status(200).json(patients);
        } catch (error) {
          res.status(500).json({ message: 'Something went wrong' });
        }
      }
        );


        router.get('/doctor/spec/:query', async (req, res) => {
            const { query } = req.params;
            try {
              const fuzzyQuery = new RegExp(escapeRegex(query), 'i');
          
              const doctors = await Doctor.find({ $or: [
                { speciality: { $regex: fuzzyQuery } },
              ] });
          
              res.status(200).json(doctors);
            } catch (error) {
              res.status(500).json({ message: 'Something went wrong' });
            }
          });
          


      





export default router;