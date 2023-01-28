import Utils from "../utils/Utils";

const WsTestEmitterResponse = {
    "method": "put",
    "action": "feed",
    "type": "debates",
    "data": [
        {
            "id": Utils.generateRandomNumber(),
            "score": Utils.generateRandomNumber(0, 100),
            "userId": Utils.generateRandomNumber(0, 1000),
            "title": "Is global warming destroying earth?",
            "activeUserId": 7,
            "lastActiveUserId": null,
            "activeSide": 1,
            "type": 2,
            "description": "Glaciers are melting, temperatures are at an all time high and species are dying. Is this the cause of global warming?",
            "proposition": "Yes",
            "opposition": "No",
            "maxUsers": 4,
            "banner": "https://images.unsplash.com/photo-1600251215707-95bb01c73f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzcxNjh8MHwxfHNlYXJjaHw0fHxqfGVufDB8fHx8MTY1OTg4ODUwMg&ixlib=rb-1.2.1&q=80&w=1080",
            "bannerAttribution": "",
            "source": null,
            "permalink": "is-global-warming-real",
            "createdOn": "2022-07-22T11:23:13.000Z",
            "endedOn": null,
            "timerStartedOn": "2022-07-22T15:23:13.000Z",
            "timerEndedOn": "2022-07-23T15:23:13.000Z",
            "updatedOn": "2022-10-04T04:00:00.000Z",
            "deletedOn": null,
            "status": 1,
            "isPrivate": 0,
            "turnLength": 24,
            "typeName": "Free For All",
            "totalVotes": {
                "proposition": 0,
                "opposition": 0
            },
            "categories": [],
            "arguments": [
                {
                    "argumentId": 167,
                    "userId": 7,
                    "debateId": 94,
                    "title": null,
                    "content": "fgsdfgsdf",
                    "isProposition": 1,
                    "source": "fsdghsdfhfsd",
                    "createdOn": "2022-08-27T12:34:56.000Z",
                    "updatedOn": null,
                    "deletedOn": null,
                    "status": 1
                }
            ],
            "tags": [
                {
                    "tagId": 23,
                    "debateId": 94,
                    "tag": "global"
                },
                {
                    "tagId": 24,
                    "debateId": 94,
                    "tag": "warming"
                },
                {
                    "tagId": 25,
                    "debateId": 94,
                    "tag": "climate change"
                }
            ],
            "activeUser": {
                "id": 7,
                "score": 100,
                "firstName": "Chuck",
                "lastName": "Hriczko",
                "displayName": "chuckhriczko",
                "color": "10b981",
                "dateOfBirth": "1985-10-09T16:00:00.000Z",
                "image": "https://ik.imagekit.io/y55csmwdr/users/profile/avatar_J_cQ4qecR.jpg",
                "banner": "https://ik.imagekit.io/y55csmwdr/users/profile/banner-1989514_1280_DblUK225B.png",
                "location": "Lansford, PA",
                "bio": "This is a basic bio filled with characters called letters that, when stringed together, make something we call words.",
                "createdOn": "2022-05-21T07:49:00.000Z",
                "minutesActive": 10515,
                "isProposition": 1,
                "votes": 6,
                "debateUserId": 43,
                "isOnline": false,
                "qualifications": null,
                "winsLosses": {
                    "wins": [],
                    "losses": []
                },
                "settings": {
                    "userId": 7,
                    "canNotify": 1,
                    "maxNotify": 10,
                    "preferDisplayName": 0
                }
            },
            "propositionUsers": [
                {
                    "id": 7,
                    "score": 100,
                    "firstName": "Chuck",
                    "lastName": "Hriczko",
                    "displayName": "chuckhriczko",
                    "color": "10b981",
                    "dateOfBirth": "1985-10-09T16:00:00.000Z",
                    "image": "https://ik.imagekit.io/y55csmwdr/users/profile/avatar_J_cQ4qecR.jpg",
                    "banner": "https://ik.imagekit.io/y55csmwdr/users/profile/banner-1989514_1280_DblUK225B.png",
                    "location": "Lansford, PA",
                    "bio": "This is a basic bio filled with characters called letters that, when stringed together, make something we call words.",
                    "createdOn": "2022-05-21T07:49:00.000Z",
                    "minutesActive": 10515,
                    "isProposition": 1,
                    "votes": 6,
                    "debateUserId": 43,
                    "isOnline": false,
                    "qualifications": null,
                    "winsLosses": {
                        "wins": [],
                        "losses": []
                    },
                    "settings": {
                        "userId": 7,
                        "canNotify": 1,
                        "maxNotify": 10,
                        "preferDisplayName": 0
                    }
                }
            ],
            "oppositionUsers": [],
            "users": [
                {
                    "id": 7,
                    "score": 100,
                    "firstName": "Chuck",
                    "lastName": "Hriczko",
                    "displayName": "chuckhriczko",
                    "color": "10b981",
                    "dateOfBirth": "1985-10-09T16:00:00.000Z",
                    "image": "https://ik.imagekit.io/y55csmwdr/users/profile/avatar_J_cQ4qecR.jpg",
                    "banner": "https://ik.imagekit.io/y55csmwdr/users/profile/banner-1989514_1280_DblUK225B.png",
                    "location": "Lansford, PA",
                    "bio": "This is a basic bio filled with characters called letters that, when stringed together, make something we call words.",
                    "createdOn": "2022-05-21T07:49:00.000Z",
                    "minutesActive": 10515,
                    "isProposition": 1,
                    "votes": 6,
                    "debateUserId": 43,
                    "isOnline": false,
                    "qualifications": null,
                    "winsLosses": {
                        "wins": [],
                        "losses": []
                    },
                    "settings": {
                        "userId": 7,
                        "canNotify": 1,
                        "maxNotify": 10,
                        "preferDisplayName": 0
                    }
                }
            ]
        }
    ],
    "error": null
}
export default WsTestEmitterResponse;