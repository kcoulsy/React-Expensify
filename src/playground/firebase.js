
//child_removed
database.ref('expenses').on('child_removed', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
})
//child_changed
database.ref('expenses').on('child_changed', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
})
//child_added
database.ref('expenses').on('child_added', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
})

// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     })
//     console.log(expenses);
//   });

database.ref('expenses')
  .on('value', (snapshot)=>{
    const expenses = [];

    snapshot.forEach((childSnapshot)=>{
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    })
    console.log(expenses);
  });

  setTimeout(()=>{
    database.ref('expenses/-L9EsaqNsf0NfB0lcybx').update({
      amount: 100
    });
  }, 3500)
database.ref('expenses').push({
  description: 'rent',
  note: '',
  amount: 10000,
  createdAt: 123198271
});




// database.ref('notes').push({
//
//     title: 'make list',
//     body: 'this is todo note'
//
// })



//
// const fbNotes = {
//   notes: {
//     '123df23': {
//       title: 'note 1',
//       body: 'this is a note'
//     },
//     'asdf3g': {
//       title: 'note 2',
//       body: 'this is another note'
//     }
//   }
// }
// const notes = [{
//   id: 12,
//   title: 'note 1',
//   body: 'this is a note'
// }, {
//   id: 14,
//   title: 'note 2',
//   body: 'this is another note'
// }];
//
// database.ref('notes').set(notes);


//
// const onValueChange = database.ref().on('value', (snapshot)=>{
//   console.log(snapshot.val());
// }, (e)=> {
//   console.log('error with data fetching', e);
// });
//
// setTimeout(()=>{
//   database.ref('age').set(22);
// }, 3500)
// setTimeout(()=>{
//   database.ref().off(onValueChange);
// }, 7000)
// setTimeout(()=>{
//   database.ref('age').set(24);
// }, 10500)
// database.ref().once('value').then((snapshot)=>{
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e)=>{
//   console.log('error fetching data', e);
// });

// database.ref().set({
//   name: 'kristian',
//   age: 23,
//   stress: 4,
//   job: {
//     title: 'devloper',
//     company: 'solo'
//   },
//   location: {
//     city: 'halifax',
//     country: 'uk'
//   }
// }).then(()=>{
//   console.log('Data is saved')
// }).catch((e)=>{
//   console.log('Data not saved to the database', e)
// });
//
// // database.ref('age').set(22);
// database.ref('attr').set({
//   height: 180,
//   weight: 90
// }).then(()=>{
//   console.log('Attr set');
// }).catch((e)=>{
//   console.log('Failed to set att', e);
// // });//
//
// database.ref('isSingle').remove().then(()=>{
//   console.log('removed issingle');
// }).catch((e)=>{
//   console.log('Failed to remove', e);
// });
// //

// //update needs an object
// database.ref().update({
//   stress: 9,
//   'job/title': 'director'
// }).then(()=>{
//
// }).catch((e)=>{
//
// });
