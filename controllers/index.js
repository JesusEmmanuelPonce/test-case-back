const Employee = require('../models/employee');

//Home
exports.home = (req, res) => {
    try{
		res.send('API made by Jesus Ponce');
	}catch (e) {
		console.log(e);
		res.status(500).json({
			message: 'Error en el servidor'
		});
	}
}

//Add employee
exports.addEmployee = async(req, res) => {
    const employee = new Employee(req.body);
    try {
        await employee.save();
        res.json({
			msg: 'Employee added'
		});
    } catch (e) {
        console.log(e);
		res.status(500).json({
			message: 'internal server error :('
		});
    }
}

//Show all employees
exports.showEmployees = async(req, res) => {
    try {
        const employees = await Employee.find({});
        res.json(employees)
    } catch (e) {
        console.log(e);
		res.status(500).json({
			message: 'internal server error :('
		});
    }
}

exports.oneEmployee = async(req, res) => {
    try {
        const employee = await Employee.findOne({_id : req.params.id});
        res.json(employee)
    } catch (e) {
        console.log(e);
		res.status(500).json({
			message: 'internal server error :('
		});
    }
}

exports.deleteEmployee = async(req, res) => {
    try {
        await Employee.findOneAndDelete({_id : req.params.id});
        res.json({msg: 'Employee deleted'})
    } catch (e) {
        console.log(e);
		res.status(500).json({
			message: 'internal server error :('
		});
    }
}

exports.updateEmployee = async(req, res) => {
    try {
        const employee = await Employee.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(employee)
    } catch (e) {
        console.log(e);
		res.status(500).json({
			message: 'internal server error :('
		});
    }
}