export default {
  "categories": [
    {
      "id": "1",
      "title": 'homelessness',
    },
    {
      "id": "2",
      "title": 'Substance Addicted Births',
    },
    {
      "id": "3",
      "title": 'Mass Shootings',
    },
    {
      "id": "4",
      "title": 'Obesety Epidemic'
    },
    {
      "id": "5",
      "title": 'Teen Vaping'
    },
  ],

  "users": [
    {
    "id": "u1",
    "name": "Fred Streeby",
    "email": "fredstreeby@gmail.com",
    "password": '12345'
    },
    {
      "id": "u2",
      "name": "Matt Brady",
      "email": "maty@gmail.com",
      "password": '12345'
    },
  ],

  "solutions": [
  {
    "id": "s1",
    "userId": "u1",
    "categoryId": "3",
    "modified": "2019-01-03T00:00:00.000Z",
    "content": "I think we should make people take a test similar to a driving test to operate a leathal weapon. "
  },
    {
      "id": "s2",
      "userId": "u2",
      "categoryId": "2",
      "modified": "2019-02-03T00:00:00.000Z",
      "content": "In order to lower the rate of babies that are born addicted to drugs and alchohol, those not ready for children could be offered a monthly monetery incentive to have some form of birth control. This would also cut down on welfare costs."
    },
    {
      "id": "s3",
      "userId": "u1",
      "categoryId": "1",
      "modified": "2019-04-03T00:00:00.000Z",
      "content": "We could build dormitories where people could live and it could have a cafeteria. We should ake mental health housing accessable again. We could decriminalize drug use and offer free rehab."
    },
    {
      "id": "s4",
      "userId": "u2",
      "categoryId": "4",
      "modified": "2019-01-03T00:00:00.000Z",
      "content": "Sed accumsan placerat pellentesque. Vivamus placerat lorem vel purus fermentum mattis. Donec a pharetra sapien, at euismod odio. Mauris molestie sem libero. Curabitur tincidunt auctor ligula, vel imperdiet neque tincidunt eu. Duis eu diam lacus. Pellentesque in ex dui."
    },
    {
      "id": "s5",
      "userId": "u1",
      "categoryId": "1",
      "modified": "2019-01-03T00:00:00.000Z",
      "content": "Sed accumsan placerat pellentesque. Vivamus placerat lorem vel purus fermentum mattis. Donec a pharetra sapien, at euismod odio. Mauris molestie sem libero. Curabitur tincidunt auctor ligula, vel imperdiet neque tincidunt eu. Duis eu diam lacus. Pellentesque in ex dui."
    },
    {
      "id": "s6",
      "userId": "u2",
      "categoryId": "5",
      "modified": "2019-01-03T00:00:00.000Z",
      "content": "Sed accumsan placerat pellentesque. Vivamus placerat lorem vel purus fermentum mattis. Donec a pharetra sapien, at euismod odio. Mauris molestie sem libero. Curabitur tincidunt auctor ligula, vel imperdiet neque tincidunt eu. Duis eu diam lacus. Pellentesque in ex dui."
    }
  ],
  
  "comments": [
    {
      "id": "c1",
      "userId": "u1",
      "solutionId": "s3",
      "content": "This is the best idea ever!"
    },
    {
      "id": "c2",
      "userId": "u2",
      "solutionId": "s2",
      "content": "I do not think that will work. There are many flaws to your idea."
    },
    {
      "id": "c3",
      "userId": "u1",
      "solutionId": "s5",
      "content": "Ba humbug!"
    },
    {
      "id": "c4",
      "userId": "u2",
      "solutionId": "s1",
      "content": "Garbage!"
    },
  ], 
}