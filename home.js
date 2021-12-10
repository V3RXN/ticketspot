function loadEvents(){

    //Retrieving Image
    firebase.database().ref("events/e1/image").on('value',function(snapshot){
        var srclink = snapshot.val();
        document.getElementById("e1-img").src = srclink;
    })

    //Retrieving Event Name
    firebase.database().ref("events/e1/ename").on('value',function(snapshot){
        var title = snapshot.val();
        document.getElementById("e1-title").innerText = title;
    })

    //Retrieving Event Date
    firebase.database().ref("events/e1/date_text").on('value',function(snapshot){
        var date = snapshot.val();
        document.getElementById("e1-date").innerText = date;
    })

    //Retrieving Event Venue
    firebase.database().ref("events/e1/venue").on('value',function(snapshot){
        var venue = snapshot.val();
        document.getElementById("e1-venue").innerText = "@ " +venue;
    })
    
    //Retrieving Image
    firebase.database().ref("events/e2/image").on('value',function(snapshot){
        var srclink = snapshot.val();
        document.getElementById("e2-img").src = srclink;
    })

    //Retrieving Event Name
    firebase.database().ref("events/e2/ename").on('value',function(snapshot){
        var title = snapshot.val();
        document.getElementById("e2-title").innerText = title;
    })

     //Retrieving Event Date
     firebase.database().ref("events/e2/date_text").on('value',function(snapshot){
        var date = snapshot.val();
        document.getElementById("e2-date").innerText = date;
    })

    //Retrieving Event Venue
    firebase.database().ref("events/e2/venue").on('value',function(snapshot){
        var venue = snapshot.val();
        document.getElementById("e2-venue").innerText = "@ " +venue;
    })


    //Retrieving Image
    firebase.database().ref("events/e3/image").on('value',function(snapshot){
        var srclink = snapshot.val();
        document.getElementById("e3-img").src = srclink;
    })

    //Retrieving Event Name
    firebase.database().ref("events/e3/ename").on('value',function(snapshot){
        var title = snapshot.val();
        document.getElementById("e3-title").innerText = title;
    })

     //Retrieving Event Date
     firebase.database().ref("events/e3/date_text").on('value',function(snapshot){
        var date = snapshot.val();
        document.getElementById("e3-date").innerText = date;
    })

    //Retrieving Event Venue
    firebase.database().ref("events/e3/venue").on('value',function(snapshot){
        var venue = snapshot.val();
        document.getElementById("e3-venue").innerText = "@ " +venue;
    })

    //Retrieving Image
     firebase.database().ref("events/e4/image").on('value',function(snapshot){
        var srclink = snapshot.val();
        document.getElementById("e4-img").src = srclink;
    })

    //Retrieving Event Name
    firebase.database().ref("events/e4/ename").on('value',function(snapshot){
        var title = snapshot.val();
        document.getElementById("e4-title").innerText = title;
    })

     //Retrieving Event Date
     firebase.database().ref("events/e4/date_text").on('value',function(snapshot){
        var date = snapshot.val();
        document.getElementById("e4-date").innerText = date;
    })

    //Retrieving Event Venue
    firebase.database().ref("events/e4/venue").on('value',function(snapshot){
        var venue = snapshot.val();
        document.getElementById("e4-venue").innerText = "@ " +venue;
    })

    //Retrieving Image
    firebase.database().ref("events/e5/image").on('value',function(snapshot){
        var srclink = snapshot.val();
        document.getElementById("e5-img").src = srclink;
    })

    //Retrieving Event Name
    firebase.database().ref("events/e5/ename").on('value',function(snapshot){
        var title = snapshot.val();
        document.getElementById("e5-title").innerText = title;
    })

     //Retrieving Event Date
     firebase.database().ref("events/e5/date_text").on('value',function(snapshot){
        var date = snapshot.val();
        document.getElementById("e5-date").innerText = date;
    })

    //Retrieving Event Venue
    firebase.database().ref("events/e5/venue").on('value',function(snapshot){
        var venue = snapshot.val();
        document.getElementById("e5-venue").innerText = "@ " +venue;
    })

    //Retrieving Image
    firebase.database().ref("events/e6/image").on('value',function(snapshot){
        var srclink = snapshot.val();
        document.getElementById("e6-img").src = srclink;
    })

    //Retrieving Event Name
    firebase.database().ref("events/e6/ename").on('value',function(snapshot){
        var title = snapshot.val();
        document.getElementById("e6-title").innerText = title;
    })

     //Retrieving Event Date
     firebase.database().ref("events/e6/date_text").on('value',function(snapshot){
        var date = snapshot.val();
        document.getElementById("e6-date").innerText = date;
    })

    //Retrieving Event Venue
    firebase.database().ref("events/e6/venue").on('value',function(snapshot){
        var venue = snapshot.val();
        document.getElementById("e6-venue").innerText = "@ " +venue;
    })
    
    //Retrieving Image
    firebase.database().ref("events/e7/image").on('value',function(snapshot){
        var srclink = snapshot.val();
        document.getElementById("e7-img").src = srclink;
    })

    //Retrieving Event Name
    firebase.database().ref("events/e7/ename").on('value',function(snapshot){
        var title = snapshot.val();
        document.getElementById("e7-title").innerText = title;
    })

     //Retrieving Event Date
     firebase.database().ref("events/e7/date_text").on('value',function(snapshot){
        var date = snapshot.val();
        document.getElementById("e7-date").innerText = date;
    })

    //Retrieving Event Venue
    firebase.database().ref("events/e7/venue").on('value',function(snapshot){
        var venue = snapshot.val();
        document.getElementById("e7-venue").innerText = "@ " +venue;
    })

    //Retrieving Image
    firebase.database().ref("events/e8/image").on('value',function(snapshot){
        var srclink = snapshot.val();
        document.getElementById("e8-img").src = srclink;
    })

    //Retrieving Event Name
    firebase.database().ref("events/e8/ename").on('value',function(snapshot){
        var title = snapshot.val();
        document.getElementById("e8-title").innerText = title;
    })

    //Retrieving Event Date
    firebase.database().ref("events/e8/date_text").on('value',function(snapshot){
        var date = snapshot.val();
        document.getElementById("e8-date").innerText = date;
    })

    //Retrieving Event Venue
    firebase.database().ref("events/e8/venue").on('value',function(snapshot){
        var venue = snapshot.val();
        document.getElementById("e8-venue").innerText = "@ " +venue;
    })

    //Retrieving Image
    firebase.database().ref("events/e9/image").on('value',function(snapshot){
        var srclink = snapshot.val();
        document.getElementById("e9-img").src = srclink;
    })

    //Retrieving Event Name
    firebase.database().ref("events/e9/ename").on('value',function(snapshot){
        var title = snapshot.val();
        document.getElementById("e9-title").innerText = title;
    })

     //Retrieving Event Date
     firebase.database().ref("events/e9/date_text").on('value',function(snapshot){
        var date = snapshot.val();
        document.getElementById("e9-date").innerText = date;
    })

    //Retrieving Event Venue
    firebase.database().ref("events/e9/venue").on('value',function(snapshot){
        var venue = snapshot.val();
        document.getElementById("e9-venue").innerText = "@ " +venue;
    })
    
}

window.onload = loadEvents;
