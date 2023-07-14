
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

self.addEventListener('install', function(event) {
    console.log('Service Worker installed');
    
    // Perform any necessary setup or caching here
  });
  
  // Listen for the 'activate' event
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activated');
    
    // Perform any necessary cleanup or migration here
  });
  
  // Listen for the 'fetch' event
  self.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
    
    // Handle or modify fetch requests here
  });
  
  // Listen for the 'push' event


self.addEventListener('push', function(event) {
    event.waitUntil(
      self.registration.showNotification(event.data.notification.title, {
        body: event.data.notification.body,
        icon: event.data.notification.icon
        // Customize the notification options as needed
      })
    );
  });

  