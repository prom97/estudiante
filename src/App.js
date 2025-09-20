import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import './App.css';

// Deshabilitar clic derecho
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Deshabilitar teclas F12, Ctrl+Shift+I, etc.
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});

export default function App() {
  const frases = [
    "Recordá que cada error es un paso hacia el aprendizaje ✨",
    "Hoy celebramos tu esfuerzo y tu curiosidad 🔥",
    "Tu futuro se construye con lo que estudias hoy 📚",
    "Nunca dejes de preguntar, nunca dejes de soñar 🚀",
    "La educación es el arma más poderosa para cambiar el mundo 🌍",
    "Aprender también es una forma de celebrar la vida 💡",
    "El conocimiento que ganás hoy será tu mejor herramienta mañana 🔑",
    "Cada día de estudio es una inversión en tu futuro 🌟",
    "Creer en vos mismo es el primer paso para lograrlo 💪",
    "Las grandes metas empiezan con pequeños aprendizajes ✨",
    "Estudiar abre puertas que ni imaginabas 🚪",
    "Tu esfuerzo tiene más valor de lo que pensás 🔥",
    "El mundo necesita mentes curiosas como la tuya 🌍",
    "El estudio no es una carga, es un superpoder 🦸",
    "El futuro pertenece a quienes nunca dejan de aprender 🚀",
    "Aprender es crecer, y crecer es transformar 🌱",
    "Lo que aprendés hoy te acompaña toda la vida 📖",
    "Cada página que leés, cada clase que escuchás, te hace más fuerte 💡",
    "Los sueños se construyen con esfuerzo y constancia ✏️",
    "No hay límite para alguien que estudia con pasión 💫",
    "El estudio es una semilla, y vos sos el jardinero 🌻"
  ];

  const [frase, setFrase] = useState("");
  const [saludo, setSaludo] = useState("");
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setFrase(frases[randomIndex]);

    // Obtener la hora
    const hora = new Date().getHours();

    if (hora >= 6 && hora < 12) {
      setSaludo("🌞¡Buenos días y");
    } else if (hora >= 12 && hora < 19) {
      setSaludo("🌤️¡Buenas tardes y");
    } else {
      setSaludo("🌙¡Buenas noches y");
    }

    // Efecto matrix para el h1
    const text = "Feliz Día del Estudiante!";
    let iteration = 0;
    const kanjis = "日月火水木金土愛学夢知力心光星空道山川風雨花鳥森海龍虎狐猫犬";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" + kanjis;

    const interval = setInterval(() => {
      setTitulo(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2; // velocidad (más bajo = más lento)
    }, 50);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="container">
      <Confetti />
      <h1 className="titulo-principal matrix-title">{saludo}<br></br>{titulo}</h1>
      <motion.h3 className="frase"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {frase}
      </motion.h3>
      <div className="marca-agua">Pablo Romero</div>
    </div>
  );
}
