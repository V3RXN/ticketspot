function getValuesOfEvent(){
    eid = document.getElementById("eid").value;
    ename = document.getElementById("ename").value;
    date = document.getElementById("date").value;
    venue = document.getElementById("venue").value;
    time = document.getElementById("time").value;
    type = document.getElementById("type").value;
    description = document.getElementById("description").value;
}

function insertEvent(){
    getValuesOfEvent();

    firebase.database().ref('events/'+eid).set({

        ename: ename,
        venue: venue,
        date: date,
        time: time,
        description: description,
        type: type
    })

}

function selectEvent(){
    getValuesOfEvent();

    firebase.database().ref('events/'+eid).on('value', function(snapshot){

        document.getElementById('ename').value = snapshot.val().ename;
        document.getElementById('date').value = snapshot.val().date;
        document.getElementById('venue').value = snapshot.val().venue;
        document.getElementById('time').value = snapshot.val().time;
        document.getElementById('type').value = snapshot.val().type;
        document.getElementById('description').value = snapshot.val().description;
    })
}

function updateEvent(){
    getValuesOfEvent();

    firebase.database().ref('events/'+eid).update({
        ename: ename,
        venue: venue,
        date: date,
        time: time,
        description: description,
        type: type
    })
}

function deleteEvent(){
    getValuesOfEvent();

    firebase.database().ref('events/'+eid).remove();
    clearEvent();
}

function clearEvent(){
    document.getElementById('eid').value = "";
    document.getElementById('ename').value = "";
    document.getElementById('date').value = "";
    document.getElementById('venue').value = "";
    document.getElementById('time').value = "";
    document.getElementById('type').value = "";
    document.getElementById('description').value = "";
}

//Manage Tickets

function getValuesOfTicket(){

    eid = document.getElementById('eid').value;
    type = document.getElementById('type').value;
    price = document.getElementById('price').value;
    available = document.getElementById('available').value;
}

function insertTicket(){

    getValuesOfTicket();

    firebase.database().ref('events/'+eid+ '/tickets/' +type).set({

        price: price,
        available: available
    })
}

function selectTicket(){
    getValuesOfTicket();

    firebase.database().ref('events/'+eid+ '/tickets/'+type).on('value', function(snapshot){

        document.getElementById('price').value = snapshot.val().price;
        document.getElementById('available').value = snapshot.val().available;
    })
}

function updateTicket(){
    getValuesOfTicket();

    firebase.database().ref('events/'+eid+ '/tickets/'+type).update({
        price: price,
        available: available
    })
}

function deleteTicket(){
    getValuesOfTicket();

    firebase.database().ref('events/'+eid+ '/tickets/' +type).remove();
    clearTicket();
}


function clearTicket(){
    document.getElementById('eid').value = "";
    document.getElementById('type').value = "";
    document.getElementById('price').value = "";
    document.getElementById('available').value = "";
}