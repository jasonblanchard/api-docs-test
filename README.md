# Testing drakov
## Getting Started

Install dependencies:
```
npm install
```

Install drakov globally:
```
npm install -g drakov
```

NOTE: This drakov needs node v0.10.40 to run.

Start drakov and point to this README file:

```
drakov -f README.md
```

Test it with the client scripts:

```
node get_client.js
```

```
node post_client.js
```

This will use the API Blueprint spec below to generate responses.


FORMAT: 1A
HOST: http://polls.apiblueprint.org/

# Test App

Polls is a simple API allowing consumers to view polls and vote in them.

## Questions Collection [/questions]

### List All Questions [GET]

+ Response 200 (application/json)

        [
            {
                "question": "Favourite programming language?",
                "published_at": "2015-08-05T08:40:51.620Z",
                "choices": [
                    {
                        "choice": "Swift",
                        "votes": 2048
                    }, {
                        "choice": "Python",
                        "votes": 1024
                    }, {
                        "choice": "Objective-C",
                        "votes": 512
                    }, {
                        "choice": "Ruby",
                        "votes": 256
                    }, {
                        "choice": "Javascript",
                        "votes": 123
                    }
                ]
            }
        ]

### Create a New Question [POST]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Request (application/json)

        {
            "question": "Favourite programming language?",
            "choices": [
                "Swift",
                "Python",
                "Objective-C",
                "Ruby",
                "Javacript"
            ]
        }

+ Response 201 (application/json)

    + Headers

            Location: /questions/2

    + Body

            {
                "question": "Favourite programming language?",
                "published_at": "2015-08-05T08:40:51.620Z",
                "choices": [
                    {
                        "choice": "Swift",
                        "votes": 0
                    }, {
                        "choice": "Python",
                        "votes": 0
                    }, {
                        "choice": "Objective-C",
                        "votes": 0
                    }, {
                        "choice": "Ruby",
                        "votes": 0
                    }, {
                        "choice": "Javascript",
                        "votes": 0
                    }
                ]
            }

