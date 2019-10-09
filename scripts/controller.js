


var topicpub="mibel/fan/status"
var thisStat="The fan is currently turned "
client = mqtt.connect(" wss://test.mosquitto.org:8081/mqtt");
client.on("connect", function () {
  client.subscribe(topicpub);
  $("button").click(function () {
    var id = $(this).attr("id");
    client.publish(topicpub, thisStat + id + "_" + (moment().format('MMMM Do YYYY, h:mm:ss a')));
  })
  client.on("message", function (topic, payload) {
    var payload = payload.toString().split("_")
    console.log(payload.join(","))
    $("#status").text(payload[0])
  })

})


