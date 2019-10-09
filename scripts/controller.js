client = mqtt.connect(" wss://test.mosquitto.org:8081/mqtt");
client.on("connect", function () {
  client.subscribe("mibel/fan/status");
  $("button").click(function () {
    var id = $(this).attr("id");
    client.publish("mibel/fan/status", "The fan is currently turned " + id);
  })

  client.on("message", function (topic, payload) {
    $("#status").text(payload)
  })

})


