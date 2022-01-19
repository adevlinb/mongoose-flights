const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
};

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
    console.log(flights);
    res.redirect('flights/index');
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        if(err) return res.redirect('/');
    res.render('flights/index', { flights })
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {flight});
    });
}