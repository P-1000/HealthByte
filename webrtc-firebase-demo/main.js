import './style.css';

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeN73r1Ar0RhHs9iQX_2_v68eqO5s7AZM",
  authDomain: "webrtc-a7843.firebaseapp.com",
  projectId: "webrtc-a7843",
  storageBucket: "webrtc-a7843.appspot.com",
  messagingSenderId: "235001084562",
  appId: "1:235001084562:web:9f6d7efcdd443cb5c8044b",
  measurementId: "G-7WN6MT113X"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

// Global State
const pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;

// HTML elements
const webcamButton = document.getElementById('webcamButton');
const webcamVideo = document.getElementById('webcamVideo');
const callButton = document.getElementById('callButton');
const callInput = document.getElementById('callInput');
const answerButton = document.getElementById('answerButton');
const remoteVideo = document.getElementById('remoteVideo');
const hangupButton = document.getElementById('hangupButton');
const vidDisable = document.querySelector("#local span")

// 1. Setup media sources

// webcamButton.onclick = async () => {
//   localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//   remoteStream = new MediaStream();

//   // Push tracks from local stream to peer connection
//   localStream.getTracks().forEach((track) => {
//     pc.addTrack(track, localStream);
//   });

//   // Pull tracks from remote stream, add to video stream
//   pc.ontrack = (event) => {
//     event.streams[0].getTracks().forEach((track) => {
//       remoteStream.addTrack(track);
//     });
//   };

//   webcamVideo.srcObject = localStream;
//   remoteVideo.srcObject = remoteStream;

//   const classLi = webcamVideo.classList
//   console.log(classLi)
//   if (classLi == "disabledVid"){
//     webcamVideo.classList.remove("disabledVid")
//     webcamVideo.classList.add("activeVid")
//     vidDisable.classList.add("hidden")
    
//   }
//   else{
//     webcamVideo.classList.remove("activeVid")
//     webcamVideo.classList.add("disabledVid")
//     vidDisable.classList.remove("hidden")
//   }
  

//   callButton.disabled = false;
//   answerButton.disabled = false;
//   // webcamButton.disabled = true;
//   hangupButton.disabled = false;

// };

const classLi = webcamVideo.classList;

webcamButton.onclick = async () => {
  if (classLi.contains("disabledVid")){
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    remoteStream = new MediaStream();

    localStream.getTracks().forEach((track) => {
      pc.addTrack(track, localStream);
    });

    pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    webcamVideo.srcObject = localStream;
    remoteVideo.srcObject = remoteStream;

    webcamVideo.classList.remove("disabledVid")
    webcamVideo.classList.add("activeVid")
    vidDisable.classList.add("hidden")

    const i = webcamButton.querySelector("i")
    i.classList.remove("fa-video")
    i.classList.add("fa-video-slash")
    
    callButton.disabled = false;
    answerButton.disabled = false;
    // webcamButton.disabled = true;
    // hangupButton.disabled = false;
  }
  else{
    localStream.getTracks().forEach((track) => {
      track.stop();
    });
    webcamVideo.srcObject = null;
    remoteVideo.srcObject = null;

    webcamVideo.classList.remove("activeVid")
    webcamVideo.classList.add("disabledVid")
    vidDisable.classList.remove("hidden")
    
    const i = webcamButton.querySelector("i")
    i.classList.remove("fa-video-slash")
    i.classList.add("fa-video")

    callButton.disabled = true;
    answerButton.disabled = true;
    // webcamButton.disabled = false;
    // hangupButton.disabled = true;
  }


}



// 2. Create an offer
callButton.onclick = async () => {
  // Reference Firestore collections for signaling
  const callDoc = firestore.collection('calls').doc();
  const offerCandidates = callDoc.collection('offerCandidates');
  const answerCandidates = callDoc.collection('answerCandidates');

  callInput.value = callDoc.id;

  // Get candidates for caller, save to db
  pc.onicecandidate = (event) => {
    event.candidate && offerCandidates.add(event.candidate.toJSON());
  };

  // Create offer
  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);

  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type,
  };

  await callDoc.set({ offer });

  // Listen for remote answer
  callDoc.onSnapshot((snapshot) => {
    const data = snapshot.data();
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(data.answer);
      pc.setRemoteDescription(answerDescription);
    }
  });

  // When answered, add candidate to peer connection
  answerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const candidate = new RTCIceCandidate(change.doc.data());
        pc.addIceCandidate(candidate);
      }
    });
  });

  // hangupButton.disabled = false;
};

// 3. Answer the call with the unique ID
answerButton.onclick = async () => {
  const callId = callInput.value;
  const callDoc = firestore.collection('calls').doc(callId);
  const answerCandidates = callDoc.collection('answerCandidates');
  const offerCandidates = callDoc.collection('offerCandidates');

  pc.onicecandidate = (event) => {
    event.candidate && answerCandidates.add(event.candidate.toJSON());
  };

  const callData = (await callDoc.get()).data();

  const offerDescription = callData.offer;
  await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const answer = {
    type: answerDescription.type,
    sdp: answerDescription.sdp,
  };

  await callDoc.update({ answer });

  offerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      console.log(change);
      if (change.type === 'added') {
        let data = change.doc.data();
        pc.addIceCandidate(new RTCIceCandidate(data));
      }
    });
  });
};

hangupButton.onclick = async () => {
  const confirm = document.querySelector(".confirm")
  confirm.classList.remove("hidden")
  const yes = document.querySelector("#confirm")
  const no = document.querySelector("#cancel")
  const dashboard = document.querySelector('#dashboard')
  const success = document.querySelector(".success")

  yes.onclick = async () => {
    confirm.classList.add("hidden")
    // close current window
    // window.close()
    success.classList.remove("hidden")
    dashboard.onclick = async () => {
      success.classList.add("hidden")
      window.close()
    }
  }
  no.onclick = async () => {
    confirm.classList.add("hidden")
  }
};
