const express = require("express");
const app = express();

app.use(express.json());

app.post("/students", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const course = req.body.course;

    res.json({
        message: "Student created successfully",
        student: {
            name: name,
            age: age,
            course: course
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});