/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var app = {
     sendSms: function() {
         var number = '9946';
         var message = document.getElementById('messageTxt').value;
         alert('Внимание! За отправку сообщения взимается дополнительная плата.');

         //CONFIGURATION
         var options = {
             replaceLineBreaks: false, // true to replace \n by a new line, false by default
             android: {
                 intent: 'INTENT'  // send SMS with the native android SMS messaging
                 //intent: '' // send SMS without open any other app
             }
         };

         var success = function () { alert('Сообщение отправлено!'); };
         var error = function (e) { alert('Ошибка отправки:' + e); };
         sms.send(number, message, options, success, error);
     }
 };
