"use client";

export default function AmbientBackground() {
  return (
    <>
      <style>{`
        .ambient-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1; /* Keeps it strictly in the background */
          overflow: hidden;
          background-color: var(--page-background, #0a0a0a);
          pointer-events: none; /* Prevents it from blocking clicks */
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px); /* Massive blur to make it look like ambient light */
          opacity: 0.4;
          animation: drift 10s infinite ease-in-out alternate;
        }

        /* Deep Blue/Cyan Orb */
        .orb-1 {
          width: 50vw;
          height: 50vw;
          background: #0ea5e9;
          top: -10%;
          left: -10%;
          animation-delay: 0s;
        }

        /* Violet/Purple Orb */
        .orb-2 {
          width: 40vw;
          height: 40vw;
          background: #8b5cf6;
          bottom: -10%;
          right: -5%;
          animation-delay: -5s;
        }

        /* Subtle Accent Orb */
        .orb-3 {
          width: 35vw;
          height: 35vw;
          background: #3b82f6;
          top: 30%;
          left: 40%;
          animation-delay: -10s;
        }

        @media (max-width: 768px) {
          .orb {
            filter: blur(70px);
          }
          .orb-1 { width: 80vw; height: 80vw; }
          .orb-2 { width: 70vw; height: 70vw; }
          .orb-3 { width: 60vw; height: 60vw; }
        }

        /* The gentle floating movement */
        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5vw, -5vh) scale(1.1); }
          66% { transform: translate(-3vw, 4vh) scale(0.9); }
          100% { transform: translate(2vw, -2vh) scale(1); }
        }
      `}</style>

      <div className="ambient-wrapper">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
    </>
  );
}