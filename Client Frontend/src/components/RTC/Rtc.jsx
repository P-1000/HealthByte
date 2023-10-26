import React, { useEffect, useRef } from 'react';
// import './style.css';
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

const WebRTCComponent = () => {
    const pcRef = useRef(new RTCPeerConnection(servers));
    const localStreamRef = useRef(null);
    const remoteStreamRef = useRef(new MediaStream());

    const handleWebcamButtonClick = async () => {
        try {
            localStreamRef.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

            localStreamRef.current.getTracks().forEach((track) => {
                pcRef.current.addTrack(track, localStreamRef.current);
            });

            pcRef.current.ontrack = (event) => {
                event.streams[0].getTracks().forEach((track) => {
                    remoteStreamRef.current.addTrack(track);
                });
            };
        } catch (error) {
            console.error('Error accessing media devices:', error);
        }
    };

    const handleCallButtonClick = async () => {
        const callDoc = firestore.collection('calls').doc();
        const offerCandidates = callDoc.collection('offerCandidates');
        const answerCandidates = callDoc.collection('answerCandidates');

        pcRef.current.onicecandidate = (event) => {
            event.candidate && offerCandidates.add(event.candidate.toJSON());
        };

        const offerDescription = await pcRef.current.createOffer();
        await pcRef.current.setLocalDescription(offerDescription);

        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        };

        await callDoc.set({ offer });

        callDoc.onSnapshot((snapshot) => {
            const data = snapshot.data();
            if (!pcRef.current.currentRemoteDescription && data?.answer) {
                const answerDescription = new RTCSessionDescription(data.answer);
                pcRef.current.setRemoteDescription(answerDescription);
            }
        });

        answerCandidates.onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const candidate = new RTCIceCandidate(change.doc.data());
                    pcRef.current.addIceCandidate(candidate);
                });
            });
        });
    };

    const handleAnswerButtonClick = async () => {
        const callId = callInput.value;
        const callDoc = firestore.collection('calls').doc(callId);
        const answerCandidates = callDoc.collection('answerCandidates');
        const offerCandidates = callDoc.collection('offerCandidates');

        pcRef.current.onicecandidate = (event) => {
            event.candidate && answerCandidates.add(event.candidate.toJSON());
        };

        const callData = (await callDoc.get()).data();

        const offerDescription = callData.offer;
        await pcRef.current.setRemoteDescription(new RTCSessionDescription(offerDescription));

        const answerDescription = await pcRef.current.createAnswer();
        await pcRef.current.setLocalDescription(answerDescription);

        const answer = {
            type: answerDescription.type,
            sdp: answerDescription.sdp,
        };

        await callDoc.update({ answer });

        offerCandidates.onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const data = change.doc.data();
                    pcRef.current.addIceCandidate(new RTCIceCandidate(data));
                }
            });
        });
    };

    return (
        <div>
            <button id="webcamButton" onClick={handleWebcamButtonClick}>Start Webcam</button>
            <video id="webcamVideo" autoPlay playsInline ref={webcamVideo}></video>
            <button id="callButton" onClick={handleCallButtonClick} disabled>Call</button>
            <input id="callInput" placeholder="Call ID" />
            <button id="answerButton" onClick={handleAnswerButtonClick} disabled>Answer</button>
            <video id="remoteVideo" autoPlay playsInline ref={remoteVideo}></video>
            <button id="hangupButton" onClick={handleHangupButtonClick} disabled>Hangup</button>
        </div>
    );
};

export default WebRTCComponent;
