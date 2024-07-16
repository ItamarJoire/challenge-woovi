import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function CountdownTimer({ initialMinutes }){
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setIsTimeUp(true);
      
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isTimeUp) {
      toast.error('Seu QR Code expirou!');
      navigate('/')
    }
  }, [isTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="text-center mt-6">
      <p className="text-zinc-400">Prazo de pagamento:</p>
      <p className="text-zinc-600 font-extrabold">{formatTime(timeLeft)}</p>
          
    </div>
  );
};

