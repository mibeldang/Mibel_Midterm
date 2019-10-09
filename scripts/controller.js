client = mqtt.connect(" wss://test.mosquitto.org:8081/mqtt");
client.on("connect", function () {
  client.subscribe("mibel/fan/status");
  $("button").click(function () {
    var id = $(this).attr("id");
    client.publish("mibel/fan/status", "The fan is currently turned " + id+"_"+(moment().format('MMMM Do YYYY, h:mm:ss a')));
  })
  client.on("message", function (topic, payload) {
    var payload = payload.toString().split("_")
    console.log(payload.join(","))
    $("#status").text(payload[0])
  })

})


