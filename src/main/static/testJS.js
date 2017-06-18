/**
 * Created by sovereign on 12.06.17.
 */
fetch('https://picshare-sfedu.azurewebsites.net/sql/accounts/',{
    method: 'post',
//        mode: 'no-cors',
    mode: 'cors',
//        mode: 'same-origin',
//        mode: 'cors-with-forced-preflight',
//        credentials: 'include',
    headers: {
        'Content-type': 'application/json',
//            'Origin': 'http://mozilla.org'
//            ,
//            'Origin': ''

    },
    body: JSON.stringify({
        "username": "cecil",
        "password": 123,
        "email": "ann@yandex.ru",
        "gender": true,
        "priv": false,
    })
}).then(function(response) {
    console.log(response.headers.get('Content-Type'));
    console.log(response.headers.get('Date'));
    console.log(response.status);
    console.log(response.statusText);
    console.log('awsd')
})
console.log("asd")
//    fetch('https://picshare-sfedu.azurewebsites.net/sql/accounts/ann',{
//        method: 'get',
//    //        mode: 'no-cors',
//        mode: 'cors',
//    //        mode: 'same-origin',
//    //        mode: 'cors-with-forced-preflight',
//    //        credentials: 'include',
//        headers: {
//            'Content-type': 'application/json',
//    //            'Origin': 'http://mozilla.org'
//    //            ,
//    //            'Origin': ''
//
//        },
////        body: JSON.stringify({
////            "username": "ann",
////            "password": null,
////            "email": "ann@yandex.ru",
////            "gender": false,
////            "priv": false,
////        })
//    }).then(function(response) {
//        console.log(response.headers.get('Content-Type'));
//        console.log(response.headers.get('Date'));
//        console.log(response.status);
//        console.log(response.statusText);
//        console.log('awsd')
//    })
//    console.log("asd")