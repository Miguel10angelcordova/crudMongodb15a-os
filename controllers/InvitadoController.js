const Invitado = require('../model/Invitado');

module.exports.mostrar = async (req, res) => {
  try {
    const invitados = await Invitado.find({});
    console.log("Datos obtenidos de MongoDB:", invitados);

    res.render('index', { invitadoprincipal: invitados });
  } catch (error) {
    console.error("Error al obtener los invitados:", error);
    res.render('index', { invitadoprincipal: [] });
  }
};

module.exports.crear = async (req, res) => {
  try {
    console.log(req.body);

    const invitados = new Invitado({
      username: req.body.username,   //
      numero: req.body.numero,
      Npersonas: req.body.npersonas,
    });

    await invitados.save(); 
    res.redirect('/');
  } catch (error) {
    console.error('Error al guardar el invitado:', error);
    res.status(500).send('Error al crear el invitado');
  }
};


module.exports.borrar = async (req, res) => {
  try {
    
    const id = req.params.id;
    
    console.log("Intentando eliminar invitado con ID:", id);
    
    
    if (!id) {
      console.error("No se proporcionó un ID válido");
      return res.status(400).send("ID no proporcionado");
    }
    
    
    const resultado = await Invitado.findByIdAndDelete(id);
    
    
    if (!resultado) {
      console.error("No se encontró el invitado con ID:", id);
      return res.status(404).send("Invitado no encontrado");
    }
    
    console.log("Invitado eliminado correctamente:", resultado);
    
    
    res.redirect('/');
  } catch (error) {
    console.error("Error al eliminar el invitado:", error);
    res.status(500).send("Error al eliminar el invitado");
  }
};

module.exports.editar = async (req, res) => {
  try {
    const id = req.body.id_editar.trim();

    console.log("Intentando editar invitado con ID:", id);
    console.log("Datos recibidos:", req.body);

    if (!id) {
      console.error("No se proporcionó un ID válido");
      return res.status(400).send("ID no proporcionado");
    }

    const datosActualizados = {
      username: req.body.username,
      numero: req.body.numero,
      Npersonas: req.body.npersonas
    };

    const resultado = await Invitado.findByIdAndUpdate(id, datosActualizados);

    if (!resultado) {
      console.error("No se encontró el invitado con ID:", id);
      return res.status(404).send("Invitado no encontrado");
    }

    console.log("Invitado actualizado correctamente:", resultado);
    res.redirect('/');
  } catch (error) {
    console.error("Error al actualizar el invitado:", error.message);
    res.status(500).send("Error al actualizar el invitado: " + error.message);
  }
};
