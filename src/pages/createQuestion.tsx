import { useState } from "react";

const CreateQuestion = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [timeLimit, setTimeLimit] = useState(30);
  const [options, setOptions] = useState([
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
  ]);

  const handleOptionChange = (index: number, text: string) => {
    const updated = [...options];
    updated[index].text = text;
    setOptions(updated);
  };

  const handleCorrectChange = (index: number) => {
    const updated = options.map((option, i) => ({
      ...option,
      isCorrect: i === index,
    }));
    setOptions(updated);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Nisi prijavljen.");

    const res = await fetch("https://quiz-be-zeta.vercel.app/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        category,
        timeLimit,
        options,
      }),
    });

    if (res.ok) {
      alert("Pitanje dodano!");
      setTitle("");
      setCategory("");
      setTimeLimit(30);
      setOptions([
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ]);
    } else {
      const data = await res.json();
      alert(data.message || "Greška");
    }
  };

  return (
    <div className="w-screen mt-[20vh] flex flex-col justify-center items-center gap-4">
      <input
        type="text"
        placeholder="Question"
        className="border px-2 py-1 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="border px-2 py-1 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Izaberi kategoriju</option>
        <option value="opceznanje">Opće Znanje</option>
        <option value="geografija">Geografija</option>
        <option value="sport">Sport</option>
      </select>
      {options.map((option, i) => (
        <div key={i} className="flex gap-2 items-center">
          <input
            type="text"
            placeholder={`Answer ${String.fromCharCode(65 + i)}`}
            className="border px-2 py-1 rounded"
            value={option.text}
            onChange={(e) => handleOptionChange(i, e.target.value)}
          />
          <input
            type="radio"
            name="correct"
            checked={option.isCorrect}
            onChange={() => handleCorrectChange(i)}
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Kreiraj Pitanje
      </button>
    </div>
  );
};

export default CreateQuestion;
