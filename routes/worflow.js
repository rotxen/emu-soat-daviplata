var express = require('express');
var router = express.Router();
var datos = null;
var flujo = '';

countrie = (req, res, next) => {
  console.clear();
  flujo = req.body.assertion;
  datos = require(`../OTPs/${req.body.assertion}`);
  req.body = { token: datos.token}
  next();
};

router.post('/workflow', (req, res) => {
  console.clear();
  console.log(req.body);
  var paso = req.body.stepId;
  var response = {
    data: {
      status: datos[datos.workflow[paso]].status,
      clientId: '1234-4567-8901-2345-6789-0123',
      payload: datos[datos.workflow[paso]].payload,
      stepId: datos.workflow[paso]
    },
    errors: []
  };
  console.log('==============================================================================');
  console.warn(response);
  console.log('==============================================================================');
  res.json(response);
});

// access_token

// {
//   "iss": "Online JWT Builder",
//   "iat": 1565906011,
//   "exp": 1597442011,
//   "aud": "www.example.com",
//   "sub": "jrocket@example.com",
//   "cliendtID": "0123456789",
//   "partner": "ML",
//   "product": "CAM",
//   "lenguaje": "es-CR",
//   "canal": "web",
//   "pais": "CR",
//   "modulo": "que???"
// }

router.post('/auth', countrie, (req, res) => {
  res.json({
    state:1, 
    access_token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1OTI1ODg1NzgifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU5MjkyNzQ5MCwiaWF0IjoxNTkyOTI1NjkwLCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjM2ZTFlNjQwLWI1NjUtMTFlYS1iOWI0LWM3N2ViMzNiZmI5ZiIsInVzZSI6Im8iLCJkb2N1bWVudE51bWJlciI6IjI0MDQwNzQ0IiwiZG9jdW1lbnRUeXBlIjoiMDEiLCJwcm9kdWN0IjoiU09BVF9DT18yNDA0MDc0NF8wMSIsImp0aSI6IjM2ZjNlN2EwLWI1NjUtMTFlYS04MGE3LTRkM2I3OTJlMGEzZSJ9.rT8q1fFI9Q-ICsdanwbGvCPMPHSmf2uTa3tuC3I3OJdLwXjcz_diR3AaWeAwbKkuso-R1qrdue-OD64lKTNBUgP-o6U2AiX6d1rANYhNsNaCh2p4dwI5JOLUtIMNh0G_pkAzbAM71x89-Yjm8-SUSzNKWJnyKWjN7MPr-aPnWBr_HOAaoA6G6_1LIYap9yjPs3V1AULYdwUUYgP67Fr32J1BvJpn6Hg5wVz2jciFCe4aRR12NDWg2yzJNEHQHeyhs3vW65BTrFpG2WnODgCpdaqTdZvFCbYUiZOCwOr6FHl2Pc2E6VFWXXwALfjfS2qSESoOgoDNy1vaI9UhQ_7AlA',
    refresh_token:'abslslRSkskED2233ksksk82sss7jjsjjsRRksksF92DDD'
  });
});

module.exports = router;