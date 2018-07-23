define({ "api": [
  {
    "type": "POST",
    "url": "/messages/",
    "title": "Add new message",
    "version": "0.0.3",
    "group": "Messages",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "^[a-zA-Z]{3",
              "}$"
            ],
            "optional": true,
            "field": "username",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..512",
            "optional": false,
            "field": "message",
            "description": "<p>User message</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..60",
            "optional": true,
            "field": "show",
            "defaultValue": "30",
            "description": "<p>Show time in seconds</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"message\": \"test@user.com\",\n    \"show\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "24",
            "optional": false,
            "field": "_id",
            "description": "<p>Message ObjectId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/messages/index.js",
    "groupTitle": "Messages",
    "name": "PostMessages"
  },
  {
    "type": "POST",
    "url": "/messages/",
    "title": "Add new message",
    "version": "0.0.2",
    "group": "Messages",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "^[a-zA-Z]{3",
              "}$"
            ],
            "optional": false,
            "field": "username",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "3..512",
            "optional": false,
            "field": "message",
            "description": "<p>User message</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..60",
            "optional": true,
            "field": "show",
            "defaultValue": "30",
            "description": "<p>Show time in seconds</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "test",
            "description": "<p>Test string</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"message\": \"test@user.com\",\n    \"show\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "24",
            "optional": false,
            "field": "_id",
            "description": "<p>Message ObjectId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/messages/_apidoc.js",
    "groupTitle": "Messages",
    "name": "PostMessages"
  },
  {
    "type": "POST",
    "url": "/users/register",
    "title": "Register new user",
    "version": "0.0.1",
    "group": "Users",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..100",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..100",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"test@user.com\",\n    \"password\": \"qwerty123\"\n}",
          "type": "json"
        },
        {
          "title": "Second-Request-Example:",
          "content": "{\n    \"email\": \"test1@user.com\",\n    \"password\": \"qwerty1231\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "24",
            "optional": false,
            "field": "_id",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "5..100",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addedAt",
            "description": "<p>User creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>User last update date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n    \"_id\": \"2342134rfaserqw3\",\n    \"email\": \"test@user.com\",\n    \"password\": \"aeRQAw34wrfaw3345a\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/users/index.js",
    "groupTitle": "Users",
    "name": "PostUsersRegister"
  }
] });
