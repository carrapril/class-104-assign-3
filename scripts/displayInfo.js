function displayInformation(){
    document.getElementById("salonInformation").innerHTML=`
    <p>${salon.name}</p>
    <p>ADDRESS: ${salon.address.street}</p> 
    <p>TELEPHONE: ${salon.address.number} </p>
    <p>Monday - Friday</p>
    <p>${salon.hours.open} TO ${salon.hours.close}</p>
    `;
}
displayInformation();



