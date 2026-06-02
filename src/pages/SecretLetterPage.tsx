import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SecretLetterPageProps {
  onBackToStart?: () => void;
}

interface PolaroidItem {
  id: number;
  image: string;
  song: string;
  artist: string;
  audio: string;
}

const polaroids: PolaroidItem[] = [
  {
    id: 1,
    image: 'https://giftinn.github.io/music-host/oii1.jpg',
    song: 'Senja Sudut Kota',
    artist: 'Samuel Cipta',
    audio: 'https://giftinn.github.io/music-host/surat%20cinta%20untuk%20starla.mp3'
  },
  {
    id: 2,
    image: 'https://giftinn.github.io/music-host/oii2.jpg',
    song: 'Senja Sudut Kota',
    artist: 'Samuel Cipta',
    audio: 'https://giftinn.github.io/music-host/hde6rr.mp3'
  },
  {
    id: 3,
    image: 'https://giftinn.github.io/music-host/oii3.jpg',
    song: 'Mata ke Hati',
    artist: 'HIV!',
    audio: 'https://giftinn.github.io/music-host/HIV!%20Mata%20Ke%20Hati.mp3'
  }
];

const SecretLetterPage: React.FC<SecretLetterPageProps> = ({ onBackToStart }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const fullText = `alloo iiouu, makasih ya udah mau luangin waktu buat buka minigift dari aku yang sederhana ini hehehe. semoga kamu sukaa yaa? 
  disini aku cuma mau bilang terima kasih buat semuanya, for all those efforts yang selalu kamu usahakan buat aku, terima kasih udah mau bertahan disini sampai gak kerasa sudah setengah tahun kita bareng-bareng. rasanya kaya cepet banget berlalu yaa kalau sama orang yang tepat tuh, aku beruntung banget bisa kenal dan jadi bagian dari hari-hari kamu. 
  
  di perayaan ini, aku cuma mau berterima kasih sebanyak-banyak nya ke kamu. makasih udah warnain hari-hari aku, nemenin akuu, ngajakin aku main, hibur aku pas aku lagi kurang bagus mood nya, pas lagi sedih atau ovt, makasih banyak yaa ayy. aku minta maaf, kalau selama ini masih banyak kurangnya selama jadi pasangan kamu. maaf kalau aku masih suka keras kepala, suka bawel banget kadang ke kamu sampai mungkin kamu ngerasa kesal sama aku. aku juga mau minta maaf kalau selama ini masih kurang bisa ngertiin kamu, maafin aku ya ayy. makasih udah selalu jadi orang yang bisa ngertiin aku terus. 
  
  i'm truly grateful to have you in my life, aku gatau apa yang akan terjadi di masa depan, tapi aku selalu berharap kamu selalu ada disisi aku. nemenin dan selalu ada di momen paling sedih atau paling bahagia aku, begitu juga sebaliknya. untuk sekarang, aku mau kita jaga apa yang selama ini ada dan kita nikmati momen-momen yang ada dihubungan kita. harapan aku untuk kita, apapun masalahnya semoga kita bisa terus saling memahami satu sama lain. semoga kita bisa terus bisa saling support satu sama lain, dan bisa tumbuh bareng sampai kita bisa capai mimpi-mimpi kita nanti. semoga antara aku dan kamu terus mau untuk saling mengusahakan satu sama lain. 
  
  With all my heart, 
  Your Girlfriend.`;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowFinalMessage(true);
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="text-center space-y-6 max-w-5xl mx-auto px-4">

      {/* LETTER BOX */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-6 sm:p-10 bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl border-2 border-blue-200 backdrop-blur-lg shadow-2xl relative overflow-hidden">

          {/* corners */}
          <div className="absolute top-2 left-2 w-4 h-4 bg-blue-300 rounded-full"/>
          <div className="absolute top-2 right-2 w-3 h-3 bg-blue-300 rotate-45"/>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-blue-300 rounded-full"/>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-lg"/>

          {/* TEXT */}
          <div className="text-left">
            <div className="text-sm sm:text-base text-blue-900 whitespace-pre-wrap leading-relaxed font-medium">
              {displayedText}
              {displayedText.length < fullText.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-blue-400 ml-1"
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>


      {/* POLAROID */}
      <AnimatePresence>
        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >

            <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
              Our Songs & Memories 🎧
            </h3>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {polaroids.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, rotate: -8, y: 40 }}
                  animate={{ opacity: 1, rotate: i % 2 ? 6 : -6, y: 0 }}
                  transition={{ delay: i * 0.2, type: 'spring' }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  className="bg-white p-3 rounded-xl shadow-xl w-60"
                >
                  <img
                    src={item.image}
                    alt="memory"
                    className="rounded-lg mb-3 object-cover w-full h-48"
                  />

                  <div className="text-left mb-2">
                    <p className="font-semibold text-blue-900 text-sm">
                      {item.song}
                    </p>
                    <p className="text-xs text-blue-600">
                      {item.artist}
                    </p>
                  </div>

                  {/* AUDIO */}
                  <audio controls className="w-full accent-blue-500">
                    <source src={item.audio} type="audio/mpeg" />
                  </audio>

                </motion.div>
              ))}
            </div>

            {onBackToStart && (
              <button
                onClick={onBackToStart}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                Back to Start
              </button>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecretLetterPage;




















