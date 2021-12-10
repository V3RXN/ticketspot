let urlParams = new URLSearchParams(document.location.search)
const eid= urlParams.get('eventid');
reservationNo = 0;

window.onload = loadCurrentEvent;

function loadCurrentEvent(){

    firebase.database().ref("events/" +eid+ "/ename").on('value',function(snapshot){
        title = snapshot.val();
        
        document.getElementById("event-name").innerText = title;
    })

    firebase.database().ref("events/" +eid+ "/type").on('value',function(snapshot){
        
        type = snapshot.val();
        
    })

    firebase.database().ref("events/" +eid+ "/image").on('value',function(snapshot){
        var srclink = snapshot.val();
        document.querySelector("img").src = srclink;
    })

    firebase.database().ref("events/" +eid+ "/date_text").on('value',function(snapshot){

        var date = snapshot.val();
        var joineddate = "on "+ date;
        document.getElementById("event-date").innerText = joineddate;
    })

    firebase.database().ref("events/" +eid+ "/time").on('value',function(snapshot){

        var time = snapshot.val();
        var joinedtime = "from "+ time+ " onwards";
        document.getElementById("event-time").innerText = joinedtime;
    })

    firebase.database().ref("events/" +eid+ "/venue").on('value',function(snapshot){

        var venue= snapshot.val();
        var joinedvenue= "at "+ venue;
        document.getElementById("event-venue").innerText = joinedvenue;
    })

    firebase.database().ref("events/" +eid+ "/description").on('value',function(snapshot){
        var description = snapshot.val();

        document.getElementById("event-description").innerText = description;
    })

    firebase.database().ref("events/" +eid+ "/description").on('value',function(snapshot){
        var description = snapshot.val();

        document.getElementById("event-description").innerText = description;
    })


    ticketType = "Silver";
    firebase.database().ref("events/"+eid+"/tickets/"+ticketType).on('value',function(snapshot){

        var quantity = snapshot.val().available;
        if (quantity>0){
            var quantity_placeholder = "Only " + quantity +" available";
        }
        else{
            var quantity_placeholder = "Not available";
        }
        document.getElementById("ticket-quantity").placeholder = quantity_placeholder;
    })
}

document.querySelector('#ticket-types').addEventListener('change', function() {

    quantity = document.querySelector("#ticket-quantity").value;
    console.log(quantity)

    if(this.value == "Gold"){

        ticketType = "Gold";

        firebase.database().ref("events/"+eid+"/tickets/"+ticketType).on('value',function(snapshot){

            var quantity = snapshot.val().available;
            var quantity_placeholder = "Only " + quantity +" available";
            document.getElementById("ticket-quantity").placeholder = quantity_placeholder;
        })
    }

    else if (this.value == "Platinum"){

        ticketType = "Platinum";

        firebase.database().ref("events/"+eid+"/tickets/"+ticketType).on('value',function(snapshot){

            var quantity = snapshot.val().available;
            var quantity_placeholder = "Only " + quantity +" available";
            document.getElementById("ticket-quantity").placeholder = quantity_placeholder;
        })
    }

    else if (this.value == "Silver"){

        ticketType = "Silver";

        firebase.database().ref("events/"+eid+"/tickets/"+ticketType).on('value',function(snapshot){

            var quantity = snapshot.val().available;
            var quantity_placeholder = "Only " + quantity +" available";

            document.getElementById("ticket-quantity").placeholder = quantity_placeholder;
        })
    }

    if(quantity != null){
        firebase.database().ref("events/"+eid+"/tickets/"+ticketType).on('value',function(snapshot){

            var ticketPrice = snapshot.val().price;
            var total = ticketPrice * quantity;
            document.getElementById("total-amount").placeholder = total;
        })
    }

});

document.querySelector("#ticket-quantity").addEventListener('input',function(){

    quantity = this.value;

    $(ticketType = document.querySelector('#ticket-types').value);
    
    firebase.database().ref("events/"+eid+"/tickets/"+ticketType).on('value',function(snapshot){

        var ticketPrice = snapshot.val().price;
        var total = ticketPrice * quantity;
        document.getElementById("total-amount").placeholder = total;
    })

})

function reserveTickets(){

        nowAvailableTickets = availability - quantity;

        soldToNum = Number(sold);
 
        updateSold = soldToNum+ Number(quantity);

        //Update number of available tickets in the database
        firebase.database().ref('events/'+eid+'/tickets/' +ticketType).update({
            available: nowAvailableTickets,
            sold: Number(updateSold)
        })

        userid = localStorage.getItem('userid');
        
        var ref = firebase.database().ref("users/"+userid+"/reservations");
        ref.once("value")
        .then(function(snapshot){

            reservationNoFromDB = snapshot.numChildren();
        
            reservationNo = reservationNoFromDB;
            reservationNo++;
            
            firebase.database().ref('users/'+userid+'/reservations/' +reservationNo).set({

                eid: eid,
                ename: title,
                type: type,
                ticketType: ticketType,
                numberoftickets: quantity
            })
        })

        alert("Reserved Successfully!")
}

function validate(){

    ticketType = document.querySelector('#ticket-types').value;
    quantity = document.querySelector('#ticket-quantity').value;
    total = document.querySelector('#total-amount').value;

    if(quantity>0){

        checkAvailability();
    }
    else{
        alert('Please select one or more tickets to reserve!')
    }

}

function checkAvailability(){

    firebase.database().ref("events/"+eid+"/tickets/"+ticketType).on('value',function(snapshot){

        availability = snapshot.val().available;
        sold = snapshot.val().sold;
    })

    if(quantity<=availability){

        reserveTickets();

    }
    else{
        alert("The amount of tickets you selected is not available! Please try again.")
    }

}