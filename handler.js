'use strict';
const AWS = require('aws-sdk')
var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '943215',
  key: '8ee023791f4005e8154a',
  secret: 'ea932f5b6d34e25e1b0e',
  cluster: 'mt1',
  encrypted: true
});

AWS.config.update({ region: "eu-central-1" });


exports.hello = async (event, context, callback) => {

  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "eu-central-1" });

  const params = {
    TableName: "mvp-chatlog",
    Item: {
      date: Date.now(),
      message: "Bob"
    }
  }

  try {
    const data = await documentClient.put(params).promise();

    console.log(data);
  } catch (err) {
    console.log(err);
  }

  console.log("BEFORE DOCLIENT")


};

exports.addMessageToLogAdmin = async (event, context, callback) => {

  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "eu-central-1" });

  const params = {
    TableName: "mvp-chatlog",
    Item: {
      date: Date.now(),
      message: "Richard isn't going to be in today, just to let you know..."
    }
  }

  try {
    const data = await documentClient.put(params).promise();

    console.log(data);
  } catch (err) {
    console.log(err);
  }

  console.log("BEFORE DOCLIENT")


};

exports.addMessageToLogKitchen = async (event, context, callback) => {

  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "eu-central-1" });

  const params = {
    TableName: "mvp-chatlog",
    Item: {
      date: Date.now(),
      message: "Coming right up! :)"
    }
  }

  try {
    const data = await documentClient.put(params).promise();

    console.log(data);
  } catch (err) {
    console.log(err);
  }

  console.log("BEFORE DOCLIENT")


};

exports.addMessageToLogCustomer = async (event, context, callback) => {

  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "eu-central-1" });

  const params = {
    TableName: "mvp-chatlog",
    Item: {
      date: Date.now(),
      message: "Excuse me, but may i have some more butter, please?"
    }
  }

  try {
    const data = await documentClient.put(params).promise();

    console.log(data);
  } catch (err) {
    console.log(err);
  }

  console.log("BEFORE DOCLIENT")


};

exports.createClient = async (event, context, callback) => {

  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "eu-central-1" });

  const params = {
    TableName: "mvp-users",
    Item: {
      date: Date.now(),
      contact: "Richard Dawkins",
      restaurantname: "Brilliant Burritos",
      notables: 15
      
    }
  }

  try {
    const data = await documentClient.put(params).promise();

    console.log(data);
  } catch (err) {
    console.log(err);
  }

  console.log("BEFORE DOCLIENT")


};

exports.saveFileToS3 = async (event, context, callback) => {
  var s3 = new AWS.S3();
      var folder = "QR"
      var filename = "Qr#1"
      var bucketName = 'mvp-qrcodes'
      var keyName = getKeyName(folder, filename);
      var content = 'I Am Not Qr';
  
      var params = { Bucket: bucketName, Key: keyName, Body: content };
  
      s3.putObject(params, function (err, data) {
          if (err)
              console.log(err)
          else
              console.log("Successfully saved object to " + bucketName + "/" + keyName);
      });

  
  function getKeyName(folder, filename) {
      return folder + '/' + filename;
  }

};

exports.creatTable = async (event, context, callback) => {

  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08", region: "eu-central-1" });
  pusher.trigger('my-channel', 'my-event', {
    "message": "hello world"
  });
  var tableParams = {
    AttributeDefinitions: [
      {
        AttributeName: 'slotPosition',
        AttributeType: 'N'
      },
      {
        AttributeName: 'imageFile',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'slotPosition',
        KeyType: 'HASH'
      },
      {
        AttributeName: 'imageFile',
        KeyType: 'RANGE'
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    },
    TableName: 'TABLE_NAME',
    StreamSpecification: {
      StreamEnabled: false
    }
  };

  try {
    const dota = await ddb.createTable(tableParams).promise()
    console.log(dota);
  } catch (err) {
    console.log(err);
  }

}
