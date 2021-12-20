const express = require("express");
const app = express();
const port = 3000;

const hewan = [
  { id: 1, nama: "Snowy", spesies: "kucing" },
  { id: 2, nama: "Blacki", spesies: "anjing" },
  { id: 3, nama: "Molly", spesies: "kucing" },
  { id: 4, nama: "Milo", spesies: "kelinci" },
  { id: 5, nama: "Rere", spesies: "kucing" },
];

const middlewareLogger = (req, res, next) => {
  console.log("this is logger");
  next();
};

const middlewarePostChecker = (req, res, next) => {
  const body = req.body;
  const specieses = ["kucing", "anjing", "kelinci"];

  specieses.map((species) => {
    if (body["spesies"] == species) {
      next();
    }
  });

  res.status(404).send({ error: "Species not valid" });
};

app.use(express.json(), middlewareLogger);

app.get("/hewan", (req, res) => {
  res.status(200).send({ message: "success get data Pet", hewan: hewan });
});

app.post("/hewan", middlewarePostChecker, (req, res) => {
  const body = req.body;
  const data = {
    id: body["id"],
    nama: body["nama"],
    spesies: body["spesies"],
  };

  hewan.push(data);

  res.status(201).send({ message: "success adding one Pet", hewan: data });
});

app.get("/hewan/:id", (req, res) => {
  const idHewan = req.params.id;
  const hewanById = hewan.filter((data) => data.id == idHewan);

  res
    .status(200)
    .send({ message: "success get data Pet", hewanFilter: hewanById });
});

app.put("/hewan/:id", (req, res) => {
  const body = req.body;
  const idHewan = req.params.id;

  const result = hewan.filter((data) => {
    if (data.id == idHewan) {
      data.nama = body["nama"];
      data.spesies = body["spesies"];
    }
  });

  res.status(200).send({ message: "Hewan is edited" });
});

app.delete("/hewan/:id", (req, res) => {
  const idHewan = req.params.id;

  const result = hewan.map((value, index) => {
    if (value.id == idHewan) {
      hewan.splice(index, 1);
    }
  });

  res.status(200).send({ message: `Hewan ${idHewan} is deleted` });
});

app.listen(port, () => {
  console.log(`Server run in http://localhost:${port}`);
});
